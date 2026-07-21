// Module ID: 8919
// Function ID: 70364
// Name: validateDiscordTag
// Dependencies: []
// Exports: humanizeAbortCodeForA11y, isValidDiscordTag

// Module 8919 (validateDiscordTag)
function validateDiscordTag(arr) {
  let stringResult = null;
  if (!regex3.test(arr)) {
    if (!arr.includes("#")) {
      const tmp4 = callback(arr.split("#"), 2);
      let obj = importDefault(dependencyMap[4]);
      obj = { reason: "Invalid Username", query: arr };
      let str3 = "";
      if (null != tmp4[1]) {
        str3 = tmp5;
      }
      obj.discrim_len = str3.length;
      obj.username_len = tmp4[0].length;
      obj.is_email_like = importDefault(dependencyMap[5]).isEmail(arr);
      const obj3 = importDefault(dependencyMap[5]);
      obj.is_invite_like = importDefault(dependencyMap[5]).isInvite(arr);
      obj.is_num_only = regex.test(arr);
      obj.track(constants2.FRIEND_REQUEST_FAILED, obj);
      const intl = arg1(dependencyMap[2]).intl;
      stringResult = intl.string(arg1(dependencyMap[2]).t.paDJBM);
      const obj4 = importDefault(dependencyMap[5]);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, substr) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = substr(dependencyMap[2]).intl;
    const obj = { discordTag: substr };
    return intl7.format(substr(dependencyMap[2]).t.Oxe6Ur, obj);
  } else if (constants.TOO_MANY_FRIENDS === arg0) {
    const intl6 = substr(dependencyMap[2]).intl;
    return intl6.string(substr(dependencyMap[2]).t.tnBalD);
  } else if (constants.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = substr(dependencyMap[2]).intl;
    return intl5.string(substr(dependencyMap[2]).t.VNLneq);
  } else {
    if (constants.USER_QUARANTINED !== arg0) {
      if (constants.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (constants.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = substr(dependencyMap[2]).intl;
          return intl3.string(substr(dependencyMap[2]).t.sIGo1i);
        } else if (constants.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = substr(dependencyMap[2]).intl;
          return intl2.string(substr(dependencyMap[2]).t.k1K15p);
        } else {
          if (constants.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (constants.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (constants.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = constants.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = substr(dependencyMap[2]).intl;
          return intl.string(substr(dependencyMap[2]).t.paDJBM);
        }
      }
    }
    const intl4 = substr(dependencyMap[2]).intl;
    return intl4.string(substr(dependencyMap[2]).t.EouHwv);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ AbortCodes: closure_4, AnalyticEvents: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = /^\d+$/;
let closure_7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
let closure_8 = /^[a-zA-Z0-9_\\.]+$/;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(arr) {
  return null == validateDiscordTag(arr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, substr) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, substr);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = substr(dependencyMap[2]).intl;
    const obj = { discordTag: substr };
    formatToPlainStringResult = intl.formatToPlainString(substr(dependencyMap[2]).t.ihb+UW, obj);
  }
  importDefault(dependencyMap[3])("string" === typeof formatToPlainStringResult, "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};
