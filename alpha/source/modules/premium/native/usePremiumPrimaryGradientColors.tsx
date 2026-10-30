// Module ID: 15263
// Function ID: 15264
// Name: usePremiumPrimaryGradientColors
// Dependencies: [5591, 575, 2]
// Exports: default

// Module 15263 (usePremiumPrimaryGradientColors)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [, , ];
  const obj = useToken;
  items[0] = obj.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const obj2 = useToken;
  items[1] = obj2.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj3 = useToken;
  items[2] = obj3.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
