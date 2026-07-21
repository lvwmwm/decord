// Module ID: 15635
// Function ID: 119391
// Name: PremiumSoundboardFeatureUpsell
// Dependencies: []
// Exports: default

// Module 15635 (PremiumSoundboardFeatureUpsell)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { bottom: arg0 + importDefault(dependencyMap[4]).space.PX_12, marginHorizontal: importDefault(dependencyMap[4]).space.PX_12 };
  obj.container = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(arg1(dependencyMap[6]).EXPRESSION_FOOTER_HEIGHT + importDefault(dependencyMap[5])().bottom).container };
  obj = { shouldShow: shouldShow.shouldShow, featureName: arg1(dependencyMap[8]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj.children = jsx(importDefault(dependencyMap[7]), obj);
  return <View {...obj} />;
};
