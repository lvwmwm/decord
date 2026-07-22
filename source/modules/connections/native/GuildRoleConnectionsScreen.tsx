// Module ID: 9984
// Function ID: 77209
// Name: GuildRoleConnectionsScreen
// Dependencies: []
// Exports: default

// Module 9984 (GuildRoleConnectionsScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, HelpdeskArticles: closure_13 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.container = obj;
obj.content = { "Null": 0.0000000000000000000000000000000000000000000000000000000009659784425801879, "Null": 15177101141243970000000000000000000000000000000000000000000000000000000000000000000, "Null": 15186806633716527000000000000000000000000000000000000000000000000000000000000000000 };
obj.infoText = { marginTop: 24 };
obj.verifiedRoles = { title: 0.0000000000000000000000000000000000000000000000000000000000000000011816418034244918, fullscreen: "GiftTrollIllocon", headerShown: "FILE_TYPES_REQUIRED_ADDITIONAL_CHECK" };
const obj1 = { manageChildren: true, EMOJI_MAX_FILESIZE_KB: "/assets/images/native", alignContent: 24, bgMutedWrap: 24, addWindow: null, PortalKeyboard: "f2561d66a35f036565003b940731b99f", doNotNotifyOnError: "ic_verified_check_24px", CollectiblesShopHomeRecord: "png", y: true, CollectiblesShopOpenTriggerPoint: 20, borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.verifiedRole = obj1;
const tmp4 = arg1(dependencyMap[8]);
obj.verifiedRoleHasRole = { borderColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { borderColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.verifiedRolePressed = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED };
obj.verifiedRoleIcon = { marginRight: 12 };
const obj4 = { <string:1352487535>: true, <string:1751234419>: true, <string:1676458833>: true, <string:1672192084>: true, <string:1421343572>: true, <string:56998353>: true, <string:3936662576>: true, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
obj.roleCheckmark = obj4;
obj.verifiedRoleName = { windowWidth: null, windowHeight: null, chunkSize: null };
obj.platformIconContainer = { flexDirection: "row" };
obj.cutout = { marginRight: -6 };
let closure_16 = obj.createStyles(obj);
const obj5 = { direction: arg1(dependencyMap[11]).CutoutDirection.RIGHT, radius: 8 };
const obj3 = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/connections/native/GuildRoleConnectionsScreen.tsx");

export default function GuildRoleConnectionsScreen(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const importDefault = guildId.onCloseModal;
  const tmp = callback4();
  const dependencyMap = tmp;
  const callback = importDefault(dependencyMap[12])();
  let obj = arg1(dependencyMap[13]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => sortedRoles.getSortedRoles(guildId));
  let obj1 = arg1(dependencyMap[13]);
  const items1 = [closure_9];
  const React = obj1.useStateFromStores(items1, () => id.getId());
  let obj2 = arg1(dependencyMap[13]);
  const items2 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => member.getMember(guildId, closure_4));
  const tmp3 = callback(React.useState([]), 2);
  const first = tmp3[0];
  let closure_7 = tmp3[1];
  const items3 = [guildId, first];
  const effect = React.useEffect(() => {
    if (0 !== first.length) {
      let obj = onCloseModal(tmp[14]);
      obj = { role_ids: first.map((role_id) => role_id.role_id) };
      const merged = Object.assign(guildId(onCloseModal[15]).collectGuildAnalyticsMetadata(guildId));
      obj.track(constants.PASSPORT_ENTRY_VIEWED, obj);
      const obj3 = guildId(onCloseModal[15]);
    }
  }, items3);
  const items4 = [guildId];
  const effect1 = React.useEffect(() => {
    const guildRoleConnectionsConfigurations = onCloseModal(tmp[16]).getGuildRoleConnectionsConfigurations(guildId);
    guildRoleConnectionsConfigurations.then((arg0) => callback(arg0));
  }, items4);
  if (null == stateFromStores1) {
    return null;
  } else {
    const found = stateFromStores.filter((tags) => null === tags.tags.guild_connections);
    obj = { style: tmp.container };
    obj = { contentContainerStyle: tmp.content };
    obj1 = { "Null": "String", "Null": "justifyContent", alignItems: "np", style: tmp.infoText };
    const intl = arg1(dependencyMap[26]).intl;
    obj2 = { helpdeskArticleUrl: importDefault(dependencyMap[27]).getArticleURL(constants.CONNECTION_DETAILS) };
    obj1.children = intl.format(arg1(dependencyMap[26]).t.Y+TsEV, obj2);
    const items5 = [callback2(arg1(dependencyMap[25]).TextWithIOSLinkWorkaround, obj1), ];
    const obj3 = {
      style: tmp.verifiedRoles,
      children: found.map((id) => {
          const guildId = id;
          const roles = stateFromStores1.roles;
          const hasItem = roles.includes(id.id);
          const onCloseModal = hasItem;
          let obj = {
            accessibilityRole: "button",
            style(pressed) {
              const items = [closure_2.verifiedRole, , ];
              let verifiedRoleHasRole = null;
              if (hasItem) {
                verifiedRoleHasRole = closure_2.verifiedRoleHasRole;
              }
              items[1] = verifiedRoleHasRole;
              let verifiedRolePressed = null;
              if (pressed.pressed) {
                verifiedRolePressed = closure_2.verifiedRolePressed;
              }
              items[2] = verifiedRolePressed;
              return items;
            },
            onPress() {
              if (hasItem) {
                function renderLeaveRoleActionSheet(id, arg1) {
                  let obj = arg1(paths[17]);
                  obj = {
                    onLeaveRolePressed() {
                      arg1(closure_2[17]).hideActionSheet();
                      const obj = arg1(closure_2[17]);
                      const result = arg1(closure_2[16]).unassignGuildRoleConnection(arg1, arg0.id);
                    }
                  };
                  obj.openLazy(id(paths[19])(paths[18], paths.paths), "LeaveConnectionRoleActionSheet-" + id.id, obj);
                }(tmp, tmp2);
              } else {
                let obj = hasItem(closure_2[17]);
                const tmp6 = arg0(closure_2[19])(closure_2[20], closure_2.paths);
                obj = { role: tmp, guildId: tmp2, onCloseModal: hasItem };
                obj.openLazy(tmp6, arg0(closure_2[21]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(tmp.id), obj);
                const obj2 = arg0(closure_2[21]);
              }
            }
          };
          let tmp5 = null;
          if (hasItem) {
            obj = { style: tmp.roleCheckmark };
            obj = { size: guildId(tmp[11]).Icon.Sizes.SMALL_20, source: onCloseModal(tmp[28]), color: onCloseModal(tmp[10]).unsafe_rawColors.WHITE };
            obj.children = callback(guildId(tmp[11]).Icon, obj);
            tmp5 = callback(stateFromStores1, obj);
          }
          const items = [tmp5, callback(onCloseModal(tmp[29]), { style: tmp.verifiedRoleIcon, guildId, role: id, size: 24 }), , ];
          const obj2 = { 803799044: null, 1269170180: null, 711589892: null, style: tmp.verifiedRoleName, children: id.name };
          items[2] = callback(guildId(tmp[30]).Text, obj2);
          const obj3 = {
            style: tmp.platformIconContainer,
            users: [],
            renderedUsers: function getIconsForConnectionRole(id) {
              const items = [];
              const hasItem = items;
              const found = closure_6.find((role_id) => role_id.role_id === role_id);
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
                    tmp = closure_17;
                  }
                  if (isNaN(parseInt(replaced))) {
                    let obj = items(found[22]);
                    let XSMALL = obj.get(replaced);
                    let tmp7 = items(found[23]);
                    let CutoutableAvatarImage = tmp7.makeSource;
                    let tmp10 = null == XSMALL;
                    if (obj2.isThemeDark(set)) {
                      let darkPNG;
                      if (!tmp10) {
                        darkPNG = XSMALL.icon.darkPNG;
                      }
                      let lightPNG = darkPNG;
                    } else if (!tmp10) {
                      lightPNG = XSMALL.icon.lightPNG;
                    }
                    const result = CutoutableAvatarImage(lightPNG);
                    tmp7 = callback;
                    tmp10 = replaced;
                    CutoutableAvatarImage = replaced(found[11]).CutoutableAvatarImage;
                    obj = {};
                    XSMALL = replaced(found[11]).AvatarSizes.XSMALL;
                    obj.size = XSMALL;
                    obj.source = result;
                    obj.style = found.cutout;
                    obj.cutout = tmp;
                    items.push(callback(CutoutableAvatarImage, obj, replaced));
                    const obj2 = replaced(found[24]);
                  } else {
                    let bot;
                    if (null != found.applications[replaced]) {
                      bot = tmp3.bot;
                    }
                    if (undefined !== bot) {
                      obj = { size: replaced(found[11]).AvatarSizes.XSMALL };
                      const prototype = ctor.prototype;
                      const tmp25 = new ctor(bot);
                      obj.user = tmp25;
                      obj.guildId = replaced;
                      obj.style = found.cutout;
                      obj.cutout = tmp;
                      items.push(callback(replaced(found[11]).CutoutableAvatarImage, obj, replaced));
                    }
                  }
                });
                return items;
              }
            }(id.id),
            max: 3,
            withNames: false
          };
          const obj1 = { style: tmp.verifiedRoleIcon, guildId, role: id, size: 24 };
          const tmp2 = function getIconsForConnectionRole(id) {
            const items = [];
            const hasItem = items;
            const found = closure_6.find((role_id) => role_id.role_id === role_id);
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
                  tmp = closure_17;
                }
                if (isNaN(parseInt(replaced))) {
                  let obj = items(found[22]);
                  let XSMALL = obj.get(replaced);
                  let tmp7 = items(found[23]);
                  let CutoutableAvatarImage = tmp7.makeSource;
                  let tmp10 = null == XSMALL;
                  if (obj2.isThemeDark(set)) {
                    let darkPNG;
                    if (!tmp10) {
                      darkPNG = XSMALL.icon.darkPNG;
                    }
                    let lightPNG = darkPNG;
                  } else if (!tmp10) {
                    lightPNG = XSMALL.icon.lightPNG;
                  }
                  const result = CutoutableAvatarImage(lightPNG);
                  tmp7 = callback;
                  tmp10 = replaced;
                  CutoutableAvatarImage = replaced(found[11]).CutoutableAvatarImage;
                  obj = {};
                  XSMALL = replaced(found[11]).AvatarSizes.XSMALL;
                  obj.size = XSMALL;
                  obj.source = result;
                  obj.style = found.cutout;
                  obj.cutout = tmp;
                  items.push(callback(CutoutableAvatarImage, obj, replaced));
                  const obj2 = replaced(found[24]);
                } else {
                  let bot;
                  if (null != found.applications[replaced]) {
                    bot = tmp3.bot;
                  }
                  if (undefined !== bot) {
                    obj = { size: replaced(found[11]).AvatarSizes.XSMALL };
                    const prototype = ctor.prototype;
                    const tmp25 = new ctor(bot);
                    obj.user = tmp25;
                    obj.guildId = replaced;
                    obj.style = found.cutout;
                    obj.cutout = tmp;
                    items.push(callback(replaced(found[11]).CutoutableAvatarImage, obj, replaced));
                  }
                }
              });
              return items;
            }
          }(id.id);
          const tmp3 = closure_15;
          const tmp4 = first;
          obj3.avatarSize = guildId(tmp[11]).AvatarSizes.XSMALL;
          obj3.withPlusCount = true;
          items[3] = callback(onCloseModal(tmp[31]), obj3);
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
