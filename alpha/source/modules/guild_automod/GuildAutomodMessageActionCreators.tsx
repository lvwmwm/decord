// Module ID: 11956
// Function ID: 11957
// Name: GuildAutomodMessageActionCreators
// Dependencies: [573, 2]
// Exports: removeAutomodMessageNotice

// Module 11956 (GuildAutomodMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  DispatcherDefault.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 });
};
