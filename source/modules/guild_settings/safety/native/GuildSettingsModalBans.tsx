// Module ID: 16345
// Function ID: 127604
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 1838, 1849, 8439, 33, 4130, 689, 566, 8832, 3803, 5045, 5048, 8438, 5165, 1273, 5171, 1212, 5492, 3830, 5497, 5585, 16346, 5772, 8502, 9244, 5448, 2]
// Exports: default

// Module 16345 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "NavScrim";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
_createForOfIteratorHelperLoose.containerInner = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.searchField = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  let setting;
  let users;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(bans[9]);
  const items = [closure_7];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let obj1 = guildId(bans[9]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    const props = outer1_9.getProps();
    const searchQuery = props.searchQuery;
    const obj = { bans: props.bans };
    let str = "";
    if (null != searchQuery) {
      str = searchQuery;
    }
    obj.searchQuery = str;
    obj.bansVersion = props.bansVersion;
    return obj;
  });
  bans = stateFromStoresObject.bans;
  let searchQuery = stateFromStoresObject.searchQuery;
  const flattenResult = closure_6.flatten(guildId.contentContainerStyle);
  let paddingBottom;
  if (null != flattenResult) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if ("number" === typeof paddingBottom) {
    num = paddingBottom + stateFromStores(bans[8]).space.PX_16;
  }
  const DeveloperMode = guildId(bans[11]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items2 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = setting.useMemo(() => {
    let iter2;
    const users = [];
    const tmp = outer1_14(null != bans ? bans : []);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = searchQuery;
        let tmp3 = outer1_8;
        let user = outer1_8.getUser(searchQuery(iter.value, 1)[0]);
        if (null != user) {
          let tmp19 = searchQuery;
          let tmp7Result = 0 === searchQuery.length;
          if (!tmp7Result) {
            let tmp5 = stateFromStores;
            let tmp6 = bans;
            let tmp8 = searchQuery;
            let tmp7 = stateFromStores(bans[12]);
            let str = user.username;
            let formatted = searchQuery.toLowerCase();
            tmp7Result = tmp7(formatted, str.toLowerCase());
          }
          if (!tmp7Result) {
            let tmp14Result = null != user.globalName;
            if (tmp14Result) {
              let tmp12 = stateFromStores;
              let tmp13 = bans;
              let tmp15 = searchQuery;
              let tmp14 = stateFromStores(bans[12]);
              let str2 = user.globalName;
              let formatted1 = searchQuery.toLowerCase();
              tmp14Result = tmp14(formatted1, str2.toLowerCase());
            }
            tmp7Result = tmp14Result;
          }
          if (tmp7Result) {
            let arr = users.push(user);
          }
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    const sorted = users.sort((username, username2) => {
      const formatted = username.username.toLowerCase();
      return formatted.localeCompare(username2.username.toLowerCase());
    });
    const sections = [users.length];
    return { users, sections };
  }, items2);
  users = memo.users;
  const items3 = [guildId];
  const effect = setting.useEffect(() => {
    const guildBansBatch = stateFromStores(bans[13]).fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      stateFromStores(bans[14]).setSearchQuery("");
    };
  }, items3);
  const items4 = [bans, setting, stateFromStores, users];
  const callback = setting.useCallback((arg0, arg1) => {
    const guildId = tmp;
    let value;
    if (null != bans) {
      value = bans.get(tmp.id);
    }
    const stateFromStores = value;
    let tmp5Result = null;
    if (null != value) {
      let obj = { start: 0 === arg1, end: arg1 === users.length - 1 };
      obj = { size: guildId(bans[16]).AvatarSizes.SMALL, user: tmp };
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      obj.guildId = id;
      obj.icon = outer1_10(guildId(bans[16]).Avatar, obj);
      let username = tmp.globalName;
      if (null == username) {
        username = tmp.username;
      }
      obj.label = username;
      username = null;
      if (null != tmp.globalName) {
        username = tmp.username;
      }
      obj.subLabel = username;
      obj.trailing = outer1_10(guildId(bans[17]).TableRowArrow, {});
      obj.onPress = function onPress() {
        if (null != value) {
          let obj = {};
          const intl4 = guildId(bans[18]).intl;
          obj.label = intl4.string(guildId(bans[18]).t.Mp6Z2l);
          obj.isDestructive = true;
          obj.onPress = function onPress() {
            stateFromStores(bans[13]).unbanUser(value.id, outer1_0.id);
          };
          let flag = [obj];
          if (outer1_4) {
            obj = {};
            const intl = guildId(bans[18]).intl;
            obj.label = intl.string(guildId(bans[18]).t["/AXYnE"]);
            obj.onPress = function onPress() {
              guildId(bans[19]).copy(outer1_0.id);
              const obj = guildId(bans[19]);
              guildId(bans[20]).presentIdCopied();
            };
            flag.push(obj);
          }
          let obj1 = guildId(bans[21]);
          obj = { key: "GuildSettingsUnban" };
          obj1 = {};
          const intl2 = guildId(bans[18]).intl;
          const obj2 = { user: tmp.username };
          obj1.title = intl2.formatToPlainString(guildId(bans[18]).t.XvAG5t, obj2);
          const string = guildId(bans[18]).intl.string;
          if (null == value.reason) {
            const intl3 = guildId(bans[18]).intl;
            let reason = intl3.string(guildId(bans[18]).t["t+2Zci"]);
            const _HermesInternal = HermesInternal;
            obj1.subtitle = "" + tmp7 + ": " + reason;
            obj.header = obj1;
            obj.options = flag;
            flag = false;
            obj.hasIcons = false;
            obj = obj1.showSimpleActionSheet(obj);
          }
          reason = value.reason;
        }
      };
      tmp5Result = tmp5(guildId(bans[15]).TableRow, obj);
    }
    return tmp5Result;
  }, items4);
  obj = {};
  if (null == bans) {
    let tmp16Result = callback(guildId(bans[22]).SceneLoadingIndicator, {});
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        obj = { Illustration: guildId(bans[23]).BansEmpty };
        let intl2 = guildId(bans[18]).intl;
        obj.title = intl2.string(guildId(bans[18]).t.ZEiY1D);
        let intl3 = guildId(bans[18]).intl;
        obj.body = intl3.string(guildId(bans[18]).t.zfCsAw);
        tmp16Result = callback(guildId(bans[16]).EmptyState, obj);
      }
    }
    obj1 = { style: tmp.containerInner };
    let obj2 = { style: tmp.searchField };
    const obj3 = { size: "md", onChange: tmp13 };
    obj2.children = callback(guildId(bans[24]).SearchField, obj3);
    const items5 = [callback(users, obj2), ];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj4 = { Illustration: guildId(bans[25]).NoResults };
        let intl = guildId(bans[18]).intl;
        obj4.body = intl.string(guildId(bans[18]).t.z3cK5j);
        let tmp24 = callback(guildId(bans[16]).EmptyState, obj4);
      }
      items5[1] = tmp24;
      obj1.children = items5;
      tmp16Result = tmp16(tmp17, obj1);
    }
    const obj5 = { sections: memo.sections, itemSize: tmp4, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp24 = callback(stateFromStores(bans[26]), obj5);
    tmp16 = closure_11;
    tmp17 = users;
  }
  const items6 = [tmp16Result, callback(guildId(bans[27]).NavScrim, {})];
  obj.children = items6;
  return closure_11(closure_12, obj);
};
