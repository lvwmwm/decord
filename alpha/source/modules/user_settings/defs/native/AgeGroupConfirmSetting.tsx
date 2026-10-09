// Module ID: 14927
// Function ID: 14928
// Name: AgeGroupConfirmSetting
// Dependencies: [7974, 10629, 14925, 2]

// Module 14927 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7974 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14925 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
