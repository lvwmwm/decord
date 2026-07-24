// Module ID: 8488
// Function ID: 67606
// Name: getDefaultGuildSettingsSection
// Dependencies: [653, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8488 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
