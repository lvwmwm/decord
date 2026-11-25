// Module ID: 7245
// Function ID: 7246
// Name: getRequiredFieldA11yName
// Dependencies: [1112, 2]
// Exports: getRequiredFieldA11yName

// Module 7245 (getRequiredFieldA11yName)
import intl2 from "intl" /* 1112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Input/native/getRequiredFieldA11yName.native.tsx");

export function getRequiredFieldA11yName(accessibilityLabel, required) {
  let combined;
  if (null != accessibilityLabel) {
    if ("" !== accessibilityLabel) {
      if (true === required) {
        const intl = intl2.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + accessibilityLabel + " (" + intl.string(intl2.t.EkokLy) + ")";
      }
    }
  }
  return combined;
}
