// Module ID: 16025
// Function ID: 123067
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16025 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const Features = arg1(dependencyMap[7]).Features;
const SECOND = importDefault(dependencyMap[8]).Millis.SECOND;
let closure_12 = 30 * importDefault(dependencyMap[8]).Millis.SECOND;
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("RTCLatencyTestManager");
importDefaultResult.enableNativeLogger(true);
let tmp4 = (arg0) => {
  class RTCLatencyTestManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, RTCLatencyTestManager);
      items1 = [...items];
      obj = closure_6(RTCLatencyTestManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      RTCLatencyTestManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result._handleConnectionOpen();
            }
      };
      tmp2Result._handleTestRegionsResponse = (arr) => {
        const mapped = arr.map((region) => region.region);
        if (closure_9.shouldPerformLatencyTest(mapped)) {
          const mediaEngine = closure_8.getMediaEngine();
          const rankRtcRegionsResult = mediaEngine.rankRtcRegions(arr);
          mediaEngine.rankRtcRegions(arr).then((latencyRankedRegions) => {
            closure_13.verbose("RTC region latency test completed, ranked regions are: ", latencyRankedRegions);
            const result = mapped(closure_2[10]).completeRTCLatencyTest(latencyRankedRegions, mapped);
          }).catch((arg0) => closure_13.warn(arg0));
          const nextPromise = mediaEngine.rankRtcRegions(arr).then((latencyRankedRegions) => {
            closure_13.verbose("RTC region latency test completed, ranked regions are: ", latencyRankedRegions);
            const result = mapped(closure_2[10]).completeRTCLatencyTest(latencyRankedRegions, mapped);
          });
        } else {
          const _HermesInternal = HermesInternal;
          closure_13.verbose("RTC cached ranked preferred regions are " + closure_9.getPreferredRegions());
        }
      };
      tmp2Result._fetchAndScheduleRefetch = () => {
        let num = 1;
        if (closure_8.supports(constants.PORT_AWARE_LATENCY_TESTING)) {
          num = 2;
        }
        const rTCLatencyTestRegions = tmp2Result(closure_2[10]).fetchRTCLatencyTestRegions(num);
        const obj = tmp2Result(closure_2[10]);
        rTCLatencyTestRegions.then((body) => closure_0._handleTestRegionsResponse(body.body)).catch((arg0) => closure_13.warn(arg0));
        tmp2Result.refetchTimeout = setTimeout(tmp2Result._fetchAndScheduleRefetch, 360 * callback(closure_2[8]).Millis.MINUTE);
      };
      tmp2Result._handleConnectionOpen = () => {
        if (tmp2Result(closure_2[11]).isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(closure_11 + Math.random() * closure_12);
          if (null != tmp2Result.refetchTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp2Result.refetchTimeout);
          }
          const _setTimeout = setTimeout;
          tmp2Result.refetchTimeout = setTimeout(tmp2Result._fetchAndScheduleRefetch, rounded);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = RTCLatencyTestManager;
  callback2(RTCLatencyTestManager, arg0);
  const items = [
    {
      key: "_terminate",
      value() {
        if (null != this.refetchTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.refetchTimeout);
        }
      }
    }
  ];
  return callback(RTCLatencyTestManager, items);
}(importDefault(dependencyMap[12]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default tmp4;
