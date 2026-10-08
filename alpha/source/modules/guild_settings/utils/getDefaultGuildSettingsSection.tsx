// Module ID: 8619
// Function ID: 8620
// Name: getDefaultGuildSettingsSection
// Dependencies: [1085, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8619 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
