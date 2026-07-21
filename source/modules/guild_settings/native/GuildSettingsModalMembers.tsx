// Module ID: 15171
// Function ID: 114393
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15171 (_createForOfIteratorHelperLoose)
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
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const GuildSettingsSections = arg1(dependencyMap[11]).GuildSettingsSections;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[12]));
const items = [arg1(dependencyMap[13]).AutocompleterResultTypes.USER];
let obj1 = arg1(dependencyMap[14]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[15]).space.PX_12, flex: 1 };
obj.containerInner = obj;
obj1 = { paddingVertical: importDefault(dependencyMap[15]).space.PX_12 };
obj.searchFieldContainer = obj1;
obj.roleList = {};
let closure_19 = obj1.createStyles(obj);
let closure_20 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const arg1 = guild;
  const guildMember = guild.guildMember;
  const importDefault = guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  let obj = arg1(closure_2[16]);
  closure_2 = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    let tmp3 = guildMember.userId === guild.ownerId;
    if (tmp3) {
      tmp3 = id.getId() === guild.ownerId;
    }
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((id) => callback(guildMember(closure_2[17]), { role: id, guildId: guild.id }, id.id));
    let formatToPlainStringResult;
    if (found.length > 0) {
      const user = user.getUser(guildMember.userId);
      let obj1 = importDefault(closure_2[18]);
      let nickname = obj1.getNickname(guild.id, undefined, user);
      if (null == nickname) {
        nickname = importDefault(closure_2[19]).getGlobalName(user);
        const obj3 = importDefault(closure_2[19]);
      }
      if (null == nickname) {
        let username;
        if (null != user) {
          username = user.username;
        }
        nickname = username;
      }
      let str = "";
      if (null != nickname) {
        str = nickname;
      }
      const mapped1 = found.map((name) => name.name);
      const joined = mapped1.join(", ");
      const intl = arg1(closure_2[20]).intl;
      obj = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(arg1(closure_2[20]).t.6eGpWx, obj);
    }
    obj = { userId: guildMember.userId, guildId: guild.id, accessibilityLabel: formatToPlainStringResult };
    let tmp20 = null;
    if (mapped.length > 0) {
      obj1 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp20 = callback2(View, obj1);
    }
    obj.subLabel = tmp20;
    obj.disabled = tmp3;
    obj.onPress = function onPress() {

    };
    obj.arrow = true;
    obj.start = start;
    obj.end = end;
    return callback2(importDefault(closure_2[21]), obj);
  }
  const tmp = callback3();
});
const tmp2 = arg1(dependencyMap[12]);
const memoResult = importAllResult.memo(function GuildSettingsModalMembers(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const tmp2 = callback3();
  let obj1 = arg1(dependencyMap[23]);
  let items = [closure_10, closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: store.getGuild(guildId), guildLoaded: null != store.getGuild(guildId), sortedGuildRoles: first.getSortedRoles(guildId) }));
  const guild = stateFromStoresObject.guild;
  const dependencyMap = guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  let callback = guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let obj2 = arg1(dependencyMap[23]);
  const items1 = [closure_11, closure_12];
  const items2 = [guild];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(guild[24]).canPruneGuildMembers(guild, currentUser.getCurrentUser(), first1);
      const obj = guildId(guild[24]);
    }
    return canPruneGuildMembersResult;
  }, items2);
  const View = stateFromStores;
  let obj3 = arg1(dependencyMap[23]);
  const items3 = [closure_13];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  let closure_6 = stateFromStores1;
  let obj4 = arg1(dependencyMap[23]);
  const items4 = [closure_7];
  const items5 = [guildId, guildLoaded];
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    const memberCount = stateFromStores2.getMemberCount(guildId);
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    let tmp2 = num > 0;
    if (tmp2) {
      tmp2 = num <= 10000;
    }
    if (tmp2) {
      tmp2 = guildLoaded;
    }
    return tmp2;
  }, items5);
  closure_7 = stateFromStores2;
  let obj5 = arg1(dependencyMap[23]);
  const items6 = [closure_8];
  const items7 = [guildId];
  const stateFromStoresArray = obj5.useStateFromStoresArray(items6, () => stateFromStoresArray.getMembers(guildId), items7);
  closure_8 = stateFromStoresArray;
  const tmp8 = callback(sortedGuildRoles.useState([]), 2);
  const first = tmp8[0];
  closure_9 = first;
  closure_10 = tmp8[1];
  const tmp10 = callback(sortedGuildRoles.useState(false), 2);
  const first1 = tmp10[0];
  closure_11 = first1;
  closure_12 = tmp10[1];
  const tmp12 = callback(sortedGuildRoles.useState(false), 2);
  const first2 = tmp12[0];
  closure_13 = first2;
  let closure_14 = tmp12[1];
  const first3 = callback(sortedGuildRoles.useState(() => {
    let tmp = navigation(guild[13]);
    tmp = new tmp((arg0) => {
      callback(arg0);
      callback2(false);
    }, first4, 100);
    return tmp;
  }), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const memo = importAllResult.useMemo(() => {
    let iter2;
    let iter5;
    function guildRoleIsFiltered(member) {
      let tmp = null != closure_6;
      if (tmp) {
        tmp = !callback(closure_2[25]).isEveryoneRoleId(callback, closure_6);
        const obj = callback(closure_2[25]);
      }
      if (tmp) {
        const roles = member.roles;
        tmp = -1 === roles.indexOf(closure_6);
      }
      return tmp;
    }
    const items = [];
    if (first1) {
      let tmpResult = tmp(first);
      const iter3 = tmpResult();
      let iter4 = iter3;
      if (!iter3.done) {
        do {
          let value = iter4.value;
          let tmp12 = closure_0;
          let tmp13 = closure_2;
          if (value.type === closure_0(closure_2[13]).AutocompleterResultTypes.USER) {
            let tmp14 = closure_8;
            let tmp15 = closure_0;
            let member = closure_8.getMember(closure_0, value.record.id);
            let tmp17 = null == member || guildRoleIsFiltered(member);
            let tmp18 = member;
            if (!tmp17) {
              let arr = items.push(member);
              let tmp20 = member;
            }
          }
          iter5 = tmpResult();
          iter4 = iter5;
        } while (!iter5.done);
      }
    } else {
      tmpResult = tmp(stateFromStoresArray);
      let iter = tmpResult();
      if (!iter.done) {
        do {
          value = iter.value;
          let tmp5 = closure_12;
          let tmp6 = null == closure_12.getUser(value.userId) || guildRoleIsFiltered(value);
          if (!tmp6) {
            arr = items.push(value);
          }
          iter2 = tmpResult();
          iter = iter2;
        } while (!iter2.done);
      }
      const sorted = items.sort((nick, nick2) => {
        nick = nick.nick;
        if (null == nick) {
          const user = authStore.getUser(nick.userId);
          let username;
          if (null != user) {
            username = user.username;
          }
          nick = username;
        }
        let str = "";
        let str2 = "";
        if (null != nick) {
          str2 = nick;
        }
        nick2 = nick2.nick;
        if (null == nick2) {
          const user1 = authStore.getUser(nick2.userId);
          let username1;
          if (null != user1) {
            username1 = user1.username;
          }
          nick2 = username1;
        }
        if (null != nick2) {
          str = nick2;
        }
        return str2.localeCompare(str);
      });
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  const items9 = [stateFromStores, guild, navigation];
  const effect = importAllResult.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let obj = {};
        if (null != closure_2) {
          obj = { guild: closure_2, canPrune: closure_5 };
          let membersManagementActions = callback(closure_2[27]).getMembersManagementActions(obj);
          const obj2 = callback(closure_2[27]);
        } else {
          membersManagementActions = [];
        }
        obj.items = membersManagementActions;
        obj.children = function children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { source: callback2(closure_2[29]) };
          const intl = callback(closure_2[20]).intl;
          obj.accessibilityLabel = intl.string(callback(closure_2[20]).t.ogxXGq);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          return callback3(callback(closure_2[28]).HeaderActionButton, obj);
        };
        return closure_15(callback(closure_2[26]).ContextMenu, obj);
      }
    });
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = importAllResult.useEffect(() => {
    if (stateFromStores2) {
      const obj = navigation(guild[30]);
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = importAllResult.useEffect(() => {
    if (guildLoaded) {
      let obj = {};
      obj = { guild: guildId, strict: true };
      obj.userFilters = obj;
      first3.setOptions(obj);
    }
    return () => {
      if (closure_3) {
        const obj = callback(closure_2[31]);
        const role = obj.selectRole(callback(closure_2[32]).castGuildIdAsEveryoneGuildRoleId(closure_0));
        const obj2 = callback(closure_2[32]);
      }
      closure_15.destroy();
    };
  }, items11);
  const tmp20 = callback(sortedGuildRoles.useState(""), 2);
  const first4 = tmp20[0];
  items = first4;
  const callback3 = tmp20[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  callback = importAllResult.useCallback((str) => {
    callback2(str);
    const tmp2 = "" !== str.trim();
    currentUser(tmp2);
    if (tmp2) {
      callback(true);
      let tmp12;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      first3.search(str, tmp12);
    } else {
      first3.clear();
      callback(false);
    }
  }, items12);
  const effect3 = importAllResult.useEffect(() => {
    if ("" !== first4.trim()) {
      if (!first2) {
        if (memo.length > 0) {
          const intl2 = guildId(guild[20]).intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(guildId(guild[20]).t.ZGVL3g, obj);
        } else {
          const intl = guildId(guild[20]).intl;
          formatToPlainStringResult = intl.string(guildId(guild[20]).t.oB9grQ);
        }
        const AccessibilityAnnouncer = guildId(guild[33]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = importAllResult.useCallback((guildMember) => {
    const index = guildMember.index;
    return first3(closure_20, { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === diff });
  }, items14);
  obj = {};
  obj = { style: tmp2.containerInner };
  obj1 = { style: tmp2.searchFieldContainer };
  const callback2 = importAllResult.useCallback((userId) => userId.userId, []);
  obj2 = { size: "md" };
  const intl = arg1(dependencyMap[20]).intl;
  obj2.placeholder = intl.string(arg1(dependencyMap[20]).t.pYHobK);
  obj2.onChange = callback;
  obj2.isRound = true;
  obj1.children = first3(arg1(dependencyMap[34]).SearchField, obj2);
  const items15 = [first3(View, obj1), ];
  if (0 !== memo.length) {
    obj3 = { keyExtractor: callback2, data: memo, renderItem: callback1 };
    obj4 = { paddingBottom: importDefault(dependencyMap[22])().bottom + importDefault(dependencyMap[15]).space.PX_16 };
    obj3.contentContainerStyle = obj4;
    let tmp33 = first3(arg1(dependencyMap[35]).FlashList, obj3);
  } else {
    obj5 = { Illustration: arg1(dependencyMap[37]).NoResults };
    const intl2 = arg1(dependencyMap[20]).intl;
    obj5.title = intl2.string(arg1(dependencyMap[20]).t.qVQ9ud);
    const intl3 = arg1(dependencyMap[20]).intl;
    obj5.body = intl3.string(arg1(dependencyMap[20]).t.oB9grQ);
    tmp33 = first3(arg1(dependencyMap[36]).EmptyState, obj5);
  }
  items15[1] = tmp33;
  obj.children = items15;
  const items16 = [memo(View, obj), first3(arg1(dependencyMap[38]).NavScrim, {})];
  obj.children = items16;
  return memo(diff, obj);
});
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;
