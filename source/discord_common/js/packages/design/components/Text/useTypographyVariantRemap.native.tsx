// Module ID: 4487
// Function ID: 4488
// Name: useTypographyVariantRemap
// Dependencies: [1358, 4488, 2]
// Exports: useTypographyVariantRemap

// Module 4487 (useTypographyVariantRemap)
import set from "set" /* 2 */;
import json from "json" /* 1358 */;
import remapTypographyVariant from "remapTypographyVariant" /* 4488 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = json.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = json;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant.remapTypographyVariant(enabledExperiments, variant, arg1);
};
