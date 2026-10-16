// Module ID: 9639
// Function ID: 9640
// Name: GuildAutomodMessageActionCreators
// Dependencies: [584, 2]
// Exports: removeAutomodMessageNotice

// Module 9639 (GuildAutomodMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  const obj = DispatcherDefault;
  const obj2 = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj2);
};
