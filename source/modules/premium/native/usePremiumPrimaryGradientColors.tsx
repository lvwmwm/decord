// Module ID: 12872
// Function ID: 12873
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4097, 712, 2]
// Exports: default

// Module 12872 (usePremiumPrimaryGradientColors)
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(4097) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(4097) /* map */;
  items[1] = require(4097) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(4097) /* map */;
  items[2] = require(4097) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
