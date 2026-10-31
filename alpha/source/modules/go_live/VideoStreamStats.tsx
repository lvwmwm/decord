// Module ID: 7889
// Function ID: 7890
// Name: VideoStreamStats
// Dependencies: [5943, 1072, 4858, 5772, 2]

// Module 7889 (VideoStreamStats)
import Constants from "Constants" /* 1072 */;
import TimeUtils from "TimeUtils" /* 5772 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 5943 */;
import size from "module_2" /* 2 */;

const StreamLayouts = Constants.StreamLayouts;
const result = size.fileFinishedImporting("modules/go_live/VideoStreamStats.tsx");
class VideoStreamStats {
  constructor(_lastLayout, _isSender) {
    const obj = Object.create(new.target.prototype);
    obj._targetResolution = 0;
    obj._targetFPS = 0;
    obj._streamSettingsChanged = false;
    obj._lastLayoutChanged = 0;
    obj._layoutChanges = 0;
    obj._automaticQualityChanges = 0;
    obj._incrementLayout = function _incrementLayout(_lastLayout, arg1) {
      if (null == obj._layoutBuckets[_lastLayout]) {
        obj._layoutBuckets[_lastLayout] = 0;
      }
      const _layoutBuckets = tmp._layoutBuckets;
      _layoutBuckets[_lastLayout] = _layoutBuckets[_lastLayout] + arg1;
    };
    obj._sampleStats = function _sampleStats() {
      const state = ApplicationStreamingSettingsStore.getState();
      obj._streamSettingsChanged = state.resolution !== obj._targetResolution || tmp2 !== obj._targetFPS;
    };
    obj._isSender = _isSender;
    const interval = new obj(4858).Interval();
    obj._statInterval = interval;
    obj._lastLayout = _lastLayout;
    obj._layoutBuckets = {};
    return obj;
  }
  start() {
    const state = ApplicationStreamingSettingsStore.getState();
    ({ resolution: this._targetResolution, fps: this._targetFPS } = state);
    const _statInterval = this._statInterval;
    _statInterval.start(1000, this._sampleStats);
    const obj = TimeUtils;
    this._lastLayoutChanged = obj.now();
  }
  stop() {
    const _statInterval = this._statInterval;
    _statInterval.stop();
    const obj = TimeUtils;
    this._streamEnd = obj.now();
    this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
  }
  autoQualityChange() {
    this._automaticQualityChanges = this._automaticQualityChanges + 1;
  }
  layoutChange(_lastLayout) {
    const self = this;
    if (_lastLayout !== this._lastLayout) {
      if (null == self._streamEnd) {
        const obj = TimeUtils;
        const nowResult = obj.now();
        self._incrementLayout(self._lastLayout, (nowResult - self._lastLayoutChanged) / 1000);
        self._layoutChanges = self._layoutChanges + 1;
        self._lastLayout = _lastLayout;
        self._lastLayoutChanged = nowResult;
      }
    }
  }
  getLayout() {
    return this._lastLayout;
  }
  restartForFragment() {
    this._layoutChanges = 0;
    this._layoutBuckets = {};
    this._automaticQualityChanges = 0;
    const obj = TimeUtils;
    this._lastLayoutChanged = obj.now();
  }
  getStats() {
    let num3;
    let num4;
    let num5;
    let num6;
    let num7;
    let num8;
    let num9;
    const self = this;
    const obj = {};
    const merged = Object.assign(this._layoutBuckets);
    if (null == this._streamEnd) {
      let num = obj[self._lastLayout];
      const _lastLayout = self._lastLayout;
      if (num == null) {
        num = 0;
      }
      const obj2 = TimeUtils;
      obj[_lastLayout] = num + (obj2.now() - self._lastLayoutChanged) / 1000;
    }
    const obj3 = { num_layout_changes: self._layoutChanges, duration_layout_fullscreen: num3, duration_layout_theatre: num4, duration_layout_pip: num5, duration_layout_popout: num6, duration_layout_portrait: num7, duration_layout_landscape: num8, duration_layout_minimized: num9 };
    num3 = 0;
    if (null != obj[StreamLayouts.FULL_SCREEN]) {
      const _Math = Math;
      num3 = Math.round(tmp5);
    }
    num4 = 0;
    if (null != obj[StreamLayouts.THEATRE]) {
      const _Math2 = Math;
      num4 = Math.round(tmp7);
    }
    num5 = 0;
    if (null != obj[StreamLayouts.PIP]) {
      const _Math3 = Math;
      num5 = Math.round(tmp9);
    }
    num6 = 0;
    if (null != obj[StreamLayouts.POPOUT]) {
      const _Math4 = Math;
      num6 = Math.round(tmp11);
    }
    num7 = 0;
    if (null != obj[StreamLayouts.PORTRAIT]) {
      const _Math5 = Math;
      num7 = Math.round(tmp13);
    }
    num8 = 0;
    if (null != obj[StreamLayouts.LANDSCAPE]) {
      const _Math6 = Math;
      num8 = Math.round(tmp15);
    }
    num9 = 0;
    if (null != obj[StreamLayouts.MINIMIZED]) {
      const _Math7 = Math;
      num9 = Math.round(tmp17);
    }
    let tmp19 = obj3;
    if (self._isSender) {
      const obj6 = {};
      const merged1 = Object.assign(obj3);
      ({ _targetFPS: obj4.target_fps, _targetResolution: obj4.target_resolution_height, _streamSettingsChanged: obj4.stream_settings_changed, _automaticQualityChanges: obj4.num_auto_quality_changes } = self);
      tmp19 = obj6;
    }
    return tmp19;
  }
}
const prototype = VideoStreamStats.prototype;

export default VideoStreamStats;
