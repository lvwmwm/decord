// Module ID: 17405
// Function ID: 17406
// Name: GuildSettingsRoles
// Dependencies: [32, 19, 17, 1194, 2106, 502, 4756, 2105, 2073, 4472, 6550, 17406, 17407, 1086, 21, 4837, 588, 5837, 558, 576, 1253, 17408, 504, 15775, 9025, 1491, 6361, 4477, 5017, 17409, 17418, 17419, 5997, 1127, 5436, 11519, 4833, 4687, 17420, 17421, 17422, 17423, 5896, 5282, 17424, 6796, 12186, 1370, 17416, 5833, 6551, 6472, 8057, 1189, 9012, 16016, 6461, 2]

// Module 17405 (GuildSettingsRoles)
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2106 */;
import PermissionUtilsAll from "PermissionUtils" /* 4477 */;
import shared from "shared" /* 4687 */;
import Text_Text from "Text/Text" /* 4833 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5017 */;
import components_Button_Button from "components/Button/Button" /* 5282 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5833 */;
import FastImageDefault from "FastImage" /* 5896 */;
import TableRowGroup from "TableRowGroup" /* 5997 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6361 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6551 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9025 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 15775 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 17407 */;
import GuildSettingsRolesManager from "GuildSettingsRolesManager" /* 17408 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17416 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 17418 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 17419 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 17424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4756 */;
import GuildRoleStore from "GuildRoleStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6550 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 17406 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import TextStyles from "TextStyles" /* 5837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, guildId, importDefault, navigation, role, str2, tmp8Result, to, trackResult;

