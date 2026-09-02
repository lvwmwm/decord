// Module ID: 11427
// Function ID: 11428
// Name: removeAutomodMessageNotice
// Dependencies: [706, 2]
// Exports: removeAutomodMessageNotice

// Module 11427 (removeAutomodMessageNotice)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(messageId) {
  let obj = dispatcherDefault;
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId };
  obj.dispatch(obj);
};
