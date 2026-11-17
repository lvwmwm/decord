// Module ID: 17294
// Function ID: 17295
// Name: AgeGroupConfirmSetting
// Dependencies: [9213, 12612, 17292, 2]

// Module 17294 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17292 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
