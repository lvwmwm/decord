// Module ID: 15994
// Function ID: 15995
// Name: AgeGroupResetSetting
// Dependencies: [8330, 21, 11204, 1128, 3090, 15995, 5908, 15991, 2]

// Module 15994 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3090 from "module_3090" /* 3090 */;
import useAlertStore from "useAlertStore" /* 5908 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15991 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15995 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3090["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3090.Gn0SAj);
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
