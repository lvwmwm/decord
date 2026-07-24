// Module ID: 14507
// Function ID: 110755
// Name: BackdropCard
// Dependencies: [57, 31, 27, 33, 4130, 5167, 4541, 4126, 4543, 3991, 4542, 4546, 4524, 4531, 2]
// Exports: default

// Module 14507 (BackdropCard)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function BackdropCard(arg0) {
  let buttonLabel;
  let _slicedToArray;
  let dependencyMap;
  let description;
  let require;
  let title;
  ({ blur: require, setShowBackdrop: dependencyMap, setBlurAmount: _slicedToArray } = arg0);
  ({ buttonLabel, title, description } = arg0);
  let obj = {};
  obj = { spacing: 12 };
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-lg/bold", children: title }), , ];
  obj = { variant: "text-md/normal", color: "text-subtle", children: description };
  items[1] = callback2(require(4126) /* Text */.Text, obj);
  items[2] = callback2(require(4543) /* Button */.Button, {
    text: buttonLabel,
    onPress() {
      callback2(closure_0);
      callback(true);
    }
  });
  obj.children = items;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  return callback2(require(5167) /* getCardBackgroundToken */.Card, obj);
}
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["alignItems"] = "stretch";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["padding"] = 16;
_createForOfIteratorHelperLoose.backdropContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  let tmp6;
  let tmp7;
  function handleClose() {
    tmp4(false);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const dependencyMap = tmp4;
  [tmp6, tmp7] = callback(React.useState("none"), 2);
  let obj = first(3991);
  const fn = function n() {
    const obj = {};
    let num = 0;
    if (first) {
      num = 1;
    }
    obj.opacity = first(tmp4[10]).withSpring(num, first(tmp4[11]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: first(4542).withSpring, showBackdrop: first, SUBTLE_SPRING: first(4546).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1929832617927;
  fn.__initData = closure_9;
  obj = { contentContainerStyle: tmp.container };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj1 = { spacing: 24 };
  const obj2 = { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 };
  const items = [callback2(BackdropCard, obj2), , ];
  const obj3 = { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 };
  items[1] = callback2(BackdropCard, obj3);
  const obj4 = { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 };
  items[2] = callback2(BackdropCard, obj4);
  obj1.children = items;
  const items1 = [callback3(first(4541).Stack, obj1), ];
  if (first) {
    const obj5 = { onDismiss: handleClose };
    const obj6 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    const items2 = [callback2(first(4531).Backdrop, obj6), ];
    const obj7 = { style: tmp.backdropContent, pointerEvents: "box-none" };
    const obj8 = {};
    const obj9 = { variant: "text-md/normal" };
    const items3 = ["blur style: ", tmp6];
    obj9.children = items3;
    obj8.children = callback3(first(4126).Text, obj9);
    obj7.children = callback2(first(5167).Card, obj8);
    items2[1] = callback2(closure_5, obj7);
    obj5.children = items2;
    first = callback3(first(4524).Dialog, obj5);
  }
  items1[1] = first;
  obj.children = items1;
  return callback3(closure_4, obj);
};
