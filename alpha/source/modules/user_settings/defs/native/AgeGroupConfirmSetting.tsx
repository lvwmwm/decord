// Module ID: 15993
// Function ID: 15994
// Name: AgeGroupConfirmSetting
// Dependencies: [8330, 11204, 15991, 2]

// Module 15993 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8330 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15991 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
