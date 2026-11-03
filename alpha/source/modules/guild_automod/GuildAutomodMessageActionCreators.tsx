// Module ID: 10280
// Function ID: 10281
// Name: GuildAutomodMessageActionCreators
// Dependencies: [572, 2]
// Exports: removeAutomodMessageNotice

// Module 10280 (GuildAutomodMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export function removeAutomodMessageNotice(id2) {
  const obj = DispatcherDefault;
  const obj2 = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj2);
}
