// Module ID: 16545
// Function ID: 16546
// Name: VoiceCategoryActionCreators
// Dependencies: [577, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 16545 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId, expand: true });
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false });
};
