// Module ID: 8307
// Function ID: 8308
// Name: getDefaultGuildSettingsSection
// Dependencies: [676, 2]
// Exports: getDefaultGuildSettingsSection

// Module 8307 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
