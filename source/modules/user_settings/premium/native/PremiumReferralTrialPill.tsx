// Module ID: 7417
// Function ID: 59611
// Name: PremiumReferralTrialPill
// Dependencies: []
// Exports: PremiumReferralTrialPill

// Module 7417 (PremiumReferralTrialPill)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = { pillParent: {}, pillParentExtraMargin: {} };
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.WHITE, borderRadius: importDefault(dependencyMap[3]).radii.round };
obj.pillContainer = obj;
obj.text = {};
let closure_4 = _module.createStyles(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = callback();
  let obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent };
  obj = { style: tmp.pillContainer };
  obj = { variant: "text-xs/bold", style: tmp.text };
  const intl = require(dependencyMap[5]).intl;
  obj.children = intl.string(require(dependencyMap[5]).t.Y1q7js).toUpperCase();
  obj.children = jsx(require(dependencyMap[4]).Text, obj);
  obj.children = <View {...obj} />;
  return <View {...obj} />;
};
