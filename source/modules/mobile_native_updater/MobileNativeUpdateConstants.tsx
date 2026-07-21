// Module ID: 4110
// Function ID: 34011
// Name: currentUpdateConfig
// Dependencies: [3154116625, 1912602628]

// Module 4110 (currentUpdateConfig)
import durationResult from "module_6";

const importDefaultResult = importDefault(dependencyMap[0]);
const tmp3 = function currentUpdateConfig() {
  let tmp = null;
  if (undefined !== process.env.INTERNAL_UPDATE_URL) {
    const _process2 = process;
    tmp = null;
    if ("" !== process.env.INTERNAL_UPDATE_URL) {
      let obj = arg1(dependencyMap[1]);
      if (obj.isIOS()) {
        const _process = process;
        let toURLSafeResult = importDefault(dependencyMap[2]).toURLSafe(process.env.INTERNAL_UPDATE_URL);
        const obj3 = importDefault(dependencyMap[2]);
      } else {
        toURLSafeResult = null;
        const obj2 = arg1(dependencyMap[1]);
      }
      tmp = toURLSafeResult;
    }
  }
  const constants = arg1(dependencyMap[3]).getConstants();
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
  const obj4 = arg1(dependencyMap[3]);
  const constants1 = arg1(dependencyMap[3]).getConstants();
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
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateConstants.tsx");

export const UPDATE_CHECK_INTERVAL = durationResult;
export const UPDATE_CONFIG = tmp3;
