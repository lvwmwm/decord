// Module ID: 16398
// Function ID: 126685
// Name: getReportInboundErrors
// Dependencies: []
// Exports: getAccumulatedStatsWithMinDatapoints, getReportInboundErrors, getWarningFrameRate

// Module 16398 (getReportInboundErrors)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = 10 * importDefault(dependencyMap[1]).Millis.SECOND;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/errors/av_errors/AVErrorUtils.tsx");

export const getReportInboundErrors = function getReportInboundErrors() {
  const WindowVisibilityVideoManager = arg1(dependencyMap[2]).WindowVisibilityVideoManager;
  let result = WindowVisibilityVideoManager.isIncomingVideoEnabled();
  if (result) {
    const _performance = performance;
    const WindowVisibilityVideoManager2 = arg1(dependencyMap[2]).WindowVisibilityVideoManager;
    result = performance.now() - WindowVisibilityVideoManager2.lastIncomingVideoEnabledChangeTime() > closure_3;
    const nowResult = performance.now();
  }
  return result;
};
export const getAccumulatedStatsWithMinDatapoints = function getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 15;
  }
  const accumulatedPerformanceStats = store.getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, "short");
  const accumulatedPerformanceStats1 = store.getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, "long");
  let tmp3 = null;
  if (null != accumulatedPerformanceStats) {
    tmp3 = null;
    if (null != accumulatedPerformanceStats1) {
      tmp3 = null;
      if (accumulatedPerformanceStats.numDatapoints >= num) {
        tmp3 = null;
        if (accumulatedPerformanceStats1.numDatapoints >= num) {
          const obj = { short: accumulatedPerformanceStats, long: accumulatedPerformanceStats1 };
          tmp3 = obj;
        }
      }
    }
  }
  return tmp3;
};
export const getWarningFrameRate = function getWarningFrameRate(maxFrameRate) {
  let num = maxFrameRate;
  if (maxFrameRate === undefined) {
    num = 30;
  }
  let num2 = 3;
  if (num > 5) {
    let num4 = 8;
    if (num > 15) {
      let num5 = 30;
      if (num <= 30) {
        num5 = 15;
      }
      num4 = num5;
    }
    num2 = num4;
  }
  return num2;
};
