// Module ID: 11491
// Function ID: 11492
// Name: useContentHarmTypes
// Dependencies: [19, 1243, 2063, 4717, 1389, 558, 576, 6976, 504, 6985, 6980, 2]

// Module 11491 (useContentHarmTypes)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const ObscuredMediaUtils = tmp(6976);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnabledHarmTypesBitmaskForChannelAndAuthorId(arg0, arg1) {
  let closure_0;
  let closure_1;
  let currentUser;
  let first;
  let stateFromStores2;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(6976);
    const eligibleHarmTypesConfigsForContext = tmpResult.getEligibleHarmTypesConfigsForContext();
    cResult[0] = eligibleHarmTypesConfigsForContext;
    first = eligibleHarmTypesConfigsForContext;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function p() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2, RelationshipStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg1) {
    let tmp12;
    let tmp16;
    let tmp15;
    let tmp14;
    let arr6;
    if (cResult[5] === arg0) {
      tmp12 = cResult[6];
    }
    const tmpResult5 = tmp(504);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, tmp12);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStores1];
      const fn2 = function b() {
        let settings;
        return first.reduce((acc, harmType) => {
          const obj = {};
          const merged = Object.assign(acc);
          obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
          return obj;
        }, {});
      };
      const items3 = [first];
      cResult[7] = items2;
      cResult[8] = fn2;
      cResult[9] = items3;
      tmp16 = items3;
      tmp15 = fn2;
      tmp14 = items2;
    } else {
      tmp14 = cResult[7];
      tmp15 = cResult[8];
      tmp16 = cResult[9];
    }
    const tmpResult6 = tmp(504);
    stateFromStores2 = tmpResult6.useStateFromStores(tmp14, tmp15, tmp16, tmp(6985).areSettingsEqual);
    if (null != stateFromStores1) {
      let tmp26;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (arg1 !== id) {
        if (null != stateFromStores) {
          let tmp29;
          if (cResult[12] === stateFromStores1) {
            let tmp28;
            if (cResult[13] === stateFromStores2) {
              tmp28 = cResult[14];
            }
            arr6 = tmp28;
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor(arg0) {
                return null != arg0;
              }
            }
            cResult[15] = B;
            tmp29 = B;
          } else {
            class B {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          const mapped = first.map((harmType) => {
            let tmp3 = null;
            if (null != stateFromStores1) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            const obj = ObscuredMediaUtils;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter(tmp29);
          cResult[12] = stateFromStores1;
          cResult[13] = stateFromStores2;
          cResult[14] = found;
          tmp28 = found;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[11] = tmp27;
        tmp26 = tmp27;
      } else {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      arr6 = tmp26;
    } else {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[10] = tmp24;
        arr6 = tmp24;
      } else {
        class B {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
    }
    if (0 === arr6.length) {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
    } else {
      class B {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    return tmp31;
  }
  class T {
    constructor() {
      const items = [ChannelStore, RelationshipStore];
      const obj = ObscuredMediaUtils;
      return obj.getChannelTypeById(closure_0, closure_1, items);
    }
  }
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = T;
  tmp12 = T;
}) : (function useEnabledHarmTypesBitmaskForChannelAndAuthorId(arg0, arg1) {
  let NONE;
  let closure_0;
  let closure_1;
  let currentUser;
  let stateFromStores1;
  let stateFromStores2;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("ObscuredMediaUtils");
  const eligibleHarmTypesConfigsForContext = obj.getEligibleHarmTypesConfigsForContext();
  let items = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores1, stateFromStores2];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const items = [ChannelStore, RelationshipStore];
    const obj = ObscuredMediaUtils;
    return obj.getChannelTypeById(closure_0, closure_1, items);
  });
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let settings;
    return eligibleHarmTypesConfigsForContext.reduce((acc, harmType) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
      return obj;
    }, {});
  }, items3, require("SensitiveMediaRedactionSettingUtils").areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, arg1, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      const tmp2 = stateFromStores;
      let id;
      const tmp = closure_1;
      if (stateFromStores != null) {
        id = tmp2.id;
      }
      if (tmp !== id) {
        if (null != tmp2) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp3 = null;
            if (null != stateFromStores1) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            const obj = closure_0(closure_1[7]);
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((item) => null != item);
        }
        return [];
      }
    }
  }, items4);
  if (0 === memo.length) {
    NONE = tmp(6980).ContentHarmTypeBitMask.NONE;
  } else {
    const tmpResult = tmp(6976);
    NONE = tmpResult.contentHarmTypesToFlags(memo);
  }
  return NONE;
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnabledHarmTypesBitmaskForMessage(message) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== message) {
    let obj2;
    if (null == message) {
      obj2 = {};
    } else {
      const tmpResult = ObscuredMediaUtils;
      obj2 = tmpResult.getChannelIdAndAuthorIdFromMessage(message);
    }
    cResult[0] = message;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  return closure_7(tmp4.channelId, tmp4.authorId);
}) : (function useEnabledHarmTypesBitmaskForMessage(message) {
  let obj2;
  if (null == message) {
    obj2 = {};
  } else {
    const obj = ObscuredMediaUtils;
    obj2 = obj.getChannelIdAndAuthorIdFromMessage(message);
  }
  return closure_7(obj2.channelId, obj2.authorId);
});
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export const useEnabledHarmTypesBitmaskForChannelAndAuthorId = tmp2;
export const useEnabledHarmTypesBitmaskForMessage = tmp3;
