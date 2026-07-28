// Module ID: 8286
// Function ID: 66371
// Name: getDefaultGuildSettingsSection
// Dependencies: [653, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8286 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
