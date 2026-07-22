// Module ID: 9354
// Function ID: 73030
// Name: PremiumUpsellGradientBackground
// Dependencies: []
// Exports: PremiumUpsellGradientBackground

// Module 9354 (PremiumUpsellGradientBackground)
importAll(dependencyMap[0]);
const Gradients = arg1(dependencyMap[2]).Gradients;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { opacity: 0.1 };
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj.gradient = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: callback().gradient };
  const tmp = callback();
  const tmp2 = jsx;
  obj.start = arg1(dependencyMap[6]).HorizontalGradient.START;
  obj.end = arg1(dependencyMap[6]).HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  return tmp2(importDefault(dependencyMap[5]), obj);
};
