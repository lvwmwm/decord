// Module ID: 9296
// Function ID: 9297
// Name: getClearAfterDuration
// Dependencies: [9292, 687, 38, 2]
// Exports: default

// Module 9296 (getClearAfterDuration)
import { ClearAfterValues } from "StatusTypes";

const result = require("module_38").fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = importDefault(687).Millis.DAY;
  } else {
    importDefault(38)(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};
