// Module ID: 5624
// Function ID: 5625
// Name: useTypographyVariantRemap
// Dependencies: [5026, 5625, 2]
// Exports: useTypographyVariantRemap

// Module 5624 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 5026 */;
import typographyVariantRemap from "typographyVariantRemap" /* 5625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export function useTypographyVariantRemap(variant, arg1) {
  const obj = ThemeContext;
  let themeContext = obj.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const remapTypographyVariant = tmp(5625).remapTypographyVariant;
  typographyVariantRemap;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant(enabledExperiments, variant, arg1);
}
