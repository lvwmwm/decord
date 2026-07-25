// Module ID: 5735
// Function ID: 49828
// Name: isSpammer
// Dependencies: [1850, 653, 5736, 2]
// Exports: isSpam, isSpamSupported

// Module 5735 (isSpammer)
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
    tmp = !require(5736) /* getEmbedFieldFromMessage */.isAutomodMessageRecord(author);
    const obj = require(5736) /* getEmbedFieldFromMessage */;
  }
  return tmp;
};
