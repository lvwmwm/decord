// Module ID: 9072
// Function ID: 9073
// Name: getDefaultGuildSettingsSection
// Dependencies: [676, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9072 (getDefaultGuildSettingsSection)
import { GuildSettingsSections } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
