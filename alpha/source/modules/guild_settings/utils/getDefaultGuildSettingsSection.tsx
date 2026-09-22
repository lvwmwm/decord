// Module ID: 9867
// Function ID: 9868
// Name: getDefaultGuildSettingsSection
// Dependencies: [1074, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9867 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
