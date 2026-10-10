// Module ID: 14987
// Function ID: 14988
// Name: AgeGroupResetSetting
// Dependencies: [7992, 21, 10663, 1126, 3120, 14988, 5301, 14984, 2]

// Module 14987 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3120 from "module_3120" /* 3120 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14984 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14988 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3120["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3120.Gn0SAj);
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
