// Module ID: 4136
// Function ID: 34396
// Name: useTypographyVariantRemap
// Dependencies: [3907, 4137, 2]
// Exports: useTypographyVariantRemap

// Module 4136 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(3907) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (null != experiments) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (null == enabledExperiments) {
    enabledExperiments = [];
  }
  const obj = require(3907) /* context */;
  return require(4137) /* _createForOfIteratorHelperLoose */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
