// Module ID: 14084
// Function ID: 14085
// Name: GameOrganizationJoinSuccessGraphic
// Dependencies: [19, 17, 21, 5306, 575, 6337, 14076, 14085, 14089, 2]
// Exports: default

// Module 14084 (GameOrganizationJoinSuccessGraphic)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 14076 */;
import CharacterFallbackAbstractUI from "CharacterFallbackAbstractUI" /* 14085 */;
import GuildFallbackAbstractUI from "GuildFallbackAbstractUI" /* 14089 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = 78;
let obj = { dots: { width: "auto" }, dot: size };
size = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_MUTED };
let closure_7 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinSuccessGraphic.tsx");

export default function GameOrganizationJoinSuccessGraphic(character) {
  let items;
  let items1;
  let size1;
  character = character.character;
  const organizationIconUrl = character.organizationIconUrl;
  const tmp = closure_7();
  const obj = { direction: "horizontal", align: "center", justify: "center", spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  let iconUrl;
  const tmp8 = GameOrganizationIconDefault;
  if (character != null) {
    iconUrl = character.iconUrl;
  }
  const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(Stack, obj) };
  const obj3 = { iconUrl, size: v78, borderRadius: nativeDefault.radii.md, fallback: React3(CharacterFallbackAbstractUI.CharacterFallbackAbstractUI, size) };
  size = { width: v78, height: v78, accessible: false };
  items = [React3(tmp8, obj3), , ];
  const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, style: tmp.dots, children: items1 };
  const Stack2 = tmp5(6337).Stack;
  items1 = [, , ];
  const obj5 = { style: tmp.dot };
  items1[0] = React3(View, obj5);
  const obj6 = { style: tmp.dot };
  items1[1] = React3(View, obj6);
  const obj7 = { style: tmp.dot };
  items1[2] = React3(View, obj7);
  items[1] = hasOwnProperty(Stack2, obj4);
  const obj8 = { iconUrl: organizationIconUrl, size: v78, borderRadius: nativeDefault.radii.md, fallback: React3(GuildFallbackAbstractUI.GuildFallbackAbstractUI, size1) };
  size1 = { width: v78, height: v78, accessible: false };
  const tmp7Result = GameOrganizationIconDefault;
  items[2] = React3(tmp7Result, obj8);
  return React3(View, obj2);
};
