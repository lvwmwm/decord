// Module ID: 17377
// Function ID: 17378
// Name: NotificationReactivationActionSheet
// Dependencies: [19, 17, 12342, 673, 21, 4481, 709, 695, 12343, 4448, 7090, 17378, 4477, 1233, 5393, 4936, 2]
// Exports: default

// Module 17377 (NotificationReactivationActionSheet)
import ThemesDefault from "Themes" /* 709 */;
import registerAssetDefault from "registerAsset" /* 17378 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { EventActionType } from "EventActionType" /* 12342 */;
import { AnalyticEvents } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, image: null, title: null, subtitle: null, buttons: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: ThemesDefault.space.PX_24, height: 120 };
createCacheKey[2] = { textAlign: "center" };
let obj1 = { marginVertical: ThemesDefault.space.PX_24, height: 120 };
createCacheKey[3] = { textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
let obj2 = { textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const tmp = callback3();
  const items = [_location];
  const items1 = [_location];
  const callback = React.useCallback(() => {
    const pushNotificationPermission = _location(closure_1_2[8]).requestPushNotificationPermission(closure_1_6.ALLOW_TO_REQUEST, _location, () => {
      callback(table[9]).hideActionSheet();
    });
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = closure_1_1(closure_1_2[7]);
    obj = { action_type: closure_1_6.SKIP_STEP, action_location: _location, permission_granted: "Array" };
    obj.track(closure_1_7.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
    closure_1_1(closure_1_2[9]).hideActionSheet();
  }, items1);
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.image, source: registerAssetDefault, resizeMode: "contain" };
  const items2 = [callback(closure_5, obj), , , ];
  obj1 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: null };
  const intl = _location(1233).intl;
  obj1[3] = intl.string(_location(1233).t.a4bgO0);
  items2[1] = callback(_location(4477).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _location(1233).intl;
  obj2[3] = intl2.string(_location(1233).t["rW5gw/"]);
  items2[2] = callback(_location(4477).Text, obj2);
  const obj3 = { style: tmp.buttons, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = _location(1233).intl;
  obj4[0] = intl3.string(_location(1233).t.a4bgO0);
  obj4[1] = callback;
  const items3 = [callback(_location(4936).Button, obj4), ];
  const obj5 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = _location(1233).intl;
  obj5[0] = intl4.string(_location(1233).t["/L3kom"]);
  obj5[1] = callback1;
  items3[1] = callback(_location(4936).Button, obj5);
  obj3[1] = items3;
  items2[3] = callback2(_location(5393).ButtonGroup, obj3);
  obj[1] = items2;
  obj[0] = callback2(closure_4, obj);
  return callback(_location(7090).BottomSheet, obj);
};
