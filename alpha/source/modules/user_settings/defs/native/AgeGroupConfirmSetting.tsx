// Module ID: 15034
// Function ID: 15035
// Name: AgeGroupConfirmSetting
// Dependencies: [8233, 11725, 15032, 2]

// Module 15034 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8233 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15032 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
