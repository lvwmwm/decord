// Module ID: 4198
// Function ID: 4199
// Name: useTypographyVariantRemap
// Dependencies: [3969, 4199, 2]
// Exports: useTypographyVariantRemap

// Module 4198 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(3969) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = require(3969) /* context */;
  const tmp = require;
  return require(4199) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
