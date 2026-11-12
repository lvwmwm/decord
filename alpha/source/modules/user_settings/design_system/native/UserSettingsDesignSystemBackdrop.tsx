// Module ID: 18324
// Function ID: 18325
// Name: UserSettingsDesignSystemBackdrop
// Dependencies: [32, 19, 17, 21, 5243, 7381, 6274, 5866, 5873, 1652, 5876, 5877, 6264, 5841, 2]
// Exports: default

// Module 18324 (UserSettingsDesignSystemBackdrop)
import _mod1652 from "module_1652" /* 1652 */;
import Backdrop from "Backdrop" /* 5841 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import Card_Card from "Card/Card" /* 7381 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
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
  items = [metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: title }), metroRequire(Text_Text.Text, { variant: "body-md/normal", color: "text-subtle", children: description }), ];
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
let closure_10 = { code: "(function UserSettingsDesignSystemBackdropTsx1(){let[withSpring,showBackdrop,SUBTLE_SPRING]=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};})" };
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBackdrop.tsx");

export default function UserSettingsDesignSystemBackdrop() {
  let Card;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj6;
  let obj7;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16Result;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp = closure_8();
  [tmp3, tmp4] = react.useState(false);
  let closure_0 = tmp4;
  _slicedToArray(react.useState(false), 2);
  [tmp6, tmp7] = react.useState("none");
  _slicedToArray(react.useState("none"), 2);
  const items = [closure_10, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = tmp16Result;
  items[3] = springPresets.SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items;
  class UserSettingsDesignSystemBackdropTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp12, tmp13, tmp14];
  UserSettingsDesignSystemBackdropTsx1.__closure = items1;
  UserSettingsDesignSystemBackdropTsx1.__workletHash = 10294771591742;
  UserSettingsDesignSystemBackdropTsx1.__initData = tmp11;
  let obj = { contentContainerStyle: tmp.container, children: items3 };
  const animatedStyle = useAnimatedStyle(UserSettingsDesignSystemBackdropTsx1);
  const obj2 = { spacing: 24, children: items2 };
  const Stack = tmp8(6274).Stack;
  items2 = [metroRequire(BackdropCard, { title: "Backdrop", description: "A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.", buttonLabel: "Show Backdrop", blur: "none", setShowBackdrop: tmp4, setBlurAmount: tmp7 }), metroRequire(BackdropCard, { title: "Subtle Blur", description: "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context", buttonLabel: "Show Subtle Blur Backdrop", blur: "subtle", setShowBackdrop: tmp4, setBlurAmount: tmp7 }), metroRequire(BackdropCard, { title: "Strong Blur", description: "You can use a strong blur for places where you want to completly lift the user out of the context, like for modals", buttonLabel: "Show Strong Blur Backdrop", blur: "strong", setShowBackdrop: tmp4, setBlurAmount: tmp7 })];
  items3 = [metroImportDefault(Stack, obj2), ];
  const tmp17 = React3;
  if (tmp16Result) {
    function handleClose() {
      tmp4(false);
    }
    const obj3 = { onDismiss: handleClose, children: items4 };
    const Dialog = tmp8(6264).Dialog;
    const obj4 = { style: animatedStyle, blur: tmp6, onDismiss: handleClose };
    items4 = [metroRequire(Backdrop.Backdrop, obj4), ];
    const obj5 = { style: tmp.backdropContent, pointerEvents: "box-none", children: metroRequire(Card, obj6) };
    obj6 = { children: metroImportDefault(Text_Text.Text, obj7) };
    Card = tmp8(7381).Card;
    obj7 = { variant: "body-md/normal", children: items5 };
    items5 = ["blur style: ", tmp6];
    items4[1] = metroRequire(hasOwnProperty, obj5);
    tmp16Result = metroImportDefault(Dialog, obj3);
  }
  items3[1] = tmp16Result;
  return metroImportDefault(tmp17, obj);
};
