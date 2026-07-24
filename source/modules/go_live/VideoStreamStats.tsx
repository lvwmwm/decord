// Module ID: 4225
// Function ID: 36884
// Name: round
// Dependencies: [6, 7, 4220, 653, 4015, 4206, 2]

// Module 4225 (round)
import set from "set";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { StreamLayouts } from "ME";

const require = arg1;
function round(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  if (null != arg0) {
    const _Math = Math;
    num = Math.round(arg0);
  }
  return num;
}
const tmp2 = (() => {
  class VideoStreamStats {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, self);
      this._targetResolution = 0;
      this._targetFPS = 0;
      this._streamSettingsChanged = false;
      this._lastLayoutChanged = 0;
      this._layoutChanges = 0;
      this._automaticQualityChanges = 0;
      this._incrementLayout = (arg0, arg1) => {
        if (null == self._layoutBuckets[arg0]) {
          self._layoutBuckets[arg0] = 0;
        }
        const _layoutBuckets = self._layoutBuckets;
        _layoutBuckets[arg0] = _layoutBuckets[arg0] + arg1;
      };
      this._sampleStats = () => {
        const state = outer2_4.getState();
        let tmp4 = state.resolution !== self._targetResolution;
        if (!tmp4) {
          tmp4 = tmp2 !== self._targetFPS;
        }
        self._streamSettingsChanged = tmp4;
      };
      this._isSender = arg1;
      interval = new VideoStreamStats(outer1_1[4]).Interval();
      this._statInterval = interval;
      this._lastLayout = arg0;
      this._layoutBuckets = {};
      return;
    }
  }
  let obj = {
    key: "start",
    value() {
      const state = outer1_4.getState();
      ({ resolution: this._targetResolution, fps: this._targetFPS } = state);
      const _statInterval = this._statInterval;
      _statInterval.start(1000, this._sampleStats);
      this._lastLayoutChanged = VideoStreamStats(outer1_1[5]).now();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "stop",
    value() {
      const _statInterval = this._statInterval;
      _statInterval.stop();
      this._streamEnd = VideoStreamStats(outer1_1[5]).now();
      this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
    }
  };
  items[1] = obj;
  obj = {
    key: "autoQualityChange",
    value() {
      this._automaticQualityChanges = this._automaticQualityChanges + 1;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "layoutChange",
    value(_lastLayout) {
      const self = this;
      if (_lastLayout !== this._lastLayout) {
        if (null == self._streamEnd) {
          const nowResult = VideoStreamStats(outer1_1[5]).now();
          self._incrementLayout(self._lastLayout, (nowResult - self._lastLayoutChanged) / 1000);
          self._layoutChanges = self._layoutChanges + 1;
          self._lastLayout = _lastLayout;
          self._lastLayoutChanged = nowResult;
          const obj = VideoStreamStats(outer1_1[5]);
        }
      }
    }
  };
  items[4] = {
    key: "getLayout",
    value() {
      return this._lastLayout;
    }
  };
  items[5] = {
    key: "getStats",
    value() {
      const self = this;
      let obj = { num_layout_changes: this._layoutChanges, duration_layout_fullscreen: outer1_6(this._layoutBuckets[outer1_5.FULL_SCREEN]), duration_layout_theatre: outer1_6(this._layoutBuckets[outer1_5.THEATRE]), duration_layout_pip: outer1_6(this._layoutBuckets[outer1_5.PIP]), duration_layout_popout: outer1_6(this._layoutBuckets[outer1_5.POPOUT]), duration_layout_portrait: outer1_6(this._layoutBuckets[outer1_5.PORTRAIT]), duration_layout_landscape: outer1_6(this._layoutBuckets[outer1_5.LANDSCAPE]), duration_layout_minimized: outer1_6(this._layoutBuckets[outer1_5.MINIMIZED]) };
      let tmp = obj;
      if (this._isSender) {
        obj = {};
        const merged = Object.assign(obj);
        obj["target_fps"] = self._targetFPS;
        obj["target_resolution_height"] = self._targetResolution;
        obj["stream_settings_changed"] = self._streamSettingsChanged;
        obj["num_auto_quality_changes"] = self._automaticQualityChanges;
        tmp = obj;
      }
      return tmp;
    }
  };
  return callback(VideoStreamStats, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/go_live/VideoStreamStats.tsx");

export default tmp2;
