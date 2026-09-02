// Module ID: 9756
// Function ID: 9757
// Name: getDefaultGuildSettingsSection
// Dependencies: [673, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9756 (getDefaultGuildSettingsSection)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
