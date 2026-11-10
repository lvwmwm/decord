// Module ID: 8003
// Function ID: 8004
// Name: AppStoreAgeSignalSupport
// Dependencies: [1622, 4971, 1375, 2]
// Exports: isAppStoreAgeSignalSupported

// Module 8003 (AppStoreAgeSignalSupport)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import DeviceUtils from "DeviceUtils" /* 4971 */;
import size from "module_2" /* 2 */;

let c2 = 26;
let c3 = 2;
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalSupport.tsx");

export const MIN_AGE_GATE = 13;
export const ADULT_AGE_GATE = 18;
export function isAppStoreAgeSignalSupported() {
  const obj = MetaQuestUtils;
  if (obj.isMetaQuest()) {
    return false;
  } else {
    const tmpResult = DeviceUtils;
    if (tmpResult.getIsRunningOnSimulator()) {
      return false;
    } else {
      let tmp8;
      const tmpResult3 = DeviceUtils;
      const str = tmpResult3.getSystemVersion();
      const parts = str.split(".");
      const _parseInt = parseInt;
      const parsed = parseInt(parts[0], 10);
      let str3 = parts[1];
      const _parseInt2 = parseInt;
      if (str3 == null) {
        str3 = "0";
      }
      const _parseInt2Result = _parseInt2(str3, 10);
      const tmpResult4 = PlatformUtils;
      if (tmpResult4.isIOS()) {
        let tmp9 = parsed > c2;
        if (!tmp9) {
          tmp9 = parsed === c2 && _parseInt2Result >= c3;
          const tmp10 = parsed === c2 && _parseInt2Result >= c3;
        }
        tmp8 = tmp9;
      } else {
        tmp8 = parsed >= 23;
      }
      return tmp8;
    }
  }
}
