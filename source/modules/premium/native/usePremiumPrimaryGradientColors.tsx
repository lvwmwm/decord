// Module ID: 12423
// Function ID: 96453
// Name: usePremiumPrimaryGradientColors
// Dependencies: [3834, 689, 2]
// Exports: default

// Module 12423 (usePremiumPrimaryGradientColors)
const result = require("set").fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(3834) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(3834) /* map */;
  items[1] = require(3834) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(3834) /* map */;
  items[2] = require(3834) /* map */.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
