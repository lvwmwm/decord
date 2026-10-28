// Module ID: 11106
// Function ID: 11107
// Name: getClearAfterDuration
// Dependencies: [11102, 1101, 38, 2]
// Exports: default

// Module 11106 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import DurationsDefault from "Durations" /* 1101 */;
import Constants from "Constants" /* 11102 */;
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
