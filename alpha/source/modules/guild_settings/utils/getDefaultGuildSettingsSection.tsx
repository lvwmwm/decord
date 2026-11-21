// Module ID: 8003
// Function ID: 8004
// Name: getDefaultGuildSettingsSection
// Dependencies: [1071, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8003 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
