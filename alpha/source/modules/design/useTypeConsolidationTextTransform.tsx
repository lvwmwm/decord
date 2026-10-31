// Module ID: 7148
// Function ID: 7149
// Name: useTypeConsolidationTextTransform
// Dependencies: [7149, 2]
// Exports: useTypeConsolidationEyebrow, useTypeConsolidationTextTransform

// Module 7148 (useTypeConsolidationTextTransform)
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7149 */;
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
    obj3 = { variant, style: "a" };
  }
  return obj3;
}
