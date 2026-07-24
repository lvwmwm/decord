// Module ID: 6739
// Function ID: 52515
// Name: isSpammer
// Dependencies: [1849, 653, 6740, 2]
// Exports: isSpam, isSpamSupported

// Module 6739 (isSpammer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
function isSpammer(id) {
  user = user.getUser(id);
  let hasFlagResult;
  if (null != user) {
    hasFlagResult = user.hasFlag(constants.SPAMMER);
  }
  return null != hasFlagResult && hasFlagResult;
}
({ UserFlags: closure_3, ChannelTypes: closure_4 } = ME);
const result = require("getEmbedFieldFromMessage").fileFinishedImporting("modules/messages/isSpam.tsx");

export const isSpamSupported = function isSpamSupported(type) {
  let tmp = undefined !== type;
  if (tmp) {
    tmp = type.type !== constants2.DM;
  }
  return tmp;
};
export { isSpammer };
export const isSpam = function isSpam(author) {
  let tmp = isSpammer(author.author.id);
  if (tmp) {
    tmp = !require(6740) /* getEmbedFieldFromMessage */.isAutomodMessageRecord(author);
    const obj = require(6740) /* getEmbedFieldFromMessage */;
  }
  return tmp;
};
