// Module ID: 11432
// Function ID: 11433
// Name: removeAutomodMessageNotice
// Dependencies: [706, 2]
// Exports: removeAutomodMessageNotice

// Module 11432 (removeAutomodMessageNotice)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id1) {
  let obj = dispatcherDefault;
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id1 };
  obj.dispatch(obj);
};
