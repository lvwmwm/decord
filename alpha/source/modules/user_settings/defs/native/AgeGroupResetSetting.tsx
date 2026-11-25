// Module ID: 16184
// Function ID: 16185
// Name: AgeGroupResetSetting
// Dependencies: [9513, 21, 11914, 1112, 3498, 16185, 6017, 16181, 2]

// Module 16184 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3498 from "module_3498" /* 3498 */;
import useAlertStore from "useAlertStore" /* 6017 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16181 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16185 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3498["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3498.Gn0SAj);
  },
  onPress() {
    SettingsAgeGroupResetAlert.default;
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, <_default />);
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
