// Module ID: 18040
// Function ID: 18041
// Name: GuildSettingsRoles
// Dependencies: [32, 19, 17, 1186, 2104, 502, 4678, 2103, 2067, 4399, 7375, 18041, 18042, 1078, 21, 4758, 580, 5743, 558, 568, 1245, 18043, 504, 16483, 9833, 1488, 7186, 4404, 4938, 18044, 18053, 18054, 5903, 1119, 5341, 12291, 4754, 4610, 18055, 18056, 18057, 18058, 5802, 5188, 18059, 7621, 12924, 1368, 18051, 5739, 7376, 7297, 8876, 1181, 9820, 16719, 7286, 2]

// Module 18040 (GuildSettingsRoles)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PermissionUtilsAll from "PermissionUtils" /* 4404 */;
import shared from "shared" /* 4610 */;
import Text_Text from "Text/Text" /* 4754 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4938 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5739 */;
import FastImageDefault from "FastImage" /* 5802 */;
import TableRowGroup from "TableRowGroup" /* 5903 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7186 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7376 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9833 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16483 */;
import SortableListViewDefault from "SortableListView" /* 16719 */;
import GuildSettingsRolesManager from "GuildSettingsRolesManager" /* 18043 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 18051 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 18053 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 18054 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 18059 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4678 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7375 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 18041 */;
import TextStyles from "TextStyles" /* 5743 */;

