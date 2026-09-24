// Module ID: 9871
// Function ID: 9872
// Name: getDefaultGuildSettingsSection
// Dependencies: [1078, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9871 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
