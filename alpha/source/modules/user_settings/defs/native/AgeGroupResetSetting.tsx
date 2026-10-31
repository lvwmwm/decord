// Module ID: 16620
// Function ID: 16621
// Name: AgeGroupResetSetting
// Dependencies: [8432, 21, 11539, 1113, 3096, 16621, 5960, 16617, 2]

// Module 16620 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3096 from "module_3096" /* 3096 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16617 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16621 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3096["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3096.Gn0SAj);
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
