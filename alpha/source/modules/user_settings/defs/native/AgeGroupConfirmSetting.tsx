// Module ID: 14558
// Function ID: 14559
// Name: AgeGroupConfirmSetting
// Dependencies: [7645, 11142, 14556, 2]

// Module 14558 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7645 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14556 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
