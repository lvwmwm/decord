// Module ID: 11434
// Function ID: 11435
// Name: getClearAfterDuration
// Dependencies: [11430, 1095, 38, 2]
// Exports: default

// Module 11434 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import DurationsDefault from "Durations" /* 1095 */;
import Constants from "Constants" /* 11430 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = DurationsDefault.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};
