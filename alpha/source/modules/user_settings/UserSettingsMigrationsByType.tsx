// Module ID: 1234
// Function ID: 1235
// Name: UserSettingsMigrationsByType
// Dependencies: [1081, 2]

// Module 1234 (UserSettingsMigrationsByType)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import size from "module_2" /* 2 */;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsMigrationsByType.tsx");

export default { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: [], [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: [] };
