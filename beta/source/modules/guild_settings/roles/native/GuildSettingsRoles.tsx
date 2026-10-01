// Module ID: 17403
// Function ID: 17404
// Name: GuildSettingsRoles
// Dependencies: [32, 19, 17, 1182, 2103, 502, 4754, 2102, 2067, 4469, 6549, 17404, 17405, 1074, 21, 4836, 576, 5836, 1241, 17406, 504, 15776, 9048, 1485, 6364, 4474, 5016, 17407, 17416, 17417, 5999, 1115, 5435, 11633, 4832, 4685, 17418, 17419, 17420, 17421, 5899, 5281, 17422, 6795, 12289, 1364, 17414, 5832, 6550, 6471, 8053, 1177, 9035, 16014, 6461, 2]
// Exports: default

// Module 17403 (GuildSettingsRoles)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import shared from "shared" /* 4685 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6550 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 17405 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17414 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 17416 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 17417 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 17422 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6549 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 17404 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let constants, dependencyMap, importDefault, navigation, role, to;

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
const AssetRegistryDefault = tmp6(9035);
const SortableListViewDefault = tmp6(16014);
const GuildSettingsRoleCreateModalActionCreatorsDefault = tmp(17407);
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
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  let Icon;
  let Text;
  let c4;
  let closure_1;
  let closure_3;
  let intl;
  let items27;
  let obj11;
  let obj12;
  let obj15;
  let obj9;
  let tmp18;
  let tmp24;
  let tmp42Result2;
  let tmp56;
  let tmp6Result;
  const f107959 = () => sortedGuildRoles;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let guild;
  let memberCount;
  let sortedGuildRoles;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let sorting;
  let closure_14;
  let c15;
  let closure_22;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = callback3();
  importDefault = tmp;
  let obj = guild;
  let ref = guild.useRef(null);
  let tmp3 = guildId;
  let obj2 = guildId(1485);
  navigation = obj2.useNavigation();
  const tmp6 = importDefault;
  const tmp7 = useIsWindowLargeDefault();
  let obj3 = guildId(504);
  let items = [memberCount];
  const stateFromStores = obj3.useStateFromStores(items, () => memberCount.theme);
  let obj4 = guildId(504);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, c15, closure_14, rolesOrder];
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
  let obj5 = guildId(17406);
  const guildSettingsRolesManagerState = obj5.useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  let items2 = [ref, guildSettingsRolesManagerState];
  const layoutEffect = guild.useLayoutEffect(() => {
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
        const obj = ref(closure_2_3[19]);
        obj.setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(ref);
        const obj = guildId(closure_3[19]);
        obj.setRoleJustCreated(false);
      };
    }
  }, items2);
  let obj6 = guildId(504);
  let items3 = [highestRole, sorting];
  const stateFromStoresObject1 = obj6.useStateFromStoresObject(items3, () => {
    guild = highestRole.getGuild(guildId);
    const result = null != guild && first.canAccessGuildSettings(guild);
    const obj = { canAccessSettings: result, canManageRoles: first.can(firstEditableIndex.MANAGE_ROLES, guild) };
    return obj;
  });
  const canAccessSettings = stateFromStoresObject1.canAccessSettings;
  const canManageRoles = stateFromStoresObject1.canManageRoles;
  let items4 = [canManageRoles, canAccessSettings];
  const effect = guild.useEffect(() => {
    const tmp = canManageRoles && canAccessSettings;
    if (!tmp) {
      const obj = canAccessSettings(closure_3[21]);
      obj.terminate();
      const obj2 = canAccessSettings(closure_3[22]);
      obj2.close();
    }
  }, items4);
  const tmp14 = stateFromStores(guild.useState(false), 2);
  sorting = tmp14[0];
  closure_14 = tmp14[1];
  c4 = undefined;
  const tmp16 = stateFromStores(guild.useState(""), 2);
  let str = tmp16[0];
  dependencyMap = tmp16[1];
  [tmp18, c4] = stateFromStores(guild.useState(f107959), 2);
  const tmp17 = stateFromStores(guild.useState(f107959), 2);
  let closure_5 = guild.useRef(false);
  const items5 = [sortedGuildRoles];
  const callback = guild.useCallback((str) => {
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
      const obj = first(closure_3[18]);
      obj.track(stateFromStoresArray.SEARCH_STARTED, { search_type: "Roles" });
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
  }, items5);
  const items6 = [sorting, str, sortedGuildRoles, callback];
  const effect1 = guild.useEffect(() => {
    const tmp = first;
    if (!tmp) {
      const tmp2 = str;
      if ("" !== "".trim()) {
        callback(tmp2);
      } else {
        _undefined(sortedGuildRoles);
      }
    }
  }, items6);
  const tmp21 = "" !== str.trim();
  c15 = tmp18;
  constants = tmp21;
  let obj7 = guildId(504);
  const items7 = [currentUserId];
  const stateFromStoresArray = obj7.useStateFromStoresArray(items7, () => {
    let manyRoles;
    if (null != rolesOrder) {
      manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items8 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, tmp18, guild, currentUserId, highestRole];
  const memo = guild.useMemo(() => {
    const arr = null != rolesOrder ? stateFromStoresArray : c15;
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
        const obj = navigation(closure_3[25]);
        return obj.isRoleHigher(guild, currentUserId, highestRole, role.role);
      });
    }
    const diff = sortedGuildRoles.length - 1;
    let obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
    return obj;
  }, items8);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp25 = sorting;
  if (!tmp25) {
    let num = 10;
    tmp25 = tmp24 < 10;
  }
  closure_22 = tmp25;
  const items9 = [callback];
  const items10 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items9);
  callback2 = obj.useCallback(() => {
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
  }, items10);
  const items11 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = { role, newRole: flag, section: closure_17.DISPLAY };
    navigation.push(closure_17.ROLE_EDIT_REFRESH, obj);
  }, items11);
  const items12 = [callback];
  callback4 = obj.useCallback(() => {
    closure_14(true);
    callback("");
  }, items12);
  const items13 = [callback];
  callback5 = obj.useCallback(() => {
    callback("");
    closure_14((arg0) => !arg0);
  }, items13);
  const items14 = [guild, callback5];
  callback6 = obj.useCallback(() => {
    const updates = GuildSettingsModalRolesStore.getUpdates();
    const tmp = updates.length > 0 && null != guild;
    if (tmp) {
      const obj = actions_GuildActionCreators;
      obj.batchRoleUpdate(guild.id, updates);
    }
    callback5();
  }, items14);
  const items15 = [firstEditableIndex];
  callback7 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    const obj = GuildSettingsModalRolesActionCreatorsDefault;
    obj.updateRoleOrder(to.from, to);
  }, items15);
  const items16 = [tmp, roleData, tmp21, sorting, callback5];
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
    items1 = [hasRoles(TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!constants) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl5.t["0dOFq+"]), onPress: callback5, style: closure_1.reorderButton, children: items2 };
        const PressableOpacity = tmp7(5435).PressableOpacity;
        intl2 = tmp7(1115).intl;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const ArrowsUpDownIcon = tmp7(11633).ArrowsUpDownIcon;
        items2 = [hasRoles(ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: closure_1.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: intl3.string(intl5.t["0dOFq+"]) };
        const Text = tmp7(4832).Text;
        intl3 = tmp7(1115).intl;
        items2[1] = hasRoles(Text, obj6);
        tmpResult = tmp(PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    const children = [authStore5(metroRequire, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: closure_1.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: intl4.string(intl5.t.nHcwVl) };
      const Text2 = tmp7(4832).Text;
      intl4 = tmp7(1115).intl;
      tmp6Result = tmp6(Text2, obj7);
    }
    children[1] = tmp6Result;
    return authStore5(metroRequire, { children });
  }, items16);
  const items17 = [tmp, callback2, hasRoles, stateFromStores, tmp7, tmp25];
  const items18 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
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
        tmp3Result = tmp3(17418);
      } else {
        tmp3Result = tmp3(17419);
      }
      tmp3Result2 = tmp3Result;
    } else if (isThemeDarkResult) {
      tmp3Result2 = tmp3(17420);
    } else {
      tmp3Result2 = tmp3(17421);
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
      obj14 = { text: intl3.string(intl5.t.JZZjQK), onPress: callback2 };
      Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items4[2] = hasRoles(metroRequire, obj13);
      items3[1] = authStore5(metroRequire, obj10);
      const obj15 = { style: closure_1.divider };
      items3[2] = hasRoles(metroRequire, obj15);
      tmp7Result = tmp7(tmp8, obj7);
    }
    return tmp7Result;
  }, items17);
  const items19 = [guild, roleData.length, currentUserId, highestRole, sorting, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    let obj3;
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: hasRoles(GuildSettingsRoleItemDefault, obj3) };
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
        return hasRoles(metroRequire, obj2);
      }
    }
    return null;
  }, items18);
  const callback11 = obj.useCallback((role, from) => {
    let fn;
    let fn2;
    let id;
    let tmp19;
    let tmp3;
    if (null == guild) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      memberCount = role.memberCount;
      let obj = navigation(closure_3[25]);
      const diff = roleData.length - 1;
      const obj2 = { sorting, isEveryoneRole: tmp3, role, locked: tmp19, guildId: id, numMembers: memberCount, isFirstRole: 0 === from, isLastRole: from === diff, onPress: callback3, onLongPress: callback4, onMoveUp: fn, onMoveDown: fn2 };
      tmp3 = null != tmp;
      tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      const tmp24 = closure_1(closure_3[42]);
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
          callback7(obj);
        };
      }
      fn2 = undefined;
      if (from !== diff) {
        fn2 = () => {
          const obj = { from, to: from + 1 };
          callback7(obj);
        };
      }
      return tmp22(tmp24, obj2, role.id);
    }
  }, items19);
  const items20 = [callback2, callback6, callback5, hasRoles, sorting, navigation];
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
        const obj = { onPress: onPress2, text: intl.string(guildId(closure_3[31]).t["ETE/oC"]) };
        const HeaderActionButton = guildId(closure_3[43]).HeaderActionButton;
        intl = guildId(closure_3[31]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: fn2, headerTitle: intl.string(intl5.t.UvdTMj) };
    if (first) {
      fn2 = () => {
        let intl;
        const obj = { onPress: onPress3, text: intl.string(guildId(closure_3[31]).t["R3BPH+"]) };
        const HeaderActionButton = guildId(closure_3[43]).HeaderActionButton;
        intl = guildId(closure_3[31]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        let intl;
        const obj = { onPress, source: closure_1(closure_3[44]), accessibilityLabel: intl.string(guildId(closure_3[31]).t.JZZjQK) };
        const HeaderActionButton = guildId(closure_3[43]).HeaderActionButton;
        intl = guildId(closure_3[31]).intl;
        return hasRoles(HeaderActionButton, obj);
      };
    }
    intl = intl5.intl;
    setOptions(obj);
  }, items20);
  const items21 = [guild, sorting, navigation];
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
  }, items21);
  const items22 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const obj2 = GuildRoleMemberActionCreatorsAll;
      const memberCounts = obj2.fetchMemberCounts(tmp.id);
    }
  }, items22);
  const items23 = [sorting];
  const effect5 = obj.useEffect(() => () => {
    const tmp = sorting;
    if (tmp) {
      const obj = closure_1(closure_3[29]);
      obj.stopReordering();
    }
  }, items23);
  let tmp44 = null;
  if (!tmp25) {
    let tmp46 = guildEveryoneRole;
    let obj8 = { style: tmp.searchWrapper, children: hasRoles(tmp3(6471).SearchField, obj9) };
    obj9 = { size: "md", onChange: callback1 };
    tmp44 = hasRoles(guildEveryoneRole, obj8);
  }
  const items24 = [tmp44, , , ];
  let tmp47 = hasRoles;
  let tmp48 = guildEveryoneRole;
  let tmp42Result = null;
  if (sorting) {
    const items25 = [callback8(), ];
    let tmp47Result = null;
    if (!hasRoles) {
      let obj10 = { leading: tmp47(Icon, obj11), label: tmp47(Text, obj12) };
      const FormRow = tmp3(8053).FormRow;
      obj11 = { style: tmp.emptyRolesIcon, size: tmp3(1177).Icon.Sizes.LARGE, source: AssetRegistryDefault };
      Icon = tmp3(1177).Icon;
      obj12 = { variant: "text-md/semibold", color: "interactive-text-default", children: intl.string(tmp3(1115).t.nZfHsf) };
      Text = tmp3(4832).Text;
      intl = tmp3(1115).intl;
      tmp47Result = tmp47(FormRow, obj10);
    }
    let obj13 = { children: items25 };
    items25[1] = tmp47Result;
    tmp42Result = tmp42(tmp43, obj13);
  }
  items24[1] = tmp47(tmp48, { children: tmp42Result });
  let obj14 = { style: tmp.container, children: tmp47(tmp6Result, obj15) };
  obj15 = { ref, header: tmp42Result2, wrapperStyles: tmp.container, contentContainerStyle: items27, data: roleData, rowHasChanged: callback12, onRowMoved: callback7, disableSorting: !sorting, minDraggableIndex: tmp56, renderRow: callback11, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  tmp42Result2 = null;
  tmp6Result = SortableListViewDefault;
  if (!sorting) {
    let callback9Result = null;
    if (!tmp21) {
      callback9Result = callback9();
    }
    const items26 = [callback9Result, , ];
    let callback10Result = null;
    if (!tmp21) {
      callback10Result = callback10();
    }
    items26[1] = callback10Result;
    let callback8Result = null;
    if (hasRoles) {
      callback8Result = callback8();
    }
    const obj16 = { children: items26 };
    items26[2] = callback8Result;
    tmp42Result2 = tmp42(tmp43, obj16);
  }
  items27 = [tmp.scrollContainer, contentContainerStyle];
  tmp56 = undefined;
  if (firstEditableIndex >= 0) {
    tmp56 = firstEditableIndex;
  }
  const obj17 = { children: items24 };
  items24[2] = tmp47(tmp48, obj14);
  items24[3] = tmp47(tmp3(6461).NavScrim, {});
  return closure_22(callback2, obj17);
};
