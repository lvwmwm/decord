// Module ID: 8392
// Function ID: 8393
// Name: getFallbackHeroColor
// Dependencies: [712, 2]
// Exports: getFallbackHeroColor

// Module 8392 (getFallbackHeroColor)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;

const result = set.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = ThemesDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
