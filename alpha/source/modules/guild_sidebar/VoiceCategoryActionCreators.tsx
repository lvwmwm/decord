// Module ID: 18243
// Function ID: 18244
// Name: VoiceCategoryActionCreators
// Dependencies: [572, 2]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 18243 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export function voiceCategoryExpand(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj2);
}
export function voiceCategoryCollapse(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj2);
}
