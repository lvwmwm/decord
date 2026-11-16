// Module ID: 16980
// Function ID: 16981
// Name: AgeGroupConfirmSetting
// Dependencies: [8536, 11717, 16978, 2]

// Module 16980 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8536 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16978 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT, usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
