// Module ID: 17142
// Function ID: 17143
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [9136, 12317, 17137, 2]

// Module 17142 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 9136 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17137 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
