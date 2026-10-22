// Module ID: 15159
// Function ID: 15160
// Name: GameOrganizationInviteActionSheet
// Dependencies: [32, 19, 17, 9107, 4843, 9041, 1098, 21, 4969, 587, 9028, 5649, 1128, 558, 576, 9036, 504, 9058, 15160, 2406, 7283, 5963, 5220, 7130, 15163, 2]

// Module 15159 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import intl6 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9028 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9036 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9058 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9107 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 15160 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9041 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
function showInviteErrorToast() {
  let intl;
  const obj = { text: intl.string(intl6.t.fEptJP) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("GAME_ORGANIZATION_INVITE_SEND_ERROR", obj);
}
let react = react_mod;
const View = react_native.View;
let closure_6 = InstantInviteSendStateStore.useInstantInviteSendStates;
const NOOP_NULL = Constants.NOOP_NULL;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function Loading() {
  let first;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    let num3 = 0;
    do {
      tmp3 = authStore;
      let obj2 = { row: num3 };
      let arr = items.push(authStore(UserPlaceholderRowDefault, obj2, num3));
      num3 = num3 + 1;
    } while (num3 < 10);
    const obj3 = { children: items };
    const tmp3Result = tmp3(View, obj3);
    cResult[0] = tmp3Result;
    first = tmp3Result;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function Loading() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInviteActionSheet(guildId) {
  let closure_2;
  let intl2;
  let intl3;
  let items3;
  let obj7;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp6;
  let tmp8;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(55);
  guildId = guildId.guildId;
  const tmp4 = closure_12();
  const combined = "game-organization-invite:" + guildId;
  if (cResult[0] !== combined) {
    const fn = function u(arg0) {
      return arg0[combined];
    };
    cResult[0] = combined;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const tmp7 = closure_6(tmp6);
  dependencyMap = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn2 = function y() {
      const guild = GuildStore.getGuild(guildId);
      let prop;
      if (guild != null) {
        prop = guild.linkedGameOrganization;
      }
      if (prop == null) {
        prop = null;
      }
      return prop;
    };
    cResult[3] = guildId;
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [InviteSuggestionsStore];
    const fn3 = function w() {
      inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
      const found = inviteSuggestionRows.filter(isInvitableUserRow);
      return found.map((item) => item.item);
    };
    cResult[5] = items1;
    cResult[6] = fn3;
    tmp13 = fn3;
    tmp12 = items1;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp12, tmp13);
  const obj4 = react;
  const tmp16 = stateFromStores(react.useState(true), 2);
  [r10064, react] = tmp16;
  let closure_5 = react.useRef("");
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(current) {
        closure_5.current = current;
        const obj = InviteSuggestionsActionCreators;
        const result = obj.searchInviteSuggestions(current);
      }
    }
    cResult[7] = A;
  } else {
    class A {
      constructor(current) {
        closure_5.current = current;
        const obj = InviteSuggestionsActionCreators;
        const result = obj.searchInviteSuggestions(current);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let ref;
        const tmp = InviteSuggestionsActionCreators;
        let obj = { omitUserIds: new Set() };
        const loadInviteSuggestions = tmp.loadInviteSuggestions;
        new Set();
        const inviteSuggestions = loadInviteSuggestions(obj);
        const nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[17]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        const catchPromise = nextPromise.catch(NOOP_NULL);
        catchPromise.finally(() => closure_1_4(false));
      }
    }
    const items2 = [];
    cResult[8] = N;
    cResult[9] = items2;
    tmp19 = items2;
    tmp18 = N;
  } else {
    class N {
      constructor() {
        let ref;
        const tmp = InviteSuggestionsActionCreators;
        let obj = { omitUserIds: new Set() };
        const loadInviteSuggestions = tmp.loadInviteSuggestions;
        new Set();
        const inviteSuggestions = loadInviteSuggestions(obj);
        const nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[17]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        const catchPromise = nextPromise.catch(NOOP_NULL);
        catchPromise.finally(() => closure_1_4(false));
      }
    }
    tmp19 = cResult[9];
  }
  const effect = obj4.useEffect(tmp18, tmp19);
  if (cResult[10] !== tmp7) {
    class F {
      constructor(arg0) {
        let tmp2;
        if (closure_2 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }
    }
    cResult[10] = tmp7;
    cResult[11] = F;
  } else {
    class F {
      constructor(arg0) {
        let tmp2;
        if (closure_2 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }
    }
  }
  if (cResult[12] === stateFromStores) {
    class F {
      constructor(arg0) {
        let tmp2;
        if (closure_2 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }
    }
    if (cResult[15] === tmp4.centeredText) {
      class F {
        constructor(arg0) {
          let tmp2;
          if (closure_2 != null) {
            tmp2 = tmp[arg0];
          }
          if (tmp2 == null) {
            tmp2 = null;
          }
          return tmp2;
        }
      }
      if (cResult[31] === tmp22) {
        class F {
          constructor(arg0) {
            let tmp2;
            if (closure_2 != null) {
              tmp2 = tmp[arg0];
            }
            if (tmp2 == null) {
              tmp2 = null;
            }
            return tmp2;
          }
        }
      }
      const obj2 = { size: str, round: flag, onChange: tmp25, placeholder: tmp26 };
      cResult[31] = tmp22;
      cResult[32] = str;
      cResult[33] = flag;
      cResult[34] = tmp25;
      cResult[35] = tmp26;
      cResult[36] = closure_10(tmp22, obj2);
      const tmp41 = closure_10(tmp22, obj2);
    }
    const intl = tmp(1128).intl;
    const stringResult = intl.string(combined(2406).nVMqjA);
    const ActionSheet = tmp(7283).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          let tmp2;
          if (closure_2 != null) {
            tmp2 = tmp[arg0];
          }
          if (tmp2 == null) {
            tmp2 = null;
          }
          return tmp2;
        }
      }
      cResult[30] = obj5.string(tmp(1128).t.cpT0Cq);
      const stringResult1 = obj5.string(tmp(1128).t.cpT0Cq);
    } else {
      class F {
        constructor(arg0) {
          let tmp2;
          if (closure_2 != null) {
            tmp2 = tmp[arg0];
          }
          if (tmp2 == null) {
            tmp2 = null;
          }
          return tmp2;
        }
      }
    }
    const Stack = tmp(5963).Stack;
    const PX_16 = tmp31(587).space.PX_16;
    const header = tmp4.header;
    const obj3 = { spacing: combined(587).space.PX_4, children: items3 };
    const Stack2 = tmp(5963).Stack;
    const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.centeredText, children: intl2.formatToPlainString(combined(2406).EnTIIr, obj7) };
    const Heading = tmp(5220).Heading;
    intl2 = tmp(1128).intl;
    obj7 = { noun: stringResult };
    items3 = [closure_10(Heading, obj6), ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.centeredText, children: intl3.formatToPlainString(combined(2406).BBk7Qw, obj9) };
    const Text = tmp(5220).Text;
    intl3 = tmp(1128).intl;
    obj9 = { noun: stringResult };
    items3[1] = closure_10(Text, obj8);
    const tmp37 = closure_11(Stack2, obj3);
    const SearchBar = tmp(7130).SearchBar;
    const intl4 = tmp(1128).intl;
    const obj10 = { noun: stringResult };
    cResult[15] = tmp4.centeredText;
    cResult[16] = tmp4.header;
    cResult[17] = SearchBar;
    const formatToPlainStringResult = intl4.formatToPlainString(combined(2406).cRK6SQ, obj10);
    class U {
      constructor(arg0) {
        if (null != stateFromStores) {
          sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showInviteErrorToast);
        }
      }
    }
    cResult[18] = Stack;
    cResult[19] = ActionSheet;
    cResult[20] = "md";
    cResult[21] = true;
    cResult[22] = tmp17;
    cResult[23] = formatToPlainStringResult;
    cResult[24] = PX_16;
    cResult[25] = header;
    cResult[26] = tmp37;
    cResult[27] = true;
    cResult[28] = true;
    cResult[29] = tmp33;
  }
  class U {
    constructor(arg0) {
      if (null != stateFromStores) {
        sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showInviteErrorToast);
      }
    }
  }
  cResult[12] = stateFromStores;
  cResult[13] = combined;
  cResult[14] = U;
}) : (function GameOrganizationInviteActionSheet(guildId) {
  let Stack;
  let closure_2;
  let closure_4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let items5;
  let obj4;
  let tmp15Result;
  guildId = guildId.guildId;
  react = undefined;
  let tmp = closure_12();
  const combined = "game-organization-invite:" + guildId;
  const tmp3 = closure_6((arg0) => arg0[combined]);
  dependencyMap = tmp3;
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
  const items1 = [InviteSuggestionsStore];
  const obj2 = guildId(504);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(isInvitableUserRow);
    return found.map((item) => item.item);
  });
  const tmp7 = stateFromStores(react.useState(true), 2);
  react = tmp7[1];
  const first = tmp7[0];
  let closure_5 = react.useRef("");
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
        const obj = guildId(closure_2[17]);
        const result = obj.searchInviteSuggestions(tmp.current);
      }
    });
    const catchPromise = nextPromise.catch(NOOP_NULL);
    catchPromise.finally(() => closure_1_4(false));
  }, []);
  const items2 = [tmp3];
  const items3 = [combined, stateFromStores];
  const callback1 = react.useCallback((arg0) => {
    let tmp2;
    if (closure_2 != null) {
      tmp2 = tmp[arg0];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items2);
  const callback2 = react.useCallback((arg0) => {
    if (null != stateFromStores) {
      sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showInviteErrorToast);
    }
  }, items3);
  const intl = guildId(1128).intl;
  const stringResult = intl.string(combined(2406).nVMqjA);
  const obj3 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl2.string(guildId(1128).t.cpT0Cq), header: closure_11(Stack, obj4), children: tmp15Result };
  const ActionSheet = guildId(7283).ActionSheet;
  intl2 = guildId(1128).intl;
  obj4 = { spacing: combined(587).space.PX_16, style: tmp.header, children: items5 };
  Stack = guildId(5963).Stack;
  const obj5 = { spacing: combined(587).space.PX_4, children: items4 };
  const Stack2 = guildId(5963).Stack;
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl3.formatToPlainString(combined(2406).EnTIIr, { noun: stringResult }) };
  const Heading = guildId(5220).Heading;
  intl3 = guildId(1128).intl;
  items4 = [closure_10(Heading, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: intl4.formatToPlainString(combined(2406).BBk7Qw, { noun: stringResult }) };
  const Text = guildId(5220).Text;
  intl4 = guildId(1128).intl;
  items4[1] = closure_10(Text, obj7);
  items5 = [closure_11(Stack2, obj5), ];
  const obj8 = { size: "md", round: true, onChange: callback, placeholder: intl5.formatToPlainString(combined(2406).cRK6SQ, { noun: stringResult }) };
  const SearchBar = guildId(7130).SearchBar;
  intl5 = guildId(1128).intl;
  items5[1] = closure_10(SearchBar, obj8);
  const tmp13 = combined;
  if (first) {
    tmp15Result = tmp15(closure_15, {});
  } else {
    const obj9 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp15Result = tmp15(tmp13(15163), obj9);
  }
  return closure_10(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default tmp3;
