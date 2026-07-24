// Module ID: 4219
// Function ID: 36779
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 102, 18, 6, 7, 4183, 4199, 4220, 1194, 1348, 4221, 4177, 4222, 4202, 4223, 653, 4191, 664, 4194, 4224, 4015, 4225, 22, 686, 4226, 4227, 4300, 675, 4124, 4306, 4206, 4307, 4308, 4188, 6912, 4204, 2]

// Module 4219 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DesktopSources from "DesktopSources";
import _get from "_get";
import set from "set";
import closure_7 from "_isNativeReflectConstruct";
import getSystemAnalyticsInfo from "getSystemAnalyticsInfo";
import closure_9 from "_isNativeReflectConstruct";
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import ME from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import tmp4 from "_createForOfIteratorHelperLoose";

let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ AnalyticEvents: closure_19, MediaEngineHookTypes: closure_20, RTCConnectionStates: closure_21 } = ME);
let closure_23 = 5 * require("set").Millis.SECOND;
let closure_24 = { DETACHED: 0, [0]: "DETACHED", WAITING: 1, [1]: "WAITING", ATTACHED: 2, [2]: "ATTACHED", STARTED: 3, [3]: "STARTED", PLAYING: 4, [4]: "PLAYING", SILENCE: 5, [5]: "SILENCE" };
let tmp3 = (() => {
  class StreamRTCAnalyticsContext {
    constructor(arg0) {
      ({ streamApplication, numViewers, analyticsLocations } = arg0);
      ({ streamRegion, streamSourceType, actionContext, goLiveModalDurationMs } = arg0);
      tmp = outer1_7(this, StreamRTCAnalyticsContext);
      this.streamRegion = streamRegion;
      this.streamApplication = streamApplication;
      items = [];
      items[0] = streamApplication;
      this.streamApplicationHistory = items;
      this.streamSourceType = streamSourceType;
      this.actionContext = actionContext;
      this.maxViewers = numViewers;
      this.goLiveModalDurationMs = goLiveModalDurationMs;
      this.numViewers = numViewers;
      if (null == analyticsLocations) {
        analyticsLocations = [];
      }
      this.analyticsLocations = analyticsLocations;
      return;
    }
  }
  let obj = {
    key: "setActionContext",
    value(actionContext) {
      this.actionContext = actionContext;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "updateStreamApplication",
    value(streamApplication) {
      this.streamApplication = streamApplication;
      const items = [...this.streamApplicationHistory, streamApplication];
      this.streamApplicationHistory = items;
    }
  };
  items[1] = obj;
  obj = {
    key: "setAnalyticsLocations",
    value(analyticsLocations) {
      this.analyticsLocations = analyticsLocations;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "trackViewerCount",
    value(numViewers) {
      this.maxViewers = Math.max(numViewers, this.maxViewers);
      this.numViewers = numViewers;
    }
  };
  items[4] = {
    key: "setNativePickerStyleUsed",
    value(nativePickerStyleUsed) {
      this.nativePickerStyleUsed = nativePickerStyleUsed;
    }
  };
  items[5] = {
    key: "trackStart",
    value() {
      this.startTime = performance.now();
    }
  };
  items[6] = {
    key: "trackEnd",
    value() {
      this.endTime = performance.now();
    }
  };
  items[7] = {
    key: "getStreamApplicationFromHistory",
    value(arg0) {
      return this.streamApplicationHistory[arg0];
    }
  };
  items[8] = {
    key: "getDuration",
    value() {
      const self = this;
      if (null == this.startTime) {
        return null;
      } else {
        const _performance = performance;
        let nowResult = performance.now();
        const endTime = self.endTime;
        if (null != endTime) {
          nowResult = endTime;
        }
        return nowResult - self.startTime;
      }
    }
  };
  return callback2(StreamRTCAnalyticsContext, items);
})();
let result = require("_get").fileFinishedImporting("modules/go_live/StreamRTCConnection.tsx");

export default tmp4;
export const StreamRTCAnalyticsContext = tmp3;
