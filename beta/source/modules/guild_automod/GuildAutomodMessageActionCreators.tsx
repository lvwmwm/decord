// Module ID: 10983
// Function ID: 10984
// Name: GuildAutomodMessageActionCreators
// Dependencies: [585, 2]
// Exports: removeAutomodMessageNotice

// Module 10983 (GuildAutomodMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  const obj = DispatcherDefault;
  const obj2 = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj2);
};
