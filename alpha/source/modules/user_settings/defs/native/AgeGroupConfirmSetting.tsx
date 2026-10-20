// Module ID: 15824
// Function ID: 15825
// Name: AgeGroupConfirmSetting
// Dependencies: [8280, 11111, 15822, 2]

// Module 15824 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8280 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15822 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
