// Module ID: 15036
// Function ID: 15037
// Name: AgeGroupConfirmSetting
// Dependencies: [8265, 11754, 15034, 2]

// Module 15036 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8265 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15034 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
