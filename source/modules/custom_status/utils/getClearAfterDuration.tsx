// Module ID: 11051
// Function ID: 11052
// Name: getClearAfterDuration
// Dependencies: [11047, 684, 38, 2]
// Exports: default

// Module 11051 (getClearAfterDuration)
import set from "set" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import setDefault from "set" /* 684 */;
import StatusTypes from "StatusTypes" /* 11047 */;

const ClearAfterValues = StatusTypes.ClearAfterValues;
const result = set.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = setDefault.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};
