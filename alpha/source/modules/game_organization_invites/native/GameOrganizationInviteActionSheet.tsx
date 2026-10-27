// Module ID: 15247
// Function ID: 15248
// Name: GameOrganizationInviteActionSheet
// Dependencies: [32, 19, 17, 9131, 4846, 9065, 1095, 21, 4972, 587, 9052, 558, 576, 9060, 504, 11320, 9082, 11327, 11330, 1125, 2403, 7300, 5978, 5235, 7147, 15248, 2]

// Module 15247 (GameOrganizationInviteActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9052 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9060 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9082 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9131 */;
import getGameOrganizationInviteSendStateKeyDefault from "getGameOrganizationInviteSendStateKey" /* 11320 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11327 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11330 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4846 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9065 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let closure_6 = InstantInviteSendStateStore.useInstantInviteSendStates;
const NOOP_NULL = Constants.NOOP_NULL;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function Loading() {
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
  let closure_3;
  let first;
  let intl2;
  let intl3;
  let items3;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp30;
  let tmp7;
  let tmp9;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(56);
  guildId = guildId.guildId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = GuildStore;
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
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
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] !== stateFromStores) {
    let tmp10 = null;
    if (null != stateFromStores) {
      tmp10 = stateFromStores(11320)(stateFromStores);
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[4];
  }
  dependencyMap = tmp9;
  if (cResult[5] !== tmp9) {
    const fn2 = function x(arg0) {
      let tmp2;
      if (null != closure_2) {
        tmp2 = arg0[tmp];
      }
      return tmp2;
    };
    cResult[5] = tmp9;
    cResult[6] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
  }
  const tmp13 = closure_6(tmp12);
  _slicedToArray = tmp13;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [InviteSuggestionsStore];
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[7] = items1;
    cResult[8] = P;
    tmp15 = P;
    tmp14 = items1;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp14, tmp15);
  const obj4 = react;
  const tmp18 = _slicedToArray(react.useState(true), 2);
  [r10069, react] = tmp18;
  let closure_5 = react.useRef("");
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function k(current) {
      closure_5.current = current;
      const obj = InviteSuggestionsActionCreators;
      const result = obj.searchInviteSuggestions(current);
    };
    cResult[9] = fn3;
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        tmp = closure_0(closure_2[16]);
        obj = { omitUserIds: null };
        loadInviteSuggestions = tmp.loadInviteSuggestions;
        set = new Set();
        obj.omitUserIds = set;
        inviteSuggestions = loadInviteSuggestions(obj);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[16]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_4(false));
        return;
      }
    }
    const items2 = [];
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[11] = items2;
    tmp21 = items2;
    tmp20 = F;
  } else {
    class F {
      constructor() {
        tmp = closure_0(closure_2[16]);
        obj = { omitUserIds: null };
        loadInviteSuggestions = tmp.loadInviteSuggestions;
        set = new Set();
        obj.omitUserIds = set;
        inviteSuggestions = loadInviteSuggestions(obj);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = guildId(closure_2[16]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_4(false));
        return;
      }
    }
    tmp21 = cResult[11];
  }
  const effect = obj4.useEffect(tmp20, tmp21);
  if (cResult[12] !== tmp13) {
    class U {
      constructor(arg0) {
        let tmp2;
        if (closure_3 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }
    }
    cResult[12] = tmp13;
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[13] = U;
  } else {
    class U {
      constructor(arg0) {
        let tmp2;
        if (closure_3 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }
    }
  }
  if (cResult[14] !== stateFromStores) {
    class X {
      constructor(arg0) {
        if (null != stateFromStores) {
          const tmp5 = sendGameOrganizationInviteDefault;
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    cResult[14] = stateFromStores;
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[15] = X;
  } else {
    class X {
      constructor(arg0) {
        if (null != stateFromStores) {
          const tmp5 = sendGameOrganizationInviteDefault;
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  if (cResult[16] === tmp4.centeredText) {
    class X {
      constructor(arg0) {
        if (null != stateFromStores) {
          const tmp5 = sendGameOrganizationInviteDefault;
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    if (cResult[32] === tmp25) {
      class X {
        constructor(arg0) {
          if (null != stateFromStores) {
            const tmp5 = sendGameOrganizationInviteDefault;
            const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
            tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
    }
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    tmp36[0] = str;
    tmp36[1] = flag;
    tmp36[2] = tmp26;
    tmp36[3] = tmp27;
    cResult[32] = tmp25;
    cResult[33] = str;
    cResult[34] = flag;
    cResult[35] = tmp26;
    cResult[36] = tmp27;
    cResult[37] = closure_10(tmp25, tmp36);
    const tmp37 = closure_10(tmp25, tmp36);
  }
  const intl = tmp(1125).intl;
  const stringResult = intl.string(stateFromStores(2403).nVMqjA);
  const ActionSheet = tmp(7300).ActionSheet;
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0) {
        if (null != stateFromStores) {
          const tmp5 = sendGameOrganizationInviteDefault;
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    const stringResult1 = obj5.string(tmp(1125).t.cpT0Cq);
    class P {
      constructor() {
        inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
        found = inviteSuggestionRows.filter(closure_1_13);
        return found.map((item) => item.item);
      }
    }
    cResult[31] = stringResult1;
    tmp30 = stringResult1;
  } else {
    class X {
      constructor(arg0) {
        if (null != stateFromStores) {
          const tmp5 = sendGameOrganizationInviteDefault;
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  const Stack = tmp(5978).Stack;
  const PX_16 = tmp28(587).space.PX_16;
  const header = tmp4.header;
  const obj2 = { spacing: stateFromStores(587).space.PX_4, children: items3 };
  const Stack2 = tmp(5978).Stack;
  const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.centeredText, children: intl2.formatToPlainString(stateFromStores(2403).EnTIIr, { noun: stringResult }) };
  const Heading = tmp(5235).Heading;
  intl2 = tmp(1125).intl;
  items3 = [closure_10(Heading, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.centeredText, children: intl3.formatToPlainString(stateFromStores(2403).BBk7Qw, { noun: stringResult }) };
  const Text = tmp(5235).Text;
  intl3 = tmp(1125).intl;
  items3[1] = closure_10(Text, obj6);
  const tmp32 = closure_11(Stack2, obj2);
  const SearchBar = tmp(7147).SearchBar;
  const intl4 = tmp(1125).intl;
  cResult[16] = tmp4.centeredText;
  cResult[17] = tmp4.header;
  cResult[18] = SearchBar;
  cResult[19] = Stack;
  cResult[20] = ActionSheet;
  cResult[21] = "md";
  cResult[22] = true;
  cResult[23] = tmp19;
  cResult[24] = intl4.formatToPlainString(stateFromStores(2403).cRK6SQ, { noun: stringResult });
  cResult[25] = PX_16;
  cResult[26] = header;
  cResult[27] = tmp32;
  cResult[28] = true;
  cResult[29] = true;
  cResult[30] = tmp30;
  const formatToPlainStringResult = intl4.formatToPlainString(stateFromStores(2403).cRK6SQ, { noun: stringResult });
}) : (function GameOrganizationInviteActionSheet(guildId) {
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
    tmp5 = stateFromStores(11320)(stateFromStores);
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
        const obj = guildId(closure_2[16]);
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
  const intl = tmp2(1125).intl;
  const stringResult = intl.string(stateFromStores(2403).nVMqjA);
  const obj2 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl2.string(tmp2(1125).t.cpT0Cq), header: closure_11(Stack, obj3), children: tmp17Result };
  const ActionSheet = tmp2(7300).ActionSheet;
  intl2 = tmp2(1125).intl;
  obj3 = { spacing: stateFromStores(587).space.PX_16, style: tmp.header, children: items5 };
  Stack = tmp2(5978).Stack;
  const obj4 = { spacing: stateFromStores(587).space.PX_4, children: items4 };
  const Stack2 = tmp2(5978).Stack;
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl3.formatToPlainString(stateFromStores(2403).EnTIIr, { noun: stringResult }) };
  const Heading = tmp2(5235).Heading;
  intl3 = tmp2(1125).intl;
  items4 = [closure_10(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: intl4.formatToPlainString(stateFromStores(2403).BBk7Qw, { noun: stringResult }) };
  const Text = tmp2(5235).Text;
  intl4 = tmp2(1125).intl;
  items4[1] = closure_10(Text, obj6);
  items5 = [closure_11(Stack2, obj4), ];
  const obj7 = { size: "md", round: true, onChange: callback, placeholder: intl5.formatToPlainString(stateFromStores(2403).cRK6SQ, { noun: stringResult }) };
  const SearchBar = tmp2(7147).SearchBar;
  intl5 = tmp2(1125).intl;
  items5[1] = closure_10(SearchBar, obj7);
  const tmp15 = stateFromStores;
  if (first) {
    tmp17Result = tmp17(closure_14, {});
  } else {
    const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp17Result = tmp17(tmp15(15248), obj8);
  }
  return closure_10(ActionSheet, obj2);
});
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default tmp3;
