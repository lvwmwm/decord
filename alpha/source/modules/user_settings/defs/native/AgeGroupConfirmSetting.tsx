// Module ID: 16526
// Function ID: 16527
// Name: AgeGroupConfirmSetting
// Dependencies: [8387, 11302, 16524, 2]

// Module 16526 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8387 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16524 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
