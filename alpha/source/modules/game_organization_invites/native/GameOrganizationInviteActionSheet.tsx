// Module ID: 14112
// Function ID: 14113
// Name: GameOrganizationInviteActionSheet
// Dependencies: [32, 19, 17, 8747, 2086, 8682, 1096, 21, 5091, 587, 8669, 4768, 1126, 558, 576, 8677, 504, 8700, 14113, 2435, 6892, 5374, 5087, 6737, 14116, 2]

// Module 14112 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import InstantInviteUtils from "InstantInviteUtils" /* 8669 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 8677 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 8700 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 8747 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 14113 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 8682 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cleanupPromise, dependencyMap, inviteSuggestionRows, set;

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
function showTooManyInvitesToast() {
  let intl;
  const obj = { key: "GAME_ORGANIZATION_INVITE_TOO_MANY_INVITES", content: intl.string(intl6.t.fEptJP) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open(obj);
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
  let obj6;
  let obj8;
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
    const fn2 = function b() {
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
    class A {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[5] = items1;
    cResult[6] = A;
    tmp13 = A;
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
    class P {
      constructor(current) {
        closure_5.current = current;
        const obj = InviteSuggestionsActionCreators;
        const result = obj.searchInviteSuggestions(current);
      }
    }
    cResult[7] = P;
    class A {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
  } else {
    class P {
      constructor(current) {
        closure_5.current = current;
        const obj = InviteSuggestionsActionCreators;
        const result = obj.searchInviteSuggestions(current);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        tmp = closure_0(closure_2[17]);
        obj = { omitUserIds: null };
        loadInviteSuggestions = tmp.loadInviteSuggestions;
        set = new Set();
        obj.omitUserIds = set;
        inviteSuggestions = loadInviteSuggestions(obj);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[17]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_4(false));
        return;
      }
    }
    const items2 = [];
    class A {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[9] = items2;
    tmp19 = items2;
    tmp18 = M;
  } else {
    class M {
      constructor() {
        tmp = closure_0(closure_2[17]);
        obj = { omitUserIds: null };
        loadInviteSuggestions = tmp.loadInviteSuggestions;
        set = new Set();
        obj.omitUserIds = set;
        inviteSuggestions = loadInviteSuggestions(obj);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[17]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_4(false));
        return;
      }
    }
    tmp19 = cResult[9];
  }
  const effect = obj4.useEffect(tmp18, tmp19);
  if (cResult[10] !== tmp7) {
    class N {
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
    class A {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[11] = N;
  } else {
    class N {
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
    class N {
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
      class N {
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
        class N {
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
      class A {
        constructor() {
          inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
          found = inviteSuggestionRows.filter(closure_1_13);
          return found.map((item) => item.item);
        }
      }
      tmp41[0] = str;
      tmp41[1] = flag;
      tmp41[2] = tmp25;
      tmp41[3] = tmp26;
      cResult[31] = tmp22;
      cResult[32] = str;
      cResult[33] = flag;
      cResult[34] = tmp25;
      cResult[35] = tmp26;
      cResult[36] = closure_10(tmp22, tmp41);
      const tmp42 = closure_10(tmp22, tmp41);
    }
    const intl = tmp(1126).intl;
    class A {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    const stringResult = intl.string(combined(2435).nVMqjA);
    const ActionSheet = tmp(6892).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
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
      const stringResult1 = obj5.string(tmp(1126).t.cpT0Cq);
      class A {
        constructor() {
          inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
          found = inviteSuggestionRows.filter(closure_1_13);
          return found.map((item) => item.item);
        }
      }
      cResult[30] = stringResult1;
    } else {
      class N {
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
    const Stack = tmp(5374).Stack;
    const PX_16 = tmp31(587).space.PX_16;
    const header = tmp4.header;
    const obj2 = { spacing: tmp31(587).space.PX_4, children: items3 };
    const Stack2 = tmp(5374).Stack;
    const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.centeredText, children: intl2.formatToPlainString(tmp31(2435).EnTIIr, obj6) };
    const Heading = tmp(5087).Heading;
    intl2 = tmp(1126).intl;
    obj6 = { noun: stringResult };
    items3 = [closure_10(Heading, obj3), ];
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.centeredText, children: intl3.formatToPlainString(tmp31(2435).BBk7Qw, obj8) };
    const Text = tmp(5087).Text;
    intl3 = tmp(1126).intl;
    obj8 = { noun: stringResult };
    items3[1] = closure_10(Text, obj7);
    const tmp37 = closure_11(Stack2, obj2);
    const SearchField = tmp(6737).SearchField;
    const intl4 = tmp(1126).intl;
    const obj9 = { noun: stringResult };
    cResult[15] = tmp4.centeredText;
    cResult[16] = tmp4.header;
    cResult[17] = SearchField;
    const formatToPlainStringResult = intl4.formatToPlainString(tmp31(2435).cRK6SQ, obj9);
    class U {
      constructor(arg0) {
        if (null != stateFromStores) {
          sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showTooManyInvitesToast);
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
        sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showTooManyInvitesToast);
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
      sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showTooManyInvitesToast);
    }
  }, items3);
  const intl = guildId(1126).intl;
  const stringResult = intl.string(combined(2435).nVMqjA);
  const obj3 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl2.string(guildId(1126).t.cpT0Cq), header: closure_11(Stack, obj4), children: tmp15Result };
  const ActionSheet = guildId(6892).ActionSheet;
  intl2 = guildId(1126).intl;
  obj4 = { spacing: combined(587).space.PX_16, style: tmp.header, children: items5 };
  Stack = guildId(5374).Stack;
  const obj5 = { spacing: combined(587).space.PX_4, children: items4 };
  const Stack2 = guildId(5374).Stack;
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl3.formatToPlainString(combined(2435).EnTIIr, { noun: stringResult }) };
  const Heading = guildId(5087).Heading;
  intl3 = guildId(1126).intl;
  items4 = [closure_10(Heading, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: intl4.formatToPlainString(combined(2435).BBk7Qw, { noun: stringResult }) };
  const Text = guildId(5087).Text;
  intl4 = guildId(1126).intl;
  items4[1] = closure_10(Text, obj7);
  items5 = [closure_11(Stack2, obj5), ];
  const obj8 = { size: "md", round: true, onChange: callback, placeholder: intl5.formatToPlainString(combined(2435).cRK6SQ, { noun: stringResult }) };
  const SearchField = guildId(6737).SearchField;
  intl5 = guildId(1126).intl;
  items5[1] = closure_10(SearchField, obj8);
  const tmp13 = combined;
  if (first) {
    tmp15Result = tmp15(closure_15, {});
  } else {
    const obj9 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp15Result = tmp15(tmp13(14116), obj9);
  }
  return closure_10(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default tmp3;
