// Module ID: 16092
// Function ID: 16093
// Name: GameOrganizationInviteNoFriends
// Dependencies: [19, 21, 5140, 575, 5374, 5315, 1113, 2530, 6159, 5751, 5758, 2]
// Exports: default

// Module 16092 (GameOrganizationInviteNoFriends)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Text_Text from "Text/Text" /* 5751 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
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

export default function GameOrganizationInviteNoFriends() {
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  const tmp = closure_5();
  const intl = intl5.intl;
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.container, children: items1 };
  const stringResult = intl.string(_modDef2530.xXXGsq);
  const Stack = Stack_Stack.Stack;
  const obj2 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl2.string(_modDef2530["3qrm/9"]) };
  const Heading = Text_Text.Heading;
  intl2 = intl5.intl;
  items = [_false(Heading, obj3), ];
  const obj4 = { variant: "body-md/medium", color: "text-muted", style: tmp.centeredText, children: intl3.formatToPlainString(_modDef2530["NyR+6P"], { noun: stringResult }) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items[1] = _false(Text, obj4);
  items1 = [React3(Stack2, obj2), ];
  const obj5 = { text: intl4.string(_modDef2530.kdLF2T), onPress: handleAddFriends };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items1[1] = _false(Button, obj5);
  return React3(Stack, obj);
};
