// Module ID: 15304
// Function ID: 15305
// Name: BountyCtaHelpers
// Dependencies: [1119, 2]
// Exports: getBountyCtaInfo

// Module 15304 (BountyCtaHelpers)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = util.intl;
  obj.buttonLabel = intl.string(util.t.LLLLPD);
  obj.iconImageUri = bounty.productIcon;
  return obj;
};
