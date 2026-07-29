// Module ID: 4194
// Function ID: 4195
// Name: useTypographyVariantRemap
// Dependencies: [3965, 4195, 2]
// Exports: useTypographyVariantRemap

// Module 4194 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(3965) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = require(3965) /* context */;
  const tmp = require;
  return require(4195) /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
