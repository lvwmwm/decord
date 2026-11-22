// Module ID: 16027
// Function ID: 16028
// Name: AgeGroupConfirmSetting
// Dependencies: [8712, 11937, 16025, 2]

// Module 16027 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16025 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
