// Module ID: 8716
// Function ID: 8717
// Name: AppStoreAgeSignalSupport
// Dependencies: [1613, 4737, 1368, 2]
// Exports: isAppStoreAgeSignalSupported

// Module 8716 (AppStoreAgeSignalSupport)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import size from "module_2" /* 2 */;

let c2 = 26;
let c3 = 2;
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalSupport.tsx");

export const MIN_AGE_GATE = 13;
export const ADULT_AGE_GATE = 18;
export const isAppStoreAgeSignalSupported = function isAppStoreAgeSignalSupported() {
  if (obj.isMetaQuest()) {
    return false;
  } else {
    if (tmpResult.getIsRunningOnSimulator()) {
      return false;
    } else {
      const tmpResult3 = tmp(4737);
      const parts = tmp(4737).getSystemVersion().split(".");
      const _parseInt = parseInt;
      const parsed = parseInt(parts[0], 10);
      let str3 = parts[1];
      if (str3 == null) {
        str3 = "0";
      }
      const parsed1 = parseInt(str3, 10);
      const str = tmp(4737).getSystemVersion();
      if (tmpResult4.isIOS()) {
        let tmp9 = parsed > c2;
        if (!tmp9) {
          let tmp10 = parsed === c2;
          if (tmp10) {
            tmp10 = parsed1 >= c3;
          }
          tmp9 = tmp10;
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = parsed >= 23;
      }
      return tmp8;
    }
    tmpResult = tmp(4737);
  }
  obj = MetaQuestUtils;
};
