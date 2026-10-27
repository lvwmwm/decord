// Module ID: 16060
// Function ID: 16061
// Name: AgeGroupConfirmSetting
// Dependencies: [8331, 11212, 16058, 2]

// Module 16060 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8331 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16058 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
