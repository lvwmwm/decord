// Module ID: 15014
// Function ID: 15015
// Name: AgeGroupConfirmSetting
// Dependencies: [7988, 10664, 15012, 2]

// Module 15014 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7988 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15012 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
