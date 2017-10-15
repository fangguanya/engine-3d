
(() => {
  const app = window.app;
  const cc = window.cc;

  const {resl, path} = cc;
  const baseUrl = '../node_modules/assets-3d/levels/neolowman';

  resl({
    manifest: {
      assetInfos: {
        type: 'text',
        parser: JSON.parse,
        src: `${baseUrl}/assets.json`
      },

      scene: {
        type: 'text',
        parser: JSON.parse,
        src: `${baseUrl}/scene.json`
      },
    },

    onDone (data) {
      const sceneJson = data.scene;
      const assetInfos = data.assetInfos;

      for ( let uuid in assetInfos) {
        let info = assetInfos[uuid];
        for (let item in info.urls) {
          info.urls[item] = path.join(baseUrl, info.urls[item]);
        }

        app.assets.registerAsset(uuid, info);
      }

      cc.utils.parseLevel(
        app,
        sceneJson,
        (err, level) => {
          app.loadLevel(level);
          let anim = app.activeLevel.children[1].getComp('Animation');
          anim.play('New Animation');
        }
      );
    }
  });
})();