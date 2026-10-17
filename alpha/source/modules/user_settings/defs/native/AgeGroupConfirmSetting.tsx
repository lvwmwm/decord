// Module ID: 15772
// Function ID: 15773
// Name: AgeGroupConfirmSetting
// Dependencies: [8260, 11065, 15770, 2]

// Module 15772 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8260 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15770 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
