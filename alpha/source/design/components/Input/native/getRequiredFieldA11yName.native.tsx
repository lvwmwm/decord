// Module ID: 6287
// Function ID: 6288
// Name: getRequiredFieldA11yName
// Dependencies: [1126, 2]
// Exports: getRequiredFieldA11yName

// Module 6287 (getRequiredFieldA11yName)
import intl2 from "intl" /* 1126 */;
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
