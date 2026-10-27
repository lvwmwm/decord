// Module ID: 1250
// Function ID: 1251
// Name: UserSettingsMigrationsByType
// Dependencies: [1097, 2]

// Module 1250 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
