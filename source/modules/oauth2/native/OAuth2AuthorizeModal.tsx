// Module ID: 9986
// Function ID: 77223
// Name: OAuth2AuthorizeModal
// Dependencies: []
// Exports: default

// Module 9986 (OAuth2AuthorizeModal)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = {};
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.contentContainer = { flex: 1 };
obj.titleContainer = { accessibilityRole: null, forEach: 11, p: "modal_top_pill" };
const obj1 = { "Bool(true)": "key", "Bool(true)": "to", "Bool(true)": "Array", "Bool(true)": "Reflect", "Bool(true)": "Array", backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.titleContainerBorder = obj1;
const obj2 = { value: true, start: true, end: true, label: true, disabled: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.title = obj2;
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[5])(arg0);
  const arg1 = tmp2;
  let obj = arg1(dependencyMap[7]);
  const sharedValue = obj.useSharedValue(0);
  const importDefault = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  const fn = function b() {
    const obj = {};
    const value = sharedValue.get();
    let num = 1;
    if (null != value) {
      num = value;
    }
    obj.opacity = num;
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 5916964482569;
  fn.__initData = closure_9;
  const items = [sharedValue];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: tmp.container };
  obj = { style: items1 };
  const items1 = [tmp.titleContainer, ];
  obj1 = { paddingTop: importDefault(dependencyMap[6])().top + 16 };
  items1[1] = obj1;
  const callback = React.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(tmp2(closure_2[8]).withSpring(num, closure_7));
  }, items);
  const obj2 = { accessibilityRole: "button" };
  if (null != tmp2.backStep) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.13/7kX);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    stringResult = intl.string(arg1(dependencyMap[10]).t.cpT0Cq);
  }
  obj2.accessibilityLabel = stringResult;
  obj2.onPress = function onPress() {
    let goBackOrCancelResult;
    if (null != tmp2.goBackOrCancel) {
      goBackOrCancelResult = tmp2.goBackOrCancel();
    }
    return goBackOrCancelResult;
  };
  if (null != tmp2.backStep) {
    const obj3 = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    let tmp18 = callback(arg1(dependencyMap[11]).ArrowSmallLeftIcon, obj3);
  } else {
    const obj4 = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    tmp18 = callback(arg1(dependencyMap[12]).XSmallIcon, obj4);
  }
  obj2.children = tmp18;
  const items2 = [callback(arg1(dependencyMap[9]).PressableOpacity, obj2), , ];
  const obj5 = { style: tmp.title };
  const obj6 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj6.children = intl3.string(arg1(dependencyMap[10]).t.y+/PE9);
  obj5.children = callback(arg1(dependencyMap[13]).Text, obj6);
  items2[1] = callback(View, obj5);
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  items2[2] = callback(importDefault(dependencyMap[7]).View, { style: items3 });
  obj.children = items2;
  const items4 = [closure_6(View, obj), ];
  const obj7 = { bottom: true, style: tmp.contentContainer };
  const obj8 = {};
  const merged = Object.assign(tmp2);
  obj8["onScroll"] = callback;
  obj8["centerContent"] = true;
  obj7.children = callback(importDefault(dependencyMap[15]), obj8);
  items4[1] = callback(arg1(dependencyMap[14]).SafeAreaPaddingView, obj7);
  obj.children = items4;
  return closure_6(View, obj);
};
