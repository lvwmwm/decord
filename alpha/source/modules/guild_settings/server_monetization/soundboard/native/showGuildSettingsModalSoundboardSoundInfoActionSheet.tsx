// Module ID: 19864
// Function ID: 19865
// Name: showGuildSettingsModalSoundboardSoundInfoActionSheet
// Dependencies: [5006, 19865, 2121, 2]
// Exports: showGuildSettingsModalSoundboardSoundInfoActionSheet

// Module 19864 (showGuildSettingsModalSoundboardSoundInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
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
  obj.openLazy(asyncRequire(19865, dependencyMap.paths), GuildSettingsModalSoundboardSoundInfoActionSheet, obj2);
}
