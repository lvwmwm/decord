// Module ID: 16619
// Function ID: 16620
// Name: AgeGroupConfirmSetting
// Dependencies: [8432, 11539, 16617, 2]

// Module 16619 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8432 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16617 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
