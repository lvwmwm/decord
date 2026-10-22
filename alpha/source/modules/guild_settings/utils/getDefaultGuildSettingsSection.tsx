// Module ID: 8987
// Function ID: 8988
// Name: getDefaultGuildSettingsSection
// Dependencies: [1087, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8987 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
