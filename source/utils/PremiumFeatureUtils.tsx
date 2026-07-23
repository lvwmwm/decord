// Module ID: 7996
// Function ID: 63565
// Name: getUserMaxFileSize
// Dependencies: [1850, 653, 1851, 1872, 2]
// Exports: getUserMaxFileSize

// Module 7996 (getUserMaxFileSize)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function getUserMaxFileSize(closure_5) {
  if (null == closure_5) {
    return closure_3;
  } else {
    premiumTypeOverride = premiumTypeOverride.getPremiumTypeOverride();
    if (closure_5.isStaff()) {
      if (premiumTypeOverride === closure_6) {
        let fileSize = closure_4;
      }
      return fileSize;
    }
    if (null != closure_5.premiumType) {
      if (obj.isPremium(closure_5)) {
        fileSize = table[closure_5.premiumType].fileSize;
      }
      obj = require(1872) /* isPremiumAtLeast */;
    }
    fileSize = closure_3;
  }
}
({ MAX_ATTACHMENT_SIZE: closure_3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = ME);
({ PremiumUserLimits: closure_5, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_6 } = GuildFeatures);
const result = require("GuildFeatures").fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
