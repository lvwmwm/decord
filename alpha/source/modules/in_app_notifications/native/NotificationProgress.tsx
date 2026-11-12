// Module ID: 11021
// Function ID: 11022
// Name: NotificationProgress
// Dependencies: [32, 19, 17, 21, 5243, 575, 1652, 2]
// Exports: default

// Module 11021 (NotificationProgress)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { progress: obj2, progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 } };
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = { code: "(function NotificationProgressTsx1(){let[percent,width]=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};})" };
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  let c0;
  let items2;
  let tmp3;
  let tmp6;
  let tmp7;
  let tmp8;
  percent = percent.percent;
  const tmp = closure_7();
  [tmp3, c0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.width), []);
  let obj = _mod1652;
  let items = [closure_8, percent, tmp3];
  c0 = undefined;
  let c1;
  [tmp6, tmp7, tmp8] = items;
  class NotificationProgressTsx1 {
    constructor() {
      let items;
      let value = c0;
      const obj = c0;
      if (typeof c0 !== "number") {
        value = obj.get();
      }
      const obj2 = { transform: items };
      items = [];
      const obj3 = { translateX: c1 * (value / 100) - c1 };
      items[0] = obj3;
      return obj2;
    }
  }
  const items1 = [tmp7, tmp8];
  NotificationProgressTsx1.__closure = items1;
  NotificationProgressTsx1.__workletHash = 14085017050901;
  NotificationProgressTsx1.__initData = tmp6;
  const animatedStyle = obj.useAnimatedStyle(NotificationProgressTsx1);
  let obj3 = { style: items2 };
  items2 = [tmp.progress, animatedStyle];
  return <View onLayout={callback} style={tmp.progressContainerBottom}>{null}</View>;
};