let Fonts;
let StyleSheet;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
let tmp6;
const AssetRegistryDefault = tmp6(9012);
const SortableListViewDefault = tmp6(16016);
const GuildSettingsRoleCreateModalActionCreatorsDefault = tmp(17409);
let react = react_mod;
({ View: metroRequire, StyleSheet } = react_native);
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
let closure_16 = GuildSettingsConstants.GuildSettingsRoleEditSections;
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20, Fonts } = Constants);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 }, searchWrapper: obj2, subheaderContainer: obj3, emptySubheaderContainer: { paddingBottom: 16, alignItems: "center" }, emptyIlloContainer: obj4, emptyIllo: { marginTop: 28, width: "100%" }, emptyIlloLarge: { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" }, emptySubheaderBody: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" }, subheader: obj5, subheaderBody: { marginTop: 8, textAlign: "center" }, subheaderButton: { flexGrow: 0, marginTop: 16 }, subheaderDescription: { lineHeight: 18, textAlign: "center" }, divider: { height: StyleSheet.hairlineWidth, width: "100%" }, everyoneWrapper: { marginTop: 2, marginBottom: 24 }, edittingRolesHeader: obj6, rolesHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, reorderButton: { marginBottom: 8, flexDirection: "row", alignItems: "center" }, reorderButtonText: { marginLeft: 8 }, rolesBody: { padding: 16, paddingTop: 8, lineHeight: 18 }, emptyRolesIcon: { opacity: 0.4 } };
obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
obj5 = { marginTop: 16 };
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj6 = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
let closure_24 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let first;
  let ref;
  let tmp5;
  _require = arg0;
  importDefault = arg1;
  let obj = require("react");
  const cResult = obj.c(16);
  let tmp2 = _slicedToArray;
  [first, dependencyMap] = react.useState("");
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [r10027, _slicedToArray] = tmp2(react.useState(tmp5), 2);
  tmp2(react.useState(tmp5), 2);
  react = obj2.useRef(false);
  if (cResult[2] !== arg0) {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[20]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const str = name.name;
            const formatted = str.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
    cResult[2] = arg0;
    cResult[3] = R;
  } else {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[20]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const str = name.name;
            const formatted = str.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
  }
  let closure_6 = tmp7;
  if (cResult[4] === arg1) {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[20]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const str = name.name;
            const formatted = str.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
  }
  class C {
    constructor() {
      const tmp = closure_1;
      if (!tmp) {
        const tmp2 = first;
        if ("" !== first.trim()) {
          closure_6(tmp2);
        } else {
          _slicedToArray(closure_0);
        }
      }
    }
  }
  const items = [arg1, first, arg0, tmp7];
  cResult[4] = arg1;
  cResult[5] = first;
  cResult[6] = tmp7;
  cResult[7] = arg0;
  cResult[8] = C;
  cResult[9] = items;
}) : ((arg0, arg1) => {
  let closure_3;
  let closure_4;
  let first;
  let ref;
  let str;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [str, closure_3] = react.useState("");
  [first, _slicedToArray] = react.useState(() => closure_0);
  react = react.useRef(false);
  const items = [arg0];
  const setSearchQuery = react.useCallback((str) => {
    let found;
    str = str.toLowerCase();
    const trimmed = str.trim();
    let current = ref.current;
    const tmp2 = ref;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      tmp2.current = true;
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.SEARCH_STARTED, { search_type: "Roles" });
    }
    closure_3(trimmed);
    const tmp8 = closure_4;
    if ("" === trimmed) {
      found = closure_0;
    } else {
      found = closure_0.filter((name) => {
        str = name.name;
        const formatted = str.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    tmp8(found);
  }, items);
  const items1 = [arg1, str, arg0, setSearchQuery];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      const tmp2 = str;
      if ("" !== "".trim()) {
        callback(tmp2);
      } else {
        closure_4(closure_0);
      }
    }
  }, items1);
  let obj = { hasSearchQuery: "" !== str.trim(), filteredRoles: first, setSearchQuery };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(roleJustCreated) {
      return roleJustCreated.roleJustCreated;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(17408);
  const guildSettingsRolesManagerState = tmpResult.useGuildSettingsRolesManagerState(first);
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === guildSettingsRolesManagerState) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
  }
  const fn2 = function o() {
    if (guildSettingsRolesManagerState) {
      const _setTimeout = setTimeout;
      const ref = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const _listRef = current._listRef;
          if (_listRef != null) {
            const current2 = _listRef.current;
            if (current2 != null) {
              current2.scrollToEnd();
            }
          }
        }
        const obj = ref(dependencyMap[21]);
        obj.setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(ref);
        const obj = GuildSettingsRolesManager;
        obj.setRoleJustCreated(false);
      };
    }
  };
  const items = [arg0, guildSettingsRolesManagerState];
  cResult[1] = arg0;
  cResult[2] = guildSettingsRolesManagerState;
  cResult[3] = fn2;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = fn2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("GuildSettingsRolesManager");
  const guildSettingsRolesManagerState = obj.useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  const items = [arg0, guildSettingsRolesManagerState];
  const layoutEffect = react.useLayoutEffect(() => {
    if (guildSettingsRolesManagerState) {
      const _setTimeout = setTimeout;
      const ref = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const _listRef = current._listRef;
          if (_listRef != null) {
            const current2 = _listRef.current;
            if (current2 != null) {
              current2.scrollToEnd();
            }
          }
        }
        const obj = ref(dependencyMap[21]);
        obj.setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(ref);
        const obj = GuildSettingsRolesManager;
        obj.setRoleJustCreated(false);
      };
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const guild = GuildStore.getGuild(closure_0);
      const result = null != guild && PermissionStore.canAccessGuildSettings(guild);
      const obj = { canAccessSettings: result, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, guild) };
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  if (cResult[3] === canAccessSettings) {
    let tmp9;
    let tmp10;
    if (cResult[4] === canManageRoles) {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const effect = react.useEffect(tmp9, tmp10);
  }
  const fn2 = function s() {
    const tmp = canManageRoles && canAccessSettings;
    if (!tmp) {
      const obj = GuildSettingsModalChannelsActionCreatorsDefault;
      obj.terminate();
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.close();
    }
  };
  const items1 = [canManageRoles, canAccessSettings];
  cResult[3] = canAccessSettings;
  cResult[4] = canManageRoles;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, PermissionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const result = null != guild && PermissionStore.canAccessGuildSettings(guild);
    const obj = { canAccessSettings: result, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, guild) };
    return obj;
  });
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items1 = [canManageRoles, canAccessSettings];
  const effect = react.useEffect(() => {
    const tmp = canManageRoles && canAccessSettings;
    if (!tmp) {
      const obj = GuildSettingsModalChannelsActionCreatorsDefault;
      obj.terminate();
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.close();
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let closure_3;
  let currentUserId;
  let filteredRoles;
  let guild;
  let hasSearchQuery;
  let highestRole;
  let memberCount;
  let onLongPress;
  let onPress;
  let onPress2;
  let onPress3;
  let rolesOrder;
  let setSearchQuery;
  let sortedGuildRoles;
  let sorting;
  let tmp12;
  let tmp19;
  let tmp8;
  let tmp9;
  let tmp = guildId;
  const tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(141);
  guildId = guildId.guildId;
  const tmp4 = closure_24();
  importDefault = tmp4;
  let obj2 = guild;
  const ref = guild.useRef(null);
  let obj3 = guildId(1491);
  navigation = obj3.useNavigation();
  const tmp7 = useIsWindowLargeDefault();
  dependencyMap = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = memberCount;
    let items = [memberCount];
    let fn = function p() {
      return memberCount.theme;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [sorting, , , , , ];
    items1[1] = highestRole;
    let tmp15 = rolesOrder;
    items1[2] = rolesOrder;
    items1[3] = setSearchQuery;
    items1[4] = hasSearchQuery;
    items1[5] = currentUserId;
    cResult[2] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class F {
      constructor() {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        let tmp;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
        everyoneRole = null;
        tmp = guildId;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
        return obj;
      }
    }
    cResult[3] = guildId;
    cResult[4] = F;
    tmp19 = F;
  } else {
    class F {
      constructor() {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        let tmp;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
        everyoneRole = null;
        tmp = guildId;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
        return obj;
      }
    }
  }
  const tmpResult3 = tmp(504);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp12, tmp19);
  guild = stateFromStoresObject.guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  ({ sortedGuildRoles, rolesOrder } = stateFromStoresObject);
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  closure_26(ref);
  let tmp22 = closure_27(guildId);
  const tmp23 = stateFromStores(obj2.useState(false), 2);
  sorting = tmp23[0];
  let closure_13 = tmp23[1];
  const tmp25 = closure_25(sortedGuildRoles, sorting);
  ({ filteredRoles, hasSearchQuery } = tmp25);
  setSearchQuery = tmp25.setSearchQuery;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        let tmp;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
        everyoneRole = null;
        tmp = guildId;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
        return obj;
      }
    }
    let items2 = [highestRole];
    cResult[5] = items2;
  } else {
    class F {
      constructor() {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        let tmp;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
        everyoneRole = null;
        tmp = guildId;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
        return obj;
      }
    }
  }
  if (cResult[6] === guildId) {
    let tmp30;
    let tmp32;
    class F {
      constructor() {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        let tmp;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
        everyoneRole = null;
        tmp = guildId;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
        return obj;
      }
    }
    tmp(504);
    if (null != rolesOrder) {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
    }
    if (cResult[9] === currentUserId) {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
      cResult[16] = tmp31;
      tmp30 = tmp31;
    } else {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
    }
    if (cResult[17] !== roleMemberCount) {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
      cResult[17] = roleMemberCount;
      cResult[18] = tmp33;
      tmp32 = tmp33;
    } else {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
    }
    const found = filteredRoles.filter(tmp30);
    const mapped = found.map(tmp32);
    if (null != guild) {
      class F {
        constructor() {
          let everyoneRole;
          let getRoleMemberCount;
          let id2;
          let num;
          let tmp;
          guild = GuildStore.getGuild(guildId);
          const id = AuthenticationStore.getId();
          const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
          everyoneRole = null;
          tmp = guildId;
          if (null != guild) {
            everyoneRole = GuildRoleStore.getEveryoneRole(guild);
          }
          let id1;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (guild != null) {
            id1 = guild.id;
          }
          num = getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          id2 = undefined;
          getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
          if (guild != null) {
            id2 = guild.id;
          }
          highestRole = undefined;
          if (null != guild) {
            const obj2 = PermissionUtilsAll;
            highestRole = obj2.getHighestRole(guild, id);
          }
          return obj;
        }
      }
    }
    cResult[9] = currentUserId;
    cResult[10] = guild;
    cResult[11] = highestRole;
    cResult[12] = filteredRoles;
    cResult[13] = roleMemberCount;
    cResult[14] = mapped;
    cResult[15] = 0;
  }
  let fn2 = function q() {
    let manyRoles;
    if (null != rolesOrder) {
      manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  };
  cResult[6] = guildId;
  cResult[7] = rolesOrder;
  cResult[8] = fn2;
}) : ((guildId) => {
  let Icon;
  let Text;
  let closure_1;
  let closure_3;
  let intl;
  let items22;
  let obj10;
  let obj13;
  let obj7;
  let obj9;
  let tmp35Result2;
  let tmp49;
  let tmp6Result;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let guild;
  let memberCount;
  let sortedGuildRoles;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let closure_14;
  let filteredRoles;
  let closure_22;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = callback2();
  importDefault = tmp;
  let obj = guild;
  const ref = guild.useRef(null);
  let tmp3 = guildId;
  let obj2 = guildId(1491);
  navigation = obj2.useNavigation();
  const tmp6 = importDefault;
  const tmp7 = useIsWindowLargeDefault();
  dependencyMap = tmp7;
  let obj3 = guildId(504);
  let items = [memberCount];
  const stateFromStores = obj3.useStateFromStores(items, () => memberCount.theme);
  let obj4 = guildId(504);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, filteredRoles, closure_14, rolesOrder];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let everyoneRole;
    let getRoleMemberCount;
    let id2;
    let num;
    let tmp;
    guild = GuildStore.getGuild(guildId);
    const id = AuthenticationStore.getId();
    const obj = { guild, guildEveryoneRole: everyoneRole, memberCount: num, roleMemberCount: getRoleMemberCount(id2), sortedGuildRoles: GuildRoleStore.getSortedRoles(tmp), rolesOrder: GuildSettingsModalRolesStore.order, currentUserId: id, highestRole };
    everyoneRole = null;
    tmp = guildId;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    let id1;
    const getMemberCount = GuildMemberCountStore.getMemberCount;
    if (guild != null) {
      id1 = guild.id;
    }
    num = getMemberCount(id1);
    if (num == null) {
      num = 0;
    }
    id2 = undefined;
    getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
    if (guild != null) {
      id2 = guild.id;
    }
    highestRole = undefined;
    if (null != guild) {
      const obj2 = PermissionUtilsAll;
      highestRole = obj2.getHighestRole(guild, id);
    }
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  let tmp10 = callback4(ref);
  let tmp11 = callback5(guildId);
  let tmp12 = stateFromStores(guild.useState(false), 2);
  const sorting = tmp12[0];
  closure_14 = tmp12[1];
  const tmp14 = callback3(sortedGuildRoles, sorting);
  filteredRoles = tmp14.filteredRoles;
  const hasSearchQuery = tmp14.hasSearchQuery;
  const setSearchQuery = tmp14.setSearchQuery;
  let obj5 = guildId(504);
  let items2 = [currentUserId];
  const stateFromStoresArray = obj5.useStateFromStoresArray(items2, () => {
    let manyRoles;
    if (null != rolesOrder) {
      manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  let items3 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, filteredRoles, guild, currentUserId, highestRole];
  const memo = guild.useMemo(() => {
    const arr = null != rolesOrder ? stateFromStoresArray : filteredRoles;
    const found = arr.filter((item) => !roleMemberCount(item));
    const mapped = found.map((role) => {
      let num;
      const obj = { role, memberCount: num };
      num = undefined;
      if (roleMemberCount != null) {
        num = tmp[role.id];
      }
      if (num == null) {
        num = 0;
      }
      return obj;
    });
    let num = 0;
    if (null != guild) {
      num = mapped.findIndex((role) => {
        const obj = navigation(closure_3[27]);
        return obj.isRoleHigher(guild, currentUserId, highestRole, role.role);
      });
    }
    const diff = sortedGuildRoles.length - 1;
    let obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
    return obj;
  }, items3);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp18 = sorting;
  if (!tmp18) {
    let num = 10;
    tmp18 = tmp17 < 10;
  }
  closure_22 = tmp18;
  let items4 = [setSearchQuery];
  const items5 = [guild];
  const callback = obj.useCallback((str) => {
    setSearchQuery(str.toLowerCase());
  }, items4);
  callback1 = obj.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const OPEN_MODAL = stateFromStoresArray.OPEN_MODAL;
    const obj = { type: roleData.GUILD_ROLE_CREATION_MODAL };
    AnalyticsUtilsDefault;
    let id;
    const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
    AppAnalyticsUtils;
    if (guild != null) {
      id = guild.id;
    }
    const merged = Object.assign(collectGuildAnalyticsMetadata(id));
    track(OPEN_MODAL, obj);
    const tmpResult = GuildSettingsRoleCreateModalActionCreatorsDefault;
    tmpResult.open();
  }, items5);
  const items6 = [navigation];
  callback2 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = { role, newRole: flag, section: hasSearchQuery.DISPLAY };
    navigation.push(setSearchQuery.ROLE_EDIT_REFRESH, obj);
  }, items6);
  const items7 = [setSearchQuery];
  callback3 = obj.useCallback(() => {
    closure_14(true);
    setSearchQuery("");
  }, items7);
  const items8 = [setSearchQuery];
  callback4 = obj.useCallback(() => {
    setSearchQuery("");
    closure_14((arg0) => !arg0);
  }, items8);
  const items9 = [guild, callback4];
  callback5 = obj.useCallback(() => {
    const updates = GuildSettingsModalRolesStore.getUpdates();
    const tmp = updates.length > 0 && null != guild;
    if (tmp) {
      const obj = actions_GuildActionCreators;
      obj.batchRoleUpdate(guild.id, updates);
    }
    callback4();
  }, items9);
  const items10 = [firstEditableIndex];
  callback6 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    const obj = GuildSettingsModalRolesActionCreatorsDefault;
    obj.updateRoleOrder(to.from, to);
  }, items10);
  const items11 = [tmp, roleData, hasSearchQuery, sorting, callback4];
  const callback7 = obj.useCallback(() => {
    let formatToPlainString;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    let items2;
    let obj3;
    let v38N3Vz;
    const items = [closure_1.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = tmp3.edittingRolesHeader;
    }
    const obj = { style: items, children: items1 };
    items[1] = edittingRolesHeader;
    const obj2 = { title: formatToPlainString(v38N3Vz, obj3) };
    const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
    const intl = intl5.intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { numRoles: "" + roleData.length };
    v38N3Vz = intl5.t["38N3Vz"];
    items1 = [hasRoles(TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!hasSearchQuery) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl5.t["0dOFq+"]), onPress: callback4, style: closure_1.reorderButton, children: items2 };
        const PressableOpacity = tmp7(5436).PressableOpacity;
        intl2 = tmp7(1127).intl;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const ArrowsUpDownIcon = tmp7(11519).ArrowsUpDownIcon;
        items2 = [hasRoles(ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: closure_1.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: intl3.string(intl5.t["0dOFq+"]) };
        const Text = tmp7(4833).Text;
        intl3 = tmp7(1127).intl;
        items2[1] = hasRoles(Text, obj6);
        tmpResult = tmp(PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    const children = [afk(metroRequire, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: closure_1.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: intl4.string(intl5.t.nHcwVl) };
      const Text2 = tmp7(4833).Text;
      intl4 = tmp7(1127).intl;
      tmp6Result = tmp6(Text2, obj7);
    }
    children[1] = tmp6Result;
    return afk(metroRequire, { children });
  }, items11);
  const items12 = [tmp, callback1, hasRoles, stateFromStores, tmp7, tmp18];
  const items13 = [tmp, callback2, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback8 = obj.useCallback(() => {
    let Button;
    let Text2;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    let items3;
    let items4;
    let obj14;
    let obj5;
    let obj9;
    let tmp12;
    let tmp15;
    let tmp3Result2;
    let tmp7Result;
    const obj = shared;
    const isThemeDarkResult = obj.isThemeDark(stateFromStores);
    if (closure_3) {
      let tmp3Result;
      if (isThemeDarkResult) {
        tmp3Result = tmp3(17420);
      } else {
        tmp3Result = tmp3(17421);
      }
      tmp3Result2 = tmp3Result;
    } else if (isThemeDarkResult) {
      tmp3Result2 = tmp3(17422);
    } else {
      tmp3Result2 = tmp3(17423);
    }
    if (hasRoles) {
      const items = [closure_1.subheaderContainer, ];
      let num = 0;
      const tmp46 = closure_23;
      const tmp47 = hasRoles;
      const tmp48 = metroRequire;
      if (closure_22) {
        num = nativeDefault.space.PX_16;
      }
      const obj2 = { children: items1 };
      const obj4 = { paddingTop: num };
      items[1] = obj4;
      const obj3 = { style: items, children: hasRoles(Text2, obj5) };
      obj5 = { style: closure_1.subheaderDescription, variant: "text-sm/medium", color: "interactive-text-default", children: intl4.string(intl5.t["1ydhVp"]) };
      Text2 = Text_Text.Text;
      intl4 = intl5.intl;
      items1 = [tmp47(tmp48, obj3), ];
      const obj6 = { style: closure_1.divider };
      items1[1] = hasRoles(metroRequire, obj6);
      tmp7Result = tmp7(tmp46, obj2);
    } else {
      const obj7 = { style: closure_1.emptySubheaderContainer, children: items3 };
      const items2 = [closure_1.emptyIllo, ];
      let emptyIlloLarge = null;
      const obj8 = { style: closure_1.emptyIlloContainer, children: tmp12(tmp15, obj9) };
      const tmp10 = hasRoles;
      const tmp11 = metroRequire;
      tmp12 = hasRoles;
      tmp15 = FastImageDefault;
      const tmp8 = metroRequire;
      if (closure_3) {
        emptyIlloLarge = tmp9.emptyIlloLarge;
      }
      obj9 = { style: items2, source: tmp3Result2 };
      items2[1] = emptyIlloLarge;
      items3 = [tmp10(tmp11, obj8), , ];
      const obj10 = { style: closure_1.emptySubheaderBody, children: items4 };
      const obj11 = { style: closure_1.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.ALlnbi) };
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items4 = [hasRoles(Heading, obj11), , ];
      const obj12 = { style: closure_1.subheaderBody, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t["1ydhVp"]) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items4[1] = hasRoles(Text, obj12);
      const obj13 = { style: closure_1.subheaderButton, children: hasRoles(Button, obj14) };
      obj14 = { text: intl3.string(intl5.t.JZZjQK), onPress: callback1 };
      Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items4[2] = hasRoles(metroRequire, obj13);
      items3[1] = afk(metroRequire, obj10);
      const obj15 = { style: closure_1.divider };
      items3[2] = hasRoles(metroRequire, obj15);
      tmp7Result = tmp7(tmp8, obj7);
    }
    return tmp7Result;
  }, items12);
  const items14 = [guild, roleData.length, currentUserId, highestRole, sorting, callback2, callback3, callback6];
  const callback9 = obj.useCallback(() => {
    let obj3;
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: hasRoles(GuildSettingsRoleItemDefault, obj3) };
        obj3 = {
          role: guildEveryoneRole,
          locked: !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole),
          onPress() {
                return callback2(guildEveryoneRole);
              },
          guildId: guild.id,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true
        };
        !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole);
        return hasRoles(metroRequire, obj2);
      }
    }
    return null;
  }, items13);
  const callback10 = obj.useCallback((role, from) => {
    let fn;
    let fn2;
    let id;
    let tmp19;
    let tmp3;
    if (null == guild) {
      return hasRoles(callback1, {});
    } else {
      role = role.role;
      memberCount = role.memberCount;
      let obj = navigation(closure_3[27]);
      const diff = roleData.length - 1;
      const obj2 = { sorting, isEveryoneRole: tmp3, role, locked: tmp19, guildId: id, numMembers: memberCount, isFirstRole: 0 === from, isLastRole: from === diff, onPress: callback2, onLongPress: callback3, onMoveUp: fn, onMoveDown: fn2 };
      tmp3 = null != tmp;
      tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      const tmp24 = closure_1(closure_3[44]);
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      id = undefined;
      if (guild != null) {
        id = tmp.id;
      }
      fn = undefined;
      if (0 !== from) {
        fn = () => {
          const obj = { from, to: from - 1 };
          callback6(obj);
        };
      }
      fn2 = undefined;
      if (from !== diff) {
        fn2 = () => {
          const obj = { from, to: from + 1 };
          callback6(obj);
        };
      }
      return tmp22(tmp24, obj2, role.id);
    }
  }, items14);
  const items15 = [callback1, callback5, callback4, hasRoles, sorting, navigation];
  const callback11 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect = obj.useEffect(() => {
    let fn2;
    let intl;
    let onPress;
    let onPress2;
    let onPress3;
    let fn;
    const setOptions = navigation.setOptions;
    if (first) {
      fn = () => {
        let intl;
        const obj = { onPress: onPress2, text: intl.string(guildId(closure_3[33]).t["ETE/oC"]) };
        const HeaderActionButton = guildId(closure_3[45]).HeaderActionButton;
        intl = guildId(closure_3[33]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: fn2, headerTitle: intl.string(intl5.t.UvdTMj) };
    if (first) {
      fn2 = () => {
        let intl;
        const obj = { onPress: onPress3, text: intl.string(guildId(closure_3[33]).t["R3BPH+"]) };
        const HeaderActionButton = guildId(closure_3[45]).HeaderActionButton;
        intl = guildId(closure_3[33]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        let intl;
        const obj = { onPress, source: closure_1(closure_3[46]), accessibilityLabel: intl.string(guildId(closure_3[33]).t.JZZjQK) };
        const HeaderActionButton = guildId(closure_3[45]).HeaderActionButton;
        intl = guildId(closure_3[33]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    }
    intl = intl5.intl;
    setOptions(obj);
  }, items15);
  const items16 = [guild, sorting, navigation];
  const effect1 = obj.useEffect(() => {
    if (first) {
      if (null != guild) {
        const obj2 = GuildSettingsModalRolesActionCreatorsDefault;
        obj2.startReordering(tmp2.id);
      }
      const obj3 = PlatformUtils;
      if (obj3.isIOS()) {
        const obj4 = { gestureEnabled: !tmp };
        navigation.setOptions(obj4);
      }
    }
    const obj = GuildSettingsModalRolesActionCreatorsDefault;
    obj.stopReordering();
  }, items16);
  const items17 = [guild, memberCount];
  const effect2 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const obj2 = GuildRoleMemberActionCreatorsAll;
      const memberCounts = obj2.fetchMemberCounts(tmp.id);
    }
  }, items17);
  const items18 = [sorting];
  const effect3 = obj.useEffect(() => () => {
    const tmp = sorting;
    if (tmp) {
      const obj = closure_1(closure_3[31]);
      obj.stopReordering();
    }
  }, items18);
  let tmp37 = null;
  if (!tmp18) {
    let obj6 = { style: tmp.searchWrapper, children: hasRoles(tmp3(6472).SearchField, obj7) };
    obj7 = { size: "md", onChange: callback };
    tmp37 = hasRoles(guildEveryoneRole, obj6);
  }
  const items19 = [tmp37, , , ];
  let tmp35Result = null;
  if (sorting) {
    const items20 = [callback7(), ];
    let tmp40Result = null;
    if (!hasRoles) {
      let obj8 = { leading: tmp40(Icon, obj9), label: tmp40(Text, obj10) };
      const FormRow = tmp3(8057).FormRow;
      obj9 = { style: tmp.emptyRolesIcon, size: tmp3(1189).Icon.Sizes.LARGE, source: AssetRegistryDefault };
      Icon = tmp3(1189).Icon;
      obj10 = { variant: "text-md/semibold", color: "interactive-text-default", children: intl.string(tmp3(1127).t.nZfHsf) };
      Text = tmp3(4833).Text;
      intl = tmp3(1127).intl;
      tmp40Result = tmp40(FormRow, obj8);
    }
    let obj11 = { children: items20 };
    items20[1] = tmp40Result;
    tmp35Result = tmp35(tmp36, obj11);
  }
  items19[1] = hasRoles(guildEveryoneRole, { children: tmp35Result });
  let obj12 = { style: tmp.container, children: tmp40(tmp6Result, obj13) };
  obj13 = { ref, header: tmp35Result2, wrapperStyles: tmp.container, contentContainerStyle: items22, data: roleData, rowHasChanged: callback11, onRowMoved: callback6, disableSorting: !sorting, minDraggableIndex: tmp49, renderRow: callback10, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  tmp35Result2 = null;
  tmp6Result = SortableListViewDefault;
  if (!sorting) {
    let callback8Result = null;
    if (!hasSearchQuery) {
      callback8Result = callback8();
    }
    const items21 = [callback8Result, , ];
    let callback9Result = null;
    if (!hasSearchQuery) {
      callback9Result = callback9();
    }
    items21[1] = callback9Result;
    let callback7Result = null;
    if (hasRoles) {
      callback7Result = callback7();
    }
    let obj14 = { children: items21 };
    items21[2] = callback7Result;
    tmp35Result2 = tmp35(tmp36, obj14);
  }
  items22 = [tmp.scrollContainer, contentContainerStyle];
  tmp49 = undefined;
  if (firstEditableIndex >= 0) {
    tmp49 = firstEditableIndex;
  }
  let obj15 = { children: items19 };
  items19[2] = hasRoles(guildEveryoneRole, obj12);
  items19[3] = hasRoles(tmp3(6461).NavScrim, {});
  return closure_22(callback1, obj15);
});
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default tmp8;
