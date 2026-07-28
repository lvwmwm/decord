// Module ID: 4170
// Function ID: 34499
// Name: useTypographyVariantRemap
// Dependencies: [3941, 4171, 2]
// Exports: useTypographyVariantRemap

// Module 4170 (useTypographyVariantRemap)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(3941) /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (null != experiments) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (null == enabledExperiments) {
    enabledExperiments = [];
  }
  const obj = require(3941) /* context */;
  return require(4171) /* _createForOfIteratorHelperLoose */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
