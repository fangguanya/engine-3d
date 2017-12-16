import App from './lib/app';
import enums from './lib/enums';

// misc
import resl from './lib/misc/resl';
import path from './lib/misc/path';
import async from './lib/misc/async';
import utils from './lib/misc/utils';
import extensions from './lib/misc/extensions';

// components
import ScriptComponent from './lib/framework/script-component';
import CameraComponent from './lib/framework/camera-component';
import LightComponent from './lib/framework/light-component';
import ModelComponent from './lib/framework/model-component';
import SkinningModelComponent from './lib/framework/skinning-model-component';
import AnimationComponent from './lib/framework/animation-component';
import SkyboxComponent from './lib/framework/skybox-component';
import SpriteComponent from './lib/framework/sprite-component';
import LabelComponent from './lib/framework/label-component';
import ScreenComponent from './lib/framework/screen-component';
import WidgetComponent from './lib/framework/widget-component';

// assets
import Asset from './lib/assets/asset';
import Mesh from './lib/assets/mesh';
import Joints from './lib/assets/joints';
import Material from './lib/assets/material';
import Prefab from './lib/assets/prefab';
import AnimationClip from './lib/assets/animation-clip';
import Gltf from './lib/assets/gltf';
import Texture from './lib/assets/texture';
import Texture2D from './lib/assets/texture-2d';
import TextureCube from './lib/assets/texture-cube';

// renderer
import SkinningModel from './lib/renderer/skinning-model';

// deps
import { Node } from 'scene-graph';
import { Component, System, Level } from 'ecs.js';
import * as math from 'vmath';
import * as primitives from 'primitives.js';
import renderer from 'renderer.js';
import gfx from 'gfx.js';
import * as memop from 'memop';

export default Object.assign({
  // misc
  Node,

  // rendering
  SkinningModel,

  // assets
  Asset,
  Mesh,
  Joints,
  Material,
  Prefab,
  AnimationClip,
  Gltf,
  Texture,
  Texture2D,
  TextureCube,

  // framework
  App,
  Level,
  System,
  Component,

  // components
  ScriptComponent,
  CameraComponent,
  LightComponent,
  ModelComponent,
  SkinningModelComponent,
  AnimationComponent,
  SkyboxComponent,
  SpriteComponent,
  LabelComponent,
  ScreenComponent,
  WidgetComponent,

  // modules
  math,
  memop,
  primitives,
  renderer,
  gfx,

  // misc
  extensions,
  utils,
  resl,
  path,
  async,
}, enums);
