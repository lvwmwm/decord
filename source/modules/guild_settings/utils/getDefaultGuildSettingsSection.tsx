// Module ID: 9695
// Function ID: 9696
// Name: getDefaultGuildSettingsSection
// Dependencies: [676, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9695 (getDefaultGuildSettingsSection)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
