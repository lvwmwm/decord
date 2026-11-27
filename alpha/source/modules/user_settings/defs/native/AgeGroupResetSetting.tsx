// Module ID: 16242
// Function ID: 16243
// Name: AgeGroupResetSetting
// Dependencies: [9556, 21, 11970, 1112, 3499, 16243, 6048, 16239, 2]

// Module 16242 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3499 from "module_3499" /* 3499 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16239 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16243 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
