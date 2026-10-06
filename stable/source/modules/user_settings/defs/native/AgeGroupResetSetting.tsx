// Module ID: 14280
// Function ID: 14281
// Name: AgeGroupResetSetting
// Dependencies: [7421, 21, 10874, 1127, 3042, 14281, 5206, 14277, 2]

// Module 14280 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1127 */;
import _modDef3042 from "module_3042" /* 3042 */;
import useAlertStore from "useAlertStore" /* 5206 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14277 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14281 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3042["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3042.Gn0SAj);
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
