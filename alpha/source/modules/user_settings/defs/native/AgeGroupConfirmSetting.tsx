// Module ID: 15367
// Function ID: 15368
// Name: AgeGroupConfirmSetting
// Dependencies: [8000, 10767, 15365, 2]

// Module 15367 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8000 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15365 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
