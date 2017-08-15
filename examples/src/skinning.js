(() => {
  const app = window.app;
  const cc = window.cc;

  const resl = cc.resl;
  const gfx = cc.gfx;
  const { StandardMaterial } = cc;
  const { color4 } = cc.math;

  let src = '../node_modules/assets-3d';

  let paladin = {
    gltf: {
      type: 'text',
      parser: JSON.parse,
      src: `${src}/models/Paladin/Paladin_w_Prop_J_Nordstrom_6e101c6123cad4071a9442b6463e7611.gltf`
    },
    bin: {
      type: 'binary',
      src: `${src}/models/Paladin/Paladin_w_Prop_J_Nordstrom_6e101c6123cad4071a9442b6463e7611.bin`
    },
    image: {
      type: 'image',
      src: `${src}/models/Paladin/Paladin_diffuse.png`
    },
    animGltf: {
      type: 'text',
      parser: JSON.parse,
      src: `${src}/anims/Paladin_ctrl_c8c64eecdcc8d43b882f479bf2a936d3.gltf`
    },
    animBin: {
      type: 'binary',
      src: `${src}/anims/Paladin_ctrl_c8c64eecdcc8d43b882f479bf2a936d3.bin`
    },
  };

  let zed = {
    gltf: {
      type: 'text',
      parser: JSON.parse,
      src: `${src}/models/Zed/Zed_cc6b438d631553f468aac60d3bd4d450.gltf`
    },
    bin: {
      type: 'binary',
      src: `${src}/models/Zed/Zed_cc6b438d631553f468aac60d3bd4d450.bin`
    },
    image: {
      type: 'image',
      src: `${src}/models/Zed/Zed_base_TX_CM.png`
    },
    animGltf: {
      type: 'text',
      parser: JSON.parse,
      src: `${src}/anims/Zed_cc6b438d631553f468aac60d3bd4d450.gltf`
    },
    animBin: {
      type: 'binary',
      src: `${src}/anims/Zed_cc6b438d631553f468aac60d3bd4d450.bin`
    },
  };

  resl({
    manifest: paladin,

    onDone (assets) {
      cc.utils.loadSkinning(app, assets.gltf, assets.bin, (err, root) => {
        // create material
        let mainTexture = new gfx.Texture2D(app.device, {
          width: assets.image.width,
          height: assets.image.height,
          wrapS: gfx.WRAP_CLAMP,
          wrapT: gfx.WRAP_CLAMP,
          mipmap: true,
          images: [assets.image]
        });
        let material = new StandardMaterial({
          mainTexture,
          color: color4.new(1.0, 1.0, 1.0, 0.6),
        });
        material.useColor = true;
        material.useTexture = true;
        material.blendType = cc.BLEND_NONE;

        // assign material to skinning model
        let comps = root.getCompsInChildren('SkinningModel');
        for (let i = 0; i < comps.length; ++i) {
          comps[i].material = material;
        }

        // load animations
        cc.utils.loadAnim(app, assets.animGltf, assets.animBin, (err, animClips) => {
          let animComp = root.getComp('Animation');
          for (let i = 0; i < animClips.length; ++i) {
            animComp.addClip(animClips[i]);
          }

          animComp.play('85_03');
        });
      });
    }
  });
})();