// Module ID: 10998
// Function ID: 10999
// Name: removeAutomodMessageNotice
// Dependencies: [709, 2]
// Exports: removeAutomodMessageNotice

// Module 10998 (removeAutomodMessageNotice)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(messageId) {
  let obj = importDefault(709);
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId };
  obj.dispatch(obj);
};
