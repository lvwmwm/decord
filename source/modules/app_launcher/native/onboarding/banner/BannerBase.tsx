// Module ID: 11171
// Function ID: 86887
// Name: BannerBase
// Dependencies: []
// Exports: default

// Module 11171 (BannerBase)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const PX_12 = importDefault(dependencyMap[5]).space.PX_12;
let closure_9 = {};
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, position: "absolute", borderRadius: importDefault(dependencyMap[5]).radii.lg, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: arg1(dependencyMap[7]).APP_ICON_SIZE + 2 * PX_12 + 4, bottom: importDefault(dependencyMap[5]).space.PX_16, left: importDefault(dependencyMap[5]).space.PX_16 };
obj.banner = obj;
obj.bannerGradientColor = { backgroundColor: "#7eaaff" };
const tmp2 = arg1(dependencyMap[4]);
obj.bannerBackgroundGradient = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.imageContainer = { width: 72 };
obj.trinketsLottie = { gap: 3, position: 1, right: "row", top: "wrap", alignItems: "hidden", justifyContent: 4, ref: "R1" };
const obj2 = { effectDisplayType: true, es-UY: true, useCustomBackgroundGradient: true, MessageNotificationSettings: true, marginLeft: importDefault(dependencyMap[5]).space.PX_12 };
obj.bannerTextContainer = obj2;
obj.bannerText = { width: "100%" };
let closure_10 = obj.createStyles(obj);
let closure_11 = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(arg0) {
  let image;
  let text;
  ({ image, text } = arg0);
  const tmp = callback5();
  let num = 0;
  const tmp2 = callback2(React.useState(0), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  let obj = callback(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(false);
  const importDefault = sharedValue;
  const diff = importDefault(dependencyMap[9])().width - 2 * importDefault(dependencyMap[5]).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj1 = callback(dependencyMap[10]);
  const items = [obj1.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = callback(dependencyMap[10]);
  items[1] = obj2.hexOpacityToRgba(backgroundColor, 0);
  let obj3 = callback(dependencyMap[11]);
  const items1 = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = callback(dependencyMap[8]);
  const fn = function _() {
    let obj = {};
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = callback(closure_2[8]);
      num = obj2.withDelay(150, callback(closure_2[12]).withSpring(1, closure_9));
      const obj3 = callback(closure_2[12]);
    }
    obj.opacity = num;
    obj = {};
    let num6 = 30;
    if (sharedValue.get()) {
      const obj5 = callback(closure_2[8]);
      num6 = obj5.withDelay(150, callback(closure_2[12]).withSpring(0, closure_9));
      const obj6 = callback(closure_2[12]);
    }
    obj.translateY = num6;
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { bannerMeasured: sharedValue, withDelay: callback(dependencyMap[8]).withDelay, withSpring: callback(dependencyMap[12]).withSpring, SPRING_CONFIG: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 5314641176204;
  fn.__initData = closure_11;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  obj = {};
  const items2 = [tmp.banner, , ];
  obj1 = {};
  if (first > 0) {
    num = 1;
  }
  obj1.opacity = num;
  obj1.width = diff;
  items2[1] = obj1;
  items2[2] = animatedStyle;
  obj.style = items2;
  obj.onLayout = function onLayout(nativeEvent) {
    const layout = nativeEvent.nativeEvent.layout;
    let height;
    if (null != layout) {
      height = layout.height;
    }
    if (height > 0) {
      callback(height);
      const result = sharedValue.set(true);
    }
  };
  const items3 = [tmp.bannerBackgroundGradient, { height: first, width: diff }];
  const items4 = [callback3(importDefault(dependencyMap[13]), { start: { 0: "%FunctionPrototype%", 0: "paddingStart" }, end: {}, colors: items, style: items3 }), , ];
  obj2 = { style: tmp.imageContainer };
  obj3 = { style: tmp.trinketsLottie, source: callback(dependencyMap[15]), autoPlay: !stateFromStores };
  const items5 = [callback3(importDefault(dependencyMap[14]), obj3), image];
  obj2.children = items5;
  items4[1] = callback4(View, obj2);
  obj4 = { style: tmp.bannerTextContainer, children: callback3(callback(dependencyMap[16]).Text, obj5) };
  items4[2] = callback3(View, obj4);
  obj.children = items4;
  return callback4(importDefault(dependencyMap[8]).View, obj);
};
