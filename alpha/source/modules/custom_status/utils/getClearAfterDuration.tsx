// Module ID: 11600
// Function ID: 11601
// Name: getClearAfterDuration
// Dependencies: [11596, 38, 2]
// Exports: default

// Module 11600 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 11596 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(num) {
  if (num === ClearAfterValues.TODAY) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date();
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date1 = new Date(date);
    date1.setDate(date.getDate() + 1);
    const time = date1.getTime();
    return time - date.getTime();
  } else {
    _modDef38(typeof num === "number", "Invalid custom status clear timeout");
    return num;
  }
};
