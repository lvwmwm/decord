// Module ID: 11138
// Function ID: 11139
// Name: removeAutomodMessageNotice
// Dependencies: [709, 2]
// Exports: removeAutomodMessageNotice

// Module 11138 (removeAutomodMessageNotice)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(messageId) {
  let obj = dispatcherDefault;
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId };
  obj.dispatch(obj);
};
