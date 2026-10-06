// Module ID: 1976
// Function ID: 1977
// Name: PremiumTypeUtils
// Dependencies: [1380, 2]
// Exports: isPremium, isPremiumAtLeast, isPremiumAtMost, isPremiumExactly

// Module 1976 (PremiumTypeUtils)
import PremiumConstants from "PremiumConstants" /* 1380 */;
import size from "module_2" /* 2 */;

function isPremiumAtLeast(premiumType, TIER_2) {
  let tmp = null == TIER_2;
  if (!tmp) {
    tmp = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
    const tmp3 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
  }
  return tmp;
}
function isPremium(premiumType, arg1) {
  let tmp = null != premiumType && null != premiumType.premiumType;
  if (tmp) {
    premiumType = premiumType.premiumType;
    let tmp3 = null == arg1;
    if (!tmp3) {
      tmp3 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[arg1];
      const tmp4 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[arg1];
    }
    tmp = tmp3;
  }
  return tmp;
}
function isPremiumExactly(stateFromStores, TIER_2) {
  return null != stateFromStores && stateFromStores.premiumType === TIER_2;
}
const PremiumTypeOrder = PremiumConstants.PremiumTypeOrder;
const result = size.fileFinishedImporting("utils/PremiumTypeUtils.tsx");

export default { isPremiumAtLeast, isPremium, isPremiumExactly };
export { isPremiumAtLeast };
export const isPremiumAtMost = function isPremiumAtMost(premiumType, TIER_1) {
  return null == premiumType || PremiumTypeOrder[premiumType] <= PremiumTypeOrder[TIER_1];
};
export { isPremium };
export { isPremiumExactly };
