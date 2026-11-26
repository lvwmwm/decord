// Module ID: 16235
// Function ID: 16236
// Name: AgeGroupResetSetting
// Dependencies: [9555, 21, 11962, 1112, 3499, 16236, 6048, 16232, 2]

// Module 16235 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3499 from "module_3499" /* 3499 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16232 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16236 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3499["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3499.Gn0SAj);
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
