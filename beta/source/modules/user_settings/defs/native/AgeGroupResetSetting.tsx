// Module ID: 16042
// Function ID: 16043
// Name: AgeGroupResetSetting
// Dependencies: [8712, 21, 11942, 1112, 3444, 16043, 5862, 16039, 2]

// Module 16042 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3444 from "module_3444" /* 3444 */;
import useAlertStore from "useAlertStore" /* 5862 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16039 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16043 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3444["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3444.Gn0SAj);
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
