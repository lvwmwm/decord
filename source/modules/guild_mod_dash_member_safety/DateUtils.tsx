// Module ID: 6730
// Function ID: 52451
// Name: getJoinedAtDateFormatter
// Dependencies: [1212, 6731, 2]
// Exports: formatDateRelativeTime, getJoinedAtTimestamp

// Module 6730 (getJoinedAtDateFormatter)
function getJoinedAtDateFormatter() {
  return { seconds: require(1212) /* getSystemLocale */.t["FsBhl/"], minutes: require(1212) /* getSystemLocale */.t["4d1mgT"], hours: require(1212) /* getSystemLocale */.t["2wkczD"], days: require(1212) /* getSystemLocale */.t["ocdS+f"], months: require(1212) /* getSystemLocale */.t["az14+h"], years: require(1212) /* getSystemLocale */.t["5Gk1ns"] };
}
function getAccountAgeDateFormatter() {
  return { hours: require(1212) /* getSystemLocale */.t.JZP2Rs, days: require(1212) /* getSystemLocale */.t["3moSHc"], months: require(1212) /* getSystemLocale */.t["0Ddwr1"], years: require(1212) /* getSystemLocale */.t.cR7lcs };
}
function getMembersTableTimestampFormatter(arg0) {
  if (arg0 === obj.JOINED_AT) {
    let tmp2 = getJoinedAtDateFormatter;
  } else if (arg0 === obj.ACCOUNT_AGE) {
    tmp2 = getAccountAgeDateFormatter;
  }
  return tmp2;
}
const obj = { JOINED_AT: 0, [0]: "JOINED_AT", ACCOUNT_AGE: 1, [1]: "ACCOUNT_AGE" };
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/DateUtils.tsx");

export const ACCOUNT_AGE_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export const MEMBER_JOIN_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export const MembersTableDateFormats = obj;
export { getMembersTableTimestampFormatter };
export const formatDateRelativeTime = function formatDateRelativeTime(arg0, arg1) {
  return importDefault(6731)(arg0, getMembersTableTimestampFormatter(arg1), false);
};
export const getJoinedAtTimestamp = function getJoinedAtTimestamp(joinedAt) {
  if (null != joinedAt) {
    const _Date2 = Date;
    let date = new Date(joinedAt);
  } else {
    const _Date = Date;
    date = new Date();
  }
  return date.getTime();
};
