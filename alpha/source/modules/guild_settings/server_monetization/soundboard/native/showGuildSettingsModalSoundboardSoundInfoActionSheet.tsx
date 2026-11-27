// Module ID: 20047
// Function ID: 20048
// Name: showGuildSettingsModalSoundboardSoundInfoActionSheet
// Dependencies: [5257, 20048, 2120, 2]
// Exports: showGuildSettingsModalSoundboardSoundInfoActionSheet

// Module 20047 (showGuildSettingsModalSoundboardSoundInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
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
  obj.openLazy(asyncRequire(20048, dependencyMap.paths), GuildSettingsModalSoundboardSoundInfoActionSheet, obj2);
}
