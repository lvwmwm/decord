// Module ID: 8627
// Function ID: 8628
// Name: getDefaultGuildSettingsSection
// Dependencies: [1085, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8627 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
