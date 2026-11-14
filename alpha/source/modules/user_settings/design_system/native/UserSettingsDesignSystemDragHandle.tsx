// Module ID: 18464
// Function ID: 18465
// Name: UserSettingsDesignSystemDragHandle
// Dependencies: [19, 17, 1072, 21, 5306, 575, 5929, 7447, 6337, 5893, 7746, 7443, 10569, 7445, 2]
// Exports: default

// Module 18464 (UserSettingsDesignSystemDragHandle)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import Text_Text from "Text/Text" /* 5929 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import TableRow3 from "TableRow" /* 7443 */;
import Card_Card from "Card/Card" /* 7445 */;
import DragHandle from "DragHandle" /* 7447 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import SettingsIcon from "SettingsIcon" /* 10569 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function HandleLabel(arg0) {
  let children;
  let overlay;
  ({ children, overlay } = arg0);
  let color = "text-default";
  const Text = Text_Text.Text;
  const tmp = metroRequire;
  if (true === overlay) {
    color = "text-overlay-light";
  }
  return tmp(Text, { variant: "body-sm/semibold", color, children });
}
function VariantDemo(variant) {
  let items;
  let items1;
  let items2;
  let tmp5Result;
  variant = variant.variant;
  const tmp = closure_10();
  const obj = { children: items1 };
  const obj2 = { style: tmp.handleWithLabel, children: items };
  items = [metroRequire(DragHandle.DragHandle, { variant }), metroRequire(HandleLabel, { overlay: "overlay" === variant, children: "Static" })];
  items1 = [metroImportDefault(React3, obj2), ];
  const obj3 = { style: tmp.handleWithLabel, children: items2 };
  items2 = [, ];
  const obj4 = { variant, onPress: NOOP };
  items2[0] = metroRequire(DragHandle.DragHandle, obj4);
  items2[1] = metroRequire(HandleLabel, { overlay: "overlay" === variant, children: "Pressable" });
  items1[1] = metroImportDefault(React3, obj3);
  const tmp7 = metroImportDefault(metroImportAll, obj);
  const Stack = Stack_Stack.Stack;
  let str = "Default";
  const Text = Text_Text.Text;
  const tmp3 = metroImportDefault;
  const tmp4 = React3;
  if ("overlay" === variant) {
    str = "Overlay";
  }
  const children = [metroRequire(Text, { variant: "heading-md/semibold", color: "text-strong", children: str }), ];
  if ("overlay" === variant) {
    const obj5 = { style: tmp.handles, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, colors, children: tmp7 };
    tmp5Result = tmp5(LinearGradientDefault, obj5);
  } else {
    const obj6 = { style: tmp.handles, children: tmp7 };
    tmp5Result = tmp5(tmp4, obj6);
  }
  children[1] = tmp5Result;
  return tmp3(Stack, { spacing: 8, children });
}
function InContextDemo() {
  let Icon;
  let Icon2;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  const tmp = closure_10();
  const obj = { spacing: 12, children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { title: "Draggable TableRow", description: "The handle has its own press handlers, so it renders the pressable version.", hasIcons: true, isSortable: true, children: items };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj3 = { draggable: true, icon: metroRequire(Icon, obj4), label: "Boost your Server", subLabel: "Unlock perks for the entire community", onPress: NOOP };
  const TableRow = TableRow3.TableRow;
  obj4 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon = TableRow3.TableRow.Icon;
  items = [metroRequire(TableRow, obj3), ];
  const obj5 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, icon: metroRequire(Icon2, obj6), label: "Boost your Server", subLabel: "Unlock perks for the entire community" };
  const TableRow2 = TableRow3.TableRow;
  obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon2 = TableRow3.TableRow.Icon;
  items[1] = metroRequire(TableRow2, obj5);
  items1 = [metroImportDefault(TableRowGroup, obj2), , , , , , ];
  const obj7 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "TableRows outside of a group" };
  items1[1] = metroRequire(Text_Text.Text, obj7);
  const obj8 = { children: items2 };
  items2 = [, ];
  const obj9 = { draggable: true, label: "Boost your Server", subLabel: "Unlock perks for the entire community", onPress: NOOP, start: true };
  items2[0] = metroRequire(TableRow3.TableRow, obj9);
  const obj10 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, label: "Boost your Server", subLabel: "Unlock perks for the entire community", end: true };
  items2[1] = metroRequire(TableRow3.TableRow, obj10);
  items1[2] = metroImportDefault(React3, obj8);
  const obj11 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "Card" };
  items1[3] = metroRequire(Text_Text.Text, obj11);
  const obj12 = { draggable: true, onPress: NOOP, children: metroRequire(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, tappable Card" }) };
  const Card = Card_Card.Card;
  items1[4] = metroRequire(Card, obj12);
  const obj13 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, children: metroRequire(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, non-tappable Card" }) };
  const Card2 = Card_Card.Card;
  items1[5] = metroRequire(Card2, obj13);
  const obj14 = { children: metroRequire(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Card without a drag handle" }) };
  const Card3 = Card_Card.Card;
  items1[6] = metroRequire(Card3, obj14);
  return metroImportDefault(Stack, obj);
}
({ ScrollView: c3, View: closure_4 } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
const colors = ["purple", "orange"];
let createStyles = createStyles_mod;
let obj = { container: obj2, handles: obj3, handleWithLabel: obj4, heading: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: 24, padding: 16, borderRadius: nativeDefault.radii.md };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { marginBlockStart: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemDragHandle.tsx");

export default function UserSettingsDesignSystemDragHandle() {
  let Stack;
  let items;
  let obj2;
  const obj = { contentContainerStyle: closure_10().container, children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: "The handle is static unless it gets a press handler (onPress, onPressIn, onPressOut or onLongPress)." }), metroRequire(VariantDemo, { variant: "default" }), metroRequire(VariantDemo, { variant: "overlay" }), metroRequire(InContextDemo, {})];
  return metroRequire(_false, obj);
};
