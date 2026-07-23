// Module ID: 16298
// Function ID: 126956
// Name: hasSearchQuery
// Dependencies: [57, 31, 27, 1278, 1911, 1194, 4051, 1910, 1838, 3758, 5149, 16299, 16300, 653, 33, 4130, 689, 5052, 675, 16301, 566, 16206, 8438, 1456, 8133, 3763, 4324, 16302, 16311, 16312, 5503, 1212, 4660, 11274, 4126, 3976, 16313, 16314, 16315, 16316, 5085, 4543, 16317, 5788, 11804, 477, 16309, 5048, 5150, 5772, 7495, 1273, 8424, 15108, 5448, 2]
// Exports: default

// Module 16298 (hasSearchQuery)
import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "module_16302";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { GuildSettingsRoleEditSections as closure_16 } from "MAX_SUBCATEGORIES";
import ME from "ME";
import jsxProd from "ArrowsUpDownIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function hasSearchQuery(first) {
  return "" !== first.trim();
}
function useSearchQueryStateWithAnalytics(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = callback(React.useState(""), 2);
  const first = tmp[0];
  let closure_3 = tmp[1];
  const tmp3 = callback(React.useState(() => closure_0), 2);
  callback = tmp3[1];
  React = React.useRef(false);
  const items = [arg0];
  callback = React.useCallback((str) => {
    const trimmed = str.toLowerCase().trim();
    let current = ref.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      ref.current = true;
      let obj = callback(675);
      obj = { search_type: "Roles" };
      obj.track(outer1_18.SEARCH_STARTED, obj);
    }
    dependencyMap(trimmed);
    if ("" === trimmed) {
      let found = trimmed;
    } else {
      found = trimmed.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    _slicedToArray(found);
  }, items);
  const items1 = [arg1, first, arg0, callback];
  const effect = React.useEffect(() => {
    if (!closure_1) {
      if (outer1_25(first)) {
        callback(first);
      } else {
        callback2(closure_0);
      }
    }
  }, items1);
  return { hasSearchQuery: hasSearchQuery(first), filteredRoles: tmp3[0], setSearchQuery: callback };
}
const View = get_ActivityIndicator.View;
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.searchWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subheaderContainer = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.emptySubheaderContainer = { paddingBottom: 16, alignItems: "center" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
_createForOfIteratorHelperLoose.emptyIlloContainer = obj2;
_createForOfIteratorHelperLoose.emptyIllo = { marginTop: 28, width: "100%" };
_createForOfIteratorHelperLoose.emptyIlloLarge = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
_createForOfIteratorHelperLoose.emptySubheaderBody = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj3 = {};
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let merged = Object.assign(require("createTextStyle")(ME.Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3["marginTop"] = 16;
_createForOfIteratorHelperLoose.subheader = obj3;
_createForOfIteratorHelperLoose.subheaderBody = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subheaderButton = { flexGrow: 0, marginTop: 16 };
_createForOfIteratorHelperLoose.subheaderDescription = { lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose.divider = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, width: "100%" };
_createForOfIteratorHelperLoose.everyoneWrapper = { marginTop: 2, marginBottom: 24 };
_createForOfIteratorHelperLoose.edittingRolesHeader = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.rolesHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
_createForOfIteratorHelperLoose.reorderButton = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.reorderButtonText = { marginLeft: 8 };
_createForOfIteratorHelperLoose.rolesBody = { padding: 16, paddingTop: 8, lineHeight: 18 };
_createForOfIteratorHelperLoose.emptyRolesIcon = { opacity: 0.4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  guildId = guildId.guildId;
  let tmp = callback3();
  const importDefault = tmp;
  const ref = guild.useRef(null);
  let obj = guildId(1456);
  const navigation = obj.useNavigation();
  const tmp4 = importDefault(8133)();
  const dependencyMap = tmp4;
  let obj1 = guildId(566);
  let items = [memberCount];
  const stateFromStores = obj1.useStateFromStores(items, () => memberCount.theme);
  let obj2 = guildId(566);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, filteredRoles, closure_14, rolesOrder];
  let stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const guild = highestRole.getGuild(guildId);
    const id = sortedGuildRoles.getId();
    const obj = { guild };
    let everyoneRole = null;
    if (null != guild) {
      everyoneRole = currentUserId.getEveryoneRole(guild);
    }
    obj.guildEveryoneRole = everyoneRole;
    let id1;
    if (null != guild) {
      id1 = guild.id;
    }
    const memberCount = rolesOrder.getMemberCount(id1);
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    obj.memberCount = num;
    let id2;
    if (null != guild) {
      id2 = guild.id;
    }
    obj.roleMemberCount = roleMemberCount.getRoleMemberCount(id2);
    obj.sortedGuildRoles = currentUserId.getSortedRoles(guildId);
    obj.rolesOrder = filteredRoles.order;
    obj.currentUserId = id;
    highestRole = undefined;
    if (null != guild) {
      highestRole = navigation(tmp4[25]).getHighestRole(guild, id);
      const obj2 = navigation(tmp4[25]);
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
  (function useRoleJustCreatedHelper(ref) {
    let closure_0 = ref;
    const guildSettingsRolesManagerState = guildId(tmp4[19]).useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
    const items = [ref, guildSettingsRolesManagerState];
    const layoutEffect = guild.useLayoutEffect(() => {
      if (guildSettingsRolesManagerState) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          const current = ref.current;
          let tmp = null == current;
          let tmp2 = current;
          if (!tmp) {
            const _listRef = current._listRef;
            tmp = null == _listRef;
            tmp2 = _listRef;
          }
          let obj = tmp2;
          if (!tmp) {
            const current2 = tmp2.current;
            tmp = null == current2;
            obj = current2;
          }
          if (!tmp) {
            obj.scrollToEnd();
          }
          guildId(16301).setRoleJustCreated(false);
        }, 1000);
        return () => {
          clearTimeout(closure_0);
          guildId(16301).setRoleJustCreated(false);
        };
      }
    }, items);
  })(ref);
  (function useGuildRoleAccessGuard(guildId) {
    let closure_0 = guildId;
    const items = [highestRole, first];
    const stateFromStoresObject = guildId(tmp4[20]).useStateFromStoresObject(items, () => {
      const guild = highestRole.getGuild(closure_0);
      const obj = {};
      let result = null != guild;
      if (result) {
        result = first.canAccessGuildSettings(guild);
      }
      obj.canAccessSettings = result;
      obj.canManageRoles = first.can(firstEditableIndex.MANAGE_ROLES, guild);
      return obj;
    });
    const canAccessSettings = stateFromStoresObject.canAccessSettings;
    const canManageRoles = stateFromStoresObject.canManageRoles;
    const items1 = [canManageRoles, canAccessSettings];
    const effect = guild.useEffect(() => {
      let tmp = canManageRoles;
      if (canManageRoles) {
        tmp = canAccessSettings;
      }
      if (!tmp) {
        canAccessSettings(16206).terminate();
        const obj = canAccessSettings(16206);
        canAccessSettings(8438).close();
        const obj2 = canAccessSettings(8438);
      }
    }, items1);
  })(guildId);
  const tmp9 = stateFromStores(guild.useState(false), 2);
  const first = tmp9[0];
  closure_14 = tmp9[1];
  const tmp11 = callback5(sortedGuildRoles, first);
  filteredRoles = tmp11.filteredRoles;
  const hasSearchQuery = tmp11.hasSearchQuery;
  const setSearchQuery = tmp11.setSearchQuery;
  let obj3 = guildId(566);
  let items2 = [currentUserId];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    if (null != rolesOrder) {
      let manyRoles = currentUserId.getManyRoles(guildId, rolesOrder);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  let items3 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, filteredRoles, guild, currentUserId, highestRole];
  const memo = guild.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : filteredRoles.filter((arg0) => !roleMemberCount(arg0));
    const mapped = found.map((role) => {
      const obj = { role };
      let tmp;
      if (null != outer1_8) {
        tmp = outer1_8[role.id];
      }
      let num = 0;
      if (null != tmp) {
        num = tmp;
      }
      obj.memberCount = num;
      return obj;
    });
    let num = 0;
    if (null != guild) {
      num = mapped.findIndex((role) => navigation(table[25]).isRoleHigher(outer1_5, outer1_11, outer1_12, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    let obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
    return obj;
  }, items3);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  const items4 = [setSearchQuery];
  const items5 = [guild];
  const callback = guild.useCallback((str) => {
    setSearchQuery(str.toLowerCase());
  }, items4);
  const callback1 = guild.useCallback(() => {
    let obj = tmp(tmp4[18]);
    obj = { type: roleData.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const merged = Object.assign(guildId(tmp4[26]).collectGuildAnalyticsMetadata(id));
    obj.track(stateFromStoresArray.OPEN_MODAL, obj);
    const obj3 = guildId(tmp4[26]);
    tmp(tmp4[27]).open();
  }, items5);
  const items6 = [navigation];
  const callback2 = guild.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = { role, newRole: flag, section: hasSearchQuery.DISPLAY };
    navigation.push(setSearchQuery.ROLE_EDIT_REFRESH, obj);
  }, items6);
  const items7 = [setSearchQuery];
  callback3 = guild.useCallback(() => {
    roleMemberCount(true);
    setSearchQuery("");
  }, items7);
  const items8 = [setSearchQuery];
  const callback4 = guild.useCallback(() => {
    setSearchQuery("");
    roleMemberCount((arg0) => !arg0);
  }, items8);
  const items9 = [guild, callback4];
  callback5 = guild.useCallback(() => {
    const updates = filteredRoles.getUpdates();
    let tmp = updates.length > 0;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      guildId(guildId[28]).batchRoleUpdate(guild.id, updates);
      const obj = guildId(guildId[28]);
    }
    callback4();
  }, items9);
  const items10 = [firstEditableIndex];
  const callback6 = guild.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, firstEditableIndex);
      const tmp = globalThis;
    } else {
      to = to.to;
    }
    tmp(tmp4[29]).updateRoleOrder(to.from, to);
  }, items10);
  const items11 = [tmp, roleData, hasSearchQuery, first, callback4];
  const callback7 = guild.useCallback(() => {
    let obj = {};
    obj = {};
    const items = [callback1.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = tmp.edittingRolesHeader;
    }
    items[1] = edittingRolesHeader;
    obj.style = items;
    obj = {};
    const intl = guildId(tmp4[31]).intl;
    const obj1 = { numRoles: "" + roleData.length };
    obj.title = intl.formatToPlainString(guildId(tmp4[31]).t["38N3Vz"], obj1);
    const items1 = [hasRoles(guildId(tmp4[30]).TableRowGroupTitle, obj), ];
    let tmp5 = null;
    if (!first) {
      tmp5 = null;
      if (!hasSearchQuery) {
        const obj2 = { accessibilityRole: "button" };
        const intl2 = guildId(tmp4[31]).intl;
        obj2.accessibilityLabel = intl2.string(guildId(tmp4[31]).t["0dOFq+"]);
        obj2.onPress = callback4;
        obj2.style = tmp.reorderButton;
        const obj3 = { color: tmp(tmp4[16]).colors.TEXT_LINK, size: "sm" };
        const items2 = [hasRoles(guildId(tmp4[33]).ArrowsUpDownIcon, obj3), ];
        const obj4 = { style: tmp.reorderButtonText, variant: "text-sm/medium", color: "text-link" };
        const intl3 = guildId(tmp4[31]).intl;
        obj4.children = intl3.string(guildId(tmp4[31]).t["0dOFq+"]);
        items2[1] = hasRoles(guildId(tmp4[34]).Text, obj4);
        obj2.children = items2;
        tmp5 = callback1(guildId(tmp4[32]).PressableOpacity, obj2);
      }
    }
    items1[1] = tmp5;
    obj.children = items1;
    const items3 = [callback1(guildEveryoneRole, obj), ];
    let tmp14 = null;
    if (first) {
      const obj5 = { style: tmp.rolesBody, variant: "text-sm/medium", color: "interactive-text-default" };
      const intl4 = guildId(tmp4[31]).intl;
      obj5.children = intl4.string(guildId(tmp4[31]).t.nHcwVl);
      tmp14 = hasRoles(guildId(tmp4[34]).Text, obj5);
    }
    items3[1] = tmp14;
    obj.children = items3;
    return callback1(guildEveryoneRole, obj);
  }, items11);
  const items12 = [tmp, callback1, hasRoles, stateFromStores, tmp4];
  const items13 = [tmp, callback2, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback8 = guild.useCallback(() => {
    let obj = guildId(tmp4[35]);
    const isThemeDarkResult = obj.isThemeDark(stateFromStores);
    if (tmp4) {
      if (isThemeDarkResult) {
        let tmp2Result = tmp2(tmp3[36]);
      } else {
        tmp2Result = tmp2(tmp3[37]);
      }
    } else {
      if (isThemeDarkResult) {
        tmp2Result = tmp2(tmp3[38]);
      } else {
        tmp2Result = tmp2(tmp3[39]);
      }
      if (hasRoles) {
        obj = {};
        obj = { style: tmp.subheaderContainer };
        const obj1 = { style: tmp.subheaderDescription, variant: "text-sm/medium", color: "interactive-text-default" };
        const intl4 = guildId(tmp4[31]).intl;
        obj1.children = intl4.string(guildId(tmp4[31]).t["1ydhVp"]);
        obj.children = hasRoles(guildId(tmp4[34]).Text, obj1);
        const items = [hasRoles(guildEveryoneRole, obj), ];
        const obj2 = { style: tmp.divider };
        items[1] = hasRoles(guildEveryoneRole, obj2);
        obj.children = items;
        let tmp8Result = tmp8(callback2, obj);
      } else {
        const obj3 = { style: tmp.emptySubheaderContainer };
        const obj4 = { style: tmp.emptyIlloContainer };
        const obj5 = {};
        const items1 = [tmp.emptyIllo, ];
        let emptyIlloLarge = null;
        if (tmp4) {
          emptyIlloLarge = tmp.emptyIlloLarge;
        }
        items1[1] = emptyIlloLarge;
        obj5.style = items1;
        obj5.source = tmp2Result;
        obj4.children = hasRoles(tmp(tmp4[40]), obj5);
        const items2 = [hasRoles(guildEveryoneRole, obj4), , ];
        const obj6 = { style: tmp.emptySubheaderBody };
        const obj7 = { style: tmp.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
        const intl = guildId(tmp4[31]).intl;
        obj7.children = intl.string(guildId(tmp4[31]).t.ALlnbi);
        const items3 = [hasRoles(guildId(tmp4[34]).Heading, obj7), , ];
        const obj8 = { style: tmp.subheaderBody, variant: "text-sm/medium", color: "text-default" };
        const intl2 = guildId(tmp4[31]).intl;
        obj8.children = intl2.string(guildId(tmp4[31]).t["1ydhVp"]);
        items3[1] = hasRoles(guildId(tmp4[34]).Text, obj8);
        const obj9 = { style: tmp.subheaderButton };
        const obj10 = {};
        const intl3 = guildId(tmp4[31]).intl;
        obj10.text = intl3.string(guildId(tmp4[31]).t.JZZjQK);
        obj10.onPress = callback1;
        obj9.children = hasRoles(guildId(tmp4[41]).Button, obj10);
        items3[2] = hasRoles(guildEveryoneRole, obj9);
        obj6.children = items3;
        items2[1] = callback1(guildEveryoneRole, obj6);
        const obj11 = { style: tmp.divider };
        items2[2] = hasRoles(guildEveryoneRole, obj11);
        obj3.children = items2;
        tmp8Result = tmp8(tmp9, obj3);
        const tmp14 = tmp(tmp4[40]);
      }
      return tmp8Result;
    }
  }, items12);
  const items14 = [guild, roleData.length, currentUserId, highestRole, first, callback2, callback3, callback6];
  const callback9 = guild.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        let obj = navigation(tmp4[25]);
        obj = { style: tmp.everyoneWrapper };
        obj = { role: guildEveryoneRole };
        obj.locked = !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole);
        obj.onPress = function onPress() {
          return outer1_23(outer1_6);
        };
        obj.guildId = guild.id;
        obj.sorting = false;
        obj.numMembers = 0;
        obj.isEveryoneRole = true;
        obj.isLastRole = true;
        obj.isFirstRole = true;
        obj.children = hasRoles(tmp(guild[42]), obj);
        return hasRoles(guildEveryoneRole, obj);
      }
    }
    return null;
  }, items13);
  const callback10 = guild.useCallback((role) => {
    let closure_0 = arg1;
    if (null == guild) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      let obj = navigation(tmp4[25]);
      obj = { sorting: first };
      let tmp2 = null != guild;
      const tmp18 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      if (tmp2) {
        tmp2 = roleMemberCount(role);
      }
      obj.isEveryoneRole = tmp2;
      obj.role = role;
      obj.locked = tmp18;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      obj.guildId = id;
      obj.numMembers = role.memberCount;
      obj.isFirstRole = 0 === arg1;
      obj.isLastRole = arg1 === roleData.length - 1;
      obj.onPress = callback2;
      obj.onLongPress = callback3;
      let fn;
      if (0 !== arg1) {
        fn = () => {
          outer1_27({ from: closure_0, to: closure_0 - 1 });
        };
      }
      obj.onMoveUp = fn;
      let fn2;
      if (arg1 !== roleData.length - 1) {
        fn2 = () => {
          outer1_27({ from: closure_0, to: closure_0 + 1 });
        };
      }
      obj.onMoveDown = fn2;
      return tmp22(tmp(tmp4[42]), obj, role.id);
    }
  }, items14);
  const items15 = [callback1, callback5, callback4, hasRoles, first, navigation];
  const callback11 = guild.useCallback((arg0, arg1) => arg0 !== arg1, []);
  let effect = guild.useEffect(() => {
    let obj = {};
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: outer1_25 };
        const intl = guildId(1212).intl;
        obj.text = intl.string(guildId(1212).t["ETE/oC"]);
        return hasRoles(guildId(5788).HeaderActionButton, obj);
      };
    }
    obj.headerLeft = fn;
    if (first) {
      let fn2 = () => {
        const obj = { onPress: outer1_26 };
        const intl = guildId(1212).intl;
        obj.text = intl.string(guildId(1212).t["R3BPH+"]);
        return hasRoles(guildId(5788).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress: outer1_22, source: callback(11804) };
        const intl = guildId(1212).intl;
        obj.accessibilityLabel = intl.string(guildId(1212).t.JZZjQK);
        return hasRoles(guildId(5788).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    let intl = guildId(tmp4[31]).intl;
    obj.headerTitle = intl.string(guildId(tmp4[31]).t.UvdTMj);
    navigation.setOptions(obj);
  }, items15);
  const items16 = [guild, first, navigation];
  const effect1 = guild.useEffect(() => {
    if (first) {
      if (null != guild) {
        tmp(tmp[29]).startReordering(guild.id);
        const obj2 = tmp(tmp[29]);
      }
      if (obj3.isIOS()) {
        let obj = { gestureEnabled: !first };
        navigation.setOptions(obj);
      }
    }
    obj = tmp(tmp4[29]);
    obj.stopReordering();
  }, items16);
  const items17 = [guild, memberCount];
  const effect2 = guild.useEffect(() => {
    if (null != guild) {
      if (memberCount <= guildId(tmp4[46]).MAX_PREFETCH_MEMBER_COUNT) {
        const obj = tmp(tmp4[47]);
        const members = obj.requestMembers(guild.id, "", 0, false);
      }
      const memberCounts = navigation(tmp4[48]).fetchMemberCounts(guild.id);
      const obj2 = navigation(tmp4[48]);
    }
  }, items17);
  const items18 = [first];
  const effect3 = guild.useEffect(() => () => {
    if (outer1_13) {
      callback(table[29]).stopReordering();
      const obj = callback(table[29]);
    }
  }, items18);
  obj = {};
  let tmp33Result = null;
  if (!first) {
    tmp33Result = null;
    if (memo.numSortableRoles >= 10) {
      obj = {};
      const items19 = [tmp.searchWrapper, ];
      obj1 = {};
      let num2 = 0;
      if (hasSearchQuery) {
        num2 = importDefault(689).space.PX_16;
      }
      obj1.paddingBottom = num2;
      items19[1] = obj1;
      obj.style = items19;
      obj2 = { size: "md", onChange: callback };
      obj.children = hasRoles(guildId(5772).SearchField, obj2);
      tmp33Result = hasRoles(guildEveryoneRole, obj);
      const tmp33 = hasRoles;
      const tmp34 = guildEveryoneRole;
    }
  }
  const items20 = [tmp33Result, , , ];
  obj3 = {};
  let tmp43Result = null;
  if (first) {
    let obj4 = {};
    const items21 = [callback7(), ];
    let tmp45 = null;
    if (!hasRoles) {
      let obj5 = {};
      let obj6 = { style: tmp.emptyRolesIcon, size: guildId(1273).Icon.Sizes.LARGE, source: importDefault(8424) };
      obj5.leading = hasRoles(guildId(1273).Icon, obj6);
      let obj7 = { variant: "text-md/semibold", color: "interactive-text-default" };
      let intl = guildId(1212).intl;
      obj7.children = intl.string(guildId(1212).t.nZfHsf);
      obj5.label = hasRoles(guildId(4126).Text, obj7);
      tmp45 = hasRoles(guildId(7495).FormRow, obj5);
    }
    items21[1] = tmp45;
    obj4.children = items21;
    tmp43Result = callback1(callback2, obj4);
    const tmp43 = callback1;
    const tmp44 = callback2;
  }
  obj3.children = tmp43Result;
  items20[1] = hasRoles(guildEveryoneRole, obj3);
  let obj8 = { style: tmp.container };
  let obj9 = { ref };
  let tmp54Result = null;
  if (!first) {
    let obj10 = {};
    let callback8Result = null;
    if (!hasSearchQuery) {
      callback8Result = callback8();
    }
    const items22 = [callback8Result, , ];
    let callback9Result = null;
    if (!hasSearchQuery) {
      callback9Result = callback9();
    }
    items22[1] = callback9Result;
    let callback7Result = null;
    if (hasRoles) {
      callback7Result = callback7();
    }
    items22[2] = callback7Result;
    obj10.children = items22;
    tmp54Result = callback1(callback2, obj10);
    const tmp54 = callback1;
    const tmp55 = callback2;
  }
  obj9.header = tmp54Result;
  obj9.wrapperStyles = tmp.container;
  const items23 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj9.contentContainerStyle = items23;
  obj9.data = roleData;
  obj9.rowHasChanged = callback11;
  obj9.onRowMoved = callback6;
  obj9.disableSorting = !first;
  let tmp59;
  if (firstEditableIndex >= 0) {
    tmp59 = firstEditableIndex;
  }
  obj9.minDraggableIndex = tmp59;
  obj9.renderRow = callback10;
  obj9.keyboardShouldPersistTaps = "handled";
  obj9.scrollEventThrottle = 16;
  obj9.scrollEnabled = true;
  obj8.children = hasRoles(importDefault(15108), obj9);
  items20[2] = hasRoles(guildEveryoneRole, obj8);
  items20[3] = hasRoles(guildId(5448).NavScrim, {});
  obj.children = items20;
  return callback1(callback2, obj);
};
