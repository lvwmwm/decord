// Module ID: 14928
// Function ID: 14929
// Name: AgeGroupResetSetting
// Dependencies: [7974, 21, 10629, 1126, 3117, 14929, 5300, 14925, 2]

// Module 14928 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14925 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14929 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3117["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3117.Gn0SAj);
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
