// Module ID: 14822
// Function ID: 14823
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [7966, 11262, 14817, 2]

// Module 14822 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14817 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
