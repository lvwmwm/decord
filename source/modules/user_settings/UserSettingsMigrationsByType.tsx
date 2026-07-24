// Module ID: 1319
// Function ID: 15511
// Name: MAX_FAVORITES
// Dependencies: [662, 2]

// Module 1319 (MAX_FAVORITES)
import { UserSettingsTypes } from "MAX_FAVORITES";

const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
