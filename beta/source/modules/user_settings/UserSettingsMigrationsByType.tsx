// Module ID: 1228
// Function ID: 1229
// Name: UserSettingsMigrationsByType
// Dependencies: [1088, 2]

// Module 1228 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1088 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
