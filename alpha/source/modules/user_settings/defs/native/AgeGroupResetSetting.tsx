// Module ID: 14559
// Function ID: 14560
// Name: AgeGroupResetSetting
// Dependencies: [7645, 21, 11142, 1126, 3073, 14560, 5716, 14556, 2]

// Module 14559 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3073 from "module_3073" /* 3073 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14556 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14560 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3073["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3073.Gn0SAj);
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
