// Module ID: 1223
// Function ID: 1224
// Name: UserSettingsMigrationsByType
// Dependencies: [1084, 2]

// Module 1223 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
