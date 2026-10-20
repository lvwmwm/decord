// Module ID: 15805
// Function ID: 15806
// Name: AgeGroupConfirmSetting
// Dependencies: [8276, 11099, 15803, 2]

// Module 15805 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8276 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15803 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
