// Module ID: 16577
// Function ID: 16578
// Name: AgeGroupConfirmSetting
// Dependencies: [8424, 11505, 16575, 2]

// Module 16577 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8424 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16575 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
