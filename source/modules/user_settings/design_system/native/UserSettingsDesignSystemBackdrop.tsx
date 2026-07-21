// Module ID: 14335
// Function ID: 108236
// Name: BackdropCard
// Dependencies: []
// Exports: default

// Module 14335 (BackdropCard)
function BackdropCard(arg0) {
  let buttonLabel;
  let description;
  let title;
  ({ blur: closure_0, setShowBackdrop: closure_1, setBlurAmount: closure_2 } = arg0);
  ({ buttonLabel, title, description } = arg0);
  let obj = {};
  obj = { spacing: 12 };
  const items = [callback2(arg1(dependencyMap[7]).Text, { variant: "heading-lg/bold", children: title }), callback2(arg1(dependencyMap[7]).Text, { children: description }), ];
  obj = {
    text: buttonLabel,
    onPress() {
      callback2(closure_0);
      callback(true);
    }
  };
  items[2] = callback2(arg1(dependencyMap[8]).Button, obj);
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[6]).Stack, obj);
  return callback2(arg1(dependencyMap[5]).Card, obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ ScrollView: closure_4, View: closure_5 } = tmp2);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { padding: 16 } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["alignItems"] = "stretch";
obj["justifyContent"] = "center";
obj["padding"] = 16;
obj.backdropContent = obj;
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}" };
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  let tmp6;
  let tmp7;
  function handleClose() {
    tmp4(false);
  }
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const arg1 = first;
  const dependencyMap = tmp4;
  [tmp6, tmp7] = callback(React.useState("none"), 2);
  let obj = arg1(dependencyMap[9]);
  const fn = function n() {
    const obj = {};
    let num = 0;
    if (first) {
      num = 1;
    }
    obj.opacity = first(tmp4[10]).withSpring(num, first(tmp4[11]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, showBackdrop: first, SUBTLE_SPRING: arg1(dependencyMap[11]).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1929832617927;
  fn.__initData = closure_9;
  obj = { contentContainerStyle: tmp.container };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj1 = { spacing: 24 };
  const items = [callback2(BackdropCard, { setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), , ];
  const obj2 = { -1407593: "1 \u03B7\u03BC\u03AD\u03C1\u03B1", 9223372036854775807: "{{count}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2", 9223372036854775807: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1", 0: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 };
  items[1] = callback2(BackdropCard, obj2);
  items[2] = callback2(BackdropCard, { setShowBackdrop: tmp2[1], setBlurAmount: tmp7 });
  obj1.children = items;
  const items1 = [callback3(arg1(dependencyMap[6]).Stack, obj1), ];
  if (first) {
    const obj3 = { onDismiss: handleClose };
    const obj4 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    const items2 = [callback2(arg1(dependencyMap[13]).Backdrop, obj4), ];
    const obj5 = { style: tmp.backdropContent, pointerEvents: "box-none" };
    const obj6 = {};
    const obj7 = { variant: "text-md/normal" };
    const items3 = [true, tmp6];
    obj7.children = items3;
    obj6.children = callback3(arg1(dependencyMap[7]).Text, obj7);
    obj5.children = callback2(arg1(dependencyMap[5]).Card, obj6);
    items2[1] = callback2(closure_5, obj5);
    obj3.children = items2;
    first = callback3(arg1(dependencyMap[12]).Dialog, obj3);
  }
  items1[1] = first;
  obj.children = items1;
  return callback3(closure_4, obj);
};
