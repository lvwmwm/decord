// Module ID: 9044
// Function ID: 9045
// Name: getDefaultGuildSettingsSection
// Dependencies: [1084, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9044 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
