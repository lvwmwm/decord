// Module ID: 16061
// Function ID: 16062
// Name: AgeGroupResetSetting
// Dependencies: [8331, 21, 11212, 1125, 3091, 16062, 5911, 16058, 2]

// Module 16061 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1125 */;
import _modDef3091 from "module_3091" /* 3091 */;
import useAlertStore from "useAlertStore" /* 5911 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16058 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16062 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3091["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3091.Gn0SAj);
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
