// Module ID: 14863
// Function ID: 14864
// Name: handleLogout
// Dependencies: [21, 595, 691, 4975, 11579, 7877, 5256, 4657, 4660, 1236, 10669, 12514, 2]

// Module 14863 (handleLogout)
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let c3;
let c4;
let c5;
function handleLogout() {
  const Storage = require(595) /* Storage */.Storage;
  const result = Storage.set(require(691) /* keys */.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  importDefault(4975).disconnect();
  const obj2 = importDefault(4975);
  const result1 = importDefault(11579).clearAllNotifications();
  const obj3 = importDefault(11579);
  importDefault(7877).close();
  const obj4 = importDefault(7877);
  importDefault(5256).logout("confirm_logout_alert");
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require(4657) /* useAlertStore */;
    obj = { title: null, content: null, actions: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.SUnWBB);
    obj = { children: null };
    const obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl3.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(require(4660) /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require(4660) /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require(4660) /* getAlertModalItemKey */.AlertModal, obj));
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require(4657) /* useAlertStore */;
    obj = { title: null, content: null, actions: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.SUnWBB);
    obj = { children: null };
    const obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl3.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(require(4660) /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require(4660) /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require(4660) /* getAlertModalItemKey */.AlertModal, obj));
  }
};
let result = require("keys").fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;
