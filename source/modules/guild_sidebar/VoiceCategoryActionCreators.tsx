// Module ID: 16196
// Function ID: 16197
// Name: voiceCategoryExpand
// Dependencies: [573, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 16196 (voiceCategoryExpand)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj);
};
