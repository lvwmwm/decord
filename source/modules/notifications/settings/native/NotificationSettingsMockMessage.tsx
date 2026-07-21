// Module ID: 10283
// Function ID: 79424
// Name: NotificationSettingsMockMessage
// Dependencies: []
// Exports: default

// Module 10283 (NotificationSettingsMockMessage)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const UserNotificationSettings = arg1(dependencyMap[3]).UserNotificationSettings;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.card = obj;
obj.cardContent = {};
obj.cardMessage = { "Null": "<string:57737218>", "Null": "<string:1090519040>" };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, opacity: "<string:2920093709>", borderRadius: "<string:1058778651>", 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 };
obj.overlay = obj1;
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[8]);
  const name = obj1.getName(stateFromStores);
  let str = "Roka";
  if (null != name) {
    str = name;
  }
  const arg1 = tmp4;
  let obj2 = arg1(dependencyMap[9]);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  const sharedValue = obj2.useSharedValue(num);
  const importDefault = sharedValue;
  let obj3 = arg1(dependencyMap[9]);
  const fn = function _() {
    const obj = {};
    const value = sharedValue.get();
    obj.opacity = tmp4(closure_2[10]).withTiming(value, tmp4(closure_2[11]).timingStandard);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[10]).withTiming, opacity: sharedValue, timingStandard: arg1(dependencyMap[11]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 6531430956793;
  fn.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj.children = intl.string(arg1(dependencyMap[13]).t.WYyzI5);
    let tmp10 = callback(arg1(dependencyMap[12]).Text, obj);
  } else {
    obj1 = {};
    obj2 = {};
    obj3 = { hasMaxConnections: false, isBoostOnlySubscription: false };
    const items1 = [null, str, " "];
    obj3.children = items1;
    const items2 = [callback2(arg1(dependencyMap[12]).Text, obj3), ];
    const intl3 = arg1(dependencyMap[13]).intl;
    items2[1] = intl3.string(arg1(dependencyMap[13]).t.WYyzI5);
    obj2.children = items2;
    obj1.children = callback2(arg1(dependencyMap[12]).Text, obj2);
    tmp10 = callback(View, obj1);
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = React.useEffect(() => {
    let num = 0;
    if (tmp4) {
      num = 0.8;
    }
    const result = sharedValue.set(num);
  }, items3);
  const obj4 = { style: tmp.card };
  const obj5 = { style: tmp.cardContent };
  const obj6 = {};
  const obj7 = { source: importDefault(dependencyMap[15]), size: arg1(dependencyMap[14]).AvatarSizes.LARGE_48 };
  obj6.children = callback(arg1(dependencyMap[14]).Avatar, obj7);
  const items4 = [callback(View, obj6), ];
  const obj8 = { style: tmp.cardMessage };
  const obj9 = { variant: "text-sm/semibold" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj9.children = intl2.string(arg1(dependencyMap[13]).t.qSq0tD);
  const items5 = [callback(arg1(dependencyMap[12]).Text, obj9), tmp10];
  obj8.children = items5;
  items4[1] = callback2(View, obj8);
  obj5.children = items4;
  const items6 = [callback2(View, obj5), ];
  const items7 = [animatedStyle, tmp.overlay];
  items6[1] = callback(importDefault(dependencyMap[9]).View, { style: items7 });
  obj4.children = items6;
  return callback2(View, obj4);
};
