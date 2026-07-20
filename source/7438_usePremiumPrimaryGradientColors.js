// Module ID: 7438
// Function ID: 59668
// Name: usePremiumPrimaryGradientColors
// Dependencies: []
// Exports: default

// Module 7438 (usePremiumPrimaryGradientColors)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/native/usePremiumPrimaryGradientColors.tsx");

export default function usePremiumPrimaryGradientColors() {
  const items = [require(dependencyMap[0]).useToken(importDefault(dependencyMap[1]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  const obj = require(dependencyMap[0]);
  items[1] = require(dependencyMap[0]).useToken(importDefault(dependencyMap[1]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj2 = require(dependencyMap[0]);
  items[2] = require(dependencyMap[0]).useToken(importDefault(dependencyMap[1]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  return items;
};
