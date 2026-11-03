// Module ID: 16776
// Function ID: 16777
// Name: AgeGroupResetSetting
// Dependencies: [8556, 21, 11677, 1113, 3223, 16777, 6080, 16773, 2]

// Module 16776 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3223 from "module_3223" /* 3223 */;
import useAlertStore from "useAlertStore" /* 6080 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16773 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16777 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3223["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3223.Gn0SAj);
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
