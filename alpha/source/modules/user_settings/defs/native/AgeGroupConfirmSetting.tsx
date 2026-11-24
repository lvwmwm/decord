// Module ID: 16062
// Function ID: 16063
// Name: AgeGroupConfirmSetting
// Dependencies: [9414, 11815, 16060, 2]

// Module 16062 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 9414 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16060 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
