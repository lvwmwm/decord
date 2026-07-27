// Module ID: 15094
// Function ID: 114980
// Name: voiceCategoryExpand
// Dependencies: [686, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 15094 (voiceCategoryExpand)
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
