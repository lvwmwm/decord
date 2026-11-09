// Module ID: 16099
// Function ID: 16100
// Name: GameOrganizationInviteActionSheet
// Dependencies: [19, 17, 21, 5140, 575, 9208, 16100, 16101, 1113, 2530, 7426, 6159, 5751, 7282, 16102, 16103, 2]
// Exports: default

// Module 16099 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import SearchBar2 from "SearchBar" /* 7282 */;
import ActionSheet2 from "ActionSheet" /* 7426 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9208 */;
import useGameOrganizationInviteSuggestionsDefault from "useGameOrganizationInviteSuggestions" /* 16100 */;
import useLinkedGameOrganizationInviteSenderDefault from "useLinkedGameOrganizationInviteSender" /* 16101 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function Loading() {
  let tmp;
  const children = [];
  let num = 0;
  do {
    tmp = React3;
    let obj = { row: num };
    let arr = children.push(React3(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return tmp(View, { children });
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default function GameOrganizationInviteActionSheet(guildId) {
  let Stack;
  let getSendState;
  let handleInvite;
  let hasNoFriends;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isLoading;
  let items;
  let items1;
  let obj2;
  let search;
  let tmp7Result;
  let users;
  guildId = guildId.guildId;
  const tmp = closure_6();
  ({ users, isLoading, hasNoFriends, search } = useGameOrganizationInviteSuggestionsDefault());
  useGameOrganizationInviteSuggestionsDefault();
  ({ getSendState, handleInvite } = useLinkedGameOrganizationInviteSenderDefault(guildId));
  useLinkedGameOrganizationInviteSenderDefault(guildId);
  const intl = intl6.intl;
  const stringResult = intl.string(_modDef2530.nVMqjA);
  const obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl2.string(intl6.t.cpT0Cq), header: hasOwnProperty(Stack, obj2), children: tmp7Result };
  const ActionSheet = ActionSheet2.ActionSheet;
  intl2 = intl6.intl;
  obj2 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: nativeDefault.space.PX_4, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl3.formatToPlainString(_modDef2530.EnTIIr, { noun: stringResult }) };
  const Heading = Text_Text.Heading;
  intl3 = intl6.intl;
  items = [React3(Heading, obj4), ];
  const obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: intl4.formatToPlainString(_modDef2530.BBk7Qw, { noun: stringResult }) };
  const Text = Text_Text.Text;
  intl4 = intl6.intl;
  items[1] = React3(Text, obj5);
  items1 = [hasOwnProperty(Stack2, obj3), ];
  const obj6 = { size: "md", round: true, onChange: search, placeholder: intl5.formatToPlainString(_modDef2530.cRK6SQ, { noun: stringResult }) };
  const SearchBar = SearchBar2.SearchBar;
  intl5 = intl6.intl;
  items1[1] = React3(SearchBar, obj6);
  if (isLoading) {
    tmp7Result = tmp7(Loading, {});
  } else if (hasNoFriends) {
    tmp7Result = tmp7(tmp2(16102), {});
  } else {
    const obj7 = { users, getSendState, onInvite: handleInvite };
    tmp7Result = tmp7(tmp2(16103), obj7);
  }
  return React3(ActionSheet, obj);
};
