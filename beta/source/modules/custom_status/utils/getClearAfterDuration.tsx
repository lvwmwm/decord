// Module ID: 10594
// Function ID: 10595
// Name: getClearAfterDuration
// Dependencies: [10590, 1103, 38, 2]
// Exports: default

// Module 10594 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import DurationsDefault from "Durations" /* 1103 */;
import Constants from "Constants" /* 10590 */;
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
