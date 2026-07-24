// Module ID: 15072
// Function ID: 114807
// Name: voiceCategoryExpand
// Dependencies: [686, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 15072 (voiceCategoryExpand)
const result = require("set").fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(686);
  obj = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(686);
  obj = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj);
};
