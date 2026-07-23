// Module ID: 4112
// Function ID: 34022
// Name: currentUpdateConfig
// Dependencies: [3712, 477, 1443, 1554, 2]

// Module 4112 (currentUpdateConfig)
import importDefaultResult from "t";
import durationResult from "module_6";

const require = arg1;
const tmp3 = (function currentUpdateConfig() {
  let tmp = null;
  if (undefined !== process.env.INTERNAL_UPDATE_URL) {
    const _process2 = process;
    tmp = null;
    if ("" !== process.env.INTERNAL_UPDATE_URL) {
      let obj = require(477) /* set */;
      if (obj.isIOS()) {
        const _process = process;
        let toURLSafeResult = importDefault(1443).toURLSafe(process.env.INTERNAL_UPDATE_URL);
        const obj3 = importDefault(1443);
      } else {
        toURLSafeResult = null;
        const obj2 = require(477) /* set */;
      }
      tmp = toURLSafeResult;
    }
  }
  const constants = require(1554) /* getConstants */.getConstants();
  let Build;
  if (null != constants) {
    Build = constants.Build;
  }
  const parsed = parseInt(Build);
  let tmp12 = null;
  if (!Number.isNaN(parsed)) {
    tmp12 = null;
    if (0 !== parsed) {
      tmp12 = null;
      if (123456 !== parsed) {
        tmp12 = null;
        if (1234567890 !== parsed) {
          tmp12 = parsed;
        }
      }
    }
  }
  const obj4 = require(1554) /* getConstants */;
  const constants1 = require(1554) /* getConstants */.getConstants();
  let Version;
  if (null != constants1) {
    Version = constants1.Version;
  }
  let tmp15 = null;
  if (null != Version) {
    tmp15 = Version;
  }
  let tmp16 = null;
  if (null !== tmp) {
    tmp16 = null;
    if (null !== tmp12) {
      tmp16 = null;
      if (null !== tmp15) {
        obj = { url: tmp, currentBuild: tmp12, currentVersion: tmp15 };
        tmp16 = obj;
      }
    }
  }
  return tmp16;
})();
const result = require("isOriginalContentTypeDifferent").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateConstants.tsx");

export const UPDATE_CHECK_INTERVAL = durationResult;
export const UPDATE_CONFIG = tmp3;
