// Module ID: 15706
// Function ID: 15707
// Name: AgeGroupConfirmSetting
// Dependencies: [8214, 11003, 15704, 2]

// Module 15706 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8214 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15704 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
