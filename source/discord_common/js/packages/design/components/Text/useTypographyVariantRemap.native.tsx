// Module ID: 4135
// Function ID: 34384
// Name: useTypographyVariantRemap
// Dependencies: [3906, 4136, 2]
// Exports: useTypographyVariantRemap

// Module 4135 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(3906) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (null != experiments) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (null == enabledExperiments) {
    enabledExperiments = [];
  }
  const obj = require(3906) /* context */;
  return require(4136) /* _createForOfIteratorHelperLoose */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
