// Module ID: 15960
// Function ID: 15961
// Name: AgeGroupConfirmSetting
// Dependencies: [8318, 11181, 15958, 2]

// Module 15960 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8318 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15958 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
