// Module ID: 15900
// Function ID: 15901
// Name: AgeGroupConfirmSetting
// Dependencies: [8308, 11155, 15898, 2]

// Module 15900 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8308 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15898 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
