// Module ID: 15906
// Function ID: 15907
// Name: AgeGroupConfirmSetting
// Dependencies: [8592, 11817, 15904, 2]

// Module 15906 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15904 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
