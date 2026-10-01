// Module ID: 8660
// Function ID: 8661
// Name: PremiumFeatureUtils
// Dependencies: [1373, 1074, 1374, 1970, 5442, 2]
// Exports: getUserMaxFileSize

// Module 8660 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1373 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
          const tmp2Result = tmp2(5442);
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
