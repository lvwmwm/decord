// Module ID: 6847
// Function ID: 6848
// Name: getRequiredFieldA11yName
// Dependencies: [1119, 2]
// Exports: getRequiredFieldA11yName

// Module 6847 (getRequiredFieldA11yName)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Input/native/getRequiredFieldA11yName.native.tsx");

export const getRequiredFieldA11yName = function getRequiredFieldA11yName(accessibilityLabel, required) {
  let combined;
  if (null != accessibilityLabel) {
    if ("" !== accessibilityLabel) {
      if (true === required) {
        const intl = util.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + accessibilityLabel + " (" + intl.string(util.t.EkokLy) + ")";
      }
    }
  }
  return combined;
};
