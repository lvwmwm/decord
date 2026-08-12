// Module ID: 12775
// Function ID: 12776
// Name: usePremiumPrimaryGradientColors
// Dependencies: [4065, 712, 2]
// Exports: default

// Module 12775 (usePremiumPrimaryGradientColors)
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(4065) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(4065) /* map */;
  items[1] = require(4065) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(4065) /* map */;
  items[2] = require(4065) /* map */.useToken(importDefault(712).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
