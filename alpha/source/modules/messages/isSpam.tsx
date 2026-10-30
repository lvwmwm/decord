// Module ID: 7679
// Function ID: 7680
// Name: isSpam
// Dependencies: [1384, 1072, 7680, 2]
// Exports: isSpam, isSpamSupported, isSpammer

// Module 7679 (isSpam)
import AutomodMessageUtils from "AutomodMessageUtils" /* 7680 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ UserFlags: c3, ChannelTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/messages/isSpam.tsx");

export function isSpamSupported(type) {
  return undefined !== type && type.type !== constants2.DM;
}
export function isSpammer(userId) {
  const user = UserStore.getUser(userId);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function isSpam(author) {
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
}
