// Module ID: 11785
// Function ID: 91533
// Name: getDescriptiveInviteError
// Dependencies: [1849, 653, 3776, 1212, 1920, 2]
// Exports: getDescriptiveInviteError, getInviteError

// Module 11785 (getDescriptiveInviteError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AbortCodes: closure_4, HelpdeskArticles: closure_5, MAX_USER_GUILDS: closure_6, MAX_USER_GUILDS_PREMIUM: closure_7 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    currentUser = currentUser.getCurrentUser();
    if (!obj5.canUseIncreasedGuildCap(currentUser)) {
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let tmp13 = closure_6;
      }
      let obj = {};
      const intl7 = require(1212) /* getSystemLocale */.intl;
      obj = { quantity: tmp13 };
      obj.title = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t["ttJ/hj"], obj);
      const intl8 = require(1212) /* getSystemLocale */.intl;
      obj.description = intl8.string(require(1212) /* getSystemLocale */.t.iLyuDO);
      return obj;
    }
    tmp13 = closure_7;
    obj5 = importDefault(3776);
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj1 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl5.string(require(1212) /* getSystemLocale */.t.ZZlox4);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj1.description = intl6.string(require(1212) /* getSystemLocale */.t.ZUEGFn);
    return obj1;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj2 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj2.title = intl3.string(require(1212) /* getSystemLocale */.t.kJwpBW);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.description = intl4.string(require(1212) /* getSystemLocale */.t.ZUEGFn);
    return obj2;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["u/xsK9"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.description = intl2.string(require(1212) /* getSystemLocale */.t.SxY4IW);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(_Set) {
  if (constants.TOO_MANY_USER_GUILDS === _Set) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === _Set) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === _Set) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === _Set) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["mY2R+F"]);
  } else if (constants.INVITES_DISABLED === _Set) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = { articleLink: importDefault(1920).getArticleURL(constants2.INVITE_DISABLED) };
    return intl2.format(require(1212) /* getSystemLocale */.t.RXSeLl, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dDZRdy);
  }
};
