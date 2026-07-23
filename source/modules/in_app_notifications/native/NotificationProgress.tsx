// Module ID: 10314
// Function ID: 79599
// Name: useProgressAnimation
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 10278, 2]
// Exports: default

// Module 10314 (useProgressAnimation)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function useProgressAnimation(percent) {
  const _require = percent;
  const tmp = callback(React.useState(0), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  let obj = {};
  callback = React.useCallback((nativeEvent) => callback(nativeEvent.nativeEvent.layout.width), []);
  const fn = function n() {
    if ("number" === typeof percent) {
      let value = percent;
    } else {
      value = percent.get();
    }
    const obj = { translateX: first * (value / 100) - first };
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = closure_8;
  obj.animatedStyles = _require(3991).useAnimatedStyle(fn);
  obj.handleLayout = callback;
  return obj;
}
function Progress(arg0) {
  let hideProgress;
  let percent;
  ({ percent, hideProgress } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = useProgressAnimation(percent);
  let obj = { onLayout: tmp2.handleLayout };
  const items = [tmp.progressContainerBottom, ];
  obj = {};
  let num = 1;
  if (hideProgress) {
    num = 0;
  }
  obj.opacity = num;
  items[1] = obj;
  obj.style = items;
  const items1 = [tmp.progress, tmp2.animatedStyles];
  obj.children = jsx(importDefault(3991).View, { style: items1 });
  return <View />;
}
function RedesignProgress(arg0) {
  let hideProgress;
  let percent;
  let type;
  ({ percent, hideProgress, type } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = useProgressAnimation(percent);
  let obj = { onLayout: tmp2.handleLayout };
  const items = [tmp.progressContainerTop, ];
  obj = {};
  let num = 1;
  if (hideProgress) {
    num = 0;
  }
  obj.opacity = num;
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.progressTrack, children: jsx(importDefault(3991).View, { style: items1 }) };
  items1 = [tmp.progressRedesign, "ALERT" === type ? tmp.progressBarWarning : tmp.progressBarBrand, tmp2.animatedStyles];
  obj.children = <View style={tmp.progressTrack}>{jsx(importDefault(3991).View, { style: items1 })}</View>;
  return <View style={tmp.progressTrack}>{jsx(importDefault(3991).View, { style: items1 })}</View>;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, height: 4 };
_createForOfIteratorHelperLoose.progress = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progressRedesign = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 8 };
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 8 };
_createForOfIteratorHelperLoose.progressBarBrand = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.progressBarWarning = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
const obj4 = { width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 8, overflow: "hidden" };
_createForOfIteratorHelperLoose.progressTrack = obj4;
_createForOfIteratorHelperLoose.progressContainerTop = { position: "absolute", top: -5, left: 16, right: 16 };
_createForOfIteratorHelperLoose.progressContainerBottom = { width: "100%", position: "absolute", bottom: -1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  let canExpand;
  let type;
  percent = percent.percent;
  ({ canExpand, type } = percent);
  let obj = require(10278) /* context */;
  const inAppNotificationContext = obj.useInAppNotificationContext();
  if (canExpand) {
    obj = { percent, hideProgress: tmp2, type };
    let tmp3Result = tmp3(RedesignProgress, obj);
  } else {
    obj = { percent, hideProgress: tmp2 };
    tmp3Result = tmp3(Progress, obj);
  }
  return tmp3Result;
};
