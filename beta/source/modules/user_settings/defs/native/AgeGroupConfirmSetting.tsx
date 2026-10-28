// Module ID: 16056
// Function ID: 16057
// Name: AgeGroupConfirmSetting
// Dependencies: [8364, 11240, 16054, 2]

// Module 16056 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8364 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16054 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
