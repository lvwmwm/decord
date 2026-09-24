// Module ID: 11272
// Function ID: 11273
// Name: GroupDMInviteManagementScreen
// Dependencies: [5, 32, 19, 17, 8688, 10667, 1078, 21, 4790, 558, 568, 1275, 5235, 12, 580, 11273, 7317, 1181, 11291, 11292, 1119, 5871, 1253, 7278, 2]

// Module 11272 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import InstantInviteDefault from "InstantInvite" /* 11273 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteRecord from "InviteRecord" /* 8688 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const ChannelSettingsStore = fn(10667);
const Constants = fn(1078);
({ ChannelSettingsSections: closure_9, Endpoints: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_12 = createStyles.createStyles({ list: { paddingTop: 8 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let SceneLoadingIndicator = channelId;
  const cResult = channelId(568).c(18);
  channelId = channelId.channelId;
  const tmp2 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = noop.useState(first);
  let obj2 = channelId(568);
  const tmp4 = _slicedToArray;
  [tmp7, asyncGeneratorStep] = noop.useState(true);
  if (cResult[1] !== channelId) {
    class T {
      constructor() {
        closure_0 = closure_3(/* F150948 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
    cResult[1] = channelId;
    cResult[2] = T;
    const tmp8 = T;
  } else {
    class T {
      constructor() {
        closure_0 = closure_3(/* F150948 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
  }
  first1(5235)(tmp8);
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  [tmp12, _slicedToArray] = tmp4(noop.useState(21), 2);
  if (cResult[3] !== first1) {
    class T {
      constructor() {
        closure_0 = closure_3(/* F150948 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          closure_0 = closure_3(/* F150948 */ function() { ... });
          promise = (function fetchInvites() { ... })();
          catchPromise = promise.catch(() => { ... });
          return;
        }
      }
      cResult[5] = tmp15;
      const tmp14 = tmp15;
    } else {
      class T {
        constructor() {
          closure_0 = closure_3(/* F150948 */ function() { ... });
          promise = (function fetchInvites() { ... })();
          catchPromise = promise.catch(() => { ... });
          return;
        }
      }
    }
    const sortByResult = tmp9(12).sortBy(first1, tmp14);
    cResult[3] = first1;
    cResult[4] = sortByResult;
    const tmp9Result = tmp9(12);
  } else {
    class T {
      constructor() {
        closure_0 = closure_3(/* F150948 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = closure_4(21);
          return;
        }
      }
      const items1 = [];
      cResult[6] = F;
      cResult[7] = items1;
      let tmp19 = items1;
      const tmp18 = F;
    } else {
      class F {
        constructor() {
          tmp = closure_4(21);
          return;
        }
      }
      tmp19 = cResult[7];
    }
    const effect = obj3.useEffect(tmp18, tmp19);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
      cResult[8] = H;
      const tmp21 = H;
    } else {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (cResult[9] !== first1) {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
      cResult[9] = first1;
      cResult[10] = tmp23;
    } else {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (cResult[11] === first1.length) {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (tmp7) {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
      SceneLoadingIndicator = SceneLoadingIndicator(7317).SceneLoadingIndicator;
      let obj = {};
      let tmp25 = <SceneLoadingIndicator />;
    } else {
      class H {
        constructor(arg0) {
          return channelId.code;
        }
      }
      if (0 === first1.length) {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        let obj4 = { lightSource: tmp9(11291), darkSource: tmp9(11292), title: null, body: null };
        const intl = SceneLoadingIndicator(1119).intl;
        obj4.title = intl.string(SceneLoadingIndicator(1119).t["+nLJkZ"]);
        const intl2 = SceneLoadingIndicator(1119).intl;
        obj4.body = intl2.string(SceneLoadingIndicator(1119).t.F53CAc);
        tmp25 = jsx(SceneLoadingIndicator(1181).EmptyState, { lightSource: tmp9(11291), darkSource: tmp9(11292), title: null, body: null });
      } else {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        let obj5 = { style: tmp2.list, data: tmp13, keyExtractor: tmp21, renderItem: tmp22, initialNumToRender: 10, windowSize: tmp12 };
        tmp25 = <closure_7 style={tmp2.list} data={tmp13} keyExtractor={tmp21} renderItem={tmp22} initialNumToRender={10} windowSize={tmp12} />;
      }
    }
    first1 = first1.length;
    cResult[11] = first1;
    cResult[12] = tmp7;
    cResult[13] = tmp22;
    cResult[14] = tmp13;
    cResult[15] = tmp2;
    cResult[16] = tmp12;
    cResult[17] = tmp25;
  }
}) : ((channelId) => {
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [first, dependencyMap] = noop.useState([]);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  closure_3 = tmp3[1];
  first(5235)(() => {
    closure_0 = async function _fetchInvites2(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const HTTP = channelId(closure_2_2[11]).HTTP;
              const obj4 = { url: closure_2_10.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
              v1 = 1;
              v3 = 1;
              const obj5 = { value: HTTP.get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const body = value.body;
            closure_128_0 = body.map((item) => {
              const obj = {};
              const merged = Object.assign(item);
              ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
              return new closure_1_8(obj);
            });
            v1(closure_128_0);
            v3(false);
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          v3 = tmp;
          throw tmp13;
        }
      }
    };
    (function fetchInvites() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })().catch(() => {
      closure_1_3(false);
    });
  });
  const tmp7 = _slicedToArray(noop.useState(21), 2);
  _slicedToArray = tmp7[1];
  const items = [first];
  const memo = noop.useMemo(() => _modDef12.sortBy(first, (inviter) => {
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
  }), items);
  const effect = noop.useEffect(() => {
    closure_4(21);
  }, []);
  [][0] = first;
  const callback = noop.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp14 = jsx(channelId(7317).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj2 = { lightSource: tmp4(11291), darkSource: tmp4(11292), title: null, body: null };
    const intl = channelId(1119).intl;
    obj2.title = intl.string(channelId(1119).t["+nLJkZ"]);
    const intl2 = channelId(1119).intl;
    obj2.body = intl2.string(channelId(1119).t.F53CAc);
    tmp14 = jsx(channelId(1181).EmptyState, { lightSource: tmp4(11291), darkSource: tmp4(11292), title: null, body: null });
  } else {
    let obj = { style: tmp.list, data: memo, keyExtractor: callback, renderItem: tmp11, initialNumToRender: 10, windowSize: tmp7[0] };
    tmp14 = <closure_7 style={tmp.list} data={memo} keyExtractor={callback} renderItem={tmp11} initialNumToRender={10} windowSize={tmp7[0]} />;
  }
  return tmp14;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagementScreen(arg0) {
  const cResult = channelId(568).c(5);
  ({ channelId, onClose } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === onClose) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT };
      const tmp8 = jsx(tmp(7278).Navigator, { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = {};
  const obj4 = { title: null, headerLeft: null, render: null, impressionName: null };
  const intl = tmp(1119).intl;
  obj4.title = intl.string(channelId(1119).t.OQ9MKu);
  const obj = channelId(568);
  obj4.headerLeft = channelId(5871).getHeaderCloseButton(onClose);
  obj4.render = function render() {
    return <closure_2_13 channelId={channelId} />;
  };
  obj4.impressionName = channelId(1253).ImpressionNames.GDM_SETTINGS_INVITES;
  obj3[constants.INSTANT_INVITES_MANAGEMENT] = obj4;
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null, impressionName: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OQ9MKu);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    obj2.render = function render() {
      return <closure_2_13 channelId={channelId} />;
    };
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES;
    obj[constants.INSTANT_INVITES_MANAGEMENT] = obj2;
    return obj;
  }, items);
  return jsx(channelId(7278).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
}));
