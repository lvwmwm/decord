// Module ID: 4131
// Function ID: 34352
// Name: useTypographyVariantRemap
// Dependencies: []
// Exports: useTypographyVariantRemap

// Module 4131 (useTypographyVariantRemap)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require(dependencyMap[0]).useManaContext().experiments;
  let enabledExperiments;
  if (null != experiments) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (null == enabledExperiments) {
    enabledExperiments = [];
  }
  const obj = require(dependencyMap[0]);
  return require(dependencyMap[1]).remapTypographyVariant(enabledExperiments, variant, arg1);
};
