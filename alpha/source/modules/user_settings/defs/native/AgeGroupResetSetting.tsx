// Module ID: 16527
// Function ID: 16528
// Name: AgeGroupResetSetting
// Dependencies: [8387, 21, 11302, 1125, 3092, 16528, 5948, 16524, 2]

// Module 16527 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1125 */;
import _modDef3092 from "module_3092" /* 3092 */;
import useAlertStore from "useAlertStore" /* 5948 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16524 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16528 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3092["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3092.Gn0SAj);
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
