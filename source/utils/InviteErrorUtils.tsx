// Module ID: 11748
// Function ID: 91246
// Name: getDescriptiveInviteError
// Dependencies: []
// Exports: getDescriptiveInviteError, getInviteError

// Module 11748 (getDescriptiveInviteError)
let closure_3 = importDefault(dependencyMap[0]);
({ AbortCodes: closure_4, HelpdeskArticles: closure_5, MAX_USER_GUILDS: closure_6, MAX_USER_GUILDS_PREMIUM: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const currentUser = currentUser.getCurrentUser();
    if (!obj5.canUseIncreasedGuildCap(currentUser)) {
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let tmp13 = closure_6;
      }
      let obj = {};
      const intl7 = arg1(dependencyMap[3]).intl;
      obj = { quantity: tmp13 };
      obj.title = intl7.formatToPlainString(arg1(dependencyMap[3]).t.ttJ/hj, obj);
      const intl8 = arg1(dependencyMap[3]).intl;
      obj.description = intl8.string(arg1(dependencyMap[3]).t.iLyuDO);
      return obj;
    }
    tmp13 = closure_7;
    const obj5 = importDefault(dependencyMap[2]);
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj1 = {};
    const intl5 = arg1(dependencyMap[3]).intl;
    obj1.title = intl5.string(arg1(dependencyMap[3]).t.ZZlox4);
    const intl6 = arg1(dependencyMap[3]).intl;
    obj1.description = intl6.string(arg1(dependencyMap[3]).t.ZUEGFn);
    return obj1;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[3]).intl;
    obj2.title = intl3.string(arg1(dependencyMap[3]).t.kJwpBW);
    const intl4 = arg1(dependencyMap[3]).intl;
    obj2.description = intl4.string(arg1(dependencyMap[3]).t.ZUEGFn);
    return obj2;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    obj = {};
    const intl = arg1(dependencyMap[3]).intl;
    obj.title = intl.string(arg1(dependencyMap[3]).t.u/xsK9);
    const intl2 = arg1(dependencyMap[3]).intl;
    obj.description = intl2.string(arg1(dependencyMap[3]).t.SxY4IW);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const intl6 = arg1(dependencyMap[3]).intl;
    return intl6.string(arg1(dependencyMap[3]).t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const intl5 = arg1(dependencyMap[3]).intl;
    return intl5.string(arg1(dependencyMap[3]).t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === code) {
    const intl4 = arg1(dependencyMap[3]).intl;
    return intl4.string(arg1(dependencyMap[3]).t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === code) {
    const intl3 = arg1(dependencyMap[3]).intl;
    return intl3.string(arg1(dependencyMap[3]).t.mY2R+F);
  } else if (constants.INVITES_DISABLED === code) {
    const intl2 = arg1(dependencyMap[3]).intl;
    const obj = { articleLink: importDefault(dependencyMap[4]).getArticleURL(constants2.INVITE_DISABLED) };
    return intl2.format(arg1(dependencyMap[3]).t.RXSeLl, obj);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.dDZRdy);
  }
};
