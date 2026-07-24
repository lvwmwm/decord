// Module ID: 14435
// Function ID: 110324
// Name: handleLogout
// Dependencies: [33, 587, 668, 4944, 10667, 7375, 5588, 4472, 4475, 1212, 10127, 10683, 2]

// Module 14435 (handleLogout)
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let closure_3;
let closure_4;
let closure_5;
function handleLogout() {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(require(668) /* keys */.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  importDefault(4944).disconnect();
  const obj2 = importDefault(4944);
  const result1 = importDefault(10667).clearAllNotifications();
  const obj3 = importDefault(10667);
  importDefault(7375).close();
  const obj4 = importDefault(7375);
  importDefault(5588).logout("confirm_logout_alert");
}
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require(4472) /* useAlertStore */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.content = intl2.string(require(1212) /* getSystemLocale */.t.SUnWBB);
    obj = {};
    const obj1 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.text = intl3.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
    obj1.onPress = handleLogout;
    obj1.variant = "destructive";
    const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl4.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj.children = items;
    obj.actions = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj));
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require(4472) /* useAlertStore */;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.content = intl2.string(require(1212) /* getSystemLocale */.t.SUnWBB);
    obj = {};
    const obj1 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.text = intl3.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
    obj1.onPress = handleLogout;
    obj1.variant = "destructive";
    const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl4.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj.children = items;
    obj.actions = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj));
  }
};
let result = require("keys").fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;
