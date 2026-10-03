// Module ID: 14538
// Function ID: 14539
// Name: AgeGroupConfirmSetting
// Dependencies: [7634, 11129, 14536, 2]

// Module 14538 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7634 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14536 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
