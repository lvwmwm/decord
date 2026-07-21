// Module ID: 6725
// Function ID: 52386
// Name: getJoinedAtDateFormatter
// Dependencies: []
// Exports: formatDateRelativeTime, getJoinedAtTimestamp

// Module 6725 (getJoinedAtDateFormatter)
function getJoinedAtDateFormatter() {
  return { seconds: require(dependencyMap[0]).t.FsBhl/, minutes: require(dependencyMap[0]).t.4d1mgT, hours: require(dependencyMap[0]).t.2wkczD, days: require(dependencyMap[0]).t.ocdS+f, months: require(dependencyMap[0]).t.az14+h, years: require(dependencyMap[0]).t.5Gk1ns };
}
function getAccountAgeDateFormatter() {
  return { hours: require(dependencyMap[0]).t.JZP2Rs, days: require(dependencyMap[0]).t.3moSHc, months: require(dependencyMap[0]).t.0Ddwr1, years: require(dependencyMap[0]).t.cR7lcs };
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
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_mod_dash_member_safety/DateUtils.tsx");

export const ACCOUNT_AGE_DATE_TOOLTIP_CONFIG = { -869514612: 0.00000000000000000000000000002524355432732662, -869138428: 0.00000000000000000010842024107846067, -2007498748: 0.0000000004656613931258713, -1979727028: 2.000000275671482, -1560345840: 131072.06494140625 };
export const MEMBER_JOIN_DATE_TOOLTIP_CONFIG = { -869514612: 0.00000000000000000000000000002524355432732662, -869138428: 0.00000000000000000010842024107846067, -2007498748: 0.0000000004656613931258713, -1979727028: 2.000000275671482, -1560345840: 131072.06494140625 };
export const MembersTableDateFormats = obj;
export { getMembersTableTimestampFormatter };
export const formatDateRelativeTime = function formatDateRelativeTime(arg0, arg1) {
  return importDefault(dependencyMap[1])(arg0, getMembersTableTimestampFormatter(arg1), false);
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
