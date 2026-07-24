// Module ID: 10024
// Function ID: 77443
// Name: GuildRoleConnectionsScreen
// Dependencies: [57, 31, 27, 1857, 1194, 1917, 1910, 653, 33, 4130, 689, 1273, 4066, 566, 675, 4324, 5048, 4098, 10025, 1934, 10015, 10022, 4814, 1392, 3976, 4126, 1212, 1920, 10021, 5506, 10026, 2]
// Exports: default

// Module 10024 (GuildRoleConnectionsScreen)
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "wrapURL";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, Pressable: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, HelpdeskArticles: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { flexDirection: "column", alignItems: "center", padding: 16 };
_createForOfIteratorHelperLoose.infoText = { marginTop: 24 };
_createForOfIteratorHelperLoose.verifiedRoles = { marginTop: 24, flexDirection: "column", width: "100%" };
let obj1 = { flexDirection: "row", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.verifiedRole = obj1;
_createForOfIteratorHelperLoose.verifiedRoleHasRole = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.verifiedRolePressed = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.verifiedRoleIcon = { marginRight: 12 };
const obj4 = { width: 20, height: 20, borderRadius: 10, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, position: "absolute", right: -8, top: -8 };
_createForOfIteratorHelperLoose.roleCheckmark = obj4;
_createForOfIteratorHelperLoose.verifiedRoleName = { flex: 1, overflow: "hidden", marginRight: 32 };
_createForOfIteratorHelperLoose.platformIconContainer = { flexDirection: "row" };
_createForOfIteratorHelperLoose.cutout = { marginRight: -6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj5 = { direction: require("Button").CutoutDirection.RIGHT, radius: 8 };
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const onCloseModal = guildId.onCloseModal;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const callback = onCloseModal(4066)();
  let obj = guildId(566);
  let items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getSortedRoles(guildId));
  let obj1 = guildId(566);
  const items1 = [closure_9];
  const React = obj1.useStateFromStores(items1, () => outer1_9.getId());
  let obj2 = guildId(566);
  const items2 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => outer1_10.getMember(guildId, set));
  let tmp3 = callback(React.useState([]), 2);
  const first = tmp3[0];
  let closure_7 = tmp3[1];
  const items3 = [guildId, first];
  const effect = React.useEffect(() => {
    if (0 !== first.length) {
      let obj = onCloseModal(tmp[14]);
      obj = { role_ids: first.map((role_id) => role_id.role_id) };
      const merged = Object.assign(guildId(onCloseModal[15]).collectGuildAnalyticsMetadata(guildId));
      obj.track(outer1_12.PASSPORT_ENTRY_VIEWED, obj);
      const obj3 = guildId(onCloseModal[15]);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = React.useEffect(() => {
    const guildRoleConnectionsConfigurations = onCloseModal(tmp[16]).getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((arg0) => outer1_7(arg0));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    let found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    obj = { style: tmp.container };
    obj = { contentContainerStyle: tmp.content };
    obj1 = { style: tmp.infoText, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
    const intl = guildId(1212).intl;
    obj2 = { helpdeskArticleUrl: onCloseModal(1920).getArticleURL(constants.CONNECTION_DETAILS) };
    obj1.children = intl.format(guildId(1212).t["Y+TsEV"], obj2);
    const items5 = [callback2(guildId(4126).Text, obj1), ];
    let obj3 = {
      style: tmp.verifiedRoles,
      children: found.map((id) => {
          let closure_0 = id;
          const roles = stateFromStores1.roles;
          const hasItem = roles.includes(id.id);
          let obj = {
            accessibilityRole: "button",
            style(pressed) {
              const items = [outer1_2.verifiedRole, , ];
              let verifiedRoleHasRole = null;
              if (hasItem) {
                verifiedRoleHasRole = outer1_2.verifiedRoleHasRole;
              }
              items[1] = verifiedRoleHasRole;
              let verifiedRolePressed = null;
              if (pressed.pressed) {
                verifiedRolePressed = outer1_2.verifiedRolePressed;
              }
              items[2] = verifiedRolePressed;
              return items;
            },
            onPress() {
              if (hasItem) {
                (function renderLeaveRoleActionSheet(id, arg1) {
                  let closure_0 = id;
                  let closure_1 = arg1;
                  let obj = onCloseModal(paths[17]);
                  obj = {
                    onLeaveRolePressed() {
                      onCloseModal(4098).hideActionSheet();
                      const obj = onCloseModal(4098);
                      const result = onCloseModal(5048).unassignGuildRoleConnection(closure_1, id.id);
                    }
                  };
                  obj.openLazy(guildId(paths[19])(paths[18], paths.paths), "LeaveConnectionRoleActionSheet-" + id.id, obj);
                })(tmp, tmp2);
              } else {
                let obj = onCloseModal(paths[17]);
                const tmp6 = guildId(paths[19])(paths[20], paths.paths);
                obj = { role: tmp, guildId: tmp2, onCloseModal: hasItem };
                obj.openLazy(tmp6, guildId(paths[21]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id), obj);
                const obj2 = guildId(paths[21]);
              }
            }
          };
          let tmp5 = null;
          if (hasItem) {
            obj = { style: tmp.roleCheckmark };
            obj = { size: guildId(tmp[11]).Icon.Sizes.SMALL_20, source: onCloseModal(tmp[28]), color: onCloseModal(tmp[10]).unsafe_rawColors.WHITE };
            obj.children = outer1_14(guildId(tmp[11]).Icon, obj);
            tmp5 = outer1_14(stateFromStores1, obj);
          }
          let items = [tmp5, outer1_14(onCloseModal(tmp[29]), { style: tmp.verifiedRoleIcon, guildId: closure_0, role: id, size: 24 }), , ];
          let obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.verifiedRoleName, children: id.name };
          items[2] = outer1_14(guildId(tmp[25]).Text, obj2);
          const obj3 = {
            style: tmp.platformIconContainer,
            users: [],
            renderedUsers: (function getIconsForConnectionRole(id) {
              let closure_0 = id;
              const items = [];
              const found = outer1_6.find((role_id) => role_id.role_id === closure_0);
              if (null == found) {
                return items;
              } else {
                const _Set = Set;
                const set = new Set();
                const rules = found.rules;
                const item = rules.flat().forEach((application_id) => {
                  if (undefined === application_id.application_id) {
                    set.add(application_id.connection_type);
                  } else {
                    set.add(application_id.application_id);
                  }
                });
                const _Array = Array;
                const flatResult = rules.flat();
                const item1 = Array.from(set).forEach((replaced) => {
                  let tmp = null;
                  if (arg1 !== set.size - 1) {
                    tmp = outer3_17;
                  }
                  if (isNaN(parseInt(replaced))) {
                    let obj = onCloseModal(4814);
                    let XSMALL = obj.get(replaced);
                    let tmp7 = onCloseModal(1392);
                    let CutoutableAvatarImage = tmp7.makeSource;
                    let tmp10 = null == XSMALL;
                    if (obj2.isThemeDark(outer2_3)) {
                      let darkPNG;
                      if (!tmp10) {
                        darkPNG = XSMALL.icon.darkPNG;
                      }
                      let lightPNG = darkPNG;
                    } else if (!tmp10) {
                      lightPNG = XSMALL.icon.lightPNG;
                    }
                    const result = CutoutableAvatarImage(lightPNG);
                    tmp7 = outer3_14;
                    tmp10 = guildId;
                    CutoutableAvatarImage = guildId(1273).CutoutableAvatarImage;
                    obj = {};
                    XSMALL = guildId(1273).AvatarSizes.XSMALL;
                    obj.size = XSMALL;
                    obj.source = result;
                    obj.style = outer2_2.cutout;
                    obj.cutout = tmp;
                    items.push(outer3_14(CutoutableAvatarImage, obj, replaced));
                    obj2 = guildId(3976);
                  } else {
                    let bot;
                    if (null != found.applications[replaced]) {
                      bot = tmp3.bot;
                    }
                    if (undefined !== bot) {
                      obj = { size: guildId(1273).AvatarSizes.XSMALL };
                      const prototype = outer3_8.prototype;
                      const tmp25 = new outer3_8(bot);
                      obj.user = tmp25;
                      obj.guildId = closure_0;
                      obj.style = outer2_2.cutout;
                      obj.cutout = tmp;
                      items.push(outer3_14(guildId(1273).CutoutableAvatarImage, obj, replaced));
                    }
                  }
                });
                return items;
              }
            })(id.id),
            max: 3,
            withNames: false
          };
          const obj1 = { style: tmp.verifiedRoleIcon, guildId: closure_0, role: id, size: 24 };
          const tmp2 = (function getIconsForConnectionRole(id) {
            let closure_0 = id;
            const items = [];
            const found = outer1_6.find((role_id) => role_id.role_id === closure_0);
            if (null == found) {
              return items;
            } else {
              const _Set = Set;
              const set = new Set();
              const rules = found.rules;
              const item = rules.flat().forEach((application_id) => {
                if (undefined === application_id.application_id) {
                  set.add(application_id.connection_type);
                } else {
                  set.add(application_id.application_id);
                }
              });
              const _Array = Array;
              const flatResult = rules.flat();
              const item1 = Array.from(set).forEach((replaced) => {
                let tmp = null;
                if (arg1 !== set.size - 1) {
                  tmp = outer3_17;
                }
                if (isNaN(parseInt(replaced))) {
                  let obj = onCloseModal(4814);
                  let XSMALL = obj.get(replaced);
                  let tmp7 = onCloseModal(1392);
                  let CutoutableAvatarImage = tmp7.makeSource;
                  let tmp10 = null == XSMALL;
                  if (obj2.isThemeDark(outer2_3)) {
                    let darkPNG;
                    if (!tmp10) {
                      darkPNG = XSMALL.icon.darkPNG;
                    }
                    let lightPNG = darkPNG;
                  } else if (!tmp10) {
                    lightPNG = XSMALL.icon.lightPNG;
                  }
                  const result = CutoutableAvatarImage(lightPNG);
                  tmp7 = outer3_14;
                  tmp10 = guildId;
                  CutoutableAvatarImage = guildId(1273).CutoutableAvatarImage;
                  obj = {};
                  XSMALL = guildId(1273).AvatarSizes.XSMALL;
                  obj.size = XSMALL;
                  obj.source = result;
                  obj.style = outer2_2.cutout;
                  obj.cutout = tmp;
                  items.push(outer3_14(CutoutableAvatarImage, obj, replaced));
                  obj2 = guildId(3976);
                } else {
                  let bot;
                  if (null != found.applications[replaced]) {
                    bot = tmp3.bot;
                  }
                  if (undefined !== bot) {
                    obj = { size: guildId(1273).AvatarSizes.XSMALL };
                    const prototype = outer3_8.prototype;
                    const tmp25 = new outer3_8(bot);
                    obj.user = tmp25;
                    obj.guildId = closure_0;
                    obj.style = outer2_2.cutout;
                    obj.cutout = tmp;
                    items.push(outer3_14(guildId(1273).CutoutableAvatarImage, obj, replaced));
                  }
                }
              });
              return items;
            }
          })(id.id);
          const tmp3 = outer1_15;
          const tmp4 = first;
          obj3.avatarSize = guildId(tmp[11]).AvatarSizes.XSMALL;
          obj3.withPlusCount = true;
          items[3] = outer1_14(onCloseModal(tmp[30]), obj3);
          obj.children = items;
          return tmp3(tmp4, obj, id.id);
        })
    };
    items5[1] = callback2(stateFromStores1, obj3);
    obj.children = items5;
    obj.children = callback3(closure_7, obj);
    return callback2(stateFromStores1, obj);
  }
};
