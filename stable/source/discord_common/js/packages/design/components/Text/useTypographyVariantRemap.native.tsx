// Module ID: 5629
// Function ID: 5630
// Name: useTypographyVariantRemap
// Dependencies: [5031, 5630, 2]
// Exports: useTypographyVariantRemap

// Module 5629 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 5031 */;
import typographyVariantRemap from "typographyVariantRemap" /* 5630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export function useTypographyVariantRemap(variant, arg1) {
  const obj = ThemeContext;
  let themeContext = obj.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const remapTypographyVariant = tmp(5630).remapTypographyVariant;
  typographyVariantRemap;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant(enabledExperiments, variant, arg1);
}
