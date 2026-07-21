// Module ID: 16173
// Function ID: 124741
// Name: hasSearchQuery
// Dependencies: []
// Exports: default

// Module 16173 (hasSearchQuery)
function hasSearchQuery(first) {
  return "" !== first.trim();
}
function useSearchQueryStateWithAnalytics(sortedGuildRoles, first) {
  first = sortedGuildRoles;
  const importDefault = first;
  const tmp = callback(React.useState(""), 2);
  first = tmp[0];
  const importAll = first;
  let closure_3 = tmp[1];
  const tmp3 = callback(React.useState(() => arg0), 2);
  let callback = tmp3[1];
  const React = React.useRef(false);
  const items = [sortedGuildRoles];
  callback = React.useCallback((str) => {
    const trimmed = str.toLowerCase().trim();
    str = trimmed;
    let current = ref.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      ref.current = true;
      let obj = arg1(callback[18]);
      obj = { search_type: "Roles" };
      obj.track(constants.SEARCH_STARTED, obj);
    }
    callback(trimmed);
    if ("" === trimmed) {
      let found = str;
    } else {
      found = str.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    closure_4(found);
  }, items);
  const View = callback;
  const items1 = [first, first, sortedGuildRoles, callback];
  const effect = React.useEffect(() => {
    if (!arg1) {
      if (callback3(first)) {
        callback(first);
      } else {
        callback2(arg0);
      }
    }
  }, items1);
  return { hasSearchQuery: hasSearchQuery(first), filteredRoles: tmp3[0], setSearchQuery: callback };
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_7 = importDefault(dependencyMap[3]);
const isEveryoneRole = arg1(dependencyMap[4]).isEveryoneRole;
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = arg1(dependencyMap[12]).GuildSettingsRoleEditSections;
const tmp3 = arg1(dependencyMap[13]);
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = tmp3);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 } };
obj = { paddingTop: importDefault(dependencyMap[16]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[16]).space.PX_12 };
obj.searchWrapper = obj;
const tmp4 = arg1(dependencyMap[14]);
obj.subheaderContainer = { paddingVertical: importDefault(dependencyMap[16]).space.PX_16, gap: importDefault(dependencyMap[16]).space.PX_16 };
obj.emptySubheaderContainer = { 0: "center", -9223372036854775808: "center" };
const obj1 = { paddingVertical: importDefault(dependencyMap[16]).space.PX_16, gap: importDefault(dependencyMap[16]).space.PX_16 };
obj.emptyIlloContainer = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOW };
obj.emptyIllo = { "Bool(false)": "Array", "Bool(false)": "isArray" };
obj.emptyIlloLarge = {};
obj.emptySubheaderBody = { isChannelNSFWGated: 271, showIconSparkle: 163, paddingTop: null, paddingBottom: "37b687db1cd86ac8059d1a0342f2319c" };
const obj3 = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(importDefault(dependencyMap[17])(tmp3.Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[16]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3["marginTop"] = 16;
obj.subheader = obj3;
obj.subheaderBody = {};
obj.subheaderButton = {};
obj.subheaderDescription = { "Bool(false)": "errExpectingATEXT", "Bool(false)": "j" };
obj.divider = { height: tmp2.StyleSheet.hairlineWidth, width: "100%" };
obj.everyoneWrapper = { size: false, progress: false };
const importDefaultResult = importDefault(dependencyMap[17]);
obj.edittingRolesHeader = { marginTop: importDefault(dependencyMap[16]).space.PX_16, marginLeft: importDefault(dependencyMap[16]).space.PX_16 };
obj.rolesHeader = { top: "<string:3435973836>", bottom: "<string:1903247380>", left: "r" };
obj.reorderButton = { diversity: false, accessible: false, status: false };
obj.reorderButtonText = { marginLeft: 8 };
obj.rolesBody = { <string:2076015548>: 400, <string:1683379298>: 1, <string:1446732380>: null };
obj.emptyRolesIcon = { opacity: 0.4 };
let closure_24 = obj.createStyles(obj);
const obj4 = { marginTop: importDefault(dependencyMap[16]).space.PX_16, marginLeft: importDefault(dependencyMap[16]).space.PX_16 };
const result = arg1(dependencyMap[55]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback2();
  const importDefault = tmp;
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[23]);
  const navigation = obj.useNavigation();
  const importAll = navigation;
  const tmp4 = importDefault(dependencyMap[24])();
  const dependencyMap = tmp4;
  let obj1 = arg1(dependencyMap[20]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => memberCount.theme);
  let callback = stateFromStores;
  let obj2 = arg1(dependencyMap[20]);
  const items1 = [closure_12, closure_11, closure_9, closure_15, closure_14, closure_10];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
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
    let highestRole;
    if (null != guild) {
      highestRole = navigation(tmp4[25]).getHighestRole(guild, id);
      const obj2 = navigation(tmp4[25]);
    }
    obj.highestRole = highestRole;
    return obj;
  });
  const guild = stateFromStoresObject.guild;
  const React = guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  const View = guildEveryoneRole;
  const memberCount = stateFromStoresObject.memberCount;
  closure_7 = memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  const isEveryoneRole = roleMemberCount;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  closure_9 = sortedGuildRoles;
  const rolesOrder = stateFromStoresObject.rolesOrder;
  closure_10 = rolesOrder;
  const currentUserId = stateFromStoresObject.currentUserId;
  closure_11 = currentUserId;
  const highestRole = stateFromStoresObject.highestRole;
  closure_12 = highestRole;
  function useRoleJustCreatedHelper(ref) {
    const guildId = ref;
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
          ref(closure_3[19]).setRoleJustCreated(false);
        }, 1000);
        return () => {
          clearTimeout(ref);
          ref(closure_3[19]).setRoleJustCreated(false);
        };
      }
    }, items);
  }(ref);
  function useGuildRoleAccessGuard(guildId) {
    const items = [highestRole, first];
    const stateFromStoresObject = guildId(tmp4[20]).useStateFromStoresObject(items, () => {
      const guild = guild.getGuild(arg0);
      const obj = {};
      let result = null != guild;
      if (result) {
        result = closure_13.canAccessGuildSettings(guild);
      }
      obj.canAccessSettings = result;
      obj.canManageRoles = closure_13.can(constants.MANAGE_ROLES, guild);
      return obj;
    });
    const canAccessSettings = stateFromStoresObject.canAccessSettings;
    const canManageRoles = stateFromStoresObject.canManageRoles;
    const navigation = canManageRoles;
    const items1 = [canManageRoles, canAccessSettings];
    const effect = guild.useEffect(() => {
      let tmp = canManageRoles;
      if (canManageRoles) {
        tmp = canAccessSettings;
      }
      if (!tmp) {
        canAccessSettings(closure_3[21]).terminate();
        const obj = canAccessSettings(closure_3[21]);
        canAccessSettings(closure_3[22]).close();
        const obj2 = canAccessSettings(closure_3[22]);
      }
    }, items1);
  }(guildId);
  const tmp9 = callback(React.useState(false), 2);
  const first = tmp9[0];
  let closure_13 = first;
  closure_14 = tmp9[1];
  const tmp11 = useSearchQueryStateWithAnalytics(sortedGuildRoles, first);
  const filteredRoles = tmp11.filteredRoles;
  closure_15 = filteredRoles;
  let hasSearchQuery = tmp11.hasSearchQuery;
  let closure_16 = hasSearchQuery;
  const setSearchQuery = tmp11.setSearchQuery;
  let obj3 = arg1(dependencyMap[20]);
  const items2 = [closure_11];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    if (null != rolesOrder) {
      let manyRoles = currentUserId.getManyRoles(guildId, rolesOrder);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items3 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, filteredRoles, guild, currentUserId, highestRole];
  const memo = React.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : filteredRoles.filter((arg0) => !callback2(arg0));
    const mapped = found.map((role) => {
      const obj = { role };
      let tmp;
      if (null != closure_8) {
        tmp = closure_8[role.id];
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
      num = mapped.findIndex((role) => callback(closure_3[25]).isRoleHigher(closure_5, closure_11, closure_12, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    const obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
    return obj;
  }, items3);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  const items4 = [setSearchQuery];
  const items5 = [guild];
  callback = React.useCallback((str) => {
    setSearchQuery(str.toLowerCase());
  }, items4);
  const callback1 = React.useCallback(() => {
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
  let callback2 = React.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = { role, newRole: flag, section: hasSearchQuery.DISPLAY };
    navigation.push(setSearchQuery.ROLE_EDIT_REFRESH, obj);
  }, items6);
  const items7 = [setSearchQuery];
  const callback3 = React.useCallback(() => {
    roleMemberCount(true);
    setSearchQuery("");
  }, items7);
  callback2 = callback3;
  const items8 = [setSearchQuery];
  const callback4 = React.useCallback(() => {
    setSearchQuery("");
    roleMemberCount((arg0) => !arg0);
  }, items8);
  hasSearchQuery = callback4;
  const items9 = [guild, callback4];
  const callback5 = React.useCallback(() => {
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
  const useSearchQueryStateWithAnalytics = callback5;
  const items10 = [firstEditableIndex];
  const callback6 = React.useCallback((to) => {
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
  const callback7 = React.useCallback(() => {
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
    obj.title = intl.formatToPlainString(guildId(tmp4[31]).t.38N3Vz, obj1);
    const items1 = [hasRoles(guildId(tmp4[30]).TableRowGroupTitle, obj), ];
    let tmp5 = null;
    if (!first) {
      tmp5 = null;
      if (!hasSearchQuery) {
        const obj2 = { accessibilityRole: "button" };
        const intl2 = guildId(tmp4[31]).intl;
        obj2.accessibilityLabel = intl2.string(guildId(tmp4[31]).t.0dOFq+);
        obj2.onPress = callback4;
        obj2.style = tmp.reorderButton;
        const obj3 = { color: tmp(tmp4[16]).colors.TEXT_LINK, size: "sm" };
        const items2 = [hasRoles(guildId(tmp4[33]).ArrowsUpDownIcon, obj3), ];
        const obj4 = { style: tmp.reorderButtonText };
        const intl3 = guildId(tmp4[31]).intl;
        obj4.children = intl3.string(guildId(tmp4[31]).t.0dOFq+);
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
      const obj5 = { style: tmp.rolesBody };
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
  const callback8 = React.useCallback(() => {
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
        const obj1 = { style: tmp.subheaderDescription };
        const intl4 = guildId(tmp4[31]).intl;
        obj1.children = intl4.string(guildId(tmp4[31]).t.1ydhVp);
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
        const obj7 = { style: tmp.subheader };
        const intl = guildId(tmp4[31]).intl;
        obj7.children = intl.string(guildId(tmp4[31]).t.ALlnbi);
        const items3 = [hasRoles(guildId(tmp4[34]).Heading, obj7), , ];
        const obj8 = { style: tmp.subheaderBody };
        const intl2 = guildId(tmp4[31]).intl;
        obj8.children = intl2.string(guildId(tmp4[31]).t.1ydhVp);
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
  const callback9 = React.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        let obj = navigation(tmp4[25]);
        obj = { style: tmp.everyoneWrapper };
        obj = { role: guildEveryoneRole };
        obj.locked = !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole);
        obj.onPress = function onPress() {
          return callback(closure_6);
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
  const callback10 = React.useCallback((role) => {
    const guildId = arg1;
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
          callback({ from: arg1, to: arg1 - 1 });
        };
      }
      obj.onMoveUp = fn;
      let fn2;
      if (arg1 !== roleData.length - 1) {
        fn2 = () => {
          callback({ from: arg1, to: arg1 + 1 });
        };
      }
      obj.onMoveDown = fn2;
      return tmp22(tmp(tmp4[42]), obj, role.id);
    }
  }, items14);
  const items15 = [callback1, callback5, callback4, hasRoles, first, navigation];
  const callback11 = React.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect = React.useEffect(() => {
    const obj = {};
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: closure_25 };
        const intl = callback(closure_3[31]).intl;
        obj.text = intl.string(callback(closure_3[31]).t.ETE/oC);
        return callback3(callback(closure_3[43]).HeaderActionButton, obj);
      };
    }
    obj.headerLeft = fn;
    if (first) {
      let fn2 = () => {
        const obj = { onPress: closure_26 };
        const intl = callback(closure_3[31]).intl;
        obj.text = intl.string(callback(closure_3[31]).t.R3BPH+);
        return callback3(callback(closure_3[43]).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress: closure_22, source: callback2(closure_3[44]) };
        const intl = callback(closure_3[31]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_3[31]).t.JZZjQK);
        return callback3(callback(closure_3[43]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    const intl = guildId(tmp4[31]).intl;
    obj.headerTitle = intl.string(guildId(tmp4[31]).t.UvdTMj);
    navigation.setOptions(obj);
  }, items15);
  const items16 = [guild, first, navigation];
  const effect1 = React.useEffect(() => {
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
  const effect2 = React.useEffect(() => {
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
  const effect3 = React.useEffect(() => () => {
    if (closure_13) {
      callback(closure_3[29]).stopReordering();
      const obj = callback(closure_3[29]);
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
        num2 = importDefault(dependencyMap[16]).space.PX_16;
      }
      obj1.paddingBottom = num2;
      items19[1] = obj1;
      obj.style = items19;
      obj2 = { size: "md", onChange: callback };
      obj.children = hasRoles(arg1(dependencyMap[49]).SearchField, obj2);
      tmp33Result = hasRoles(View, obj);
      const tmp33 = hasRoles;
      const tmp34 = View;
    }
  }
  const items20 = [tmp33Result, , , ];
  obj3 = {};
  let tmp43Result = null;
  if (first) {
    const obj4 = {};
    const items21 = [callback7(), ];
    let tmp45 = null;
    if (!hasRoles) {
      const obj5 = {};
      const obj6 = { style: tmp.emptyRolesIcon, size: arg1(dependencyMap[51]).Icon.Sizes.LARGE, source: importDefault(dependencyMap[52]) };
      obj5.leading = hasRoles(arg1(dependencyMap[51]).Icon, obj6);
      const obj7 = { hasMaxConnections: null, isBoostOnlySubscription: null };
      const intl = arg1(dependencyMap[31]).intl;
      obj7.children = intl.string(arg1(dependencyMap[31]).t.nZfHsf);
      obj5.label = hasRoles(arg1(dependencyMap[34]).Text, obj7);
      tmp45 = hasRoles(arg1(dependencyMap[50]).FormRow, obj5);
    }
    items21[1] = tmp45;
    obj4.children = items21;
    tmp43Result = callback1(callback2, obj4);
    const tmp43 = callback1;
    const tmp44 = callback2;
  }
  obj3.children = tmp43Result;
  items20[1] = hasRoles(View, obj3);
  const obj8 = { style: tmp.container };
  const obj9 = { ref };
  let tmp54Result = null;
  if (!first) {
    const obj10 = {};
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
  obj8.children = hasRoles(importDefault(dependencyMap[53]), obj9);
  items20[2] = hasRoles(View, obj8);
  items20[3] = hasRoles(arg1(dependencyMap[54]).NavScrim, {});
  obj.children = items20;
  return callback1(callback2, obj);
};
