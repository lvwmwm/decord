// Module ID: 11740
// Function ID: 11741
// Name: GuildAutomodMessageActionCreators
// Dependencies: [577, 2]
// Exports: removeAutomodMessageNotice

// Module 11740 (GuildAutomodMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  DispatcherDefault.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 });
};
