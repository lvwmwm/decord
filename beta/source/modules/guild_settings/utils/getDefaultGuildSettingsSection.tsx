// Module ID: 9031
// Function ID: 9032
// Name: getDefaultGuildSettingsSection
// Dependencies: [1086, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9031 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
