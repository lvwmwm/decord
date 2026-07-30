// Module ID: 9510
// Function ID: 9511
// Name: removeAutomodMessageNotice
// Dependencies: [709, 2]
// Exports: removeAutomodMessageNotice

// Module 9510 (removeAutomodMessageNotice)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(messageId) {
  let obj = importDefault(709);
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId };
  obj.dispatch(obj);
};
