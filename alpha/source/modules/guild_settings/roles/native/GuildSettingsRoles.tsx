// Module ID: 19764
// Function ID: 19765
// Name: GuildSettingsRoles
// Dependencies: [32, 19, 17, 4921, 502, 5242, 4920, 4885, 4946, 7298, 19765, 19766, 1072, 21, 5014, 575, 6723, 1252, 19767, 504, 18193, 9074, 1497, 4951, 5760, 19768, 19777, 19778, 7060, 1113, 6980, 12342, 5624, 19779, 5634, 19783, 7558, 14371, 1375, 19775, 6902, 7299, 7218, 8177, 1187, 9061, 18438, 5606, 2]
// Exports: default

// Module 19764 (GuildSettingsRoles)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4921 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7299 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 19766 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 19775 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 19777 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 19778 */;
import MemberRolesAbstractUI from "MemberRolesAbstractUI" /* 19779 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 19783 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7298 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 19765 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import TextStyles from "TextStyles" /* 6723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation, to;

let Fonts;
let StyleSheet;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const GuildSettingsRoleCreateModalActionCreatorsDefault = tmp(19768);
({ View: metroRequire, StyleSheet } = react_native);
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
let closure_15 = GuildSettingsConstants.GuildSettingsRoleEditSections;
({ GuildSettingsSections: closure_16, AnalyticEvents: closure_17, AnalyticsSections: closure_18, Permissions: closure_19, Fonts } = Constants);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 }, searchWrapper: obj2, subheaderContainer: obj3, emptySubheaderContainer: { paddingBottom: 16, alignItems: "center" }, emptyIlloContainer: { width: "100%", flex: 1, alignItems: "center", paddingTop: 28 }, emptySubheaderBody: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" }, subheader: obj4, subheaderBody: { marginTop: 8, textAlign: "center" }, subheaderButton: { flexGrow: 0, marginTop: 16 }, subheaderDescription: { lineHeight: 18, textAlign: "center" }, divider: { height: StyleSheet.hairlineWidth, width: "100%" }, everyoneWrapper: { marginTop: 2, marginBottom: 24 }, edittingRolesHeader: obj5, rolesHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, reorderButton: { marginBottom: 8, flexDirection: "row", alignItems: "center" }, reorderButtonText: { marginLeft: 8 }, rolesBody: { padding: 16, paddingTop: 8, lineHeight: 18 }, emptyRolesIcon: { opacity: 0.4 } };
obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { marginTop: 16 };
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5 = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
let closure_23 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  let Icon;
  let Text;
  let c4;
  let closure_1;
  let intl;
  let items26;
  let obj10;
  let obj11;
  let obj14;
  let obj8;
  let tmp15;
  let tmp39Result2;
  let tmp49;
  let tmp54;
  const f118637 = () => sortedGuildRoles;
  guildId = guildId.guildId;
  let guild;
  let memberCount;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let sorting;
  let closure_12;
  let c13;
  let closure_14;
  let closure_20;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = callback4();
  importDefault = tmp;
  let obj = memberCount;
  let ref = memberCount.useRef(null);
  let tmp3 = guildId;
  const tmp4 = guild;
  let obj2 = guildId(guild[22]);
  navigation = obj2.useNavigation();
  let obj3 = guildId(guild[19]);
  let items = [sorting, highestRole, rolesOrder, closure_14, c13, currentUserId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
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
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  let obj4 = guildId(guild[18]);
  const guildSettingsRolesManagerState = obj4.useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  let items1 = [ref, guildSettingsRolesManagerState];
  const layoutEffect = memberCount.useLayoutEffect(() => {
    if (guildSettingsRolesManagerState) {
      const _setTimeout = setTimeout;
      ref = setTimeout(() => {
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
        const obj = ref(guild[18]);
        obj.setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(ref);
        const obj = guildId(guild[18]);
        obj.setRoleJustCreated(false);
      };
    }
  }, items1);
  let obj5 = guildId(guild[19]);
  let items2 = [sorting, closure_12];
  const stateFromStoresObject1 = obj5.useStateFromStoresObject(items2, () => {
    guild = first.getGuild(guildId);
    const result = null != guild && closure_12.canAccessGuildSettings(guild);
    const obj = { canAccessSettings: result, canManageRoles: closure_12.can(hasRoles.MANAGE_ROLES, guild) };
    return obj;
  });
  const canAccessSettings = stateFromStoresObject1.canAccessSettings;
  const canManageRoles = stateFromStoresObject1.canManageRoles;
  let items3 = [canManageRoles, canAccessSettings];
  const effect = memberCount.useEffect(() => {
    const tmp = canManageRoles && canAccessSettings;
    if (!tmp) {
      const obj = canAccessSettings(guild[20]);
      obj.terminate();
      const obj2 = canAccessSettings(guild[21]);
      obj2.close();
    }
  }, items3);
  const tmp11 = guildEveryoneRole(memberCount.useState(false), 2);
  sorting = tmp11[0];
  closure_12 = tmp11[1];
  c4 = undefined;
  const tmp13 = guildEveryoneRole(memberCount.useState(""), 2);
  let str = tmp13[0];
  let closure_3 = tmp13[1];
  [tmp15, c4] = guildEveryoneRole(memberCount.useState(f118637), 2);
  const tmp14 = guildEveryoneRole(memberCount.useState(f118637), 2);
  let closure_5 = memberCount.useRef(false);
  const items4 = [sortedGuildRoles];
  const callback = memberCount.useCallback((str) => {
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
      const obj = first(guild[17]);
      obj.track(roleData.SEARCH_STARTED, { search_type: "Roles" });
    }
    closure_3(trimmed);
    const tmp8 = c4;
    if ("" === trimmed) {
      found = sortedGuildRoles;
    } else {
      found = sortedGuildRoles.filter((name) => {
        str = name.name;
        const formatted = str.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    tmp8(found);
  }, items4);
  const items5 = [sorting, str, sortedGuildRoles, callback];
  const effect1 = memberCount.useEffect(() => {
    const tmp = first;
    if (!tmp) {
      const tmp2 = str;
      if ("" !== "".trim()) {
        callback(tmp2);
      } else {
        _undefined(sortedGuildRoles);
      }
    }
  }, items5);
  const tmp18 = "" !== str.trim();
  c13 = tmp15;
  closure_14 = tmp18;
  let obj6 = guildId(guild[19]);
  const items6 = [highestRole];
  const stateFromStoresArray = obj6.useStateFromStoresArray(items6, () => {
    let manyRoles;
    if (null != rolesOrder) {
      manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items7 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, tmp15, guild, currentUserId, highestRole];
  const memo = memberCount.useMemo(() => {
    const arr = null != rolesOrder ? stateFromStoresArray : c13;
    const found = arr.filter((item) => !sortedGuildRoles(item));
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
        const obj = navigation(guild[23]);
        return obj.isRoleHigher(closure_1_3, currentUserId, highestRole, role.role);
      });
    }
    const diff = sortedGuildRoles.length - 1;
    let obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
    return obj;
  }, items7);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp22 = sorting;
  if (!tmp22) {
    let num = 10;
    tmp22 = tmp21 < 10;
  }
  closure_20 = tmp22;
  const items8 = [callback];
  const items9 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items8);
  callback2 = obj.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const OPEN_MODAL = roleData.OPEN_MODAL;
    const obj = { type: firstEditableIndex.GUILD_ROLE_CREATION_MODAL };
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
  }, items9);
  const items10 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = { role, newRole: flag, section: closure_15.DISPLAY };
    navigation.push(stateFromStoresArray.ROLE_EDIT_REFRESH, obj);
  }, items10);
  const items11 = [callback];
  callback4 = obj.useCallback(() => {
    closure_12(true);
    callback("");
  }, items11);
  const items12 = [callback];
  callback5 = obj.useCallback(() => {
    callback("");
    closure_12((arg0) => !arg0);
  }, items12);
  const items13 = [guild, callback5];
  callback6 = obj.useCallback(() => {
    const updates = GuildSettingsModalRolesStore.getUpdates();
    const tmp = updates.length > 0 && null != guild;
    if (tmp) {
      const obj = actions_GuildActionCreators;
      obj.batchRoleUpdate(guild.id, updates);
    }
    callback5();
  }, items13);
  const items14 = [firstEditableIndex];
  callback7 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    const obj = GuildSettingsModalRolesActionCreatorsDefault;
    obj.updateRoleOrder(to.from, to);
  }, items14);
  const items15 = [tmp, roleData, tmp18, sorting, callback5];
  const callback8 = obj.useCallback(() => {
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
    items1 = [closure_20(TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!closure_14) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl5.t["0dOFq+"]), onPress: callback5, style: closure_1.reorderButton, children: items2 };
        const PressableOpacity = tmp7(6980).PressableOpacity;
        intl2 = tmp7(1113).intl;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const ArrowsUpDownIcon = tmp7(12342).ArrowsUpDownIcon;
        items2 = [closure_20(ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: closure_1.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: intl3.string(intl5.t["0dOFq+"]) };
        const Text = tmp7(5624).Text;
        intl3 = tmp7(1113).intl;
        items2[1] = closure_20(Text, obj6);
        tmpResult = tmp(PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    const children = [callback2(metroRequire, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: closure_1.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: intl4.string(intl5.t.nHcwVl) };
      const Text2 = tmp7(5624).Text;
      intl4 = tmp7(1113).intl;
      tmp6Result = tmp6(Text2, obj7);
    }
    children[1] = tmp6Result;
    return callback2(metroRequire, { children });
  }, items15);
  const items16 = [tmp, callback2, hasRoles, tmp22];
  const items17 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    let Button;
    let Text2;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    let items2;
    let items3;
    let obj12;
    let obj5;
    let tmpResult;
    if (hasRoles) {
      const items = [closure_1.subheaderContainer, ];
      let num = 0;
      const tmp38 = authStore6;
      const tmp39 = closure_20;
      const tmp40 = metroRequire;
      if (closure_20) {
        num = nativeDefault.space.PX_16;
      }
      const obj2 = { children: items1 };
      const obj4 = { paddingTop: num };
      items[1] = obj4;
      const obj3 = { style: items, children: closure_20(Text2, obj5) };
      obj5 = { style: closure_1.subheaderDescription, variant: "text-sm/medium", color: "interactive-text-default", children: intl4.string(intl5.t["1ydhVp"]) };
      Text2 = Text_Text.Text;
      intl4 = intl5.intl;
      items1 = [tmp39(tmp40, obj3), ];
      const obj6 = { style: closure_1.divider };
      items1[1] = closure_20(metroRequire, obj6);
      tmpResult = tmp(tmp38, obj2);
    } else {
      const obj = { style: closure_1.emptySubheaderContainer, children: items2 };
      const obj7 = { style: closure_1.emptyIlloContainer, children: closure_20(MemberRolesAbstractUI.MemberRolesAbstractUI, {}) };
      items2 = [closure_20(metroRequire, obj7), , ];
      const obj8 = { style: closure_1.emptySubheaderBody, children: items3 };
      const obj9 = { style: closure_1.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.ALlnbi) };
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items3 = [closure_20(Heading, obj9), , ];
      const obj10 = { style: closure_1.subheaderBody, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t["1ydhVp"]) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items3[1] = closure_20(Text, obj10);
      const obj11 = { style: closure_1.subheaderButton, children: closure_20(Button, obj12) };
      obj12 = { text: intl3.string(intl5.t.JZZjQK), onPress: callback2 };
      Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items3[2] = closure_20(metroRequire, obj11);
      items2[1] = callback2(metroRequire, obj8);
      const obj13 = { style: closure_1.divider };
      items2[2] = closure_20(metroRequire, obj13);
      tmpResult = tmp(metroRequire, obj);
    }
    return tmpResult;
  }, items16);
  const items18 = [guild, roleData.length, currentUserId, highestRole, sorting, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    let obj3;
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: closure_20(GuildSettingsRoleItemDefault, obj3) };
        obj3 = {
          role: guildEveryoneRole,
          locked: !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole),
          onPress() {
                return callback3(guildEveryoneRole);
              },
          guildId: guild.id,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true
        };
        !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole);
        return closure_20(metroRequire, obj2);
      }
    }
    return null;
  }, items17);
  const callback11 = obj.useCallback((role, from) => {
    let handleMoveDown;
    let handleMoveUp;
    let id;
    let tmp19;
    let tmp3;
    if (null == guild) {
      return closure_20(callback3, {});
    } else {
      role = role.role;
      memberCount = role.memberCount;
      let obj = navigation(guild[23]);
      const diff = roleData.length - 1;
      const obj2 = { sorting, isEveryoneRole: tmp3, role, locked: tmp19, guildId: id, numMembers: memberCount, isFirstRole: 0 === from, isLastRole: from === diff, onPress: callback3, onLongPress: callback4, onMoveUp: handleMoveUp, onMoveDown: handleMoveDown };
      tmp3 = null != tmp;
      tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      const tmp22 = closure_20;
      const tmp24 = closure_1(guild[35]);
      if (tmp3) {
        tmp3 = sortedGuildRoles(role);
      }
      id = undefined;
      if (guild != null) {
        id = tmp.id;
      }
      handleMoveUp = undefined;
      if (0 !== from) {
        handleMoveUp = function handleMoveUp() {
          const obj = { from, to: from - 1 };
          callback7(obj);
        };
      }
      handleMoveDown = undefined;
      if (from !== diff) {
        handleMoveDown = function handleMoveDown() {
          const obj = { from, to: from + 1 };
          callback7(obj);
        };
      }
      return tmp22(tmp24, obj2, role.id);
    }
  }, items18);
  const items19 = [callback2, callback6, callback5, hasRoles, sorting, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
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
        const obj = { onPress: onPress2, text: intl.string(guildId(guild[29]).t["ETE/oC"]) };
        const HeaderActionButton = guildId(guild[36]).HeaderActionButton;
        intl = guildId(guild[29]).intl;
        return closure_20(HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: fn2, headerTitle: intl.string(intl5.t.UvdTMj) };
    if (first) {
      fn2 = () => {
        let intl;
        const obj = { onPress: onPress3, text: intl.string(guildId(guild[29]).t["R3BPH+"]) };
        const HeaderActionButton = guildId(guild[36]).HeaderActionButton;
        intl = guildId(guild[29]).intl;
        return closure_20(HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        let intl;
        const obj = { onPress, source: closure_1(guild[37]), accessibilityLabel: intl.string(guildId(guild[29]).t.JZZjQK) };
        const HeaderActionButton = guildId(guild[36]).HeaderActionButton;
        intl = guildId(guild[29]).intl;
        return closure_20(HeaderActionButton, obj);
      };
    }
    intl = intl5.intl;
    setOptions(obj);
  }, items19);
  const items20 = [guild, sorting, navigation];
  const effect3 = obj.useEffect(() => {
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
  }, items20);
  const items21 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const obj2 = GuildRoleMemberActionCreatorsAll;
      const memberCounts = obj2.fetchMemberCounts(tmp.id);
    }
  }, items21);
  const items22 = [sorting];
  const effect5 = obj.useEffect(() => () => {
    const tmp = sorting;
    if (tmp) {
      const obj = closure_1(guild[27]);
      obj.stopReordering();
    }
  }, items22);
  let tmp39 = callback2;
  let tmp40 = callback3;
  let tmp41 = null;
  if (!tmp22) {
    let obj7 = { style: tmp.searchWrapper, children: closure_20(tmp3(tmp4[42]).SearchBar, obj8) };
    obj8 = { size: "md", onChange: callback1 };
    tmp41 = closure_20(roleMemberCount, obj7);
  }
  const items23 = [tmp41, , , ];
  let tmp39Result = null;
  if (sorting) {
    const items24 = [callback8(), ];
    let tmp44Result = null;
    if (!hasRoles) {
      let obj9 = { leading: tmp44(Icon, obj10), label: tmp44(Text, obj11) };
      const FormRow = tmp3(tmp4[43]).FormRow;
      obj10 = { style: tmp.emptyRolesIcon, size: tmp3(tmp4[44]).Icon.Sizes.LARGE, source: require("AssetRegistry") };
      Icon = tmp3(tmp4[44]).Icon;
      obj11 = { variant: "text-md/semibold", color: "interactive-text-default", children: intl.string(tmp3(tmp4[29]).t.nZfHsf) };
      Text = tmp3(tmp4[32]).Text;
      intl = tmp3(tmp4[29]).intl;
      tmp44Result = tmp44(FormRow, obj9);
    }
    let obj12 = { children: items24 };
    items24[1] = tmp44Result;
    tmp39Result = tmp39(tmp40, obj12);
  }
  items23[1] = closure_20(roleMemberCount, { children: tmp39Result });
  let obj13 = { style: tmp.container, children: tmp44(tmp49, obj14) };
  obj14 = {
    ref,
    header: tmp39Result2,
    wrapperStyles: tmp.container,
    contentContainerStyle: items26,
    data: roleData,
    keyExtractor(role) {
      return role.role.id;
    },
    rowHasChanged: callback12,
    onRowMoved: callback7,
    disableSorting: !sorting,
    minDraggableIndex: tmp54,
    renderRow: callback11,
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true
  };
  tmp39Result2 = null;
  tmp49 = require("SortableListView");
  if (!sorting) {
    let callback9Result = null;
    if (!tmp18) {
      callback9Result = callback9();
    }
    const items25 = [callback9Result, , ];
    let callback10Result = null;
    if (!tmp18) {
      callback10Result = callback10();
    }
    items25[1] = callback10Result;
    let callback8Result = null;
    if (hasRoles) {
      callback8Result = callback8();
    }
    const obj15 = { children: items25 };
    items25[2] = callback8Result;
    tmp39Result2 = tmp39(tmp40, obj15);
  }
  items26 = [tmp.scrollContainer, contentContainerStyle];
  tmp54 = undefined;
  if (firstEditableIndex >= 0) {
    tmp54 = firstEditableIndex;
  }
  const obj16 = { children: items23 };
  items23[2] = closure_20(roleMemberCount, obj13);
  items23[3] = closure_20(tmp3(tmp4[47]).NavScrim, {});
  return tmp39(tmp40, obj16);
};
