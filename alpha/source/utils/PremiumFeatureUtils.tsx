// Module ID: 5065
// Function ID: 5066
// Name: PremiumFeatureUtils
// Dependencies: [1390, 1084, 1391, 1989, 5066, 2]
// Exports: getUserMaxFileSize

// Module 5065 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1390 */;
import Constants from "Constants" /* 1084 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function getUserMaxFileSize(currentUser) {
  let tmp2;
  if (null == currentUser) {
    tmp2 = _false;
  } else {
    if (currentUser.isStaff()) {
      if (!OverridePremiumTypeStore.hasPremiumTypeOverride(currentUser)) {
        tmp2 = React3;
      }
    }
    if (null != currentUser.premiumType) {
      let tmp5;
      const obj = PremiumTypeUtils;
      const tmp3 = require;
      if (obj.isPremium(currentUser)) {
        let fileSize;
        if (currentUser.premiumType === hasOwnProperty.TIER_2) {
          const tmp3Result = tmp3(5066);
          fileSize = tmp3Result.getNitroFileUploadLimitBytes({ location: "getUserMaxFileSize" });
        } else {
          fileSize = metroRequire[currentUser.premiumType].fileSize;
        }
        tmp5 = fileSize;
      }
      tmp2 = tmp5;
    }
    tmp5 = _false;
  }
  return tmp2;
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
({ PremiumTypes: hasOwnProperty, PremiumUserLimits: metroRequire } = PremiumConstants);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
