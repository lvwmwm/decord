// Module ID: 12401
// Function ID: 96269
// Name: usePremiumPrimaryGradientColors
// Dependencies: [3835, 689, 2]
// Exports: default

// Module 12401 (usePremiumPrimaryGradientColors)
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(3835) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(3835) /* map */;
  items[1] = require(3835) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(3835) /* map */;
  items[2] = require(3835) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
