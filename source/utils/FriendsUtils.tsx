// Module ID: 8966
// Function ID: 70644
// Name: validateDiscordTag
// Dependencies: [57, 653, 1212, 44, 675, 8386, 2]
// Exports: humanizeAbortCodeForA11y, isValidDiscordTag

// Module 8966 (validateDiscordTag)
import _slicedToArray from "_slicedToArray";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function validateDiscordTag(arr) {
  let stringResult = null;
  if (!regex3.test(arr)) {
    if (!arr.includes("#")) {
      const tmp4 = callback(arr.split("#"), 2);
      let obj = importDefault(675);
      obj = { reason: "Invalid Username", query: arr };
      let str3 = "";
      if (null != tmp4[1]) {
        str3 = tmp5;
      }
      obj.discrim_len = str3.length;
      obj.username_len = tmp4[0].length;
      obj.is_email_like = importDefault(8386).isEmail(arr);
      const obj3 = importDefault(8386);
      obj.is_invite_like = importDefault(8386).isInvite(arr);
      obj.is_num_only = regex.test(arr);
      obj.track(constants2.FRIEND_REQUEST_FAILED, obj);
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.paDJBM);
      const obj4 = importDefault(8386);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, substr) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const obj = { discordTag: substr };
    return intl7.format(require(1212) /* getSystemLocale */.t.Oxe6Ur, obj);
  } else if (constants.TOO_MANY_FRIENDS === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.tnBalD);
  } else if (constants.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.VNLneq);
  } else {
    if (constants.USER_QUARANTINED !== arg0) {
      if (constants.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (constants.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          return intl3.string(require(1212) /* getSystemLocale */.t.sIGo1i);
        } else if (constants.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          return intl2.string(require(1212) /* getSystemLocale */.t.k1K15p);
        } else {
          if (constants.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (constants.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (constants.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = constants.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = require(1212) /* getSystemLocale */.intl;
          return intl.string(require(1212) /* getSystemLocale */.t.paDJBM);
        }
      }
    }
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.EouHwv);
  }
}
({ AbortCodes: closure_4, AnalyticEvents: closure_5 } = ME);
const re6 = /^\d+$/;
const re7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
const re8 = /^[a-zA-Z0-9_\\.]+$/;
const result = require("getSystemLocale").fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(arr) {
  return null == validateDiscordTag(arr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, substr) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, substr);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { discordTag: substr };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["ihb+UW"], obj);
  }
  importDefault(44)("string" === typeof formatToPlainStringResult, "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};
