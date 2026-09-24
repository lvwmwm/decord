// Module ID: 13788
// Function ID: 13789
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4526, 576, 2]
// Exports: default

// Module 13788 (usePremiumPrimaryGradientColors)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4526 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  items[1] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
