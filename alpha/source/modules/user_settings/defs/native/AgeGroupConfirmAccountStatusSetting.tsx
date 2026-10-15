// Module ID: 15666
// Function ID: 15667
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [8210, 10991, 15661, 2]

// Module 15666 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8210 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15661 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
