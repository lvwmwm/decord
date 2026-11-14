// Module ID: 16404
// Function ID: 16405
// Name: GameOrganizationInviteActionSheet
// Dependencies: [19, 17, 16349, 21, 5306, 575, 8474, 16405, 16406, 16402, 504, 12539, 1113, 2565, 7951, 6337, 5929, 7825, 16407, 16408, 2]
// Exports: default

// Module 16404 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2565 from "module_2565" /* 2565 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 8474 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12539 */;
import useGameOrganizationInviteSuggestionsDefault from "useGameOrganizationInviteSuggestions" /* 16405 */;
import useLinkedGameOrganizationInviteSenderDefault from "useLinkedGameOrganizationInviteSender" /* 16406 */;
import react from "react" /* 19 */;
import GameOrganizationStore from "GameOrganizationStore" /* 16349 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
  let Stack;
  let formatToPlainStringResult;
  let getSendState;
  let handleInvite;
  let hasNoFriends;
  let intl3;
  let intl4;
  let intl5;
  let isLoading;
  let items2;
  let items3;
  let obj6;
  let search;
  let tmp11Result;
  let users;
  guildId = guildId.guildId;
  const tmp = closure_7();
  ({ users, isLoading, hasNoFriends, search } = useGameOrganizationInviteSuggestionsDefault());
  useGameOrganizationInviteSuggestionsDefault();
  ({ getSendState, handleInvite } = useLinkedGameOrganizationInviteSenderDefault(guildId));
  useLinkedGameOrganizationInviteSenderDefault(guildId);
  const obj = guildId(16402);
  const data = obj.useLinkedGameOrganization(guildId).data;
  const items = [GameOrganizationStore];
  const items1 = [guildId];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GameOrganizationStore.getDisplayNounByGuildId(guildId), items1);
  const tmp8 = getGameOrganizationDisplayNounDefault({ displayNoun: stateFromStores });
  const tmp9 = getGameOrganizationDisplayNounDefault({ displayNoun: stateFromStores, lowercase: true });
  if (null != data) {
    const intl2 = tmp6(1113).intl;
    const obj3 = { orgName: data.name, noun: tmp9 };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(2565).VGOQ4v, obj3);
  } else {
    const intl = tmp6(1113).intl;
    const obj4 = { noun: tmp9 };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(2565).BBk7Qw, obj4);
  }
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl3.string(guildId(1113).t.cpT0Cq), header: closure_6(Stack, obj6), children: tmp11Result };
  const ActionSheet = tmp6(7951).ActionSheet;
  intl3 = tmp6(1113).intl;
  obj6 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: items3 };
  Stack = tmp6(6337).Stack;
  const obj7 = { spacing: nativeDefault.space.PX_4, children: items2 };
  const Stack2 = tmp6(6337).Stack;
  const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl4.formatToPlainString(_modDef2565.EnTIIr, { noun: tmp8 }) };
  const Heading = tmp6(5929).Heading;
  intl4 = tmp6(1113).intl;
  items2 = [closure_5(Heading, obj8), ];
  const obj9 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainStringResult };
  items2[1] = closure_5(guildId(5929).Text, obj9);
  items3 = [closure_6(Stack2, obj7), ];
  const obj10 = { size: "md", round: true, onChange: search, placeholder: intl5.formatToPlainString(_modDef2565.cRK6SQ, { noun: tmp9 }) };
  const SearchBar = tmp6(7825).SearchBar;
  intl5 = tmp6(1113).intl;
  items3[1] = closure_5(SearchBar, obj10);
  if (isLoading) {
    tmp11Result = tmp11(Loading, {});
  } else if (hasNoFriends) {
    const obj11 = { noun: tmp9 };
    tmp11Result = tmp11(tmp2(16407), obj11);
  } else {
    const obj12 = { users, getSendState, onInvite: handleInvite };
    tmp11Result = tmp11(tmp2(16408), obj12);
  }
  return closure_5(ActionSheet, obj5);
};
