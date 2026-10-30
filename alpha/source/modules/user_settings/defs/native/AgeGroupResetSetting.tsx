// Module ID: 16578
// Function ID: 16579
// Name: AgeGroupResetSetting
// Dependencies: [8424, 21, 11505, 1114, 3093, 16579, 5955, 16575, 2]

// Module 16578 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef3093 from "module_3093" /* 3093 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16575 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16579 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3093["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3093.Gn0SAj);
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
