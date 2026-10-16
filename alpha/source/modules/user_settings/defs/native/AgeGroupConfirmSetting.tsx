// Module ID: 15696
// Function ID: 15697
// Name: AgeGroupConfirmSetting
// Dependencies: [8213, 11006, 15694, 2]

// Module 15696 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15694 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
