// Module ID: 7985
// Function ID: 63493
// Name: getUserMaxFileSize
// Dependencies: []
// Exports: getUserMaxFileSize

// Module 7985 (getUserMaxFileSize)
function getUserMaxFileSize(closure_5) {
  if (null == closure_5) {
    return closure_3;
  } else {
    const premiumTypeOverride = premiumTypeOverride.getPremiumTypeOverride();
    if (closure_5.isStaff()) {
      if (premiumTypeOverride === closure_6) {
        let fileSize = closure_4;
      }
      return fileSize;
    }
    if (null != closure_5.premiumType) {
      if (obj.isPremium(closure_5)) {
        fileSize = closure_5[closure_5.premiumType].fileSize;
      }
      const obj = arg1(dependencyMap[3]);
    }
    fileSize = closure_3;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
({ MAX_ATTACHMENT_SIZE: closure_3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ PremiumUserLimits: closure_5, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
