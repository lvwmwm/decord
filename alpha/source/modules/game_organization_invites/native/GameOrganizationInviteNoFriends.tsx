// Module ID: 15096
// Function ID: 15097
// Name: GameOrganizationInviteNoFriends
// Dependencies: [19, 21, 4792, 575, 5006, 4969, 5808, 5383, 1113, 2557, 5390, 2]
// Exports: default

// Module 15096 (GameOrganizationInviteNoFriends)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import RootNavigationRef from "RootNavigationRef" /* 4969 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import Text_Text from "Text/Text" /* 5383 */;
import Stack_Stack from "Stack/Stack" /* 5808 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
function handleAddFriends() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const obj3 = { screen: "add-friends", params: { sourcePage: "Game Organization Invite Empty State" } };
    rootNavigationRef.navigate("friends", obj3);
  }
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, centeredText: { textAlign: "center" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_48 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteNoFriends.tsx");

export default function GameOrganizationInviteNoFriends(displayNoun) {
  let formatToPlainString;
  let intl;
  let intl3;
  let items;
  let items1;
  let prop;
  let str = displayNoun.displayNoun;
  const tmp = closure_5();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.container, children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl.string(_modDef2557["3qrm/9"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [_false(Heading, obj3), ];
  const obj4 = { variant: "body-md/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainString(prop, { displayNoun: str }) };
  const Text = Text_Text.Text;
  const intl2 = intl4.intl;
  formatToPlainString = intl2.formatToPlainString;
  prop = _modDef2557["NyR+6P"];
  if (str == null) {
    str = "other";
  }
  items[1] = _false(Text, obj4);
  items1 = [React3(Stack2, obj2), ];
  const obj5 = { text: intl3.string(_modDef2557.kdLF2T), onPress: handleAddFriends };
  const Button = tmp3(5390).Button;
  intl3 = tmp3(1113).intl;
  items1[1] = _false(Button, obj5);
  return React3(Stack, obj);
};
