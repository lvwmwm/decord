// Module ID: 9618
// Function ID: 9619
// Name: NotificationSettingsMockMessage
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 576, 504, 4678, 4566, 4837, 4840, 4832, 1115, 1177, 9619, 2]
// Exports: default

// Module 9618 (NotificationSettingsMockMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
const View = react_native.View;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardContent: { display: "flex", flexDirection: "row" }, cardMessage: { marginLeft: 12, maxWidth: 240 }, overlay: rect };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, padding: 16 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles(obj);
const __initData = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  let Avatar;
  let Text3;
  let closure_0;
  let currentUser;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj6;
  let sharedValue;
  let tmp12;
  let tmp13;
  const tmp = closure_9();
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = sharedValue(4678);
  let str = obj2.getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  _require = tmp7;
  let num = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  const tmp6 = UserNotificationSettings;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = useSharedValue(num);
  const fn = function h() {
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
    withTiming = timing.withTiming;
    timing;
    value = sharedValue.get();
    return obj;
  };
  const tmp2Result2 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, opacity: sharedValue, timingStandard: require("timingPresets").timingStandard };
  fn.__workletHash = 6531430956793;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, opacity: sharedValue, timingStandard: require("timingPresets").timingStandard });
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === tmp6.ALL_MESSAGES) {
    const obj4 = { variant: "text-sm/medium", color: "text-default", children: intl.string(require("intl").t.WYyzI5) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    tmp12 = closure_7(Text, obj4);
    tmp13 = closure_7;
  } else {
    const obj5 = { children: closure_8(Text3, obj6) };
    obj6 = { variant: "text-sm/medium", color: "text-default", children: items2 };
    Text3 = tmp2(4832).Text;
    const obj7 = { variant: "text-sm/normal", color: "text-link", children: items1 };
    items1 = ["@", str, " "];
    items2 = [closure_8(require("Text/Text").Text, obj7), ];
    const intl3 = tmp2(1115).intl;
    items2[1] = intl3.string(require("intl").t.WYyzI5);
    tmp12 = closure_7(View, obj5);
    tmp13 = closure_7;
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (closure_0) {
      num = 0.8;
    }
    const result = set(num);
  }, items3);
  const obj8 = { style: tmp.card, children: items6 };
  const obj9 = { style: tmp.cardContent, children: items4 };
  const obj10 = { children: tmp13(Avatar, obj11) };
  obj11 = { source: sharedValue(9619), size: require("native").AvatarSizes.LARGE_48 };
  Avatar = tmp2(1177).Avatar;
  items4 = [tmp13(View, obj10), ];
  const obj12 = { style: tmp.cardMessage, children: items5 };
  const obj13 = { variant: "text-sm/semibold", children: intl2.string(require("intl").t.qSq0tD) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items5 = [tmp13(Text2, obj13), tmp12];
  items4[1] = closure_8(View, obj12);
  items6 = [closure_8(View, obj9), ];
  const obj14 = { style: items7 };
  items7 = [animatedStyle, tmp.overlay];
  items6[1] = tmp13(sharedValue(4566).View, obj14);
  return closure_8(View, obj8);
};
