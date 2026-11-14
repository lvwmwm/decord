// Module ID: 11213
// Function ID: 11214
// Name: PremiumFeatureUtils
// Dependencies: [1389, 1072, 1390, 2110, 8847, 2]
// Exports: getUserMaxFileSize

// Module 11213 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1389 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
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
          const tmp3Result = tmp3(8847);
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
