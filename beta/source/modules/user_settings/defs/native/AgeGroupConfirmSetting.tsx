// Module ID: 16632
// Function ID: 16633
// Name: AgeGroupConfirmSetting
// Dependencies: [8432, 11540, 16630, 2]

// Module 16632 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8432 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16630 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
