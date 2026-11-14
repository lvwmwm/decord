// Module ID: 19019
// Function ID: 19020
// Name: WaterwheelsDiscoverCard
// Dependencies: [32, 19, 17, 5177, 1072, 21, 575, 5306, 5169, 504, 19020, 5944, 10225, 6020, 5929, 10390, 7963, 1113, 2569, 5936, 5893, 10323, 18739, 7438, 19009, 19008, 2]
// Exports: default

// Module 19019 (WaterwheelsDiscoverCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import _modDef2569 from "module_2569" /* 2569 */;
import GuildRecordUtils from "GuildRecordUtils" /* 5169 */;
import Text_Text from "Text/Text" /* 5929 */;
import GameControllerIcon2 from "GameControllerIcon" /* 7438 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 7963 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 18739 */;
import entry_data_ErrorBoundary from "entry_data/ErrorBoundary" /* 19008 */;
import WaterwheelsPostCardDefault from "WaterwheelsPostCard" /* 19009 */;
import selectDiscoverServerAction from "selectDiscoverServerAction" /* 19020 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 5177 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let StyleSheet;
let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj21;
let obj22;
let obj23;
let obj24;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let unpackModuleId;
function ServerIdentity(server) {
  let intl;
  let intl2;
  let items10;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj18;
  let obj22;
  let obj6;
  let tmp14;
  let tmp14Result;
  let tmp14Result4;
  let tmp14Result7;
  server = server.server;
  let flag = server.compact;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = server.onAction;
  let obj = server(5944);
  const fontScale = obj.useFontScale();
  const tmp4 = closure_16();
  const guildId = server.guildId;
  let obj2 = server(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = selectDiscoverServerAction;
    return obj.selectDiscoverServerAction(GuildStore.getGuild(guildId));
  }, items1);
  const OPEN_GUILD = server(10225).WaterwheelsActionType.OPEN_GUILD;
  set = new Set();
  if (server.verified) {
    set.add(GuildFeatures.VERIFIED);
  }
  if (server.partnered) {
    set.add(GuildFeatures.PARTNERED);
  }
  let result = null;
  if (0 !== set.size) {
    const obj3 = { id: null, name: null, icon: null, features: set };
    ({ guildId: obj5.id, name: obj5.name } = server);
    const tmpResult = server(5169);
    result = tmpResult.constructFromPartialGuildRecord(obj3);
  }
  const tmp11 = closure_17(fontScale, flag);
  const tmp13 = closure_12;
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon, ];
    let iconCompact2 = flag;
    const tmp19 = onAction(6020);
    if (flag) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj4 = { accessible: false, style: items2, source: obj6 };
    items2[1] = iconCompact2;
    obj6 = { uri: server.iconUrl };
    tmp14Result4 = tmp17(tmp19, obj4);
    tmp14 = tmp17;
  } else {
    tmp14 = closure_10;
    const items3 = [tmp4.icon, ];
    let iconCompact = flag;
    const tmp15 = closure_7;
    if (flag) {
      iconCompact = tmp4.iconCompact;
    }
    const obj7 = { style: items3 };
    items3[1] = iconCompact;
    tmp14Result4 = tmp14(tmp15, obj7);
  }
  const items4 = [tmp14Result4, ];
  const obj8 = { style: tmp4.identityCopy, children: items6 };
  const obj9 = { style: tmp4.nameRow, children: items5 };
  const tmpResult2 = server(5929);
  if (flag) {
    const obj10 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp14Result = tmp14(tmpResult2.Text, obj10);
  } else {
    const obj11 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp14Result = tmp14(tmpResult2.Heading, obj11);
  }
  items5 = [tmp14Result, , ];
  let tmp14Result5 = null;
  if (null != result) {
    const obj12 = { guild: result, style: tmp4.badge };
    tmp14Result5 = tmp14(onAction(10390), obj12);
  }
  items5[1] = tmp14Result5;
  let tmp14Result6 = null;
  if (stateFromStores === OPEN_GUILD) {
    const obj13 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp(7963).ChevronSmallRightIcon;
    tmp14Result6 = tmp14(ChevronSmallRightIcon, obj13);
  }
  items5[2] = tmp14Result6;
  items6 = [closure_11(closure_7, obj9), ];
  const obj15 = { style: tmp4.metaItem, children: items7 };
  items7 = [, ];
  const obj14 = { style: tmp4.meta, children: items8 };
  const obj16 = { style: tmp4.dot };
  items7[0] = tmp14(closure_7, obj16);
  const obj17 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl.format(server(1113).t["LC+S+m"], obj18) };
  const Text = tmp(5929).Text;
  intl = tmp(1113).intl;
  obj18 = { membersOnline: server.online };
  items7[1] = tmp14(Text, obj17);
  items8 = [closure_11(closure_7, obj15), ];
  let tmp12Result = null;
  if (!flag) {
    const obj20 = { style: items9 };
    items9 = [, ];
    const obj19 = { style: tmp4.metaItem, children: items10 };
    ({ dot: arr10[0], mutedDot: arr10[1] } = tmp4);
    items10 = [tmp14(closure_7, obj20), ];
    const obj21 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl2.format(server(1113).t.zRl6XR, obj22) };
    const Text2 = tmp(5929).Text;
    intl2 = tmp(1113).intl;
    obj22 = { count: server.members };
    items10[1] = tmp14(Text2, obj21);
    tmp12Result = tmp12(tmp20, obj19);
  }
  const obj23 = { children: items4 };
  items8[1] = tmp12Result;
  items6[1] = closure_11(closure_7, obj14);
  items4[1] = closure_11(closure_7, obj8);
  const tmp12Result2 = closure_11(tmp13, obj23);
  const items11 = [tmp4.identity, tmp11.scaled, ];
  if (flag) {
    flag = tmp4.identityCompact;
  }
  items11[2] = flag;
  if (stateFromStores === OPEN_GUILD) {
    const obj24 = {
      accessibilityRole: "link",
      accessibilityLabel: server.name,
      onPress() {
          let obj2;
          const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: obj2 };
          obj2 = { guild_id: server.guildId };
          return onAction(obj, "identity");
        },
      style: items11,
      children: tmp12Result2
    };
    tmp14Result7 = tmp14(closure_5, obj24);
  } else {
    const obj25 = { style: items11, children: tmp12Result2 };
    tmp14Result7 = tmp14(tmp20, obj25);
  }
  return tmp14Result7;
}
class ServerActionButton {
  constructor(server) {
    let closure_129_1;
    let joiningGuildIds;
    server = server.server;
    let flag = server.fullWidth;
    const variant = server.variant;
    if (flag === undefined) {
      flag = false;
    }
    ({ joiningGuildIds, onAction: closure_129_1 } = server);
    let stateFromStores;
    let flag2;
    if (joiningGuildIds != null) {
      flag2 = joiningGuildIds.has(server.guildId);
    }
    if (flag2 == null) {
      flag2 = false;
    }
    const guildId = server.guildId;
    let tmp = guildId;
    let obj = guildId(504);
    const items = [GuildStore];
    const items1 = [guildId];
    stateFromStores = obj.useStateFromStores(items, () => {
      const obj = selectDiscoverServerAction;
      return obj.selectDiscoverServerAction(GuildStore.getGuild(guildId));
    }, items1);
    const tmp4 = stateFromStores === guildId(10225).WaterwheelsActionType.OPEN_GUILD;
    const intl = guildId(1113).intl;
    const string = intl.string;
    const t = guildId(1113).t;
    const stringResult = string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
    const intl2 = tmp(1113).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp6 = _modDef2569;
    let obj2 = { guild: server.name };
    let str = "sm";
    const formatToPlainStringResult = formatToPlainString(tmp4 ? tmp6.qGeMEE : tmp6.NOfX8z, obj2);
    const Button = tmp(5936).Button;
    const tmp8 = closure_10;
    if (flag) {
      str = "lg";
    }
    const obj3 = {
      size: str,
      variant,
      text: stringResult,
      accessibilityLabel: formatToPlainStringResult,
      loading: flag2,
      disabled: flag2,
      onPress: function handlePress() {
        let obj2;
        const tmp = flag2;
        if (!tmp) {
          const obj = { type: stateFromStores, value: obj2 };
          obj2 = { guild_id: server.guildId };
          closure_1_1(obj, "button");
        }
      }
    };
    return tmp8(Button, obj3);
  }
}
function ServerRowCard(server) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let joiningGuildIds;
  let obj17;
  let obj20;
  let obj8;
  let onAction;
  let tmp15;
  let tmp16;
  server = server.server;
  const onProfileOpen = server.onProfileOpen;
  ({ joiningGuildIds, onAction } = server);
  const tmp = closure_16();
  set = new Set();
  if (server.verified) {
    set.add(GuildFeatures.VERIFIED);
  }
  if (server.partnered) {
    set.add(GuildFeatures.PARTNERED);
  }
  let result = null;
  if (0 !== set.size) {
    const obj = { id: null, name: null, icon: null, features: set };
    ({ guildId: obj3.id, name: obj3.name } = server);
    const obj2 = GuildRecordUtils;
    result = obj2.constructFromPartialGuildRecord(obj);
  }
  function openProfile() {
    onProfileOpen(server);
  }
  const obj4 = { style: items, children: items7 };
  items = [, ];
  ({ serverRow: arr[0], serverProfile: arr[1] } = tmp);
  const obj5 = { style: tmp.serverHeader, children: items6 };
  const obj6 = { style: tmp.serverIdentity, accessibilityRole: "button", accessibilityLabel: server.name, accessibilityHint: intl.string(_modDef2569.nkweXX), onPress: openProfile, children: items1 };
  intl = intl4.intl;
  if (null != server.iconUrl) {
    const obj7 = { accessible: false, style: tmp.icon, source: obj8 };
    obj8 = { uri: server.iconUrl };
    tmp16 = authStore(tmp14(6020), obj7);
    tmp15 = authStore;
  } else {
    tmp15 = authStore;
    const obj9 = { style: tmp.icon };
    tmp16 = authStore(tmp10, obj9);
  }
  items1 = [tmp16, ];
  const obj11 = { style: tmp.nameRow, children: items2 };
  items2 = [, , ];
  const obj10 = { style: tmp.identityCopy, children: items3 };
  const obj12 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp.name, children: server.name };
  items2[0] = tmp15(Text_Text.Text, obj12);
  let tmp15Result = null;
  if (null != result) {
    const obj13 = { guild: result, style: tmp.badge };
    tmp15Result = tmp15(tmp14(10390), obj13);
  }
  items2[1] = tmp15Result;
  items2[2] = tmp15(ChevronSmallRightIcon2.ChevronSmallRightIcon, { size: "xxs", accessible: false });
  items3 = [unpackModuleId(metroImportDefault, obj11), ];
  const obj15 = { style: items4 };
  items4 = [, ];
  const obj14 = { style: tmp.serverOnline, children: items5 };
  ({ dot: arr5[0], serverDot: arr5[1] } = tmp);
  items5 = [tmp15(metroImportDefault, obj15), ];
  const obj16 = { variant: "body-xs/medium", color: "text-muted", children: intl2.format(intl4.t["LC+S+m"], obj17) };
  const Text = tmp12(5929).Text;
  intl2 = tmp12(1113).intl;
  obj17 = { membersOnline: server.online };
  items5[1] = tmp15(Text, obj16);
  items3[1] = unpackModuleId(metroImportDefault, obj14);
  items1[1] = unpackModuleId(metroImportDefault, obj10);
  items6 = [unpackModuleId(hasOwnProperty, obj6), ];
  const obj18 = { style: tmp.serverJoinTarget, children: tmp15(ServerActionButton, { server, variant: "primary", joiningGuildIds, onAction }) };
  items6[1] = tmp15(metroImportDefault, obj18);
  items7 = [unpackModuleId(metroImportDefault, obj5), ];
  let tmp15Result2 = null;
  if (null != server.description) {
    tmp15Result2 = null;
    if ("" !== server.description) {
      const obj19 = { accessible: false, onPress: openProfile, children: tmp15(Text_Text.Text, obj20) };
      obj20 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: server.description };
      tmp15Result2 = tmp15(tmp11, obj19);
    }
  }
  items7[1] = tmp15Result2;
  return unpackModuleId(metroImportDefault, obj4);
}
function GameHero(game) {
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj13;
  let obj6;
  game = game.game;
  const width = game.width;
  const onAction = game.onAction;
  const joiningGuildIds = game.joiningGuildIds;
  const tmp = closure_16();
  const hero = tmp;
  let items = [tmp.hero, width];
  let coverUrl = game.heroUrl;
  const memo = react.useMemo(() => {
    const items = [hero.hero, ];
    const obj = { width };
    items[1] = obj;
    return items;
  }, items);
  if (coverUrl == null) {
    coverUrl = game.coverUrl;
  }
  let formatToPlainStringResult = null;
  if (null != game.l30Rank) {
    const intl = game(onAction[17]).intl;
    let obj = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(width(onAction[18]).mnK52O, obj);
  }
  const items1 = [game.name, formatToPlainStringResult, game.description];
  const found = items1.filter((item) => null != item);
  let obj2 = { style: memo, children: items7 };
  const obj3 = {
    style: tmp.heroBody,
    accessibilityRole: "button",
    accessibilityLabel: found.join(", "),
    accessibilityHint: intl2.string(width(onAction[18]).xH6QTw),
    onPress() {
      let obj2;
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: obj2 };
      obj2 = { game_id: game.gameId };
      return onAction(obj, "identity");
    },
    children: items5
  };
  intl2 = game(onAction[17]).intl;
  let tmp13 = null;
  const obj4 = { style: tmp.heroArt, children: items2 };
  const tmp9 = closure_5;
  if (null != coverUrl) {
    const obj5 = { accessible: false, style: tmp.heroImage, source: obj6, resizeMode: "cover" };
    obj6 = { uri: coverUrl };
    tmp13 = closure_10(tmp12(tmp11[13]), obj5);
  }
  items2 = [tmp13, , ];
  const obj7 = { pointerEvents: "none", colors, style: tmp.heroImage };
  items2[1] = closure_10(width(onAction[20]), obj7);
  let tmp15Result = null;
  const obj8 = { style: tmp.heroTop, children: items3 };
  if (null != game.coverUrl) {
    const obj9 = { accessible: false, style: tmp.cover, source: obj10 };
    obj10 = { uri: game.coverUrl };
    tmp15Result = tmp15(tmp12(tmp11[13]), obj9);
  }
  items3 = [tmp15Result, ];
  let tmp15Result3 = null;
  const obj11 = { style: tmp.heroTitle, children: items4 };
  if (null != game.l30Rank) {
    const obj12 = { style: tmp.heroRank, children: closure_10(width(onAction[21]), obj13) };
    obj13 = { rank: game.l30Rank, compact: true };
    tmp15Result3 = tmp15(tmp8, obj12);
  }
  items4 = [tmp15Result3, ];
  const obj14 = { variant: "heading-md/semibold", color: "text-overlay-light", lineClamp: 2, children: game.name };
  items4[1] = closure_10(game(onAction[14]).Heading, obj14);
  items3[1] = closure_11(closure_7, obj11);
  items2[2] = closure_11(closure_7, obj8);
  items5 = [closure_11(closure_7, obj4), , ];
  let tmp15Result4 = null;
  if (null != game.description) {
    const obj15 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description };
    tmp15Result4 = tmp15(tmp10(tmp11[14]).Text, obj15);
  }
  items5[1] = tmp15Result4;
  let tmp7Result = null;
  if (null == game.server) {
    const obj16 = { style: tmp.heroCta, children: items6 };
    const obj17 = { variant: "body-sm/semibold", color: "text-strong", children: intl3.string(width(onAction[18]).xH6QTw) };
    const Text = tmp10(tmp11[14]).Text;
    intl3 = tmp10(tmp11[17]).intl;
    items6 = [closure_10(Text, obj17), ];
    const obj18 = { size: "xxs", color: width(onAction[6]).colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp10(tmp11[16]).ChevronSmallRightIcon;
    items6[1] = closure_10(ChevronSmallRightIcon, obj18);
    tmp7Result = tmp7(tmp8, obj16);
  }
  items5[2] = tmp7Result;
  items7 = [closure_11(tmp9, obj3), ];
  let tmp7Result2 = null;
  if (null != game.server) {
    const obj19 = { style: tmp.heroServer, children: items8 };
    const obj20 = { server: game.server, compact: true, onAction };
    items8 = [closure_10(ServerIdentity, obj20), ];
    const obj21 = { server: game.server, variant: "secondary", joiningGuildIds, onAction };
    items8[1] = closure_10(ServerActionButton, obj21);
    tmp7Result2 = tmp7(tmp8, obj19);
  }
  items7[1] = tmp7Result2;
  return closure_11(closure_7, obj2);
}
function CarouselCard(arg0) {
  let GameControllerIcon;
  let _undefined;
  let c2;
  let carousel;
  let diff;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let joiningGuildIds;
  let obj4;
  let onAction;
  let tmp6;
  ({ carousel, joiningGuildIds: require, onAction: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_16();
  const tmp4 = useChannelListWidthDefault();
  [tmp6, c2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (diff == null) {
    diff = tmp4 - 2 * PX_16;
  }
  let num = 0;
  if (carousel.items.length > 1) {
    num = PX_64;
  }
  _slicedToArray = Math.max(0, diff - num);
  let obj = { style: tmp.carouselSection, children: items3 };
  const obj2 = { style: tmp.carouselHeader, children: items1 };
  const obj3 = { style: items, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_10(GameControllerIcon, obj4) };
  items = [, ];
  ({ icon: arr[0], carouselIconTile: arr[1] } = tmp);
  obj4 = { size: "md", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, accessible: false };
  GameControllerIcon = GameControllerIcon2.GameControllerIcon;
  items1 = [closure_10(closure_7, obj3), ];
  const obj5 = { style: tmp.identityCopy, children: items2 };
  items2 = [, ];
  const obj6 = { variant: "heading-sm/semibold", color: "text-strong", children: carousel.header.title };
  items2[0] = closure_10(Text_Text.Heading, obj6);
  const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: carousel.header.subtitle };
  items2[1] = closure_10(Text_Text.Text, obj7);
  items1[1] = closure_11(closure_7, obj5);
  items3 = [closure_11(closure_7, obj2), ];
  const obj8 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      width = nativeEvent.nativeEvent.layout.width;
      if (width > 0) {
        _undefined(width);
      }
    },
    contentContainerStyle: tmp.carouselContent,
    children: items4.map((game) => {
      const obj = { game, width, joiningGuildIds: require, onAction: importDefault };
      return authStore(GameHero, obj, game.gameId);
    })
  };
  items4 = carousel.items;
  items3[1] = closure_10(closure_6, obj8);
  return closure_11(closure_7, obj);
}
function WaterwheelsDiscoverCardContent(entry) {
  let joiningGuildIds;
  let obj4;
  let onAction;
  entry = entry.entry;
  ({ joiningGuildIds, onAction } = entry);
  const onProfileOpen = entry.onProfileOpen;
  const card = entry.card;
  const layout = card.layout;
  const items = [entry, onAction];
  const tmp = closure_16();
  const callback = react.useCallback((arg0, arg1) => onAction(entry, arg0, arg1), items);
  const items1 = [entry, onProfileOpen];
  const type = layout.type;
  if ("server_row" === type) {
    const obj2 = { server: layout, joiningGuildIds, onAction: callback, onProfileOpen: tmp3 };
    return authStore(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, joiningGuildIds, onAction: callback };
    return authStore(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { style: tmp.row, children: authStore(WaterwheelsPostCardDefault, obj4) };
    obj4 = {
      post: layout,
      action: card.actions[0],
      onAction(arg0) {
          return callback(arg0, "button");
        }
    };
    return authStore(metroImportDefault, obj);
  }
}
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const PX_64 = nativeDefault.space.PX_64;
const PX_122 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const colors = ["rgba(0,0,0,0.65)", "rgba(0,0,0,0.85)"];
let createStyles = createStyles_mod;
let obj = { row: obj2, carouselSection: obj3, carouselHeader: { flexDirection: "row", alignItems: "center", gap: PX_12 }, carouselIconTile: obj4, carouselContent: obj5, serverRow: obj6, serverProfile: obj7, serverJoinTarget: { flexShrink: 0 }, serverHeader: obj8, serverIdentity: obj9, badge: size, identity: { flex: 1, flexDirection: "row", alignItems: "center", gap: PX_12, minWidth: 0 }, identityCompact: obj10, identityCopy: obj11, nameRow: obj12, name: { flexShrink: 1 }, icon: size1, iconCompact: size2, meta: obj13, serverOnline: obj14, metaItem: obj15, metaText: { flexShrink: 1 }, dot: size3, serverDot: size4, mutedDot: obj16, hero: obj17, heroBody: obj18, heroArt: obj19, heroImage: StyleSheet.absoluteFillObject, heroTop: obj20, heroTitle: obj21, heroRank: obj22, cover: size5, heroCta: obj23, heroServer: obj24 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { paddingTop: nativeDefault.space.PX_4, gap: PX_122 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj9 = { flex: 1, minWidth: 0, flexDirection: "row", alignItems: "center", gap: PX_12, minHeight: nativeDefault.space.PX_48 };
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj10 = { gap: nativeDefault.space.PX_8 };
obj11 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
size1 = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size2 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
obj13 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj15 = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
size3 = { flexShrink: 0, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE };
size4 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj16 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj17 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj18 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj19 = { minHeight: 184, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj20 = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
obj21 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj22 = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
size5 = { width: 72, height: 96, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj23 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: nativeDefault.space.PX_12 };
obj24 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_16 = createStyles(obj);
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles((arg0, arg1) => {
  let num = 180;
  const tmp = arg1;
  if (tmp) {
    num = 120;
  }
  return { scaled: { flexBasis: num * arg0 } };
});
size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverCard.tsx");

export default function WaterwheelsDiscoverCard(entry) {
  let obj2;
  const obj = { fallback: null, children: authStore(WaterwheelsDiscoverCardContent, obj2) };
  obj2 = {};
  const ErrorBoundary = entry_data_ErrorBoundary.ErrorBoundary;
  const merged = Object.assign(entry);
  return authStore(ErrorBoundary, obj, entry.entry.key);
};
export { ServerActionButton };
