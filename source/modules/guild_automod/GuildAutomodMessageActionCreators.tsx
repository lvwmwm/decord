// Module ID: 9486
// Function ID: 73928
// Name: removeAutomodMessageNotice
// Dependencies: []
// Exports: removeAutomodMessageNotice

// Module 9486 (removeAutomodMessageNotice)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id2) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id2 };
  obj.dispatch(obj);
};
