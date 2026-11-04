// Module ID: 11079
// Function ID: 11080
// Name: NotificationProgress
// Dependencies: [32, 19, 17, 21, 5014, 575, 5095, 2]
// Exports: default

// Module 11079 (NotificationProgress)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { progress: obj2, progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 } };
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 };
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  let closure_2;
  let first;
  let items;
  percent = percent.percent;
  const tmp = closure_7();
  first = undefined;
  closure_2 = undefined;
  [first, closure_2] = react.useState(0);
  const callback = react.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  let obj = ReanimatedRexport;
  const fn = function s() {
    let items;
    let value = percent;
    const obj = percent;
    if (typeof percent !== "number") {
      value = obj.get();
    }
    const obj2 = { transform: items };
    items = [];
    const obj3 = { translateX: first * (value / 100) - first };
    items[0] = obj3;
    return obj2;
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: items };
  items = [tmp.progress, animatedStyle];
  return <View onLayout={callback} style={tmp.progressContainerBottom}>{null}</View>;
};
