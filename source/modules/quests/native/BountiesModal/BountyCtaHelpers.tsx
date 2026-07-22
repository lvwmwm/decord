// Module ID: 13824
// Function ID: 104549
// Name: getBountyCtaInfo
// Dependencies: []
// Exports: getBountyCtaInfo

// Module 13824 (getBountyCtaInfo)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel };
  const intl = require(dependencyMap[0]).intl;
  obj.buttonLabel = intl.string(require(dependencyMap[0]).t.LLLLPD);
  obj.iconImageUri = bounty.productIcon;
  return obj;
};
