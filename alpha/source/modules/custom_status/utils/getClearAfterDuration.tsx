// Module ID: 10570
// Function ID: 10571
// Name: getClearAfterDuration
// Dependencies: [10566, 1091, 38, 2]
// Exports: default

// Module 10570 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import DurationsDefault from "Durations" /* 1091 */;
import Constants from "Constants" /* 10566 */;
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
