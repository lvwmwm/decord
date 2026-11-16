// Module ID: 8412
// Function ID: 8413
// Name: getDefaultGuildSettingsSection
// Dependencies: [1072, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8412 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
