// Module ID: 12019
// Function ID: 12020
// Name: getMutualFriendsLabel
// Dependencies: [1127, 2]
// Exports: default

// Module 12019 (getMutualFriendsLabel)
import intl4 from "intl" /* 1127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  let stringResult;
  let str = arg0;
  if (undefined === arg0) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.n9g3ay);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = intl4.t["5s9jl+"];
    if (str == null) {
      str = "";
    }
    const obj = { count: str };
    stringResult = formatToPlainString(prop, obj);
  }
  return stringResult;
};
