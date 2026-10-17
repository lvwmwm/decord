// Module ID: 15773
// Function ID: 15774
// Name: AgeGroupResetSetting
// Dependencies: [8260, 21, 11065, 1128, 3143, 15774, 5401, 15770, 2]

// Module 15773 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3143 from "module_3143" /* 3143 */;
import useAlertStore from "useAlertStore" /* 5401 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15770 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15774 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3143["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3143.Gn0SAj);
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
