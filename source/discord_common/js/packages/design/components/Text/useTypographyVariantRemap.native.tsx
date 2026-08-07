// Module ID: 4307
// Function ID: 4308
// Name: useTypographyVariantRemap
// Dependencies: [4024, 4308, 2]
// Exports: useTypographyVariantRemap

// Module 4307 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = require(4024) /* json */.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = require(4024) /* json */;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return require(4308) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
