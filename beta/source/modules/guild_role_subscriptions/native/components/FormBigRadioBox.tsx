// Module ID: 17554
// Function ID: 17555
// Name: FormBigRadioBox
// Dependencies: [19, 17, 21, 4836, 576, 4548, 9203, 1177, 4832, 2]
// Exports: default

// Module 17554 (FormBigRadioBox)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import react_native2 from "react-native" /* 4548 */;
import Text_Text from "Text/Text" /* 4832 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSelected: obj3, indicator: { position: "absolute", right: 18, top: 18 }, iconContainer: size, iconContainerSelected: obj4, title: { marginBottom: 2 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
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
  const obj3 = { style: tmp.indicator, active: selected };
  items1[0] = React3(native.RadioIndicator, obj3);
  const items2 = [tmp.iconContainer, ];
  const tmp10 = View;
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  items2[1] = selected;
  const obj4 = { style: items2, children: React3(native.Icon, { source: icon }) };
  items1[1] = React3(tmp10, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title };
  items1[2] = React3(Text_Text.Text, obj5);
  items1[3] = React3(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  return tmp5(tmp6, obj2);
};
