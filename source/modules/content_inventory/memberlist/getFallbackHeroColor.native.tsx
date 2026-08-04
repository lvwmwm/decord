// Module ID: 8047
// Function ID: 8048
// Name: getFallbackHeroColor
// Dependencies: [712, 2]
// Exports: getFallbackHeroColor

// Module 8047 (getFallbackHeroColor)
const result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = importDefault(712).internal;
  return internal.resolveSemanticColor(stateFromStores1, importDefault(712).colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
