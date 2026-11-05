// Module ID: 16902
// Function ID: 16903
// Name: AgeGroupConfirmSetting
// Dependencies: [8578, 11737, 16900, 2]

// Module 16902 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8578 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16900 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
