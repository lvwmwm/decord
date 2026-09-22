// Module ID: 8557
// Function ID: 8558
// Name: AppStoreAgeSignalSupport
// Dependencies: [1608, 4615, 1363, 2]
// Exports: isAppStoreAgeSignalSupported

// Module 8557 (AppStoreAgeSignalSupport)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
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
      const tmpResult3 = tmp(4615);
      const parts = tmp(4615).getSystemVersion().split(".");
      const _parseInt = parseInt;
      const parsed = parseInt(parts[0], 10);
      let str3 = parts[1];
      if (str3 == null) {
        str3 = "0";
      }
      const parsed1 = parseInt(str3, 10);
      const str = tmp(4615).getSystemVersion();
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
    tmpResult = tmp(4615);
  }
  obj = MetaQuestUtils;
};
