// Module ID: 9503
// Function ID: 9504
// Name: PremiumFeatureUtils
// Dependencies: [1391, 1085, 1392, 1989, 7760, 2]
// Exports: getUserMaxFileSize

// Module 9503 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1391 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
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
          const tmp2Result = tmp2(7760);
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
