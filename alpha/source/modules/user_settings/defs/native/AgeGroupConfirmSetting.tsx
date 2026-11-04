// Module ID: 16879
// Function ID: 16880
// Name: AgeGroupConfirmSetting
// Dependencies: [8573, 11729, 16877, 2]

// Module 16879 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8573 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16877 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
