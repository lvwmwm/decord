// Module ID: 16183
// Function ID: 16184
// Name: AgeGroupConfirmSetting
// Dependencies: [9513, 11914, 16181, 2]

// Module 16183 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9513 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16181 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
