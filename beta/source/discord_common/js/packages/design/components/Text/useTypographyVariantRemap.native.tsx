// Module ID: 4842
// Function ID: 4843
// Name: useTypographyVariantRemap
// Dependencies: [4547, 4843, 2]
// Exports: useTypographyVariantRemap

// Module 4842 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 4547 */;
import typographyVariantRemap from "typographyVariantRemap" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const obj = ThemeContext;
  let themeContext = obj.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const remapTypographyVariant = tmp(4843).remapTypographyVariant;
  typographyVariantRemap;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant(enabledExperiments, variant, arg1);
};
