// Module ID: 15834
// Function ID: 15835
// Name: LogoutSetting
// Dependencies: [21, 510, 1105, 5889, 11031, 6679, 5930, 5301, 5305, 1126, 10663, 10992, 2]

// Module 15834 (LogoutSetting)
import Storage2 from "Storage" /* 510 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl5 from "intl" /* 1126 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import AlertModal2 from "AlertModal" /* 5305 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5930 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import DoorExitIcon from "DoorExitIcon" /* 10992 */;
import PushNotificationDefault from "PushNotification" /* 11031 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let set;

let c3;
let closure_4;
let hasOwnProperty;
function handleLogout() {
  const Storage = Storage2.Storage;
  set = Storage.set;
  const LOGOUT_TIMESTAMP_KEY = ConstantsIOS.StorageKeys.LOGOUT_TIMESTAMP_KEY;
  const date = new Date();
  const result = set(LOGOUT_TIMESTAMP_KEY, date.getTime());
  const obj2 = SelectedChannelActionCreatorsDefault;
  obj2.disconnect();
  const obj3 = PushNotificationDefault;
  const result1 = obj3.clearAllNotifications();
  const obj4 = UserSettingsModalActionCreatorsDefault;
  obj4.close();
  const obj5 = AuthenticationActionCreatorsDefault;
  obj5.logout("confirm_logout_alert");
}
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t["2jxGer"]);
  },
  IconComponent: DoorExitIcon.DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let obj2;
    const openAlert = useAlertStore.openAlert;
    const obj = { title: intl.string(intl5.t["2jxGer"]), content: intl2.string(intl5.t.SUnWBB), actions: hasOwnProperty(React3, obj2) };
    useAlertStore;
    const AlertModal = AlertModal2.AlertModal;
    intl = intl5.intl;
    intl2 = intl5.intl;
    obj2 = { children: items };
    const obj3 = { text: intl3.string(intl5.t["2jxGer"]), onPress: handleLogout, variant: "destructive" };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl5.intl;
    items = [_false(AlertActionButton, obj3), ];
    const obj4 = { variant: "secondary", text: intl4.string(intl5.t["13/7kX"]) };
    const AlertActionButton2 = AlertModal2.AlertActionButton;
    intl4 = intl5.intl;
    items[1] = _false(AlertActionButton2, obj4);
    openAlert("logout", _false(AlertModal, obj));
  }
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;
