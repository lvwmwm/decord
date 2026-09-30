// Module ID: 16028
// Function ID: 16029
// Name: VoiceCategoryActionCreators
// Dependencies: [573, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 16028 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId, expand: true });
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false });
};
