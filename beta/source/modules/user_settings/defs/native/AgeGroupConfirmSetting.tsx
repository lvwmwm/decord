// Module ID: 14291
// Function ID: 14292
// Name: AgeGroupConfirmSetting
// Dependencies: [7417, 11006, 14289, 2]

// Module 14291 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14289 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
