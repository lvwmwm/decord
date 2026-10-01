// Module ID: 15397
// Function ID: 15398
// Name: UserSettingsDesignSystemBackdrop
// Dependencies: [32, 19, 17, 21, 4836, 5919, 5279, 4832, 5281, 4566, 5280, 5284, 5262, 5267, 2]
// Exports: default

// Module 15397 (UserSettingsDesignSystemBackdrop)
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import spring from "spring" /* 5280 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Card_Card from "Card/Card" /* 5919 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const springPresets = tmp(5284);
function BackdropCard(arg0) {
  let Stack;
  let buttonLabel;
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let description;
  let items;
  let obj2;
  let title;
  ({ blur: closure_129_0, setShowBackdrop: closure_129_1, setBlurAmount: closure_129_2 } = arg0);
  ({ buttonLabel, title, description } = arg0);
  const obj = { children: metroImportDefault(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: 12, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: title }), metroRequire(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: description }), ];
  const obj3 = {
    text: buttonLabel,
    onPress() {
      closure_1_2(closure_1_0);
      closure_1_1(true);
    }
  };
  items[2] = metroRequire(components_Button_Button.Button, obj3);
  return metroRequire(Card, obj);
}
({ ScrollView: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, backdropContent: obj2 };
obj2 = { alignItems: "stretch", justifyContent: "center", padding: 16 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const __initData = { code: "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  let Card;
  let closure_1;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let obj9;
  let tmp6;
  let tmp7;
  let tmp = closure_8();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let showBackdrop = tmp2[0];
  dependencyMap = tmp4;
  [tmp6, tmp7] = react.useState("none");
  _slicedToArray(react.useState("none"), 2);
  let obj = showBackdrop(4566);
  const fn = function n() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  fn.__closure = { withSpring: showBackdrop(5280).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5284).SUBTLE_SPRING };
  fn.__workletHash = 1929832617927;
  fn.__initData = __initData;
  const obj3 = { contentContainerStyle: tmp.container, children: items1 };
  ({ withSpring: showBackdrop(5280).withSpring, showBackdrop, SUBTLE_SPRING: showBackdrop(5284).SUBTLE_SPRING });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj4 = { spacing: 24, children: items };
  const Stack = showBackdrop(5279).Stack;
  items = [closure_6(BackdropCard, { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), closure_6(BackdropCard, { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 }), closure_6(BackdropCard, { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp2[1], setBlurAmount: tmp7 })];
  items1 = [closure_7(Stack, obj4), ];
  const tmp12 = closure_4;
  if (showBackdrop) {
    function handleClose() {
      closure_1(false);
    }
    const obj5 = { onDismiss: handleClose, children: items2 };
    const Dialog = tmp8(5262).Dialog;
    const obj6 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    items2 = [closure_6(showBackdrop(5267).Backdrop, obj6), ];
    const obj7 = { style: tmp.backdropContent, pointerEvents: "box-none", children: closure_6(Card, obj8) };
    obj8 = { children: closure_7(showBackdrop(4832).Text, obj9) };
    Card = tmp8(5919).Card;
    obj9 = { variant: "text-md/normal", children: items3 };
    items3 = ["blur style: ", tmp6];
    items2[1] = closure_6(closure_5, obj7);
    showBackdrop = tmp11(Dialog, obj5);
  }
  items1[1] = showBackdrop;
  return closure_7(tmp12, obj3);
};
