// Module ID: 15746
// Function ID: 15747
// Name: GameOrganizationInviteActionSheet
// Dependencies: [32, 19, 17, 9180, 4880, 9114, 1083, 21, 5009, 575, 9101, 9109, 504, 11614, 9131, 11621, 11624, 1114, 2405, 7360, 6022, 5619, 7212, 15747, 2]
// Exports: default

// Module 15746 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9101 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9109 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9131 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9180 */;
import getGameOrganizationInviteSendStateKeyDefault from "getGameOrganizationInviteSendStateKey" /* 11614 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11621 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11624 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9114 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, inviteSuggestionRows;

let c10;
let obj2;
let unpackModuleId;
function isInvitableUserRow(type) {
  let tmp3 = type.type === InstantInviteUtils.RowTypes.FRIEND;
  if (!tmp3) {
    tmp3 = type.type === InstantInviteUtils.RowTypes.DM;
  }
  if (tmp3) {
    tmp3 = !type.item.bot;
  }
  return tmp3;
}
function Loading() {
  let tmp;
  const children = [];
  let num = 0;
  do {
    tmp = authStore;
    let obj = { row: num };
    let arr = children.push(authStore(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return tmp(View, { children });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let closure_6 = InstantInviteSendStateStore.useInstantInviteSendStates;
const NOOP_NULL = Constants.NOOP_NULL;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default function GameOrganizationInviteActionSheet(guildId) {
  let Stack;
  let closure_2;
  let closure_3;
  let closure_4;
  let first;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let items5;
  let obj3;
  let tmp17Result;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_5;
  let tmp = closure_12();
  let tmp2 = guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.linkedGameOrganization;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  let tmp5 = null;
  if (null != stateFromStores) {
    let tmp6 = stateFromStores;
    tmp5 = stateFromStores(11614)(stateFromStores);
  }
  dependencyMap = tmp5;
  const tmp7 = closure_6((arg0) => {
    let tmp2;
    if (null != closure_2) {
      tmp2 = arg0[tmp];
    }
    return tmp2;
  });
  _slicedToArray = tmp7;
  const items1 = [InviteSuggestionsStore];
  const tmp2Result = tmp2(504);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items1, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(isInvitableUserRow);
    return found.map((item) => item.item);
  });
  [first, react] = react.useState(true);
  closure_5 = react.useRef("");
  const callback = react.useCallback((current) => {
    closure_5.current = current;
    const obj = InviteSuggestionsActionCreators;
    const result = obj.searchInviteSuggestions(current);
  }, []);
  const effect = react.useEffect(() => {
    let ref;
    const tmp = InviteSuggestionsActionCreators;
    let obj = { omitUserIds: new Set() };
    const loadInviteSuggestions = tmp.loadInviteSuggestions;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
    const nextPromise = inviteSuggestions.then(() => {
      if ("" !== ref.current) {
        const obj = guildId(closure_2[14]);
        const result = obj.searchInviteSuggestions(tmp.current);
      }
    });
    const catchPromise = nextPromise.catch(NOOP_NULL);
    catchPromise.finally(() => closure_1_4(false));
  }, []);
  const items2 = [tmp7];
  const items3 = [stateFromStores];
  const callback1 = react.useCallback((arg0) => {
    let tmp2;
    if (closure_3 != null) {
      tmp2 = tmp[arg0];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items2);
  const callback2 = react.useCallback((arg0) => {
    if (null != stateFromStores) {
      const tmp5 = sendGameOrganizationInviteDefault;
      const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
      tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
    }
  }, items3);
  const intl = tmp2(1114).intl;
  const stringResult = intl.string(stateFromStores(2405).nVMqjA);
  const obj2 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl2.string(tmp2(1114).t.cpT0Cq), header: closure_11(Stack, obj3), children: tmp17Result };
  const ActionSheet = tmp2(7360).ActionSheet;
  intl2 = tmp2(1114).intl;
  obj3 = { spacing: stateFromStores(575).space.PX_16, style: tmp.header, children: items5 };
  Stack = tmp2(6022).Stack;
  const obj4 = { spacing: stateFromStores(575).space.PX_4, children: items4 };
  const Stack2 = tmp2(6022).Stack;
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl3.formatToPlainString(stateFromStores(2405).EnTIIr, { noun: stringResult }) };
  const Heading = tmp2(5619).Heading;
  intl3 = tmp2(1114).intl;
  items4 = [closure_10(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: intl4.formatToPlainString(stateFromStores(2405).BBk7Qw, { noun: stringResult }) };
  const Text = tmp2(5619).Text;
  intl4 = tmp2(1114).intl;
  items4[1] = closure_10(Text, obj6);
  items5 = [closure_11(Stack2, obj4), ];
  const obj7 = { size: "md", round: true, onChange: callback, placeholder: intl5.formatToPlainString(stateFromStores(2405).cRK6SQ, { noun: stringResult }) };
  const SearchBar = tmp2(7212).SearchBar;
  intl5 = tmp2(1114).intl;
  items5[1] = closure_10(SearchBar, obj7);
  const tmp15 = stateFromStores;
  if (first) {
    tmp17Result = tmp17(Loading, {});
  } else {
    const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp17Result = tmp17(tmp15(15747), obj8);
  }
  return closure_10(ActionSheet, obj2);
};
