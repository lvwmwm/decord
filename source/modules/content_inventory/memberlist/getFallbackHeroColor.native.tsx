// Module ID: 7852
// Function ID: 62640
// Name: getFallbackHeroColor
// Dependencies: [689, 2]
// Exports: getFallbackHeroColor

// Module 7852 (getFallbackHeroColor)
const result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = importDefault(689).internal;
  return internal.resolveSemanticColor(stateFromStores1, importDefault(689).colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
