// Module ID: 1872
// Function ID: 20862
// Name: isPremiumAtLeast
// Dependencies: []
// Exports: isPremium, isPremiumAtMost, isPremiumExactly

// Module 1872 (isPremiumAtLeast)
function isPremiumAtLeast(premiumType, TIER_2) {
  let tmp = null == TIER_2;
  if (!tmp) {
    let tmp2 = null != premiumType;
    if (tmp2) {
      tmp2 = PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
    }
    tmp = tmp2;
  }
  return tmp;
}
function isPremium(currentUser, TIER_2) {
  let tmp = null != currentUser && null != currentUser.premiumType;
  if (tmp) {
    tmp = isPremiumAtLeast(currentUser.premiumType, TIER_2);
  }
  return tmp;
}
function isPremiumExactly(currentUser, TIER_2) {
  let tmp = null != currentUser;
  if (tmp) {
    tmp = currentUser.premiumType === TIER_2;
  }
  return tmp;
}
const PremiumTypeOrder = require(dependencyMap[0]).PremiumTypeOrder;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/PremiumTypeUtils.tsx");

export default { isPremiumAtLeast, isPremium, isPremiumExactly };
export { isPremiumAtLeast };
export const isPremiumAtMost = function isPremiumAtMost(arg0, TIER_1) {
  let tmp = null == arg0;
  if (!tmp) {
    tmp = PremiumTypeOrder[arg0] <= PremiumTypeOrder[TIER_1];
  }
  return tmp;
};
export { isPremium };
export { isPremiumExactly };
