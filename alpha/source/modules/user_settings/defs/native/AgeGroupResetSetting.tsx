// Module ID: 15907
// Function ID: 15908
// Name: AgeGroupResetSetting
// Dependencies: [8592, 21, 11817, 1112, 3345, 15908, 5743, 15904, 2]

// Module 15907 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3345 from "module_3345" /* 3345 */;
import useAlertStore from "useAlertStore" /* 5743 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15904 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15908 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3345["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3345.Gn0SAj);
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
