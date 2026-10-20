// Module ID: 15017
// Function ID: 15018
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [7988, 10664, 15012, 2]

// Module 15017 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 7988 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15012 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
