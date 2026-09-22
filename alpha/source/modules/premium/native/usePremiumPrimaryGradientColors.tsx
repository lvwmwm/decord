// Module ID: 13694
// Function ID: 13695
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4458, 576, 2]
// Exports: default

// Module 13694 (usePremiumPrimaryGradientColors)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  items[1] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
