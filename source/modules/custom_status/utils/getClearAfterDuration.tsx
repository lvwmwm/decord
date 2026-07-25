// Module ID: 11908
// Function ID: 92198
// Name: getClearAfterDuration
// Dependencies: [11904, 664, 44, 2]
// Exports: default

// Module 11908 (getClearAfterDuration)
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
