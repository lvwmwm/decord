// Module ID: 15032
// Function ID: 15033
// Name: AgeGroupConfirmSetting
// Dependencies: [8270, 11630, 15030, 2]

// Module 15032 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8270 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15030 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
