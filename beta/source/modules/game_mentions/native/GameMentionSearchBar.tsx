// Module ID: 11895
// Function ID: 11896
// Name: GameMentionSearchBar
// Dependencies: [19, 17, 21, 4836, 576, 11881, 8535, 4832, 1115, 8053, 2]

// Module 11895 (GameMentionSearchBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Form from "Form" /* 8053 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import useGameMentionSearchBarHeight from "useGameMentionSearchBarHeight" /* 11881 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, icon: { marginRight: 12 }, description: obj4, divider: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj4 = { paddingHorizontal: 16, paddingBottom: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj5 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = createStyles(obj);
const memoResult = react.memo(function GameMentionSearchBar() {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_5();
  const obj3 = { style: tmp.headerRow, children: items };
  items = [, ];
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { accessible: true, accessibilityRole: "header", children: items1 };
  const obj4 = { size: "sm", style: tmp.icon };
  items[0] = _false(GameControllerIcon.GameControllerIcon, obj4);
  const obj5 = { variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" };
  const Text = Text_Text.Text;
  items[1] = _false(Text, obj5);
  items1 = [React3(View, obj3), ];
  const obj6 = { style: tmp.description, variant: useGameMentionSearchBarHeight.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted", children: intl.string(intl2.t["1kR88y"]) };
  const Text2 = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = _false(Text2, obj6);
  items2 = [React3(View, obj2), ];
  const obj7 = { style: tmp.divider };
  items2[1] = _false(Form.FormDivider, obj7);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default memoResult;
