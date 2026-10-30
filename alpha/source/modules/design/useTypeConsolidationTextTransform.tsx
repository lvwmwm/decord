// Module ID: 7142
// Function ID: 7143
// Name: useTypeConsolidationTextTransform
// Dependencies: [7143, 2]
// Exports: useTypeConsolidationEyebrow, useTypeConsolidationTextTransform

// Module 7142 (useTypeConsolidationTextTransform)
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7143 */;
import size from "module_2" /* 2 */;

const style = { textTransform: "none" };
const result = size.fileFinishedImporting("modules/design/useTypeConsolidationTextTransform.tsx");

export function useTypeConsolidationTextTransform(AcceptGuildTemplate) {
  let tmp;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(AcceptGuildTemplate)) {
    tmp = style;
  }
  return tmp;
}
export function useTypeConsolidationEyebrow(BountiesScrollRecapFooter, variant) {
  let obj3;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(BountiesScrollRecapFooter)) {
    obj3 = { variant: "experimental/body-sm/medium", style };
    const obj2 = { variant: "experimental/body-sm/medium", style };
  } else {
    obj3 = { variant, style: "Array" };
  }
  return obj3;
}
