// Module ID: 16950
// Function ID: 16951
// Name: AgeGroupResetSetting
// Dependencies: [8503, 21, 11685, 1113, 3252, 16951, 6092, 16947, 2]

// Module 16950 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3252 from "module_3252" /* 3252 */;
import useAlertStore from "useAlertStore" /* 6092 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16947 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16951 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3252["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3252.Gn0SAj);
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
