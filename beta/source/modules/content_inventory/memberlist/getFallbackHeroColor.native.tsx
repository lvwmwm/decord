// Module ID: 8440
// Function ID: 8441
// Name: getFallbackHeroColor
// Dependencies: [580, 2]
// Exports: getFallbackHeroColor

// Module 8440 (getFallbackHeroColor)
import nativeDefault from "native" /* 580 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, stateFromStores) {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation: stateFromStores });
};
