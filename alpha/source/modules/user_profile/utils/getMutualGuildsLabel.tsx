// Module ID: 12356
// Function ID: 12357
// Name: getMutualGuildsLabel
// Dependencies: [1126, 2]
// Exports: default

// Module 12356 (getMutualGuildsLabel)
import intl4 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(count) {
  let stringResult;
  if (undefined === count) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t["4lTDZq"]);
  } else if (0 === count) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.jpY0X5);
  } else {
    const intl = intl4.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(intl4.t.eE3oep, obj);
  }
  return stringResult;
};
