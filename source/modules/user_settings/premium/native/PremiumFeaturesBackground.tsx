// Module ID: 7863
// Function ID: 62636
// Name: PremiumFeaturesBackground
// Dependencies: []
// Exports: default

// Module 7863 (PremiumFeaturesBackground)
importAll(dependencyMap[0]);
const Gradients = arg1(dependencyMap[1]).Gradients;
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.cardContainer = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let children;
  let style;
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  const arg1 = num;
  let obj = { "Null": null, "Null": 4, "Null": 4, "Null": "rgba(0, 0, 0, 0.75)" };
  ({ children, style } = opacity);
  Object.setPrototypeOf(null);
  const merged = Object.assign(opacity, obj);
  if (opacity.premiumType === PremiumTypes.TIER_0) {
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((arg0) => {
      const obj = callback(closure_2[6])(arg0);
      return callback(closure_2[6])(arg0).alpha(num).hex();
    });
  }
  obj = { style: items };
  const items = [callback().cardContainer, style];
  obj.colors = mapped;
  const tmp3 = callback();
  obj.start = arg1(dependencyMap[8]).HorizontalGradient.START;
  obj.end = arg1(dependencyMap[8]).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return jsx(importDefault(dependencyMap[7]), obj);
};
