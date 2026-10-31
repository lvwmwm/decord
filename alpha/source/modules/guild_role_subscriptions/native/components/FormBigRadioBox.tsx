// Module ID: 19940
// Function ID: 19941
// Name: FormBigRadioBox
// Dependencies: [19, 17, 21, 5014, 575, 5082, 9109, 7062, 5624, 2]
// Exports: default

// Module 19940 (FormBigRadioBox)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react_native2 from "react-native" /* 5082 */;
import Text_Text from "Text/Text" /* 5624 */;
import FormRadio from "FormRadio" /* 7062 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let rect;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSelected: obj3, indicator: rect, iconContainer: size, iconContainerSelected: obj4, title: { marginBottom: 2 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
size = { height: 40, width: 40, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let description;
  let disabled;
  let icon;
  let items1;
  let onPress;
  let selected;
  let style;
  let title;
  let tmp8;
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  const tmp5 = hasOwnProperty;
  const tmp6 = TouchableHitBoxDefault;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress: tmp8, children: items1 };
  const tmp7 = disabled && tmp.disabled;
  items[2] = tmp7;
  items[3] = style;
  tmp8 = undefined;
  if (!disabled) {
    tmp8 = onPress;
  }
  items1 = [, , , ];
  const obj3 = { style: tmp.indicator, children: React3(FormRadio.FormRadio, { selected }) };
  items1[0] = React3(View, obj3);
  const items2 = [tmp.iconContainer, ];
  const tmp10 = View;
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  items2[1] = selected;
  const obj4 = { style: items2, children: React3(icon, { size: "md" }) };
  items1[1] = React3(tmp10, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
  items1[2] = React3(Text_Text.Text, obj5);
  items1[3] = React3(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  return tmp5(tmp6, obj2);
};
