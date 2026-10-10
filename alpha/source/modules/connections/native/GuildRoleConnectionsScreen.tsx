// Module ID: 10721
// Function ID: 10722
// Name: GuildRoleConnectionsScreen
// Dependencies: [32, 19, 17, 1404, 502, 2125, 2119, 1085, 21, 5092, 587, 1200, 5031, 504, 1265, 5107, 6097, 5056, 10722, 2000, 10711, 10719, 5763, 1415, 4969, 5088, 1126, 2128, 10717, 6899, 10723, 2]
// Exports: default

// Module 10721 (GuildRoleConnectionsScreen)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 10719 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserRecord from "UserRecord" /* 1404 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, id, role, set;

let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, ScrollView: metroImportDefault } = react_native);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { flexDirection: "column", alignItems: "center", padding: 16 }, infoText: { marginTop: 24 }, verifiedRoles: { marginTop: 24, flexDirection: "column", width: "100%" }, verifiedRole: obj3, verifiedRoleHasRole: obj4, verifiedRolePressed: obj5, verifiedRoleIcon: { marginRight: 12 }, roleCheckmark: size, verifiedRoleName: { flex: 1, overflow: "hidden", marginRight: 32 }, platformIconContainer: { flexDirection: "row" }, cutout: { marginRight: -6 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { borderColor: nativeDefault.colors.BORDER_MUTED };
size = { width: 20, height: 20, borderRadius: 10, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
let closure_16 = createStyles(obj);
let obj6 = { direction: native.CutoutDirection.RIGHT, radius: 8 };
size = size_mod;
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  let closure_2;
  let closure_3;
  let closure_4;
  let closure_7;
  let first;
  let format;
  let items5;
  let obj5;
  let obj7;
  let prop;
  let tmp2Result;
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  first = undefined;
  closure_7 = undefined;
  let tmp = closure_16();
  dependencyMap = tmp;
  let tmp3 = dependencyMap;
  const tmp2 = onCloseModal;
  _slicedToArray = onCloseModal(5031)();
  let obj = guildId(504);
  let items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guildId));
  let obj2 = guildId(504);
  let items1 = [AuthenticationStore];
  react = obj2.useStateFromStores(items1, () => id.getId());
  let obj3 = guildId(504);
  const items2 = [GuildMemberStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_4));
  [first, closure_7] = react.useState([]);
  const items3 = [guildId, first];
  const effect = react.useEffect(() => {
    const arr = first;
    if (0 !== first.length) {
      const obj = { role_ids: arr.map((role_id) => role_id.role_id) };
      const track = AnalyticsUtilsDefault.track;
      const PASSPORT_ENTRY_VIEWED = constants.PASSPORT_ENTRY_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(PASSPORT_ENTRY_VIEWED, obj);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = react.useEffect(() => {
    const obj = GuildActionCreatorsDefault;
    const guildRoleConnectionsConfigurations = obj.getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((result) => closure_1_7(result));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    let tmp10 = closure_14;
    let obj4 = { style: tmp.container, children: closure_15(closure_7, obj5) };
    obj5 = { contentContainerStyle: tmp.content, children: items5 };
    obj6 = { style: tmp.infoText, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: format(prop, obj7) };
    const Text = tmp4(5088).Text;
    const intl = tmp4(1126).intl;
    format = intl.format;
    obj7 = { helpdeskArticleUrl: tmp2Result.getArticleURL(constants2.CONNECTION_DETAILS) };
    prop = tmp4(1126).t["Y+TsEV"];
    tmp2Result = tmp2(2128);
    items5 = [closure_14(Text, obj6), ];
    const obj8 = {
      style: tmp.verifiedRoles,
      children: found.map(function(children) {
          let Icon;
          let items1;
          let obj3;
          guildId = children;
          const roles = stateFromStores1.roles;
          const hasItem = roles.includes(children.id);
          id = children.id;
          set = undefined;
          let items = [];
          const found = first.find((role_id) => role_id.role_id === id);
          if (null != found) {
            const tmp3 = globalThis;
            const _Set = Set;
            let self = this;
            let self2 = this;
            set = new Set();
            const rules = found.rules;
            const flatResult = rules.flat();
            const item = flatResult.forEach((application_id) => {
              if (undefined === application_id.application_id) {
                set.add(application_id.connection_type);
              } else {
                set.add(application_id.application_id);
              }
            });
            const _Array = Array;
            const arr = Array.from(set);
            const item1 = arr.forEach(function(item, index) {
              let tmp32;
              let tmp = null;
              if (index !== set.size - 1) {
                tmp = obj6;
              }
              if (isNaN(parseInt(item))) {
                let lightPNG;
                const obj = onCloseModal(found[22]);
                const value = obj.get(item);
                const makeSource = onCloseModal(found[23]).makeSource;
                onCloseModal(found[23]);
                const obj2 = guildId(found[24]);
                if (obj2.isThemeDark(closure_2_3)) {
                  let darkPNG;
                  if (value != null) {
                    darkPNG = value.icon.darkPNG;
                  }
                  lightPNG = darkPNG;
                } else if (value != null) {
                  lightPNG = value.icon.lightPNG;
                }
                const source = makeSource(lightPNG);
                const push = items.push;
                const obj3 = { size: guildId(found[11]).AvatarSizes.XSMALL, source, style: closure_2_2.cutout, cutout: tmp };
                const CutoutableAvatarImage = guildId(found[11]).CutoutableAvatarImage;
                push(closure_3_14(CutoutableAvatarImage, obj3, item));
              } else {
                let bot;
                if (found.applications[item] != null) {
                  bot = tmp3.bot;
                }
                if (undefined !== bot) {
                  const push2 = items.push;
                  const obj4 = { size: guildId(found[11]).AvatarSizes.XSMALL, user: tmp32, guildId, style: closure_2_2.cutout, cutout: tmp };
                  const CutoutableAvatarImage2 = guildId(found[11]).CutoutableAvatarImage;
                  const self = this;
                  const self2 = this;
                  tmp32 = new UserRecord(bot);
                  push2(closure_3_14(CutoutableAvatarImage2, obj4, item));
                }
              }
            });
          }
          let obj = {
            accessibilityRole: "button",
            style(pressed) {
              const items = [closure_2.verifiedRole, , ];
              let verifiedRoleHasRole = null;
              pressed = pressed.pressed;
              if (hasItem) {
                verifiedRoleHasRole = tmp.verifiedRoleHasRole;
              }
              items[1] = verifiedRoleHasRole;
              let verifiedRolePressed = null;
              if (pressed) {
                verifiedRolePressed = tmp.verifiedRolePressed;
              }
              items[2] = verifiedRolePressed;
              return items;
            },
            onPress() {
              if (hasItem) {
                role = tmp;
                let closure_1 = tmp2;
                const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
                const _HermesInternal = HermesInternal;
                ActionSheetActionCreatorsDefault;
                let obj2 = {
                  onLeaveRolePressed() {
                      const obj = hasItem(closure_2_2[17]);
                      obj.hideActionSheet();
                      const obj2 = hasItem(closure_2_2[16]);
                      const result = obj2.unassignGuildRoleConnection(closure_1, id.id);
                    }
                };
                const tmp22 = asyncRequire(10722, dependencyMap.paths);
                openLazy2(tmp22, "LeaveConnectionRoleActionSheet-" + role.id, obj2);
              } else {
                const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                ActionSheetActionCreatorsDefault;
                const tmp10 = asyncRequire(10711, dependencyMap.paths);
                let obj = GuildRoleConnectionsModalActionCreators;
                const obj3 = { role, guildId, onCloseModal };
                openLazy(tmp10, obj.makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id), obj3);
              }
            },
            children: items1
          };
          let tmp10 = null;
          const tmp9 = first;
          const tmp8 = closure_1_15;
          if (hasItem) {
            let obj2 = { style: closure_2.roleCheckmark, children: closure_1_14(Icon, obj3) };
            obj3 = { size: guildId(closure_2[11]).Icon.Sizes.SMALL_20, source: onCloseModal(closure_2[28]), color: onCloseModal(closure_2[10]).unsafe_rawColors.WHITE };
            Icon = guildId(closure_2[11]).Icon;
            tmp10 = closure_1_14(stateFromStores1, obj2);
          }
          items1 = [tmp10, , , ];
          let obj4 = { style: closure_2.verifiedRoleIcon, guildId, role: children, size: 24 };
          items1[1] = closure_1_14(onCloseModal(closure_2[29]), obj4);
          const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: closure_2.verifiedRoleName, children: children.name };
          items1[2] = closure_1_14(guildId(closure_2[25]).Text, obj5);
          obj6 = { style: closure_2.platformIconContainer, users: [], renderedUsers: items, max: 3, withNames: false, avatarSize: guildId(closure_2[11]).AvatarSizes.XSMALL, withPlusCount: true };
          const tmp17 = onCloseModal(closure_2[30]);
          items1[3] = closure_1_14(tmp17, obj6);
          return tmp8(tmp9, obj, children.id);
        })
    };
    items5[1] = closure_14(stateFromStores1, obj8);
    return closure_14(stateFromStores1, obj4);
  }
};
