// Module ID: 9436
// Function ID: 9437
// Name: PremiumFeatureUtils
// Dependencies: [1390, 1085, 1391, 1988, 7733, 2]
// Exports: getUserMaxFileSize

// Module 9436 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return _false;
  } else {
    let tmp4;
    const premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === metroImportDefault) {
        tmp4 = React3;
      }
      return tmp4;
    }
    if (null != currentUser.premiumType) {
      const obj = PremiumTypeUtils;
      const tmp2 = require;
      if (obj.isPremium(currentUser)) {
        let fileSize;
        if (currentUser.premiumType === hasOwnProperty.TIER_2) {
          const tmp2Result = tmp2(7733);
          fileSize = tmp2Result.getNitroFileUploadLimitBytes({ location: "getUserMaxFileSize" });
        } else {
          fileSize = metroRequire[currentUser.premiumType].fileSize;
        }
        tmp4 = fileSize;
      }
    }
    tmp4 = _false;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
({ PremiumTypes: hasOwnProperty, PremiumUserLimits: metroRequire, UNSELECTED_PREMIUM_TYPE_OVERRIDE: metroImportDefault } = PremiumConstants);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
