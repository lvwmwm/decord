// Module ID: 15697
// Function ID: 15698
// Name: AgeGroupResetSetting
// Dependencies: [8213, 21, 11006, 1128, 3125, 15698, 5363, 15694, 2]

// Module 15697 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3125 from "module_3125" /* 3125 */;
import useAlertStore from "useAlertStore" /* 5363 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15694 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15698 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3125["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3125.Gn0SAj);
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
