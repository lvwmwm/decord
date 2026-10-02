// Module ID: 14279
// Function ID: 14280
// Name: AgeGroupConfirmSetting
// Dependencies: [7421, 10874, 14277, 2]

// Module 14279 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7421 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14277 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
