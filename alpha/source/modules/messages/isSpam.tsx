// Module ID: 7222
// Function ID: 7223
// Name: isSpam
// Dependencies: [1390, 1085, 7223, 2]
// Exports: isSpam, isSpamSupported, isSpammer

// Module 7222 (isSpam)
import AutomodMessageUtils from "AutomodMessageUtils" /* 7223 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ UserFlags: c3, ChannelTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/messages/isSpam.tsx");

export const isSpamSupported = function isSpamSupported(type) {
  return undefined !== type && type.type !== constants2.DM;
};
export const isSpammer = function isSpammer(userId) {
  const user = UserStore.getUser(userId);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isSpam = function isSpam(author) {
  const user = UserStore.getUser(author.author.id);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    const obj2 = AutomodMessageUtils;
    flag = !obj2.isAutomodMessageRecord(author);
  }
  return flag;
};
