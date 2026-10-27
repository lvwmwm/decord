// Module ID: 15779
// Function ID: 15780
// Name: AgeGroupConfirmAccountStatusSetting
// Dependencies: [8260, 11084, 15774, 2]

// Module 15779 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8260 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15774 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const createPressable = SettingBuilders.createPressable;
const obj = { parent: MobileUserSettings.ACCOUNT_AGE_GROUP, usePredicate: AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow };
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
const pressable = createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
