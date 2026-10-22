// Module ID: 15942
// Function ID: 15943
// Name: AgeGroupConfirmSetting
// Dependencies: [8317, 11172, 15940, 2]

// Module 15942 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8317 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15940 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
