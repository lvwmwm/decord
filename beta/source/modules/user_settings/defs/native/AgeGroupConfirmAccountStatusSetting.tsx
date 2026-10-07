// Module ID: 14545
// Function ID: 14546
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [7634, 11129, 14540, 2]

// Module 14545 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 7634 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14540 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
