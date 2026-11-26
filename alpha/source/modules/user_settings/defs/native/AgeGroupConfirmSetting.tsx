// Module ID: 16234
// Function ID: 16235
// Name: AgeGroupConfirmSetting
// Dependencies: [9555, 11962, 16232, 2]

// Module 16234 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9555 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16232 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
