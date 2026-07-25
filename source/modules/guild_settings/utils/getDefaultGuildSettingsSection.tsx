// Module ID: 8248
// Function ID: 66260
// Name: getDefaultGuildSettingsSection
// Dependencies: [653, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8248 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
