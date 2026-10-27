// Module ID: 7012
// Function ID: 7013
// Name: getRequiredFieldA11yName
// Dependencies: [1125, 2]
// Exports: getRequiredFieldA11yName

// Module 7012 (getRequiredFieldA11yName)
import intl2 from "intl" /* 1125 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Input/native/getRequiredFieldA11yName.native.tsx");

export const getRequiredFieldA11yName = function getRequiredFieldA11yName(accessibilityLabel, required) {
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
};
