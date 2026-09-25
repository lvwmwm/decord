// Module ID: 7583
// Function ID: 7584
// Name: getFallbackHeroColor
// Dependencies: [576, 2]
// Exports: getFallbackHeroColor

// Module 7583 (getFallbackHeroColor)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
