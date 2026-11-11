// Module ID: 17140
// Function ID: 17141
// Name: AgeGroupResetSetting
// Dependencies: [9136, 21, 12317, 1113, 3273, 17141, 6207, 17137, 2]

// Module 17140 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3273 from "module_3273" /* 3273 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17137 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 17141 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3273["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3273.Gn0SAj);
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
