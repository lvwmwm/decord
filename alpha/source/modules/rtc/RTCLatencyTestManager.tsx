// Module ID: 17944
// Function ID: 17945
// Name: RTCLatencyTestManager
// Dependencies: [2011, 5209, 5115, 1102, 3, 6797, 17945, 1381, 2]

// Module 17944 (RTCLatencyTestManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1102 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Constants from "Constants" /* 5115 */;
import RTCLatencyTestActionCreators from "RTCLatencyTestActionCreators" /* 17945 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCRegionStore from "RTCRegionStore" /* 5209 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let mediaEngine;

const Features = Constants.Features;
const SECOND = DurationsDefault.Millis.SECOND;
let closure_7 = 30 * DurationsDefault.Millis.SECOND;
let obj = new LoggerDefault("RTCLatencyTestManager");
obj.enableNativeLogger(true);
class RTCLatencyTestManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require._handleConnectionOpen();
      }
    };
    applyArgumentsResult._handleTestRegionsResponse = function _handleTestRegionsResponse(body) {
      const mapped = body.map((region) => region.region);
      obj = closure_4;
      if (closure_4.shouldPerformLatencyTest(mapped)) {
        mediaEngine = mediaEngine.getMediaEngine();
        const rankRtcRegionsResult = mediaEngine.rankRtcRegions(body);
        const nextPromise = rankRtcRegionsResult.then((result) => {
          closure_2_8.verbose("RTC region latency test completed, ranked regions are: ", result);
          obj = RTCLatencyTestActionCreators;
          result = obj.completeRTCLatencyTest(result, mapped);
        });
        nextPromise.catch((error) => logger.warn(error));
      } else {
        const _HermesInternal = HermesInternal;
        logger.verbose("RTC cached ranked preferred regions are " + obj.getPreferredRegions());
      }
    };
    applyArgumentsResult._fetchAndScheduleRefetch = function _fetchAndScheduleRefetch() {
      let logger;
      let num = 1;
      if (MediaEngineStore.supports(Features.PORT_AWARE_LATENCY_TESTING)) {
        num = 2;
      }
      obj = RTCLatencyTestActionCreators;
      const rTCLatencyTestRegions = obj.fetchRTCLatencyTestRegions(num);
      const nextPromise = rTCLatencyTestRegions.then((body) => closure_1_0._handleTestRegionsResponse(body.body));
      nextPromise.catch((error) => logger.warn(error));
      require.refetchTimeout = setTimeout(require._fetchAndScheduleRefetch, 360 * DurationsDefault.Millis.MINUTE);
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      if (null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT) {
        if (PlatformUtils.isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(SECOND + Math.random() * closure_7);
          if (null != require.refetchTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(require.refetchTimeout);
          }
          const _setTimeout = setTimeout;
          require.refetchTimeout = setTimeout(require._fetchAndScheduleRefetch, rounded);
        }
      }
    };
    return applyArgumentsResult;
  }
  _terminate() {
    if (null != this.refetchTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.refetchTimeout);
    }
  }
}
const prototype = RTCLatencyTestManager.prototype;
const rTCLatencyTestManager = new RTCLatencyTestManager();
let result = size.fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default rTCLatencyTestManager;
