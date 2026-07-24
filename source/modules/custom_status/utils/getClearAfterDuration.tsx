// Module ID: 11932
// Function ID: 92393
// Name: getClearAfterDuration
// Dependencies: [11928, 664, 44, 2]
// Exports: default

// Module 11932 (getClearAfterDuration)
import { ClearAfterValues } from "StatusTypes";

const result = require("invariant").fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = importDefault(664).Millis.DAY;
  } else {
    importDefault(44)("number" === typeof DAY, "Invalid custom status clear timeout");
  }
  return DAY;
};
