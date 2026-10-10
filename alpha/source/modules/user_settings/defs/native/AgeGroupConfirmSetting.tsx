// Module ID: 14986
// Function ID: 14987
// Name: AgeGroupConfirmSetting
// Dependencies: [7992, 10663, 14984, 2]

// Module 14986 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14984 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
