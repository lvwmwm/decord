// Module ID: 14001
// Function ID: 107161
// Name: getBountyCtaInfo
// Dependencies: [1212, 2]
// Exports: getBountyCtaInfo

// Module 14001 (getBountyCtaInfo)
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.buttonLabel = intl.string(require(1212) /* getSystemLocale */.t.LLLLPD);
  obj.iconImageUri = bounty.productIcon;
  return obj;
};
