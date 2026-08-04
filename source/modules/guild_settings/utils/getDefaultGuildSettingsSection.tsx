// Module ID: 8949
// Function ID: 8950
// Name: getDefaultGuildSettingsSection
// Dependencies: [676, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8949 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
