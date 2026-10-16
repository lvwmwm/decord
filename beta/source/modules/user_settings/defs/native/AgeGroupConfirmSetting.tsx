// Module ID: 15009
// Function ID: 15010
// Name: AgeGroupConfirmSetting
// Dependencies: [7988, 10663, 15007, 2]

// Module 15009 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7988 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15007 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
