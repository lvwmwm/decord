// Module ID: 15966
// Function ID: 122466
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15966 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AppStates: closure_8, AnalyticEvents: closure_9 } = arg1(dependencyMap[5]));
let tmp3 = (arg0) => {
  class JankStatsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, JankStatsManager);
      items1 = [...items];
      obj = closure_6(JankStatsManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      JankStatsManager = tmp2Result;
      tmp2Result._timeoutId = null;
      tmp2Result._isScheduledReportSent = false;
      tmp2Result._isStartup = true;
      tmp2Result.actions = {
        APP_STATE_UPDATE(arg0) {
              tmp2Result.handleAppStateUpdate(arg0);
            },
        CONNECTION_OPEN_SUPPLEMENTAL() {
              const result = tmp2Result.handleConnectionOpenSupplemental();
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = JankStatsManager;
  callback2(JankStatsManager, arg0);
  let obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      state = state.state;
      if (state === constants.ACTIVE) {
        if (!self._isStartup) {
          self.scheduleReport();
        }
      }
      if (!tmp2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._timeoutId);
        self._timeoutId = null;
        self.sendReport("background");
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleConnectionOpenSupplemental",
    value() {
      const JankStatsManager = this;
      const timerId = setTimeout(() => {
        self.sendReport("startup");
        self._isStartup = false;
        self.scheduleReport();
      }, 0);
    }
  };
  items[1] = obj;
  obj = {
    key: "scheduleReport",
    value() {
      const self = this;
      const JankStatsManager = this;
      if (null == this._timeoutId) {
        self._isScheduledReportSent = false;
        const _setTimeout = setTimeout;
        self._timeoutId = setTimeout(() => {
          self._timeoutId = null;
          self.sendReport("timer");
          self._isScheduledReportSent = true;
          if (null != callback(closure_2[6])) {
            callback(closure_2[6]).stopTracking();
            const obj = callback(closure_2[6]);
          }
        }, 300000);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "sendReport",
    value(arg0) {
      let report;
      if (null != callback(closure_2[6])) {
        let obj = callback(closure_2[6]);
        report = obj.requestReport();
      }
      let tmp4 = null == report;
      if (!tmp4) {
        tmp4 = 0 === report.totalFrameCount && 0 === report.frameMetricsTotalFrameCount;
        const tmp5 = 0 === report.totalFrameCount && 0 === report.frameMetricsTotalFrameCount;
      }
      if (!tmp4) {
        obj = {};
        const obj2 = callback(closure_2[7]);
        const merged = Object.assign(JankStatsManager(closure_2[8]).getDeviceMetadata());
        obj["version"] = 2;
        obj["total_frame_count"] = report.totalFrameCount;
        obj["jank_frame_count"] = report.jankFrameCount;
        obj["frame_metrics_total_frame_count"] = report.frameMetricsTotalFrameCount;
        obj["frame_metrics_jank_frame_count"] = report.frameMetricsJankFrameCount;
        obj["trigger"] = arg0;
        obj2.track(constants2.ANDROID_JANK_STATS, obj);
        const obj4 = JankStatsManager(closure_2[8]);
      }
    }
  };
  return callback(JankStatsManager, items);
}(importDefault(dependencyMap[9]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/jank_stats/native/JankStatsManager.android.tsx");

export default tmp3;
