// Module ID: 13097
// Function ID: 13098
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4197, 712, 2]
// Exports: default

// Module 13097 (usePremiumPrimaryGradientColors)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4197 */;

const result = set.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = map;
  items[1] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = map;
  items[2] = map.useToken(ThemesDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
