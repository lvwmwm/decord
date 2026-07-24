// Module ID: 15345
// Function ID: 116962
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 1194, 4051, 1917, 1910, 1838, 3758, 1849, 8483, 653, 33, 7093, 4130, 689, 1456, 10214, 4319, 3969, 1212, 10209, 1557, 566, 5646, 8457, 9338, 15346, 5788, 8512, 5048, 8482, 21, 3843, 5772, 7527, 1273, 8547, 5448, 2]

// Module 15345 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_8482";
import { View } from "showMembersManagementActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { GuildSettingsSections } from "ME";
import jsxProd from "AccessibilityAnnouncer";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
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
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let items = [require("sortByMatchScore").AutocompleterResultTypes.USER];
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
obj.containerInner = obj;
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.searchFieldContainer = _createForOfIteratorHelperLoose;
obj.roleList = { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  let obj = guild(1456);
  const dependencyMap = obj.useNavigation();
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
    const mapped = found.map((id) => outer1_15(guildMember(arr[17]), { role: id, guildId: guild.id }, id.id));
    let formatToPlainStringResult;
    if (found.length > 0) {
      user = user.getUser(guildMember.userId);
      let obj1 = guildMember(4319);
      let nickname = obj1.getNickname(guild.id, undefined, user);
      if (null == nickname) {
        nickname = guildMember(3969).getGlobalName(user);
        const obj3 = guildMember(3969);
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
      const intl = guild(1212).intl;
      obj = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(guild(1212).t["6eGpWx"], obj);
    }
    obj = { userId: guildMember.userId, guildId: guild.id, accessibilityLabel: formatToPlainStringResult };
    let tmp20 = null;
    if (mapped.length > 0) {
      obj1 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp20 = callback(View, obj1);
    }
    obj.subLabel = tmp20;
    obj.disabled = tmp3;
    obj.onPress = function onPress() {

    };
    obj.arrow = true;
    obj.start = start;
    obj.end = end;
    return callback(guildMember(10209), obj);
  }
  tmp = callback2();
});
const memoResult = importAllResult.memo(function GuildSettingsModalMembers(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(guild[16]);
  const navigation = obj.useNavigation();
  let tmp2 = callback2();
  let obj1 = guildId(guild[23]);
  let items = [closure_10, first];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: store.getGuild(guildId), guildLoaded: null != store.getGuild(guildId), sortedGuildRoles: first.getSortedRoles(guildId) }));
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let obj2 = guildId(guild[23]);
  const items1 = [first1, closure_12];
  const items2 = [guild];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(guild[24]).canPruneGuildMembers(guild, authStore.getCurrentUser(), first1);
      const obj = guildId(guild[24]);
    }
    return canPruneGuildMembersResult;
  }, items2);
  let obj3 = guildId(guild[23]);
  const items3 = [first2];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  let obj4 = guildId(guild[23]);
  const items4 = [stateFromStores2];
  const items5 = [guildId, guildLoaded];
  stateFromStores2 = obj4.useStateFromStores(items4, () => {
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
  let obj5 = guildId(guild[23]);
  const items6 = [stateFromStoresArray];
  const items7 = [guildId];
  stateFromStoresArray = obj5.useStateFromStoresArray(items6, () => stateFromStoresArray.getMembers(guildId), items7);
  const tmp8 = guildLoaded(sortedGuildRoles.useState([]), 2);
  first = tmp8[0];
  closure_10 = tmp8[1];
  const tmp10 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp10[0];
  closure_12 = tmp10[1];
  let tmp12 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp12[0];
  let closure_14 = tmp12[1];
  const first3 = guildLoaded(sortedGuildRoles.useState(() => {
    let tmp = navigation(guild[13]);
    tmp = new tmp((arg0) => {
      outer1_10(arg0);
      outer1_14(false);
    }, first4, 100);
    return tmp;
  }), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const memo = sortedGuildRoles.useMemo(() => {
    let iter2;
    let iter5;
    function guildRoleIsFiltered(member) {
      let tmp = null != outer1_6;
      if (tmp) {
        tmp = !guildId(guild[25]).isEveryoneRoleId(outer1_0, outer1_6);
        const obj = guildId(guild[25]);
      }
      if (tmp) {
        const roles = member.roles;
        tmp = -1 === roles.indexOf(outer1_6);
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
          let tmp12 = guildId;
          let tmp13 = guild;
          if (value.type === guildId(guild[13]).AutocompleterResultTypes.USER) {
            let tmp14 = stateFromStoresArray;
            let tmp15 = guildId;
            let member = stateFromStoresArray.getMember(guildId, value.record.id);
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
          let tmp5 = authStore;
          let tmp6 = null == authStore.getUser(value.userId) || guildRoleIsFiltered(value);
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
  const effect = sortedGuildRoles.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let obj = {};
        if (null != outer1_2) {
          obj = { guild: outer1_2, canPrune: outer1_5 };
          let membersManagementActions = guildId(guild[27]).getMembersManagementActions(obj);
          const obj2 = guildId(guild[27]);
        } else {
          membersManagementActions = [];
        }
        obj.items = membersManagementActions;
        obj.children = function children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { source: navigation(guild[29]) };
          const intl = guildId(guild[20]).intl;
          obj.accessibilityLabel = intl.string(guildId(guild[20]).t.ogxXGq);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          return first3(guildId(guild[28]).HeaderActionButton, obj);
        };
        return first3(guildId(guild[26]).ContextMenu, obj);
      }
    });
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = sortedGuildRoles.useEffect(() => {
    if (stateFromStores2) {
      const obj = navigation(guild[30]);
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = sortedGuildRoles.useEffect(() => {
    if (guildLoaded) {
      let obj = {};
      obj = { guild: guildId, strict: true };
      obj.userFilters = obj;
      first3.setOptions(obj);
    }
    return () => {
      if (outer1_3) {
        const obj = navigation(guild[31]);
        const role = obj.selectRole(navigation(guild[32]).castGuildIdAsEveryoneGuildRoleId(outer1_0));
        const obj2 = navigation(guild[32]);
      }
      outer1_15.destroy();
    };
  }, items11);
  let tmp20 = guildLoaded(sortedGuildRoles.useState(""), 2);
  const first4 = tmp20[0];
  callback2 = tmp20[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  const callback = sortedGuildRoles.useCallback((str) => {
    callback2(str);
    const tmp2 = "" !== str.trim();
    authStore(tmp2);
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
  const effect3 = sortedGuildRoles.useEffect(() => {
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
  const callback1 = sortedGuildRoles.useCallback((guildMember) => {
    const index = guildMember.index;
    return first3(outer1_20, { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === closure_17 });
  }, items14);
  obj = {};
  obj = { style: tmp2.containerInner };
  obj1 = { style: tmp2.searchFieldContainer };
  callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  obj2 = { size: "md" };
  let intl = guildId(guild[20]).intl;
  obj2.placeholder = intl.string(guildId(guild[20]).t.pYHobK);
  obj2.onChange = callback;
  obj2.isRound = true;
  obj1.children = first3(guildId(guild[34]).SearchField, obj2);
  const items15 = [first3(stateFromStores, obj1), ];
  if (0 !== memo.length) {
    obj3 = { keyExtractor: callback2, data: memo, renderItem: callback1 };
    obj4 = { paddingBottom: navigation(guild[22])().bottom + navigation(guild[15]).space.PX_16 };
    obj3.contentContainerStyle = obj4;
    let tmp33 = first3(guildId(guild[35]).FlashList, obj3);
  } else {
    obj5 = { Illustration: guildId(guild[37]).NoResults };
    let intl2 = guildId(guild[20]).intl;
    obj5.title = intl2.string(guildId(guild[20]).t.qVQ9ud);
    const intl3 = guildId(guild[20]).intl;
    obj5.body = intl3.string(guildId(guild[20]).t.oB9grQ);
    tmp33 = first3(guildId(guild[36]).EmptyState, obj5);
  }
  items15[1] = tmp33;
  obj.children = items15;
  const items16 = [memo(stateFromStores, obj), first3(guildId(guild[38]).NavScrim, {})];
  obj.children = items16;
  return memo(diff, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;
