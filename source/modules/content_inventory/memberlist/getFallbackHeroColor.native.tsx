// Module ID: 7807
// Function ID: 62286
// Name: getFallbackHeroColor
// Dependencies: []
// Exports: getFallbackHeroColor

// Module 7807 (getFallbackHeroColor)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = importDefault(dependencyMap[0]).internal;
  return internal.resolveSemanticColor(stateFromStores1, importDefault(dependencyMap[0]).colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
