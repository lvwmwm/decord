// Module ID: 10326
// Function ID: 79701
// Name: NotificationSettingsMockMessage
// Dependencies: [31, 27, 1849, 653, 33, 4130, 689, 566, 3969, 3991, 4131, 4134, 4126, 1212, 1273, 10327, 2]
// Exports: default

// Module 10326 (NotificationSettingsMockMessage)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, padding: 16 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardContent = { display: "flex", flexDirection: "row" };
_createForOfIteratorHelperLoose.cardMessage = { marginLeft: 12, maxWidth: 240 };
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.overlay = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj1 = sharedValue(3969);
  const name = obj1.getName(stateFromStores);
  let str = "Roka";
  if (null != name) {
    str = name;
  }
  require = tmp4;
  let obj2 = require(3991);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = obj2.useSharedValue(num);
  let obj3 = require(3991);
  const fn = function _() {
    const obj = {};
    const value = sharedValue.get();
    obj.opacity = tmp4(outer1_2[10]).withTiming(value, tmp4(outer1_2[11]).timingStandard);
    return obj;
  };
  obj = { withTiming: require(4131) /* withTiming */.withTiming, opacity: sharedValue, timingStandard: require(4134) /* timingNone */.timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 6531430956793;
  fn.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    obj = { variant: "text-sm/medium", color: "text-default" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.WYyzI5);
    let tmp10 = callback(require(4126) /* Text */.Text, obj);
  } else {
    obj1 = {};
    obj2 = { variant: "text-sm/medium", color: "text-default" };
    obj3 = { variant: "text-sm/normal", color: "text-link" };
    const items1 = ["@", str, " "];
    obj3.children = items1;
    const items2 = [callback2(require(4126) /* Text */.Text, obj3), ];
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items2[1] = intl3.string(require(1212) /* getSystemLocale */.t.WYyzI5);
    obj2.children = items2;
    obj1.children = callback2(require(4126) /* Text */.Text, obj2);
    tmp10 = callback(View, obj1);
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = React.useEffect(() => {
    let num = 0;
    if (closure_0) {
      num = 0.8;
    }
    const result = sharedValue.set(num);
  }, items3);
  const obj4 = { style: tmp.card };
  const obj5 = { style: tmp.cardContent };
  const obj6 = {};
  const obj7 = { source: sharedValue(10327), size: require(1273) /* Button */.AvatarSizes.LARGE_48 };
  obj6.children = callback(require(1273) /* Button */.Avatar, obj7);
  const items4 = [callback(View, obj6), ];
  const obj8 = { style: tmp.cardMessage };
  const obj9 = { variant: "text-sm/semibold" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj9.children = intl2.string(require(1212) /* getSystemLocale */.t.qSq0tD);
  const items5 = [callback(require(4126) /* Text */.Text, obj9), tmp10];
  obj8.children = items5;
  items4[1] = callback2(View, obj8);
  obj5.children = items4;
  const items6 = [callback2(View, obj5), ];
  const items7 = [animatedStyle, tmp.overlay];
  items6[1] = callback(sharedValue(3991).View, { style: items7 });
  obj4.children = items6;
  return callback2(View, obj4);
};
