// Module ID: 9047
// Function ID: 9048
// Name: getDefaultGuildSettingsSection
// Dependencies: [1084, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9047 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
