import { randomRange } from 'vmath';

export default class Burst {
  constructor() {
    this._remainingCount = 1;
    this._curTime = 0.0;
  }

  update(psys, dt) {
    if (psys._loop && this._remainingCount === 0) {
      this._remainingCount = this._repeatCount;
      this._curTime = this._time;
    }
    if (this._remainingCount > 0) {
      let preFrameTime = psys._time - psys._startDelay - dt;
      preFrameTime = (preFrameTime > 0.0) ? preFrameTime : 0.0;
      let curFrameTime = psys.time - psys._startDelay;
      if (this._curTime >= preFrameTime && this._curTime < curFrameTime) {
        psys.emit(randomRange(this._minCount, this._maxCount));
        this._curTime += this._repeatInterval;
        --this._remainingCount;
      }
    }
  }
}

Burst.schema = {
  time: {
    type: 'number',
    default: 0.0,
    set(val) {
      this._time = val;
      this._curTime = val;
    }
  },

  minCount: {
    type: 'int',
    default: 30,
  },

  maxCount: {
    type: 'int',
    default: 30,
  },

  repeatCount: {
    type: 'number',
    default: 1,
    set(val) {
      this._repeatCount = val;
      this._remainingCount = val;
    }
  },

  repeatInterval: {
    type: 'number',
    default: 1.0,
  }
};