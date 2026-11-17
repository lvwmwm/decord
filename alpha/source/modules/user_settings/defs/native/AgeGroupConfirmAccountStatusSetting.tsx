// Module ID: 17297
// Function ID: 17298
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [9213, 12612, 17292, 2]

// Module 17297 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 9213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17292 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
