// Module ID: 14965
// Function ID: 14966
// Name: getBountyCtaInfo
// Dependencies: [1233, 2]
// Exports: getBountyCtaInfo

// Module 14965 (getBountyCtaInfo)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.LLLLPD);
  obj[3] = bounty.productIcon;
  return obj;
};
