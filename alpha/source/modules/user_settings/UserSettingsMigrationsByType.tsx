// Module ID: 1247
// Function ID: 1248
// Name: UserSettingsMigrationsByType
// Dependencies: [1095, 2]

// Module 1247 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
