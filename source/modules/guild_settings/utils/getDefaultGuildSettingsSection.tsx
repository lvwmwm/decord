// Module ID: 8437
// Function ID: 67318
// Name: getDefaultGuildSettingsSection
// Dependencies: []
// Exports: getDefaultGuildSettingsSection

// Module 8437 (getDefaultGuildSettingsSection)
const GuildSettingsSections = require(dependencyMap[0]).GuildSettingsSections;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
