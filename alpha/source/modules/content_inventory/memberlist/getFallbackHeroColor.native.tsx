// Module ID: 8254
// Function ID: 8255
// Name: getFallbackHeroColor
// Dependencies: [587, 2]
// Exports: getFallbackHeroColor

// Module 8254 (getFallbackHeroColor)
import nativeDefault from "native" /* 587 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, stateFromStores) {
  const internal = nativeDefault.internal;
  const obj = { saturation: stateFromStores };
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, obj);
};
