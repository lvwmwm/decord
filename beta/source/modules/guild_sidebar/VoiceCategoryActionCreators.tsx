// Module ID: 15828
// Function ID: 15829
// Name: VoiceCategoryActionCreators
// Dependencies: [573, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 15828 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj2);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj2);
};
