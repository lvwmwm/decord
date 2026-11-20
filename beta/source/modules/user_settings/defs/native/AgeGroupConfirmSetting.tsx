// Module ID: 17259
// Function ID: 17260
// Name: AgeGroupConfirmSetting
// Dependencies: [9202, 12408, 17257, 2]

// Module 17259 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9202 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17257 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
