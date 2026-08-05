// Module ID: 12588
// Function ID: 12589
// Name: usePremiumPrimaryGradientColors
// Dependencies: [3959, 712, 2]
// Exports: default

// Module 12588 (usePremiumPrimaryGradientColors)
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(3959) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(3959) /* map */;
  items[1] = require(3959) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(3959) /* map */;
  items[2] = require(3959) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
