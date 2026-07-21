// Module ID: 16220
// Function ID: 125389
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 16220 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12, flex: 1 };
obj.containerInner = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.searchField = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
let closure_13 = obj.createStyles(obj);
const obj1 = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let React;
  let users;
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    const props = props.getProps();
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
  const bans = stateFromStoresObject.bans;
  const dependencyMap = bans;
  const searchQuery = stateFromStoresObject.searchQuery;
  let closure_3 = searchQuery;
  const flattenResult = closure_6.flatten(guildId.contentContainerStyle);
  let paddingBottom;
  if (null != flattenResult) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if ("number" === typeof paddingBottom) {
    num = paddingBottom + importDefault(dependencyMap[8]).space.PX_16;
  }
  const DeveloperMode = arg1(dependencyMap[11]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  React = setting;
  const items2 = [bans, stateFromStoresObject.bansVersion, searchQuery];
  const memo = React.useMemo(() => {
    let iter2;
    const users = [];
    const tmp = callback2(null != bans ? bans : []);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_3;
        let tmp3 = closure_8;
        let user = closure_8.getUser(closure_3(iter.value, 1)[0]);
        if (null != user) {
          let tmp19 = closure_3;
          let tmp7Result = 0 === closure_3.length;
          if (!tmp7Result) {
            let tmp5 = closure_1;
            let tmp6 = closure_2;
            let tmp8 = closure_3;
            let tmp7 = closure_1(closure_2[12]);
            let str = user.username;
            let formatted = closure_3.toLowerCase();
            tmp7Result = tmp7(formatted, str.toLowerCase());
          }
          if (!tmp7Result) {
            let tmp14Result = null != user.globalName;
            if (tmp14Result) {
              let tmp12 = closure_1;
              let tmp13 = closure_2;
              let tmp15 = closure_3;
              let tmp14 = closure_1(closure_2[12]);
              let str2 = user.globalName;
              let formatted1 = closure_3.toLowerCase();
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
  const effect = React.useEffect(() => {
    const guildBansBatch = stateFromStores(bans[13]).fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      callback(closure_2[14]).setSearchQuery("");
    };
  }, items3);
  const items4 = [bans, setting, stateFromStores, users];
  const callback = React.useCallback((arg0, arg1) => {
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
      obj.icon = callback(guildId(bans[16]).Avatar, obj);
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
      obj.trailing = callback(guildId(bans[17]).TableRowArrow, {});
      obj.onPress = function onPress() {
        if (null != value) {
          let obj = {};
          const intl4 = tmp(closure_2[18]).intl;
          obj.label = intl4.string(tmp(closure_2[18]).t.Mp6Z2l);
          obj.isDestructive = true;
          obj.onPress = function onPress() {
            lib2(closure_2[13]).unbanUser(lib2.id, lib.id);
          };
          let flag = [obj];
          if (closure_4) {
            obj = {};
            const intl = tmp(closure_2[18]).intl;
            obj.label = intl.string(tmp(closure_2[18]).t./AXYnE);
            obj.onPress = function onPress() {
              lib(closure_2[19]).copy(lib.id);
              const obj = lib(closure_2[19]);
              lib(closure_2[20]).presentIdCopied();
            };
            flag.push(obj);
          }
          let obj1 = tmp(closure_2[21]);
          obj = { key: "GuildSettingsUnban" };
          obj1 = {};
          const intl2 = tmp(closure_2[18]).intl;
          const obj2 = { user: tmp.username };
          obj1.title = intl2.formatToPlainString(tmp(closure_2[18]).t.XvAG5t, obj2);
          const string = tmp(closure_2[18]).intl.string;
          if (null == value.reason) {
            const intl3 = tmp(closure_2[18]).intl;
            let reason = intl3.string(tmp(closure_2[18]).t.t+2Zci);
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
    let tmp16Result = callback(arg1(dependencyMap[22]).SceneLoadingIndicator, {});
  } else {
    if ("" === searchQuery) {
      if (0 === users.length) {
        obj = { Illustration: arg1(dependencyMap[23]).BansEmpty };
        const intl2 = arg1(dependencyMap[18]).intl;
        obj.title = intl2.string(arg1(dependencyMap[18]).t.ZEiY1D);
        const intl3 = arg1(dependencyMap[18]).intl;
        obj.body = intl3.string(arg1(dependencyMap[18]).t.zfCsAw);
        tmp16Result = callback(arg1(dependencyMap[16]).EmptyState, obj);
      }
    }
    obj1 = { style: tmp.containerInner };
    const obj2 = { style: tmp.searchField };
    const obj3 = { size: "md", onChange: tmp13 };
    obj2.children = callback(arg1(dependencyMap[24]).SearchField, obj3);
    const items5 = [callback(users, obj2), ];
    if ("" !== searchQuery) {
      if (0 === users.length) {
        const obj4 = { Illustration: arg1(dependencyMap[25]).NoResults };
        const intl = arg1(dependencyMap[18]).intl;
        obj4.body = intl.string(arg1(dependencyMap[18]).t.z3cK5j);
        let tmp24 = callback(arg1(dependencyMap[16]).EmptyState, obj4);
      }
      items5[1] = tmp24;
      obj1.children = items5;
      tmp16Result = tmp16(tmp17, obj1);
    }
    const obj5 = { sections: memo.sections, itemSize: tmp4, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp24 = callback(importDefault(dependencyMap[26]), obj5);
    const tmp16 = closure_11;
    const tmp17 = users;
  }
  const items6 = [tmp16Result, callback(arg1(dependencyMap[27]).NavScrim, {})];
  obj.children = items6;
  return closure_11(closure_12, obj);
};
