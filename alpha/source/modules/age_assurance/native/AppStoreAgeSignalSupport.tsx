// Module ID: 7882
// Function ID: 7883
// Name: AppStoreAgeSignalSupport
// Dependencies: [1609, 4808, 1364, 2]
// Exports: isAppStoreAgeSignalSupported

// Module 7882 (AppStoreAgeSignalSupport)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
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
      const tmpResult3 = tmp(4808);
      const parts = tmp(4808).getSystemVersion().split(".");
      const _parseInt = parseInt;
      const parsed = parseInt(parts[0], 10);
      let str3 = parts[1];
      if (str3 == null) {
        str3 = "0";
      }
      const parsed1 = parseInt(str3, 10);
      const str = tmp(4808).getSystemVersion();
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
    tmpResult = tmp(4808);
  }
  obj = MetaQuestUtils;
};
