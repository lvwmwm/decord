// Module ID: 8709
// Function ID: 8710
// Name: getFallbackHeroColor
// Dependencies: [575, 2]
// Exports: getFallbackHeroColor

// Module 8709 (getFallbackHeroColor)
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = nativeDefault.internal;
  const obj = { saturation };
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, obj);
}
