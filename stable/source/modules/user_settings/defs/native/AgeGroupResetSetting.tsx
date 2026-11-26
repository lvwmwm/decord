// Module ID: 17260
// Function ID: 17261
// Name: AgeGroupResetSetting
// Dependencies: [9202, 21, 12408, 1113, 3321, 17261, 6260, 17257, 2]

// Module 17260 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3321 from "module_3321" /* 3321 */;
import useAlertStore from "useAlertStore" /* 6260 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17257 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 17261 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3321["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3321.Gn0SAj);
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
