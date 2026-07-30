// Module ID: 15161
// Function ID: 15162
// Name: voiceCategoryExpand
// Dependencies: [709, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 15161 (voiceCategoryExpand)
const result = require("set").fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(709);
  obj = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(709);
  obj = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj);
};
