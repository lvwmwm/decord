// Module ID: 7416
// Function ID: 59599
// Name: PremiumReferralTrialPill
// Dependencies: []
// Exports: PremiumReferralTrialPill

// Module 7416 (PremiumReferralTrialPill)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = { pillParent: { -665408820: false, 1365009132: false, -413029223: false, 1295493970: false }, pillParentExtraMargin: {} };
obj = { "Bool(false)": 175, "Bool(false)": null, "Bool(false)": "034593f3dac51b7d85899e7191ac5a9f", "Bool(false)": "client_theme", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/modules/premium/native/images/perks", backgroundColor: importDefault(dependencyMap[3]).colors.WHITE, borderRadius: importDefault(dependencyMap[3]).radii.round };
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
