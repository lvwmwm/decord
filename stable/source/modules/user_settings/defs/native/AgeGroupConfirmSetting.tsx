// Module ID: 14846
// Function ID: 14847
// Name: AgeGroupConfirmSetting
// Dependencies: [8079, 11605, 14844, 2]

// Module 14846 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8079 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14844 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
