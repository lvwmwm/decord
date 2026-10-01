// Module ID: 6400
// Function ID: 6401
// Name: useTypeConsolidationTextTransform
// Dependencies: [6401, 2]
// Exports: useTypeConsolidationEyebrow, useTypeConsolidationTextTransform

// Module 6400 (useTypeConsolidationTextTransform)
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import size from "module_2" /* 2 */;

const style = { textTransform: "none" };
const result = size.fileFinishedImporting("modules/design/useTypeConsolidationTextTransform.tsx");

export const useTypeConsolidationTextTransform = function useTypeConsolidationTextTransform(AcceptGuildTemplate) {
  let tmp;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(AcceptGuildTemplate)) {
    tmp = style;
  }
  return tmp;
};
export const useTypeConsolidationEyebrow = function useTypeConsolidationEyebrow(BountiesScrollRecapFooter, variant) {
  let obj3;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(BountiesScrollRecapFooter)) {
    obj3 = { variant: "experimental/body-sm/medium", style };
    const obj2 = { variant: "experimental/body-sm/medium", style };
  } else {
    obj3 = { variant, style: "a" };
  }
  return obj3;
};
