// Module ID: 4260
// Function ID: 4261
// Name: useTypographyVariantRemap
// Dependencies: [4031, 4261, 2]
// Exports: useTypographyVariantRemap

// Module 4260 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(4031) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = require(4031) /* context */;
  const tmp = require;
  return require(4261) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
