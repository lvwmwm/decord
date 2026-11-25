// Module ID: 15323
// Function ID: 15324
// Name: GameOrganizationInviteActionSheet
// Dependencies: [19, 17, 15268, 21, 5012, 575, 10393, 15324, 15325, 15321, 504, 1112, 2650, 7515, 6084, 5603, 7375, 15326, 15327, 2]
// Exports: default

// Module 15323 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 10393 */;
import useGameOrganizationInviteSuggestionsDefault from "useGameOrganizationInviteSuggestions" /* 15324 */;
import useLinkedGameOrganizationInviteSenderDefault from "useLinkedGameOrganizationInviteSender" /* 15325 */;
import react from "react" /* 19 */;
import GameOrganizationStore from "GameOrganizationStore" /* 15268 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function Loading() {
  let tmp;
  const children = [];
  let num = 0;
  do {
    tmp = hasOwnProperty;
    let obj = { row: num };
    let arr = children.push(hasOwnProperty(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return tmp(View, { children });
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default function GameOrganizationInviteActionSheet(guildId) {
  let EnTIIr;
  let Stack;
  let cRK6SQ;
  let formatToPlainString2Result;
  let formatToPlainString3;
  let formatToPlainString4;
  let getSendState;
  let handleInvite;
  let hasNoFriends;
  let intl3;
  let isLoading;
  let items2;
  let items3;
  let obj6;
  let search;
  let str2;
  let str3;
  let str4;
  let tmp9Result;
  let users;
  guildId = guildId.guildId;
  const tmp = closure_7();
  ({ users, isLoading, hasNoFriends, search } = useGameOrganizationInviteSuggestionsDefault());
  useGameOrganizationInviteSuggestionsDefault();
  ({ getSendState, handleInvite } = useLinkedGameOrganizationInviteSenderDefault(guildId));
  useLinkedGameOrganizationInviteSenderDefault(guildId);
  const obj = guildId(15321);
  const data = obj.useLinkedGameOrganization(guildId).data;
  const items = [GameOrganizationStore];
  const items1 = [guildId];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GameOrganizationStore.getDisplayNounByGuildId(guildId), items1);
  if (null != data) {
    const intl2 = tmp6(1112).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj3 = { orgName: data.name, displayNoun: str2 };
    str2 = stateFromStores;
    const VGOQ4v = tmp2(2650).VGOQ4v;
    if (stateFromStores == null) {
      str2 = "other";
    }
    formatToPlainString2Result = formatToPlainString2(VGOQ4v, obj3);
  } else {
    const intl = tmp6(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores;
    const BBk7Qw = tmp2(2650).BBk7Qw;
    if (stateFromStores == null) {
      str = "other";
    }
    const obj4 = { displayNoun: str };
    formatToPlainString2Result = formatToPlainString(BBk7Qw, obj4);
  }
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl3.string(guildId(1112).t.cpT0Cq), header: closure_6(Stack, obj6), children: tmp9Result };
  const ActionSheet = tmp6(7515).ActionSheet;
  intl3 = tmp6(1112).intl;
  obj6 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: items3 };
  Stack = tmp6(6084).Stack;
  const obj7 = { spacing: nativeDefault.space.PX_4, children: items2 };
  const Stack2 = tmp6(6084).Stack;
  const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: formatToPlainString3(EnTIIr, { displayNoun: str3 }) };
  const Heading = tmp6(5603).Heading;
  const intl4 = tmp6(1112).intl;
  formatToPlainString3 = intl4.formatToPlainString;
  str3 = stateFromStores;
  EnTIIr = tmp2(2650).EnTIIr;
  if (stateFromStores == null) {
    str3 = "other";
  }
  items2 = [closure_5(Heading, obj8), ];
  const obj9 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainString2Result };
  items2[1] = closure_5(guildId(5603).Text, obj9);
  items3 = [closure_6(Stack2, obj7), ];
  const obj10 = { size: "md", round: true, onChange: search, placeholder: formatToPlainString4(cRK6SQ, { displayNoun: str4 }) };
  const SearchBar = tmp6(7375).SearchBar;
  const intl5 = tmp6(1112).intl;
  formatToPlainString4 = intl5.formatToPlainString;
  str4 = stateFromStores;
  cRK6SQ = tmp2(2650).cRK6SQ;
  if (stateFromStores == null) {
    str4 = "other";
  }
  items3[1] = closure_5(SearchBar, obj10);
  if (isLoading) {
    tmp9Result = tmp9(Loading, {});
  } else if (hasNoFriends) {
    const obj11 = { displayNoun: stateFromStores };
    tmp9Result = tmp9(tmp2(15326), obj11);
  } else {
    const obj12 = { users, getSendState, onInvite: handleInvite };
    tmp9Result = tmp9(tmp2(15327), obj12);
  }
  return closure_5(ActionSheet, obj5);
};
