// Module ID: 14820
// Function ID: 14821
// Name: AgeGroupResetSetting
// Dependencies: [7966, 21, 11262, 1126, 3117, 14821, 5299, 14817, 2]

// Module 14820 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import useAlertStore from "useAlertStore" /* 5299 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14817 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14821 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
