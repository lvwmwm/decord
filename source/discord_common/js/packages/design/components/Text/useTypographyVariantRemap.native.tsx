// Module ID: 4290
// Function ID: 4291
// Name: useTypographyVariantRemap
// Dependencies: [4007, 4291, 2]
// Exports: useTypographyVariantRemap

// Module 4290 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = require(4007) /* json */.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = require(4007) /* json */;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return require(4291) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
