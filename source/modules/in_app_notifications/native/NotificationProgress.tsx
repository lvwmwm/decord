// Module ID: 10300
// Function ID: 79502
// Name: useProgressAnimation
// Dependencies: []
// Exports: default

// Module 10300 (useProgressAnimation)
function useProgressAnimation(percent) {
  const arg1 = percent;
  const tmp = callback(React.useState(0), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const obj = {};
  const callback = React.useCallback((nativeEvent) => callback(nativeEvent.nativeEvent.layout.width), []);
  const fn = function n() {
    if ("number" === typeof arg0) {
      let value = arg0;
    } else {
      value = arg0.get();
    }
    const obj = { translateX: first * (value / 100) - first };
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = closure_8;
  obj.animatedStyles = arg1(closure_2[6]).useAnimatedStyle(fn);
  obj.handleLayout = callback;
  return obj;
}
function Progress(arg0) {
  let hideProgress;
  let percent;
  ({ percent, hideProgress } = arg0);
  const tmp = callback2();
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
  obj.children = jsx(importDefault(dependencyMap[6]).View, { style: items1 });
  return <View {...obj} />;
}
function RedesignProgress(arg0) {
  let hideProgress;
  let percent;
  let type;
  ({ percent, hideProgress, type } = arg0);
  const tmp = callback2();
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
  obj = { style: tmp.progressTrack, children: jsx(importDefault(dependencyMap[6]).View, { style: items1 }) };
  const items1 = [tmp.progressRedesign, "ALERT" === type ? tmp.progressBarWarning : tmp.progressBarBrand, tmp2.animatedStyles];
  obj.children = <View {...obj} />;
  return <View {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, height: 4 };
obj.progress = obj;
obj.progressRedesign = { borderRadius: importDefault(dependencyMap[5]).radii.xs, height: 8 };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, height: 8 };
obj.progressBarBrand = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.progressBarWarning = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300 };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300 };
obj.progressTrack = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE };
obj.progressContainerTop = {};
obj.progressContainerBottom = { "Null": 124911620, "Null": 218103808, "Null": 16777216 };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const obj4 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  let canExpand;
  let type;
  percent = percent.percent;
  ({ canExpand, type } = percent);
  let obj = arg1(dependencyMap[7]);
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
