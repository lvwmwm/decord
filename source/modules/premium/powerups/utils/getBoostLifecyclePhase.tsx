// Module ID: 11642
// Function ID: 90470
// Name: BOOST_EXPIRING_DISPLAY_WINDOW_DAYS
// Dependencies: [21, 2]
// Exports: getBoostLifecycleInfo, getBoostLifecycleTimestamp

// Module 11642 (BOOST_EXPIRING_DISPLAY_WINDOW_DAYS)
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getBoostLifecyclePhase.tsx");

export const BOOST_EXPIRING_DISPLAY_WINDOW_DAYS = 3;
export const BOOST_EXPIRING_DISPLAY_WINDOW_MS = 259200000;
export const getBoostLifecycleInfo = function getBoostLifecycleInfo(ended, outer1_4) {
  if (!ended.ended) {
    if (null != ended.endsAt) {
      const endsAt = ended.endsAt;
      return obj;
    }
    if (null != ended.endsAt) {
      const endsAt2 = ended.endsAt;
      if (endsAt2.getTime() - outer1_4 <= 259200000) {
        obj = { phase: "expiring", endsAt: ended.endsAt };
      }
    }
    obj = { phase: "gave" };
  }
  obj = { phase: "expired" };
};
export const getBoostLifecycleTimestamp = function getBoostLifecycleTimestamp(id, boostLifecycleInfo) {
  const phase = boostLifecycleInfo.phase;
  if ("gave" === phase) {
    return importDefault(21).extractTimestamp(id.id);
  } else if ("expiring" === phase) {
    const endsAt2 = boostLifecycleInfo.endsAt;
    return endsAt2.getTime() - 259200000;
  } else if ("expired" === phase) {
    const endsAt = id.endsAt;
    let time;
    if (null != endsAt) {
      time = endsAt.getTime();
    }
    if (null == time) {
      time = importDefault(21).extractTimestamp(id.id);
      const obj = importDefault(21);
    }
    return time;
  }
};