const GuildSettingsRoleCreateModalActionCreatorsDefault = tmp(18044);
require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const isEveryoneRole = fn(2104).isEveryoneRole;
let closure_16 = fn(18042).GuildSettingsRoleEditSections;
const Constants = fn(1078);
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 }, searchWrapper: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 }, subheaderContainer: null, emptySubheaderContainer: null, emptyIlloContainer: null, emptyIllo: null, emptyIlloLarge: null, emptySubheaderBody: null, subheader: null, subheaderBody: null, subheaderButton: null, subheaderDescription: null, divider: null, everyoneWrapper: null, edittingRolesHeader: null, rolesHeader: null, reorderButton: null, reorderButtonText: null, rolesBody: null, emptyRolesIcon: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.subheaderContainer = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.emptySubheaderContainer = { paddingBottom: 16, alignItems: "center" };
let obj4 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.emptyIlloContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
obj2.emptyIllo = { marginTop: 28, width: "100%" };
obj2.emptyIlloLarge = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
obj2.emptySubheaderBody = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj6 = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj6.marginTop = 16;
obj2.subheader = obj6;
obj2.subheaderBody = { marginTop: 8, textAlign: "center" };
obj2.subheaderButton = { flexGrow: 0, marginTop: 16 };
obj2.subheaderDescription = { lineHeight: 18, textAlign: "center" };
obj2.divider = { height: StyleSheet.hairlineWidth, width: "100%" };
obj2.everyoneWrapper = { marginTop: 2, marginBottom: 24 };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
obj2.edittingRolesHeader = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
obj2.rolesHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj2.reorderButton = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
obj2.reorderButtonText = { marginLeft: 8 };
obj2.rolesBody = { padding: 16, paddingTop: 8, lineHeight: 18 };
obj2.emptyRolesIcon = { opacity: 0.4 };
let closure_24 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(16);
  [first, dependencyMap] = noop.useState("");
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let obj = require("c");
  [r10027, _slicedToArray] = noop.useState(tmp5);
  noop = obj2.useRef(false);
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
            const formatted = name.name.toLowerCase();
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
            const formatted = name.name.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
  }
  closure_6 = tmp7;
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
            const formatted = name.name.toLowerCase();
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
      if (!closure_1) {
        tmp = closure_2;
        str = "";
        if ("" !== closure_2.trim()) {
          tmp5 = closure_6;
          tmp6 = closure_6(tmp);
        } else {
          tmp2 = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_4(closure_0);
        }
      }
      return;
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
  closure_0 = arg0;
  closure_1 = arg1;
  [str, closure_3] = noop.useState("");
  const tmp2 = _slicedToArray(noop.useState(() => closure_0), 2);
  _slicedToArray = tmp2[1];
  noop = noop.useRef(false);
  const items = [arg0];
  const setSearchQuery = noop.useCallback((str) => {
    const trimmed = str.toLowerCase().trim();
    let current = ref.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      ref.current = true;
      AnalyticsUtilsDefault.track(constants2.SEARCH_STARTED, { search_type: "Roles" });
    }
    closure_3(trimmed);
    if ("" === trimmed) {
      let found = closure_0;
    } else {
      found = closure_0.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    closure_4(found);
  }, items);
  const items1 = [arg1, str, arg0, setSearchQuery];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      if ("" !== "".trim()) {
        callback(tmp);
      } else {
        closure_4(closure_0);
      }
      tmp = str;
    }
  }, items1);
  return { hasSearchQuery: "" !== str.trim(), filteredRoles: tmp2[0], setSearchQuery };
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(roleJustCreated) {
      return roleJustCreated.roleJustCreated;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const guildSettingsRolesManagerState = require("GuildSettingsRolesManager").useGuildSettingsRolesManagerState(first);
  if (cResult[1] === arg0) {
    if (cResult[2] === guildSettingsRolesManagerState) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
  }
  const fn2 = function o() {
    if (guildSettingsRolesManagerState) {
      const _setTimeout = setTimeout;
      setTimeout(() => {
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
        ref(dependencyMap[21]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
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
  _require = arg0;
  const guildSettingsRolesManagerState = require("GuildSettingsRolesManager").useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  const items = [arg0, guildSettingsRolesManagerState];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (guildSettingsRolesManagerState) {
      const _setTimeout = setTimeout;
      setTimeout(() => {
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
        ref(dependencyMap[21]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
      };
    }
  }, items);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      guild = GuildStore.getGuild(closure_0);
      let result = null != guild;
      if (result) {
        result = PermissionStore.canAccessGuildSettings(guild);
      }
      return { canAccessSettings: result, canManageRoles: PermissionStore.can(constants4.MANAGE_ROLES, guild) };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp7);
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  if (cResult[3] === canAccessSettings) {
    if (cResult[4] === canManageRoles) {
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
    }
    const effect = noop.useEffect(tmp9, tmp10);
  }
  const fn2 = function s() {
    let tmp = canManageRoles;
    if (canManageRoles) {
      tmp = canAccessSettings;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
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
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let result = null != guild;
    if (result) {
      result = PermissionStore.canAccessGuildSettings(guild);
    }
    return { canAccessSettings: result, canManageRoles: PermissionStore.can(constants4.MANAGE_ROLES, guild) };
  });
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items1 = [canManageRoles, canAccessSettings];
  const effect = noop.useEffect(() => {
    let tmp = canManageRoles;
    if (canManageRoles) {
      tmp = canAccessSettings;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(141);
  guildId = guildId.guildId;
  let obj = guildId(568);
  importDefault = closure_24();
  let obj2 = guild;
  let tmp4 = closure_24();
  const ref = guild.useRef(null);
  const navigation = guildId(1488).useNavigation();
  let obj3 = guildId(1488);
  dependencyMap = useIsWindowLargeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [memberCount];
    let fn = function p() {
      return memberCount.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp7 = useIsWindowLargeDefault();
  const stateFromStores = guildId(504).useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [sorting, highestRole, rolesOrder, setSearchQuery, hasSearchQuery, currentUserId];
    cResult[2] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class F {
      constructor() {
        tmp = guildId;
        guild = closure_12.getGuild(guildId);
        id = closure_9.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_11;
          everyoneRole = closure_11.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_10;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_10.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_14;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
        obj.rolesOrder = closure_15.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[27]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    cResult[3] = guildId;
    cResult[4] = F;
    let tmp19 = F;
  } else {
    class F {
      constructor() {
        tmp = guildId;
        guild = closure_12.getGuild(guildId);
        id = closure_9.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_11;
          everyoneRole = closure_11.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_10;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_10.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_14;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
        obj.rolesOrder = closure_15.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[27]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
  }
  let tmpResult = guildId(504);
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(tmp12, tmp19);
  guild = stateFromStoresObject.guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  ({ sortedGuildRoles, rolesOrder } = stateFromStoresObject);
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  closure_26(ref);
  closure_27(guildId);
  const tmp23 = stateFromStores(obj2.useState(false), 2);
  sorting = tmp23[0];
  closure_13 = tmp23[1];
  const tmp25 = closure_25(sortedGuildRoles, sorting);
  ({ filteredRoles, hasSearchQuery } = tmp25);
  setSearchQuery = tmp25.setSearchQuery;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        tmp = guildId;
        guild = closure_12.getGuild(guildId);
        id = closure_9.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_11;
          everyoneRole = closure_11.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_10;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_10.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_14;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
        obj.rolesOrder = closure_15.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[27]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    let items2 = [highestRole];
    cResult[5] = items2;
  } else {
    class F {
      constructor() {
        tmp = guildId;
        guild = closure_12.getGuild(guildId);
        id = closure_9.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_11;
          everyoneRole = closure_11.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_10;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_10.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_14;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
        obj.rolesOrder = closure_15.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[27]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
  }
  if (cResult[6] === guildId) {
    class F {
      constructor() {
        tmp = guildId;
        guild = closure_12.getGuild(guildId);
        id = closure_9.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_11;
          everyoneRole = closure_11.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_10;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_10.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_14;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
        obj.rolesOrder = closure_15.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[27]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    tmp(504);
    if (null != rolesOrder) {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    if (cResult[9] === currentUserId) {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
      cResult[16] = tmp31;
      const tmp30 = tmp31;
    } else {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    if (cResult[17] !== roleMemberCount) {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
      cResult[17] = roleMemberCount;
      cResult[18] = tmp33;
      const tmp32 = tmp33;
    } else {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    const found = filteredRoles.filter(tmp30);
    const mapped = found.map(tmp32);
    if (null != guild) {
      class F {
        constructor() {
          tmp = guildId;
          guild = closure_12.getGuild(guildId);
          id = closure_9.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_11;
            everyoneRole = closure_11.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_10;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_10.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_14;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_14.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_11.getSortedRoles(tmp);
          obj.rolesOrder = closure_15.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[27]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
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
    if (null != rolesOrder) {
      let manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  };
  cResult[6] = guildId;
  cResult[7] = rolesOrder;
  cResult[8] = fn2;
}) : ((guildId) => {
  guildId = guildId.guildId;
  guild = undefined;
  let memberCount;
  let sortedGuildRoles;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  closure_14 = undefined;
  let filteredRoles;
  closure_22 = undefined;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let tmp = callback2();
  importDefault = tmp;
  const ref = guild.useRef(null);
  const navigation = guildId(1488).useNavigation();
  const tmp7 = useIsWindowLargeDefault();
  dependencyMap = tmp7;
  let obj2 = guildId(1488);
  let items = [memberCount];
  const stateFromStores = guildId(504).useStateFromStores(items, () => memberCount.theme);
  let obj3 = guildId(504);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, filteredRoles, closure_14, rolesOrder];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => {
    guild = GuildStore.getGuild(guildId);
    const id = AuthenticationStore.getId();
    const obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
    let everyoneRole = null;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    obj.guildEveryoneRole = everyoneRole;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    let num = GuildMemberCountStore.getMemberCount(id1);
    if (num == null) {
      num = 0;
    }
    obj.memberCount = num;
    let id2;
    if (guild != null) {
      id2 = guild.id;
    }
    obj.roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(id2);
    obj.sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
    obj.rolesOrder = GuildSettingsModalRolesStore.order;
    obj.currentUserId = id;
    highestRole = undefined;
    if (null != guild) {
      highestRole = PermissionUtilsAll.getHighestRole(guild, id);
    }
    obj.highestRole = highestRole;
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
  callback4(ref);
  callback5(guildId);
  let tmp12 = stateFromStores(guild.useState(false), 2);
  const sorting = tmp12[0];
  closure_14 = tmp12[1];
  let tmp14 = callback3(sortedGuildRoles, sorting);
  filteredRoles = tmp14.filteredRoles;
  const hasSearchQuery = tmp14.hasSearchQuery;
  const setSearchQuery = tmp14.setSearchQuery;
  let obj4 = guildId(504);
  let items2 = [currentUserId];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(items2, () => {
    if (null != rolesOrder) {
      let manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  let items3 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, filteredRoles, guild, currentUserId, highestRole];
  const memo = guild.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : filteredRoles.filter((item) => !roleMemberCount(item));
    const mapped = found.map((role) => {
      const obj = { role, memberCount: null };
      let num;
      if (roleMemberCount != null) {
        num = tmp[role.id];
      }
      if (num == null) {
        num = 0;
      }
      obj.memberCount = num;
      return obj;
    });
    let num = 0;
    if (null != guild) {
      num = mapped.findIndex((role) => navigation(closure_3[27]).isRoleHigher(guild, currentUserId, highestRole, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items3);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp18 = sorting;
  if (!sorting) {
    tmp18 = tmp17 < 10;
  }
  closure_22 = tmp18;
  let items4 = [setSearchQuery];
  const items5 = [guild];
  const callback = obj.useCallback((str) => {
    setSearchQuery(str.toLowerCase());
  }, items4);
  callback1 = obj.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants3.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
    obj.track(constants2.OPEN_MODAL, obj2);
    GuildSettingsRoleCreateModalActionCreatorsDefault.open();
  }, items5);
  const items6 = [navigation];
  callback2 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    navigation.push(constants.ROLE_EDIT_REFRESH, { role, newRole: flag, section: hasSearchQuery.DISPLAY });
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
    let tmp = updates.length > 0;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      actions_GuildActionCreators.batchRoleUpdate(guild.id, updates);
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
    GuildSettingsModalRolesActionCreatorsDefault.updateRoleOrder(to.from, to);
  }, items10);
  const items11 = [tmp, roleData, hasSearchQuery, sorting, callback4];
  const callback7 = obj.useCallback(() => {
    const items = [closure_1.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = tmp3.edittingRolesHeader;
    }
    const obj = { style: items, children: null };
    items[1] = edittingRolesHeader;
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.formatToPlainString(util.t["38N3Vz"], { numRoles: "" + roleData.length });
    const items1 = [guild(TableRowGroup.TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!hasSearchQuery) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp7(1119).intl;
        obj4.accessibilityLabel = intl2.string(tmp7(1119).t["0dOFq+"]);
        obj4.onPress = callback4;
        obj4.style = tmp3.reorderButton;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const items2 = [tmp6(tmp7(12291).ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: tmp3.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: null };
        const intl3 = tmp7(1119).intl;
        obj6.children = intl3.string(tmp7(1119).t["0dOFq+"]);
        items2[1] = tmp6(tmp7(4754).Text, obj6);
        obj4.children = items2;
        tmpResult = tmp(tmp7(5341).PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    obj.children = items1;
    const children = [closure_2_22(timestampProducer, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: tmp3.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      const intl4 = tmp7(1119).intl;
      obj7.children = intl4.string(tmp7(1119).t.nHcwVl);
      tmp6Result = tmp6(tmp7(4754).Text, obj7);
    }
    children[1] = tmp6Result;
    return closure_2_22(timestampProducer, { children });
  }, items11);
  const items12 = [tmp, callback1, hasRoles, stateFromStores, tmp7, tmp18];
  const items13 = [tmp, callback2, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback8 = obj.useCallback(() => {
    const isThemeDarkResult = shared.isThemeDark(stateFromStores);
    let tmp4 = dependencyMap;
    if (closure_3) {
      if (isThemeDarkResult) {
        tmp4 = 18055;
        let tmp3Result = tmp3(tmp4);
      } else {
        tmp3Result = tmp3(18056);
      }
    } else {
      if (isThemeDarkResult) {
        let tmp3Result2 = tmp3(18057);
      } else {
        tmp3Result2 = tmp3(18058);
      }
      if (hasRoles) {
        const items = [closure_1.subheaderContainer, ];
        let num = 0;
        if (closure_22) {
          num = nativeDefault.space.PX_16;
        }
        const obj2 = { children: null };
        const obj3 = { style: null, children: null };
        const obj4 = { paddingTop: num };
        items[1] = obj4;
        obj3.style = items;
        const obj5 = { style: closure_1.subheaderDescription, variant: "text-sm/medium", color: "interactive-text-default", children: null };
        const intl4 = util.intl;
        obj5.children = intl4.string(util.t["1ydhVp"]);
        obj3.children = guild(Text_Text.Text, obj5);
        const items1 = [guild(timestampProducer, obj3), ];
        const obj6 = { style: closure_1.divider };
        items1[1] = guild(timestampProducer, obj6);
        obj2.children = items1;
        let tmp9Result = tmp9(closure_2_23, obj2);
      } else {
        const obj7 = { style: closure_1.emptySubheaderContainer, children: null };
        const obj8 = { style: closure_1.emptyIlloContainer, children: null };
        const items2 = [closure_1.emptyIllo, ];
        let emptyIlloLarge = null;
        if (closure_3) {
          emptyIlloLarge = tmp11.emptyIlloLarge;
        }
        const obj9 = { style: null, source: null };
        items2[1] = emptyIlloLarge;
        obj9.style = items2;
        obj9.source = tmp3Result2;
        obj8.children = guild(FastImageDefault, obj9);
        const items3 = [guild(timestampProducer, obj8), , ];
        const obj10 = { style: closure_1.emptySubheaderBody, children: null };
        const obj11 = { style: closure_1.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl = util.intl;
        obj11.children = intl.string(util.t.ALlnbi);
        const items4 = [guild(Text_Text.Heading, obj11), , ];
        const obj12 = { style: closure_1.subheaderBody, variant: "text-sm/medium", color: "text-default", children: null };
        const intl2 = util.intl;
        obj12.children = intl2.string(util.t["1ydhVp"]);
        items4[1] = guild(Text_Text.Text, obj12);
        const obj13 = { style: closure_1.subheaderButton, children: null };
        const obj14 = { text: null, onPress: null };
        const intl3 = util.intl;
        obj14.text = intl3.string(util.t.JZZjQK);
        obj14.onPress = callback1;
        obj13.children = guild(components_Button_Button.Button, obj14);
        items4[2] = guild(timestampProducer, obj13);
        obj10.children = items4;
        items3[1] = closure_2_22(timestampProducer, obj10);
        const obj15 = { style: closure_1.divider };
        items3[2] = guild(timestampProducer, obj15);
        obj7.children = items3;
        tmp9Result = tmp9(timestampProducer, obj7);
      }
      return tmp9Result;
    }
  }, items12);
  const items14 = [guild, roleData.length, currentUserId, highestRole, sorting, callback2, callback3, callback6];
  const callback9 = obj.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: null };
        const obj3 = {
          role: tmp2,
          locked: !obj.isRoleHigher(tmp, currentUserId, highestRole, tmp2),
          onPress() {
                return callback2(guildEveryoneRole);
              },
          guildId: tmp.id,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true
        };
        obj2.children = closure_2_21(GuildSettingsRoleItemDefault, obj3);
        return closure_2_21(timestampProducer, obj2);
      }
    }
    return null;
  }, items13);
  const callback10 = obj.useCallback((role, from) => {
    if (null == guild) {
      return hasRoles(callback1, {});
    } else {
      role = role.role;
      const obj = navigation(4404);
      const diff = roleData.length - 1;
      const obj2 = { sorting, isEveryoneRole: null, role: null, locked: null, guildId: null, numMembers: null, isFirstRole: null, isLastRole: null, onPress: null, onLongPress: null, onMoveUp: null, onMoveDown: null };
      let tmp3 = null != tmp;
      const tmp19 = !obj.isRoleHigher(tmp, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      obj2.isEveryoneRole = tmp3;
      obj2.role = role;
      obj2.locked = tmp19;
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      obj2.guildId = id;
      obj2.numMembers = role.memberCount;
      obj2.isFirstRole = 0 === from;
      obj2.isLastRole = from === diff;
      obj2.onPress = callback2;
      obj2.onLongPress = callback3;
      let fn;
      if (0 !== from) {
        fn = () => {
          callback6({ from, to: from - 1 });
        };
      }
      obj2.onMoveUp = fn;
      let fn2;
      if (from !== diff) {
        fn2 = () => {
          callback6({ from, to: from + 1 });
        };
      }
      obj2.onMoveDown = fn2;
      return tmp22(closure_1(18059), obj2, role.id);
    }
  }, items14);
  const items15 = [callback1, callback5, callback4, hasRoles, sorting, navigation];
  const callback11 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: onPress2, text: null };
        const intl = guildId(1119).intl;
        obj.text = intl.string(guildId(1119).t["ETE/oC"]);
        return hasRoles(guildId(7621).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: onPress3, text: null };
        const intl = guildId(1119).intl;
        obj.text = intl.string(guildId(1119).t["R3BPH+"]);
        return hasRoles(guildId(7621).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress, source: closure_1(12924), accessibilityLabel: null };
        const intl = guildId(1119).intl;
        obj.accessibilityLabel = intl.string(guildId(1119).t.JZZjQK);
        return hasRoles(guildId(7621).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    let intl = util.intl;
    obj.headerTitle = intl.string(util.t.UvdTMj);
    navigation.setOptions(obj);
  }, items15);
  const items16 = [guild, sorting, navigation];
  const effect1 = obj.useEffect(() => {
    if (first) {
      if (null != guild) {
        GuildSettingsModalRolesActionCreatorsDefault.startReordering(tmp2.id);
      }
      if (obj3.isIOS()) {
        const obj4 = { gestureEnabled: !tmp };
        navigation.setOptions(obj4);
      }
    }
    GuildSettingsModalRolesActionCreatorsDefault.stopReordering();
  }, items16);
  const items17 = [guild, memberCount];
  const effect2 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(tmp.id);
    }
  }, items17);
  const items18 = [sorting];
  const effect3 = obj.useEffect(() => () => {
    if (sorting) {
      closure_1(dependencyMap[31]).stopReordering();
      const obj = closure_1(dependencyMap[31]);
    }
  }, items18);
  let tmp37 = null;
  if (!tmp18) {
    let obj6 = { style: tmp.searchWrapper, children: null };
    let obj7 = { size: "md", onChange: callback };
    obj6.children = hasRoles(tmp3(7297).SearchField, obj7);
    tmp37 = hasRoles(guildEveryoneRole, obj6);
  }
  const items19 = [tmp37, , , ];
  let tmp35Result = null;
  if (sorting) {
    const items20 = [callback7(), ];
    let tmp40Result = null;
    if (!hasRoles) {
      let obj8 = { leading: null, label: null };
      let obj9 = { style: tmp.emptyRolesIcon, size: tmp3(1181).Icon.Sizes.LARGE, source: tmp6(9820) };
      obj8.leading = tmp40(tmp3(1181).Icon, obj9);
      let obj10 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(1119).intl;
      obj10.children = intl.string(tmp3(1119).t.nZfHsf);
      obj8.label = tmp40(tmp3(4754).Text, obj10);
      tmp40Result = tmp40(tmp3(8876).FormRow, obj8);
    }
    let obj11 = { children: null };
    items20[1] = tmp40Result;
    obj11.children = items20;
    tmp35Result = tmp35(tmp36, obj11);
  }
  items19[1] = hasRoles(guildEveryoneRole, { children: tmp35Result });
  let obj12 = { style: tmp.container, children: null };
  let obj13 = { ref, header: null, wrapperStyles: null, contentContainerStyle: null, data: null, rowHasChanged: null, onRowMoved: null, disableSorting: null, minDraggableIndex: null, renderRow: null, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  let tmp35Result2 = null;
  let obj5 = guildId(504);
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
    let obj14 = { children: null };
    items21[2] = callback7Result;
    obj14.children = items21;
    tmp35Result2 = tmp35(tmp36, obj14);
  }
  obj13.header = tmp35Result2;
  obj13.wrapperStyles = tmp.container;
  const items22 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj13.contentContainerStyle = items22;
  obj13.data = roleData;
  obj13.rowHasChanged = callback11;
  obj13.onRowMoved = callback6;
  obj13.disableSorting = !sorting;
  let tmp49;
  if (firstEditableIndex >= 0) {
    tmp49 = firstEditableIndex;
  }
  let obj15 = { children: null };
  obj13.minDraggableIndex = tmp49;
  obj13.renderRow = callback10;
  obj12.children = hasRoles(SortableListViewDefault, obj13);
  items19[2] = hasRoles(guildEveryoneRole, obj12);
  items19[3] = hasRoles(guildId(7286).NavScrim, {});
  obj15.children = items19;
  return closure_22(callback1, obj15);
});
