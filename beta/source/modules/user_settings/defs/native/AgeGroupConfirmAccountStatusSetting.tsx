// Module ID: 17260
// Function ID: 17261
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [9202, 12406, 17255, 2]

// Module 17260 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 9202 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17255 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
