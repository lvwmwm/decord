// Module ID: 17134
// Function ID: 17135
// Name: AgeGroupConfirmSetting
// Dependencies: [9135, 12311, 17132, 2]

// Module 17134 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9135 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17132 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
