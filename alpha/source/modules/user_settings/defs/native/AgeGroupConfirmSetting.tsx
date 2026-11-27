// Module ID: 16241
// Function ID: 16242
// Name: AgeGroupConfirmSetting
// Dependencies: [9556, 11970, 16239, 2]

// Module 16241 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9556 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16239 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
