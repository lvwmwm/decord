// Module ID: 8644
// Function ID: 8645
// Name: getDefaultGuildSettingsSection
// Dependencies: [1085, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8644 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
