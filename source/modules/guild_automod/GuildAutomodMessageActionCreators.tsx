// Module ID: 9450
// Function ID: 73766
// Name: removeAutomodMessageNotice
// Dependencies: [686, 2]
// Exports: removeAutomodMessageNotice

// Module 9450 (removeAutomodMessageNotice)
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  let obj = importDefault(686);
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj);
};
