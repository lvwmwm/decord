// Module ID: 9378
// Function ID: 9379
// Name: getClearAfterDuration
// Dependencies: [9374, 687, 38, 2]
// Exports: default

// Module 9378 (getClearAfterDuration)
import { ClearAfterValues } from "StatusTypes";

const result = require("module_38").fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = importDefault(687).Millis.DAY;
  } else {
    importDefault(38)(typeof DAY === "Object", "Invalid custom status clear timeout");
  }
  return DAY;
};
