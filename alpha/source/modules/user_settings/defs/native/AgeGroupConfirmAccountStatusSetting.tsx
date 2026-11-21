// Module ID: 16032
// Function ID: 16033
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [8712, 11937, 16027, 2]

// Module 16032 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16027 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
