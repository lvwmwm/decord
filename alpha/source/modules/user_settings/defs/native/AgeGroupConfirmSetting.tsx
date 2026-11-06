// Module ID: 16890
// Function ID: 16891
// Name: AgeGroupConfirmSetting
// Dependencies: [8524, 11703, 16888, 2]

// Module 16890 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8524 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16888 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
