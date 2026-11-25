// Module ID: 8539
// Function ID: 8540
// Name: getDefaultGuildSettingsSection
// Dependencies: [1071, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8539 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
