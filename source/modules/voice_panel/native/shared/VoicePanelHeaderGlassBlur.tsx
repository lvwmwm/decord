// Module ID: 11369
// Function ID: 88394
// Name: StyleSheet
// Dependencies: []

// Module 11369 (StyleSheet)
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { trackForumPostLinkCopied: 3375103, isStreamInfoOverlayEnabled: -8192, _monthsRegex: 4320799, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth };
obj = { height: StyleSheet.hairlineWidth };
obj1 = { height: StyleSheet.hairlineWidth };
const obj2 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, height: StyleSheet.hairlineWidth };
let closure_6 = obj1.createStyles({ blur: { color: "<string:3082955202>", fontFamily: "<string:103629460>", fontSize: "<string:3630497793>", lineHeight: "<string:961609729>" }, strokeContainer: obj, stroke: obj, strokeAlt: obj1, strokeAltLight: obj2 });
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[4]).isAndroid();
let closure_8 = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
let closure_9 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const obj7 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function HeaderGlassBlur(shown) {
  let blurStyle;
  let style;
  shown = shown.shown;
  const arg1 = shown;
  ({ blurStyle, style } = shown);
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const fn = function k() {
    const obj = {};
    let num = 0;
    if (shown.get()) {
      let num2 = 1;
      if (closure_7) {
        num2 = 0.7;
      }
      num = num2;
    }
    obj.opacity = num;
    return obj;
  };
  obj = { shown, IS_ANDROID: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 3451055086565;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = arg1(dependencyMap[5]);
  const fn2 = function p() {
    const obj = {};
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    obj.blurAmount = shown(closure_2[6]).withSpring(num);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[6]).withSpring, shown };
  fn2.__closure = obj;
  fn2.__workletHash = 5642055202507;
  fn2.__initData = closure_9;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const tmp4 = importDefault(dependencyMap[7])();
  const obj1 = { style: items };
  const items = [tmp.blur, style, animatedStyle];
  obj2 = { blurStyle: "ultra-thin" };
  const tmp5 = closure_5;
  const tmp6 = importDefault(dependencyMap[8]);
  const tmp7 = callback;
  const tmp8 = importDefault(dependencyMap[9]);
  let str = "light";
  if (obj7.isThemeDark(tmp4)) {
    str = "dark";
  }
  obj2.blurTheme = str;
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  obj2.style = items1;
  obj2.animatedProps = animatedProps;
  const items2 = [tmp7(tmp8, obj2), ];
  const obj3 = { style: tmp.strokeContainer };
  const obj7 = arg1(dependencyMap[10]);
  const tmp9 = closure_5;
  const items3 = [callback(importDefault(dependencyMap[11]), { style: tmp.stroke }), ];
  const obj5 = {};
  const obj4 = { style: tmp.stroke };
  const tmp10 = importDefault(dependencyMap[11]);
  const tmp11 = callback;
  const tmp12 = importDefault(dependencyMap[11]);
  obj5.style = arg1(dependencyMap[10]).isThemeDark(tmp4) ? tmp.strokeAlt : tmp.strokeAltLight;
  items3[1] = tmp11(tmp12, obj5);
  obj3.children = items3;
  items2[1] = tmp9(tmp10, obj3);
  obj1.children = items2;
  return tmp5(tmp6, obj1);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default memoResult;
