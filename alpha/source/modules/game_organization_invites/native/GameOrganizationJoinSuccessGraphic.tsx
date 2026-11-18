// Module ID: 12203
// Function ID: 12204
// Name: GameOrganizationJoinSuccessGraphic
// Dependencies: [19, 17, 21, 4823, 575, 5837, 12047, 2]
// Exports: default

// Module 12203 (GameOrganizationJoinSuccessGraphic)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12047 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { dots: { width: "auto" }, dot: size };
size = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_MUTED };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinSuccessGraphic.tsx");

export default function GameOrganizationJoinSuccessGraphic(character) {
  let items;
  let items1;
  character = character.character;
  const organizationIconUrl = character.organizationIconUrl;
  const tmp = closure_6();
  const obj = { direction: "horizontal", align: "center", justify: "center", spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  let iconUrl;
  const tmp8 = GameOrganizationIconDefault;
  if (character != null) {
    iconUrl = character.iconUrl;
  }
  items = [, , ];
  const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(Stack, obj) };
  const obj3 = { iconUrl, size: 78, borderRadius: nativeDefault.radii.md, fallback: "character" };
  items[0] = React3(tmp8, obj3);
  const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, style: tmp.dots, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, , ];
  const obj5 = { style: tmp.dot };
  items1[0] = React3(View, obj5);
  const obj6 = { style: tmp.dot };
  items1[1] = React3(View, obj6);
  const obj7 = { style: tmp.dot };
  items1[2] = React3(View, obj7);
  items[1] = hasOwnProperty(Stack2, obj4);
  const obj8 = { iconUrl: organizationIconUrl, size: 78, borderRadius: nativeDefault.radii.md, fallback: "guild" };
  const tmp7Result = GameOrganizationIconDefault;
  items[2] = React3(tmp7Result, obj8);
  return React3(View, obj2);
};
