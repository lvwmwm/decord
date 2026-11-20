// Module ID: 16409
// Function ID: 16410
// Name: GameOrganizationInviteNoFriends
// Dependencies: [19, 21, 5306, 575, 5542, 5483, 6327, 5919, 1113, 2565, 5926, 2]
// Exports: default

// Module 16409 (GameOrganizationInviteNoFriends)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import _modDef2565 from "module_2565" /* 2565 */;
import RootNavigationRef from "RootNavigationRef" /* 5483 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import Text_Text from "Text/Text" /* 5919 */;
import components_Button_Button from "components/Button/Button" /* 5926 */;
import Stack_Stack from "Stack/Stack" /* 6327 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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

export default function GameOrganizationInviteNoFriends(noun) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  noun = noun.noun;
  const tmp = closure_5();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.container, children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl.string(_modDef2565["3qrm/9"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [_false(Heading, obj3), ];
  const obj4 = { variant: "body-md/medium", color: "text-muted", style: tmp.centeredText, children: intl2.formatToPlainString(_modDef2565["NyR+6P"], { noun }) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = _false(Text, obj4);
  items1 = [React3(Stack2, obj2), ];
  const obj5 = { text: intl3.string(_modDef2565.kdLF2T), onPress: handleAddFriends };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = _false(Button, obj5);
  return React3(Stack, obj);
};
