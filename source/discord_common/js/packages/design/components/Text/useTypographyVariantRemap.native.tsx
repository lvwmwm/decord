// Module ID: 4260
// Function ID: 4261
// Name: useTypographyVariantRemap
// Dependencies: [3978, 4261, 2]
// Exports: useTypographyVariantRemap

// Module 4260 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = require(3978) /* json */.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = require(3978) /* json */;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return require(4261) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
