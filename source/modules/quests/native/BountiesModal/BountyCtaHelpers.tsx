// Module ID: 14187
// Function ID: 14188
// Name: getBountyCtaInfo
// Dependencies: [1236, 2]
// Exports: getBountyCtaInfo

// Module 14187 (getBountyCtaInfo)
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.LLLLPD);
  obj[3] = bounty.productIcon;
  return obj;
};
