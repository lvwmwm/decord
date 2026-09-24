// Module ID: 9503
// Function ID: 9504
// Name: PremiumFeatureUtils
// Dependencies: [1377, 1078, 1378, 1973, 5380, 2]
// Exports: getUserMaxFileSize

// Module 9503 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1973 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1377 */;

require = fn;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return React3;
  } else {
    const premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === React5) {
        let tmp2 = React4;
      }
      return tmp2;
    }
    if (null != currentUser.premiumType) {
      let getNitroFileUploadLimitBytes = require;
      let obj = dependencyMap;
      if (obj2.isPremium(currentUser)) {
        if (currentUser.premiumType === TIER_2.TIER_2) {
          const nitroFileUploadLimitBytes = getNitroFileUploadLimitBytes(5380);
          getNitroFileUploadLimitBytes = nitroFileUploadLimitBytes.getNitroFileUploadLimitBytes;
          obj = { location: "getUserMaxFileSize" };
          let fileSize = getNitroFileUploadLimitBytes(obj);
        } else {
          fileSize = timestampProducer[currentUser.premiumType].fileSize;
        }
      }
      obj2 = PremiumTypeUtils;
    }
    tmp2 = React3;
  }
}
const Constants = fn(1078);
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
const PremiumConstants = fn(1378);
({ PremiumTypes: hasOwnProperty, PremiumUserLimits: metroRequire, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_7 } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
