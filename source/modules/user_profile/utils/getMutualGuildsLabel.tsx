// Module ID: 12234
// Function ID: 12235
// Name: getMutualGuildsLabel
// Dependencies: [1236, 2]
// Exports: default

// Module 12234 (getMutualGuildsLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["4lTDZq"]);
  } else if (0 === arg0) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.jpY0X5);
  } else {
    const intl = getSystemLocale.intl;
    const obj = { count: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(getSystemLocale.t.eE3oep, obj);
  }
  return stringResult;
};
