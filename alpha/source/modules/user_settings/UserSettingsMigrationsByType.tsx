// Module ID: 1248
// Function ID: 1249
// Name: UserSettingsMigrationsByType
// Dependencies: [1095, 2]

// Module 1248 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
