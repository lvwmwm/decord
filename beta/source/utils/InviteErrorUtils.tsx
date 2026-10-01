// Module ID: 12238
// Function ID: 12239
// Name: InviteErrorUtils
// Dependencies: [1372, 1074, 4488, 1115, 2111, 2]
// Exports: getDescriptiveInviteError, getInviteError

// Module 12238 (InviteErrorUtils)
import intl9 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, MAX_USER_GUILDS: metroRequire, MAX_USER_GUILDS_PREMIUM: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let obj3;
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const currentUser = UserStore.getCurrentUser();
    const obj5 = PremiumUtilsDefault;
    if (!obj5.canUseIncreasedGuildCap(currentUser)) {
      let tmp14;
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        tmp14 = metroRequire;
      }
      const obj2 = { title: intl7.formatToPlainString(intl9.t["ttJ/hj"], obj3), description: intl8.string(intl9.t.iLyuDO) };
      intl7 = intl9.intl;
      obj3 = { quantity: tmp14 };
      intl8 = intl9.intl;
      return obj2;
    }
    tmp14 = metroImportDefault;
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj4 = { title: intl5.string(intl9.t.ZZlox4), description: intl6.string(intl9.t.ZUEGFn) };
    intl5 = intl9.intl;
    intl6 = intl9.intl;
    return obj4;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj6 = { title: intl3.string(intl9.t.kJwpBW), description: intl4.string(intl9.t.ZUEGFn) };
    intl3 = intl9.intl;
    intl4 = intl9.intl;
    return obj6;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    const obj = { title: intl.string(intl9.t["u/xsK9"]), description: intl2.string(intl9.t.SxY4IW) };
    intl = intl9.intl;
    intl2 = intl9.intl;
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  let obj2;
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl6 = intl9.intl;
    return intl6.string(intl9.t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === arg0) {
    const intl5 = intl9.intl;
    return intl5.string(intl9.t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === arg0) {
    const intl4 = intl9.intl;
    return intl4.string(intl9.t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl3 = intl9.intl;
    return intl3.string(intl9.t["mY2R+F"]);
  } else if (constants.INVITES_DISABLED === arg0) {
    const intl2 = intl9.intl;
    const format = intl2.format;
    const obj = { articleLink: obj2.getArticleURL(hasOwnProperty.INVITE_DISABLED) };
    const RXSeLl = intl9.t.RXSeLl;
    obj2 = HelpdeskUtilsDefault;
    return format(RXSeLl, obj);
  } else {
    const intl = intl9.intl;
    return intl.string(intl9.t.dDZRdy);
  }
};
