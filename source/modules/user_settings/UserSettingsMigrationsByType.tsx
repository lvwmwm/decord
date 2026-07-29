// Module ID: 1343
// Function ID: 1344
// Name: MAX_FAVORITES
// Dependencies: [685, 2]

// Module 1343 (MAX_FAVORITES)
import { UserSettingsTypes } from "MAX_FAVORITES";

const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
