// Module ID: 18639
// Function ID: 18640
// Name: GuildSettingsModalMembers
// Dependencies: [32, 19, 17, 502, 5242, 4926, 4920, 4885, 4946, 1383, 9075, 1072, 21, 9135, 5014, 575, 1497, 10824, 6041, 5068, 1113, 10819, 1625, 504, 7439, 18640, 9031, 9874, 18641, 7558, 9100, 6902, 9074, 11, 5023, 7218, 7294, 1187, 8805, 5606, 2]

// Module 18639 (GuildSettingsModalMembers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 7439 */;
import _mod9135 from "module_9135" /* 9135 */;
import RolePillDefault from "RolePill" /* 10824 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import UserStore from "UserStore" /* 1383 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const _modDef9135 = _mod9135;
let dependencyMap, navigation;

let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
const View = react_native.View;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let items = [_mod9135.AutocompleterResultTypes.USER];
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchFieldContainer: obj3, roleList: { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_19 = createStyles(obj);
let closure_20 = react.memo(function GuildSettingsModalMember(guild) {
  let closure_2;
  let end;
  let start;
  let tmp12Result;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  const tmp = closure_19();
  let obj = guild(1497);
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
      const obj2 = guildMember(6041);
      let str = obj2.getNickname(guild.id, undefined, user);
      const tmp9 = guildMember;
      if (str == null) {
        const tmp9Result = tmp9(5068);
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
      const intl = tmp2(1113).intl;
      const obj3 = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t["6eGpWx"], obj3);
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
    const tmp14 = guildMember(10819);
    if (mapped.length > 0) {
      const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = tmp12(View, obj5);
    }
    return closure_15(tmp14, obj4);
  }
});
const memoResult = react.memo(function GuildSettingsModalMembers(guildId) {
  let SearchBar;
  let intl;
  let intl2;
  let intl3;
  let items15;
  let items16;
  let obj10;
  let obj12;
  let tmp33Result;
  const f115185 = () => {
    const tmp = new _modDef9135((arg0) => {
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
  let closure_12;
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
  const obj7 = guildId(guild[25]);
  const subscribeToGuildMemberUpdates = obj7.useSubscribeToGuildMemberUpdates(guildId);
  let tmp14 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp14[0];
  closure_12 = tmp14[1];
  const tmp16 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp16[0];
  let closure_14 = tmp16[1];
  const first3 = guildLoaded(sortedGuildRoles.useState(f115185), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const tmp18 = guildLoaded(sortedGuildRoles.useState(f115185), 2);
  const memo = sortedGuildRoles.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = guildId(guild[26]);
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
        if (nextResult.type === _mod9135.AutocompleterResultTypes.USER) {
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
        const ContextMenu = guildId(guild[27]).ContextMenu;
        const tmp = first3;
        const tmp2 = guildId;
        const tmp3 = guild;
        if (null != closure_1_2) {
          let obj = { guild: tmp4, canPrune };
          const tmp2Result = tmp2(tmp3[28]);
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
            const obj = { source: closure_1_1(closure_1_2[30]), accessibilityLabel: intl.string(closure_1_0(closure_1_2[20]).t.ogxXGq), ref };
            const HeaderActionButton = closure_1_0(closure_1_2[29]).HeaderActionButton;
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
        const selectRole = navigation(guild[32]).selectRole;
        navigation(guild[32]);
        const obj = navigation(guild[33]);
        const role = selectRole(obj.castGuildIdAsEveryoneGuildRoleId(guildId));
      }
      first3.destroy();
    };
  }, items11);
  let tmp24 = guildLoaded(sortedGuildRoles.useState(""), 2);
  const first4 = tmp24[0];
  closure_19 = tmp24[1];
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
  let tmp30 = memo;
  const obj8 = { style: tmp4.containerInner, children: items15 };
  const obj9 = { style: tmp4.searchFieldContainer, children: first3(SearchBar, obj10) };
  const callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  let tmp31 = c17;
  obj10 = { size: "md", placeholder: intl.string(guildId(guild[20]).t.pYHobK), onChange: callback, round: true };
  SearchBar = guildId(guild[35]).SearchBar;
  intl = guildId(guild[20]).intl;
  items15 = [first3(stateFromStores, obj9), ];
  const tmp32 = stateFromStores;
  if (0 !== memo.length) {
    const obj11 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: obj12 };
    obj12 = { paddingBottom: bottom + tmp5(tmp2[15]).space.PX_16 };
    const FlashList = tmp(tmp2[36]).FlashList;
    tmp33Result = tmp33(FlashList, obj11);
  } else {
    const obj13 = { Illustration: tmp(tmp2[38]).NoResults, title: intl2.string(tmp(tmp2[20]).t.qVQ9ud), body: intl3.string(tmp(tmp2[20]).t.oB9grQ) };
    const EmptyState = tmp(tmp2[37]).EmptyState;
    intl2 = tmp(tmp2[20]).intl;
    intl3 = tmp(tmp2[20]).intl;
    tmp33Result = tmp33(EmptyState, obj13);
  }
  const obj14 = { children: items16 };
  items15[1] = tmp33Result;
  items16 = [tmp30(tmp32, obj8), first3(tmp(tmp2[39]).NavScrim, {})];
  return tmp30(tmp31, obj14);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;
