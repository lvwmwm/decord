// Module ID: 17532
// Function ID: 17533
// Name: useGetOrFetchChannelOverwriteUsers
// Dependencies: [32, 19, 2125, 1390, 1998, 558, 576, 504, 17533, 6097, 1388, 2]

// Module 17532 (useGetOrFetchChannelOverwriteUsers)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import createAggregatorDefault from "createAggregator" /* 17533 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f130345 = (id) => id.id;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  let closure_0;
  let first;
  let first1;
  let items5;
  let length;
  let tmp10;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let tmp2 = first1;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return GuildMemberStore.getMemberIds(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === stateFromStoresArray) {
    let tmp9;
    if (cResult[5] === arg1) {
      tmp9 = cResult[6];
    }
    const tmp14 = _slicedToArray(tmp9, 2);
    first1 = tmp14[0];
    _slicedToArray = tmp16;
    if (cResult[9] === arg0) {
      let tmp17;
      let tmp18;
      let tmp21;
      let tmp23;
      let tmp24;
      if (cResult[10] === tmp14[1]) {
        tmp17 = cResult[11];
        tmp18 = cResult[12];
      }
      const effect = react.useEffect(tmp17, tmp18);
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        cResult[13] = items2;
        tmp21 = items2;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] !== first1) {
        const fn3 = function p() {
          const mapped = first1.map(UserStore.getUser);
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        const items3 = [first1];
        cResult[14] = first1;
        cResult[15] = fn3;
        cResult[16] = items3;
        class S {
          constructor() {
            let tmp2 = length.length > 0;
            const tmp = length;
            if (tmp2) {
              tmp2 = null != closure_0;
            }
            if (tmp2) {
              const obj = GuildActionCreatorsDefault;
              const membersById = obj.requestMembersById(closure_0, tmp, false);
            }
          }
        }
        tmp23 = fn3;
      } else {
        tmp23 = cResult[15];
        tmp24 = cResult[16];
      }
      const tmpResult2 = tmp(tmp2[7]);
      return tmpResult2.useStateFromStoresArray(tmp21, tmp23, tmp24);
    }
    class S {
      constructor() {
        let tmp2 = length.length > 0;
        const tmp = length;
        if (tmp2) {
          tmp2 = null != closure_0;
        }
        if (tmp2) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(closure_0, tmp, false);
        }
      }
    }
    const items4 = [tmp14[1], arg0];
    cResult[9] = arg0;
    cResult[10] = tmp14[1];
    cResult[11] = S;
    cResult[12] = items4;
    tmp18 = items4;
    tmp17 = S;
  }
  if (cResult[7] !== stateFromStoresArray) {
    const fn2 = function y(arg0) {
      return stateFromStoresArray.includes(arg0);
    };
    cResult[7] = stateFromStoresArray;
    cResult[8] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[8];
  }
  const tmp11 = stateFromStoresArray(tmp2[8]);
  if (null == arg1) {
    items5 = [];
  } else {
    const _Object = Object;
    const values = Object.values(arg1);
    const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
    items5 = found.map(f130345);
  }
  const tmp11Result = tmp11(items5, tmp10);
  cResult[4] = stateFromStoresArray;
  cResult[5] = arg1;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : (function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  let closure_0;
  let first;
  let length;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [GuildMemberStore];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildMemberStore.getMemberIds(closure_0), items1);
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(react.useMemo(() => {
    let items;
    const tmp = createAggregatorDefault;
    if (null == closure_1) {
      items = [];
    } else {
      const _Object = Object;
      const values = Object.values(tmp2);
      const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
      items = found.map(f130345);
    }
    return tmp(items, (arg0) => stateFromStoresArray.includes(arg0));
  }, items2), 2);
  first = tmp2[0];
  react = tmp4;
  const items3 = [tmp4, arg0];
  const effect = react.useEffect(() => {
    let tmp2 = length.length > 0;
    const tmp = length;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(closure_0, tmp, false);
    }
  }, items3);
  const items4 = [UserStore];
  const items5 = [first];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items4, () => {
    const mapped = first.map(UserStore.getUser);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items5);
});
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default tmp2;
