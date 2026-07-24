// Module ID: 9529
// Function ID: 74178
// Name: removeAutomodMessageNotice
// Dependencies: [686, 2]
// Exports: removeAutomodMessageNotice

// Module 9529 (removeAutomodMessageNotice)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  let obj = importDefault(686);
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj);
};
