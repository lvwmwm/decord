// Module ID: 8407
// Function ID: 8408
// Name: getFallbackHeroColor
// Dependencies: [576, 2]
// Exports: getFallbackHeroColor

// Module 8407 (getFallbackHeroColor)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
