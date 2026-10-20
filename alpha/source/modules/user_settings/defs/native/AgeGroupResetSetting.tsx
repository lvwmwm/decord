// Module ID: 15825
// Function ID: 15826
// Name: AgeGroupResetSetting
// Dependencies: [8280, 21, 11111, 1128, 3080, 15826, 5868, 15822, 2]

// Module 15825 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3080 from "module_3080" /* 3080 */;
import useAlertStore from "useAlertStore" /* 5868 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15822 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15826 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3080["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3080.Gn0SAj);
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
