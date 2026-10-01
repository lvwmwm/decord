// Module ID: 16222
// Function ID: 16223
// Name: GuildSettingsModalMembers
// Dependencies: [32, 19, 17, 502, 4754, 2108, 2102, 2067, 4469, 1372, 9049, 1074, 21, 9290, 4836, 576, 1485, 10409, 4988, 4678, 1115, 10404, 1613, 504, 6683, 9016, 7358, 16223, 6795, 9091, 5832, 9048, 11, 4541, 6471, 8179, 1177, 7678, 6461, 2]

// Module 16222 (GuildSettingsModalMembers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6683 */;
import _mod9290 from "module_9290" /* 9290 */;
import RolePillDefault from "RolePill" /* 10409 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const _modDef9290 = _mod9290;
let closure_12, dependencyMap, navigation;

let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
const View = react_native.View;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let items = [_mod9290.AutocompleterResultTypes.USER];
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchFieldContainer: obj3, roleList: { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_19 = createStyles(obj);
let closure_20 = react.memo((guild) => {
  let closure_2;
  let end;
  let start;
  let tmp12Result;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  const tmp = closure_19();
  let obj = guild(1485);
  dependencyMap = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    const tmp5 = guildMember.userId === guild.ownerId && AuthenticationStore.getId() === guild.ownerId;
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((role) => {
      const obj = { role, guildId: guild.id };
      return closure_15(RolePillDefault, obj, role.id);
    });
    let formatToPlainStringResult;
    if (found.length > 0) {
      const user = UserStore.getUser(guildMember.userId);
      const obj2 = guildMember(4988);
      let str = obj2.getNickname(guild.id, undefined, user);
      const tmp9 = guildMember;
      if (str == null) {
        const tmp9Result = tmp9(4678);
        str = tmp9Result.getGlobalName(user);
      }
      if (str == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        str = username;
      }
      if (str == null) {
        str = "";
      }
      const mapped1 = found.map((name) => name.name);
      const joined = mapped1.join(", ");
      const intl = tmp2(1115).intl;
      const obj3 = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t["6eGpWx"], obj3);
    }
    const obj4 = {
      userId: guildMember.userId,
      guildId: guild.id,
      accessibilityLabel: formatToPlainStringResult,
      subLabel: tmp12Result,
      disabled: tmp5,
      onPress() {
          const obj = { userId: guildMember.userId };
          closure_2.push(GuildSettingsSections.MEMBER_EDIT, obj);
        },
      arrow: true,
      start,
      end
    };
    tmp12Result = null;
    const tmp14 = guildMember(10404);
    if (mapped.length > 0) {
      const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = tmp12(View, obj5);
    }
    return closure_15(tmp14, obj4);
  }
});
const memoResult = react.memo(function GuildSettingsModalMembers(guildId) {
  let SearchField;
  let intl;
  let intl2;
  let intl3;
  let items15;
  let items16;
  let obj11;
  let obj9;
  let tmp32Result;
  const f104174 = () => {
    const tmp = new _modDef9290((arg0) => {
      closure_1_10(arg0);
      closure_1_14(false);
    }, items, 100);
    return tmp;
  };
  guildId = guildId.guildId;
  let guild;
  let stateFromStores2;
  let stateFromStoresArray;
  let first;
  let closure_10;
  let first1;
  closure_12 = undefined;
  let first2;
  closure_19 = undefined;
  let tmp = guildId;
  let tmp2 = guild;
  let obj = guildId(guild[16]);
  navigation = obj.useNavigation();
  const tmp4 = closure_19();
  const tmp5 = navigation;
  const bottom = navigation(guild[22])().bottom;
  let obj2 = guildId(guild[23]);
  items = [closure_10, first];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) };
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [first1, closure_12];
  const items2 = [guild];
  const obj3 = guildId(guild[23]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items2);
  const items3 = [first2];
  const obj4 = guildId(guild[23]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  const items4 = [stateFromStores2];
  const items5 = [guildId, guildLoaded];
  const obj5 = guildId(guild[23]);
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let num = GuildMemberCountStore.getMemberCount(guildId);
    if (num == null) {
      num = 0;
    }
    return num > 0 && num <= 10000 && guildLoaded;
  }, items5);
  const items6 = [stateFromStoresArray];
  const items7 = [guildId];
  const obj6 = guildId(guild[23]);
  stateFromStoresArray = obj6.useStateFromStoresArray(items6, () => GuildMemberStore.getMembers(guildId), items7);
  let tmp11 = guildLoaded(sortedGuildRoles.useState([]), 2);
  first = tmp11[0];
  closure_10 = tmp11[1];
  const tmp13 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp13[0];
  closure_12 = tmp13[1];
  const tmp15 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp15[0];
  let closure_14 = tmp15[1];
  const first3 = guildLoaded(sortedGuildRoles.useState(f104174), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const tmp17 = guildLoaded(sortedGuildRoles.useState(f104174), 2);
  const memo = sortedGuildRoles.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = guildId(guild[25]);
        tmp2 = !obj.isEveryoneRoleId(closure_1_0, tmp);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(tmp);
      }
      return tmp2;
    }
    items = [];
    const tmp = first1;
    if (tmp) {
      const iter2 = first[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp21 = nextResult;
        if (nextResult.type === _mod9290.AutocompleterResultTypes.USER) {
          let member = GuildMemberStore.getMember(guildId, tmp21.record.id);
          let tmp28 = member;
          let guildRoleIsFilteredResult = null == member;
          if (!guildRoleIsFilteredResult) {
            guildRoleIsFilteredResult = guildRoleIsFiltered(tmp28);
          }
          if (!guildRoleIsFilteredResult) {
            let arr = items.push(tmp28);
          }
        }
        continue;
      }
    } else {
      let tmp2 = stateFromStoresArray;
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult1 = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult1;
        let guildRoleIsFilteredResult1 = null == UserStore.getUser(nextResult1.userId);
        if (!guildRoleIsFilteredResult1) {
          guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp8);
        }
        if (!guildRoleIsFilteredResult1) {
          let arr3 = items.push(tmp8);
        }
        continue;
      }
      const sorted = items.sort((nick, nick2) => {
        let str = nick.nick;
        if (str == null) {
          const user = authStore.getUser(nick.userId);
          let username;
          if (user != null) {
            username = user.username;
          }
          str = username;
        }
        if (str == null) {
          str = "";
        }
        let str2 = nick2.nick;
        if (str2 == null) {
          const user1 = authStore.getUser(nick2.userId);
          let username1;
          if (user1 != null) {
            username1 = user1.username;
          }
          str2 = username1;
        }
        if (str2 == null) {
          str2 = "";
        }
        return str.localeCompare(str2);
      });
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  let c17 = diff;
  const items9 = [stateFromStores, guild, navigation];
  const effect = sortedGuildRoles.useEffect(() => {
    let canPrune;
    let obj = {
      headerRight() {
        let membersManagementActions;
        const ContextMenu = guildId(guild[26]).ContextMenu;
        const tmp = first3;
        const tmp2 = guildId;
        const tmp3 = guild;
        if (null != closure_1_2) {
          let obj = { guild: tmp4, canPrune };
          const tmp2Result = tmp2(tmp3[27]);
          membersManagementActions = tmp2Result.getMembersManagementActions(obj);
        } else {
          membersManagementActions = [];
        }
        const obj2 = {
          items: membersManagementActions,
          children(ref) {
            let intl;
            ref = ref.ref;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { source: closure_1_1(closure_1_2[29]), accessibilityLabel: intl.string(closure_1_0(closure_1_2[20]).t.ogxXGq), ref };
            const HeaderActionButton = closure_1_0(closure_1_2[28]).HeaderActionButton;
            intl = closure_1_0(closure_1_2[20]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_15(HeaderActionButton, obj);
          }
        };
        return tmp(ContextMenu, obj2);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = sortedGuildRoles.useEffect(() => {
    const tmp = stateFromStores2;
    if (tmp) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = sortedGuildRoles.useEffect(() => {
    let obj2;
    let tmp = guildLoaded;
    if (tmp) {
      let obj = { userFilters: obj2 };
      obj2 = { guild: guildId, strict: true };
      first3.setOptions(obj);
    }
    return () => {
      const tmp = guildLoaded;
      if (tmp) {
        const selectRole = navigation(guild[31]).selectRole;
        navigation(guild[31]);
        const obj = navigation(guild[32]);
        const role = selectRole(obj.castGuildIdAsEveryoneGuildRoleId(guildId));
      }
      first3.destroy();
    };
  }, items11);
  let tmp23 = guildLoaded(sortedGuildRoles.useState(""), 2);
  const first4 = tmp23[0];
  closure_19 = tmp23[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  const callback = sortedGuildRoles.useCallback((str) => {
    closure_19(str);
    const tmp2 = "" !== str.trim();
    closure_12(tmp2);
    if (tmp2) {
      closure_14(true);
      let tmp12;
      const search = first3.search;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      search(str, tmp12);
    } else {
      first3.clear();
      closure_14(false);
    }
  }, items12);
  const effect3 = sortedGuildRoles.useEffect(() => {
    if ("" !== first4.trim()) {
      const tmp14 = first2;
      if (!tmp14) {
        let formatToPlainStringResult;
        if (memo.length > 0) {
          const intl2 = intl4.intl;
          const obj = { count: memo.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t.oB9grQ);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = sortedGuildRoles.useCallback((guildMember) => {
    const index = guildMember.index;
    const obj = { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === c17 };
    return first3(closure_20, obj);
  }, items14);
  const obj7 = { style: tmp4.containerInner, children: items15 };
  const obj8 = { style: tmp4.searchFieldContainer, children: first3(SearchField, obj9) };
  const callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  let tmp30 = c17;
  let tmp31 = stateFromStores;
  obj9 = { size: "md", placeholder: intl.string(guildId(guild[20]).t.pYHobK), onChange: callback, round: true };
  SearchField = guildId(guild[34]).SearchField;
  intl = guildId(guild[20]).intl;
  items15 = [first3(stateFromStores, obj8), ];
  if (0 !== memo.length) {
    const obj10 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: obj11 };
    obj11 = { paddingBottom: bottom + tmp5(tmp2[15]).space.PX_16 };
    const FlashList = tmp(tmp2[35]).FlashList;
    tmp32Result = tmp32(FlashList, obj10);
  } else {
    const obj12 = { Illustration: tmp(tmp2[37]).NoResults, title: intl2.string(tmp(tmp2[20]).t.qVQ9ud), body: intl3.string(tmp(tmp2[20]).t.oB9grQ) };
    const EmptyState = tmp(tmp2[36]).EmptyState;
    intl2 = tmp(tmp2[20]).intl;
    intl3 = tmp(tmp2[20]).intl;
    tmp32Result = tmp32(EmptyState, obj12);
  }
  const obj13 = { children: items16 };
  items15[1] = tmp32Result;
  items16 = [memo(tmp31, obj7), first3(tmp(tmp2[38]).NavScrim, {})];
  return memo(tmp30, obj13);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;
