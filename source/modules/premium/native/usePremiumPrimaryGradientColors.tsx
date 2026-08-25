// Module ID: 12914
// Function ID: 12915
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4101, 712, 2]
// Exports: default

// Module 12914 (usePremiumPrimaryGradientColors)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4101 */;

const result = set.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = map;
  items[1] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = map;
  items[2] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
