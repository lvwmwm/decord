// Module ID: 12428
// Function ID: 12429
// Name: getFallbackHeroColor
// Dependencies: [575, 2]
// Exports: getFallbackHeroColor

// Module 12428 (getFallbackHeroColor)
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = nativeDefault.internal;
  const obj = { saturation };
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, obj);
}
