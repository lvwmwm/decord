// Module ID: 15333
// Function ID: 15334
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [7993, 10663, 15328, 2]

// Module 15333 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 7993 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15328 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
