// Module ID: 16291
// Function ID: 16292
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [8365, 11248, 16286, 2]

// Module 16291 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8365 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16286 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
