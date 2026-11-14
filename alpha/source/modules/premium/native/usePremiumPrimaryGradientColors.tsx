// Module ID: 10009
// Function ID: 10010
// Name: usePremiumPrimaryGradientColors
// Dependencies: [5902, 575, 2]
// Exports: default

// Module 10009 (usePremiumPrimaryGradientColors)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5902 */;
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
