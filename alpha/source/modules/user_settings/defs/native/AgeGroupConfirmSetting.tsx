// Module ID: 16775
// Function ID: 16776
// Name: AgeGroupConfirmSetting
// Dependencies: [8556, 11677, 16773, 2]

// Module 16775 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8556 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16773 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
