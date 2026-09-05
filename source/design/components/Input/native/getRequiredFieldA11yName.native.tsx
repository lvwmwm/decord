// Module ID: 6608
// Function ID: 6609
// Name: getRequiredFieldA11yName
// Dependencies: [1114, 2]
// Exports: getRequiredFieldA11yName

// Module 6608 (getRequiredFieldA11yName)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;

const result = set.fileFinishedImporting("design/components/Input/native/getRequiredFieldA11yName.native.tsx");

export const getRequiredFieldA11yName = function getRequiredFieldA11yName(accessibilityLabel, required) {
  let combined;
  if (null != accessibilityLabel) {
    if ("" !== accessibilityLabel) {
      if (true === required) {
        const intl = getSystemLocale.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + accessibilityLabel + " (" + intl.string(getSystemLocale.t.EkokLy) + ")";
      }
    }
  }
  return combined;
};
