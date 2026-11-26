// Module ID: 19823
// Function ID: 19824
// Name: showGuildSettingsModalSoundboardSoundInfoActionSheet
// Dependencies: [5127, 19824, 2119, 2]
// Exports: showGuildSettingsModalSoundboardSoundInfoActionSheet

// Module 19823 (showGuildSettingsModalSoundboardSoundInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalSoundboardSoundInfoActionSheet = "GuildSettingsModalSoundboardSoundInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/soundboard/native/showGuildSettingsModalSoundboardSoundInfoActionSheet.tsx");

export function showGuildSettingsModalSoundboardSoundInfoActionSheet(arg0) {
  let guildId;
  let soundId;
  ({ guildId, soundId } = arg0);
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    guildId,
    soundId,
    hideActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(GuildSettingsModalSoundboardSoundInfoActionSheet);
    }
  };
  obj.openLazy(asyncRequire(19824, dependencyMap.paths), GuildSettingsModalSoundboardSoundInfoActionSheet, obj2);
}
