// Module ID: 8581
// Function ID: 8582
// Name: getDefaultGuildSettingsSection
// Dependencies: [1071, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8581 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
