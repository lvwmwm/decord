// Module ID: 8433
// Function ID: 67306
// Name: getDefaultGuildSettingsSection
// Dependencies: []
// Exports: getDefaultGuildSettingsSection

// Module 8433 (getDefaultGuildSettingsSection)
const GuildSettingsSections = require(dependencyMap[0]).GuildSettingsSections;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
