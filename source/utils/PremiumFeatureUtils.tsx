// Module ID: 8160
// Function ID: 8161
// Name: getUserMaxFileSize
// Dependencies: [1924, 676, 1925, 1947, 2]
// Exports: getUserMaxFileSize

// Module 8160 (getUserMaxFileSize)
import isPremiumAtLeast from "isPremiumAtLeast" /* 1947 */;
import closure_2 from "setPremiumTypeActual" /* 1924 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;

require = arg1;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return closure_3;
  } else {
    premiumTypeOverride = premiumTypeOverride.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === closure_6) {
        let fileSize = closure_4;
      }
      return fileSize;
    }
    if (null != currentUser.premiumType) {
      if (obj.isPremium(currentUser)) {
        fileSize = table[currentUser.premiumType].fileSize;
      }
      obj = isPremiumAtLeast;
    }
    fileSize = closure_3;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: c4 } = ME);
({ PremiumUserLimits: c5, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_6 } = GuildFeatures);
const result = require("set").fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
