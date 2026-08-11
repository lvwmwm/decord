// Module ID: 4308
// Function ID: 4309
// Name: useTypographyVariantRemap
// Dependencies: [1359, 4309, 2]
// Exports: useTypographyVariantRemap

// Module 4308 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = require(1359) /* json */.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = require(1359) /* json */;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return require(4309) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
