// Module ID: 10768
// Function ID: 10769
// Name: GroupDMInviteManagementScreen
// Dependencies: [5, 32, 19, 17, 8827, 10052, 1087, 21, 4966, 587, 558, 576, 1297, 5245, 12, 10769, 7113, 1202, 10787, 10788, 1128, 7199, 6903, 1275, 7074, 2]

// Module 10768 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import useMountEffectDefault from "useMountEffect" /* 5245 */;
import NavigatorHeader from "NavigatorHeader" /* 6903 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InviteRecord from "InviteRecord" /* 8827 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 10052 */;
import Constants from "Constants" /* 1087 */;
import createStyles from "createStyles" /* 4966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let Platform;
let c9;
let metroImportAll;
let metroRequire;
let obj2;
({ Platform, View: metroRequire } = react_native);
({ ChannelSettingsSections: metroImportAll, Endpoints: c9 } = Constants);
const jsx = Fragment.jsx;
let obj = { listContent: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagement(channelId) {
  let arr2;
  let first;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp8;
  let tmp9;
  const tmp = channelId;
  let tmp2 = dependencyMap;
  let obj = channelId(576);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  let tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [arr2, importDefault] = _slicedToArray(react.useState(first), 2);
  const tmp6 = _slicedToArray(react.useState(first), 2);
  [tmp8, dependencyMap] = _slicedToArray(react.useState(true), 2);
  const tmp7 = _slicedToArray(react.useState(true), 2);
  if (cResult[1] !== channelId) {
    const fn = function f() {
      function fetchInvites() {
        return closure_0(...arguments);
      }
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        let v1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp4;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                tmp4 = undefined;
                const HTTP = tmp4(dependencyMap[12]).HTTP;
                const obj4 = { url: closure_2_9.INSTANT_INVITES(tmp4), retries: 3, oldFormErrors: true, rejectWithError: true };
                const get = HTTP.get;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: get(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              const body = value.body;
              tmp4 = body.map((item) => {
                const obj = {};
                const merged = Object.assign(item);
                ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
                const tmp2 = new closure_1_7(obj);
                return tmp2;
              });
              tmp(tmp4);
              c2(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      const promise = fetchInvites();
      promise.catch(() => {
        closure_1_2(false);
      });
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  useMountEffectDefault(tmp9);
  if (cResult[3] !== arr2) {
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(inviter) {
          inviter = inviter.inviter;
          let str;
          if (inviter != null) {
            if (inviter.username != null) {
              str = str2.toLowerCase();
            }
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
      cResult[5] = T;
      tmp13 = T;
    } else {
      class T {
        constructor(inviter) {
          inviter = inviter.inviter;
          let str;
          if (inviter != null) {
            if (inviter.username != null) {
              str = str2.toLowerCase();
            }
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
    }
    const tmp10Result = _modDef12;
    const sortByResult = tmp10Result.sortBy(arr2, tmp13);
    cResult[3] = arr2;
    cResult[4] = sortByResult;
    tmp12 = sortByResult;
  } else {
    class T {
      constructor(inviter) {
        inviter = inviter.inviter;
        let str;
        if (inviter != null) {
          if (inviter.username != null) {
            str = str2.toLowerCase();
          }
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor(code) {
        return code.code;
      }
    }
    cResult[6] = G;
    tmp15 = G;
  } else {
    class G {
      constructor(code) {
        return code.code;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(invite) {
        ({ marginHorizontal: nativeDefault.space.PX_12 });
        return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
      }
    }
    cResult[7] = F;
    tmp16 = F;
  } else {
    class F {
      constructor(invite) {
        ({ marginHorizontal: nativeDefault.space.PX_12 });
        return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
      }
    }
  }
  if (cResult[8] === arr2) {
    class F {
      constructor(invite) {
        ({ marginHorizontal: nativeDefault.space.PX_12 });
        return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
      }
    }
  }
  if (tmp8) {
    class F {
      constructor(invite) {
        ({ marginHorizontal: nativeDefault.space.PX_12 });
        return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
      }
    }
    tmp17 = jsx(tmp(7113).SceneLoadingIndicator, {});
  } else {
    class F {
      constructor(invite) {
        ({ marginHorizontal: nativeDefault.space.PX_12 });
        return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
      }
    }
    if (0 === arr2.length) {
      class F {
        constructor(invite) {
          ({ marginHorizontal: nativeDefault.space.PX_12 });
          return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
        }
      }
      const EmptyState = tmp(1202).EmptyState;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      tmp17 = <EmptyState lightSource={tmp10(10787)} darkSource={tmp10(10788)} title={intl.string(tmp(1128).t["+nLJkZ"])} body={intl2.string(tmp(1128).t.F53CAc)} />;
    } else {
      class F {
        constructor(invite) {
          ({ marginHorizontal: nativeDefault.space.PX_12 });
          return <metroRequire style={{ marginHorizontal: nativeDefault.space.PX_12 }}>{null}</metroRequire>;
        }
      }
      tmp17 = jsx(tmp(7199).FlashList, { contentContainerStyle: tmp4.listContent, data: tmp12, keyExtractor: tmp15, renderItem: tmp16 });
    }
  }
  cResult[8] = arr2;
  cResult[9] = tmp8;
  cResult[10] = tmp12;
  cResult[11] = tmp4;
  cResult[12] = tmp17;
}) : (function GroupDMInviteManagement(channelId) {
  let closure_2;
  let closure_3;
  let first;
  let first1;
  let tmp13;
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = closure_11();
  [first, dependencyMap] = react.useState([]);
  [first1, closure_3] = react.useState(true);
  first(5245)(() => {
    function fetchInvites() {
      return obj(...arguments);
    }
    let obj = function _fetchInvites2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        let v3;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                const HTTP = closure_2_0(closure_2_2[12]).HTTP;
                const obj4 = { url: closure_2_9.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
                const get = HTTP.get;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: get(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const body = value.body;
              closure_0 = body.map((item) => {
                obj = {};
                const merged = Object.assign(item);
                ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
                const tmp2 = new closure_1_7(obj);
                return tmp2;
              });
              c2(closure_0);
              c3(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      return obj(...arguments);
    };
    const promise = fetchInvites();
    promise.catch(() => {
      closure_1_3(false);
    });
  });
  const items = [first];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.sortBy(first, (inviter) => {
      inviter = inviter.inviter;
      let str;
      if (inviter != null) {
        if (inviter.username != null) {
          str = str2.toLowerCase();
        }
      }
      if (str == null) {
        str = "";
      }
      return str;
    });
  }, items);
  const callback = react.useCallback((code) => code.code, []);
  if (first1) {
    tmp13 = jsx(channelId(7113).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    const EmptyState = channelId(1202).EmptyState;
    const intl = channelId(1128).intl;
    const intl2 = channelId(1128).intl;
    tmp13 = <EmptyState lightSource={tmp5(10787)} darkSource={tmp5(10788)} title={intl.string(channelId(1128).t["+nLJkZ"])} body={intl2.string(channelId(1128).t.F53CAc)} />;
  } else {
    const tmp12 = channelId;
    tmp13 = jsx(channelId(7199).FlashList, { contentContainerStyle: tmp.listContent, data: memo, keyExtractor: callback, renderItem: tmp10 });
  }
  return tmp13;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagementScreen(arg0) {
  let channelId;
  let intl;
  let onClose;
  let tmpResult;
  const obj = channelId(576);
  const cResult = obj.c(5);
  ({ channelId, onClose } = arg0);
  if (cResult[0] === channelId) {
    let tmp4;
    let tmp5;
    if (cResult[1] === onClose) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const tmp8 = jsx(channelId(7074).Navigator, { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = {};
  const INSTANT_INVITES_MANAGEMENT = constants.INSTANT_INVITES_MANAGEMENT;
  const obj4 = {
    title: intl.string(channelId(1128).t.OQ9MKu),
    headerLeft: tmpResult.getHeaderCloseButton(onClose),
    render() {
      const obj = { channelId };
      return closure_2_10(closure_2_12, obj);
    },
    impressionName: channelId(1275).ImpressionNames.GDM_SETTINGS_INVITES
  };
  intl = tmp(1128).intl;
  obj3[INSTANT_INVITES_MANAGEMENT] = obj4;
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
  tmpResult = channelId(6903);
}) : (function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    let closure_0 = channelId;
    let obj = {};
    const INSTANT_INVITES_MANAGEMENT = metroImportAll.INSTANT_INVITES_MANAGEMENT;
    const obj2 = {
      title: intl.string(intl3.t.OQ9MKu),
      headerLeft: obj3.getHeaderCloseButton(onClose),
      render() {
        const obj = { channelId };
        return closure_2_10(closure_2_12, obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES
    };
    intl = intl3.intl;
    obj[INSTANT_INVITES_MANAGEMENT] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  return jsx(channelId(7074).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
}));
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
