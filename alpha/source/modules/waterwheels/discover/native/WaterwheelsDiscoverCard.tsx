// Module ID: 17820
// Function ID: 17821
// Name: WaterwheelsDiscoverCard
// Dependencies: [32, 19, 17, 2140, 4784, 1071, 21, 575, 4913, 4776, 504, 17821, 5519, 10051, 5600, 5504, 9755, 7565, 1112, 2643, 5511, 17810, 12471, 5468, 9813, 17822, 7061, 13803, 17541, 7040, 17809, 17808, 2]
// Exports: default

// Module 17820 (WaterwheelsDiscoverCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl7 from "intl" /* 1112 */;
import _modDef2643 from "module_2643" /* 2643 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4776 */;
import Text_Text from "Text/Text" /* 5504 */;
import FastImageDefault from "FastImage" /* 5600 */;
import GameControllerIcon2 from "GameControllerIcon" /* 7040 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10051 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 17541 */;
import entry_data_ErrorBoundary from "entry_data/ErrorBoundary" /* 17808 */;
import WaterwheelsPostCardDefault from "WaterwheelsPostCard" /* 17809 */;
import WaterwheelsSectionLabelDefault from "WaterwheelsSectionLabel" /* 17810 */;
import selectDiscoverServerAction from "selectDiscoverServerAction" /* 17821 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameStore from "GameStore" /* 2140 */;
import GuildStore from "GuildStore" /* 4784 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let map1;
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
let rect;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
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
  let obj = server(5519);
  const fontScale = obj.useFontScale();
  const tmp4 = closure_17();
  const guildId = server.guildId;
  let obj2 = server(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = selectDiscoverServerAction;
    return obj.selectDiscoverServerAction(GuildStore.getGuild(guildId));
  }, items1);
  const OPEN_GUILD = server(10051).WaterwheelsActionType.OPEN_GUILD;
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
    const tmpResult = server(4776);
    result = tmpResult.constructFromPartialGuildRecord(obj3);
  }
  const tmp11 = closure_18(fontScale, flag);
  const tmp13 = closure_13;
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon, ];
    let iconCompact2 = flag;
    const tmp19 = onAction(5600);
    if (flag) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj4 = { accessible: false, style: items2, source: obj6 };
    items2[1] = iconCompact2;
    obj6 = { uri: server.iconUrl };
    tmp14Result4 = tmp17(tmp19, obj4);
    tmp14 = tmp17;
  } else {
    tmp14 = closure_11;
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
  const tmpResult2 = server(5504);
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
    tmp14Result5 = tmp14(onAction(9755), obj12);
  }
  items5[1] = tmp14Result5;
  let tmp14Result6 = null;
  if (stateFromStores === OPEN_GUILD) {
    const obj13 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp(7565).ChevronSmallRightIcon;
    tmp14Result6 = tmp14(ChevronSmallRightIcon, obj13);
  }
  items5[2] = tmp14Result6;
  items6 = [closure_12(closure_7, obj9), ];
  const obj15 = { style: tmp4.metaItem, children: items7 };
  items7 = [, ];
  const obj14 = { style: tmp4.meta, children: items8 };
  const obj16 = { style: tmp4.dot };
  items7[0] = tmp14(closure_7, obj16);
  const obj17 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl.format(server(1112).t["LC+S+m"], obj18) };
  const Text = tmp(5504).Text;
  intl = tmp(1112).intl;
  obj18 = { membersOnline: server.online };
  items7[1] = tmp14(Text, obj17);
  items8 = [closure_12(closure_7, obj15), ];
  let tmp12Result = null;
  if (!flag) {
    const obj20 = { style: items9 };
    items9 = [, ];
    const obj19 = { style: tmp4.metaItem, children: items10 };
    ({ dot: arr10[0], mutedDot: arr10[1] } = tmp4);
    items10 = [tmp14(closure_7, obj20), ];
    const obj21 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl2.format(server(1112).t.zRl6XR, obj22) };
    const Text2 = tmp(5504).Text;
    intl2 = tmp(1112).intl;
    obj22 = { count: server.members };
    items10[1] = tmp14(Text2, obj21);
    tmp12Result = tmp12(tmp20, obj19);
  }
  const obj23 = { children: items4 };
  items8[1] = tmp12Result;
  items6[1] = closure_12(closure_7, obj14);
  items4[1] = closure_12(closure_7, obj8);
  const tmp12Result2 = closure_12(tmp13, obj23);
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
    let flag2 = server.grow;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ joiningGuildIds, onAction: closure_129_1 } = server);
    let stateFromStores;
    let flag3;
    if (joiningGuildIds != null) {
      flag3 = joiningGuildIds.has(server.guildId);
    }
    if (flag3 == null) {
      flag3 = false;
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
    const tmp4 = stateFromStores === guildId(10051).WaterwheelsActionType.OPEN_GUILD;
    const intl = guildId(1112).intl;
    const string = intl.string;
    const t = guildId(1112).t;
    const stringResult = string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
    const intl2 = tmp(1112).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp6 = _modDef2643;
    let obj2 = { guild: server.name };
    let str = "sm";
    const formatToPlainStringResult = formatToPlainString(tmp4 ? tmp6.qGeMEE : tmp6.NOfX8z, obj2);
    const Button = tmp(5511).Button;
    const tmp8 = closure_11;
    if (flag) {
      str = "lg";
    }
    const obj3 = {
      size: str,
      variant,
      grow: flag2,
      text: stringResult,
      accessibilityLabel: formatToPlainStringResult,
      loading: flag3,
      disabled: flag3,
      onPress: function handlePress() {
        let obj2;
        const tmp = flag3;
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
  let ServerIcon;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items2;
  let items3;
  let items7;
  let items8;
  let items9;
  let joiningGuildIds;
  let obj12;
  let obj15;
  let obj26;
  let obj30;
  let obj8;
  let onAction;
  let showSectionLabel;
  let tmp23;
  let tmp23Result2;
  server = server.server;
  const onProfileOpen = server.onProfileOpen;
  ({ showSectionLabel, joiningGuildIds, onAction } = server);
  const tmp = closure_17();
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
  const items = [server.name, , , ];
  const intl = intl7.intl;
  const obj4 = { membersOnline: server.online };
  items[1] = intl.formatToPlainString(intl7.t["LC+S+m"], obj4);
  const intl2 = intl7.intl;
  const obj5 = { count: server.members };
  items[2] = intl2.formatToPlainString(intl7.t.zRl6XR, obj5);
  items[3] = server.description;
  const found = items.filter((item) => null != item && "" !== item);
  const obj6 = { style: items1, children: items2 };
  items1 = [, ];
  ({ serverRow: arr2[0], serverProfile: arr2[1] } = tmp);
  let tmp14 = null;
  const joined = found.join(", ");
  if (showSectionLabel) {
    const obj7 = { icon: unpackModuleId(ServerIcon, obj8), text: intl3.string(_modDef2643["2iP+h2"]) };
    obj8 = { size: "sm", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const tmp17 = WaterwheelsSectionLabelDefault;
    ServerIcon = tmp9(12471).ServerIcon;
    intl3 = tmp9(1112).intl;
    tmp14 = unpackModuleId(tmp17, obj7);
  }
  items2 = [tmp14, ];
  const obj9 = { style: tmp.serverCard, children: items15 };
  const obj10 = {
    accessibilityRole: "button",
    accessibilityLabel: joined,
    accessibilityHint: intl4.string(_modDef2643.nkweXX),
    onPress: function openProfile() {
      onProfileOpen(server);
    },
    children: items3
  };
  intl4 = tmp9(1112).intl;
  let tmp20 = null;
  const tmp18 = hasOwnProperty;
  if (null != server.bannerUrl) {
    const obj11 = { accessible: false, style: tmp.serverBanner, source: obj12, resizeMode: "cover" };
    obj12 = { uri: server.bannerUrl };
    tmp20 = unpackModuleId(tmp19(5600), obj11);
  }
  items3 = [tmp20, ];
  const items4 = [tmp.serverContent, ];
  const obj13 = { style: items4, children: items7 };
  const tmp22 = null == server.bannerUrl && tmp.serverContentWithoutBanner;
  items4[1] = tmp22;
  if (null != server.iconUrl) {
    const items5 = [tmp.serverIcon, ];
    let serverIconOverlap = null != server.bannerUrl;
    const tmp19Result = FastImageDefault;
    if (serverIconOverlap) {
      serverIconOverlap = tmp.serverIconOverlap;
    }
    const obj14 = { accessible: false, style: items5, source: obj15 };
    items5[1] = serverIconOverlap;
    obj15 = { uri: server.iconUrl };
    tmp23Result2 = tmp26(tmp19Result, obj14);
    tmp23 = tmp26;
  } else {
    tmp23 = unpackModuleId;
    const items6 = [tmp.serverIcon, ];
    const obj16 = { style: items6 };
    const tmp24 = null != server.bannerUrl && tmp.serverIconOverlap;
    items6[1] = tmp24;
    tmp23Result2 = tmp23(tmp13, obj16);
  }
  items7 = [tmp23Result2, ];
  const obj19 = { style: tmp.nameRow, children: items8 };
  items8 = [, ];
  const obj17 = { style: tmp.serverCopy, children: items14 };
  const obj18 = { style: tmp.serverTitle, children: items9 };
  const obj20 = { variant: "body-md/medium", color: "text-strong", lineClamp: 1, style: tmp.name, children: server.name };
  items8[0] = tmp23(Text_Text.Text, obj20);
  let tmp23Result = null;
  if (null != result) {
    const obj21 = { guild: result, style: tmp.badge };
    tmp23Result = tmp23(tmp19(9755), obj21);
  }
  items8[1] = tmp23Result;
  items9 = [authStore2(metroImportDefault, obj19), ];
  const obj23 = { style: tmp.metaItem, children: items10 };
  items10 = [, ];
  const obj22 = { style: tmp.meta, children: items11 };
  const obj24 = { style: tmp.dot };
  items10[0] = tmp23(metroImportDefault, obj24);
  const obj25 = { variant: "body-xs/medium", color: "text-subtle", style: tmp.metaText, children: intl5.format(intl7.t["LC+S+m"], obj26) };
  const Text = tmp9(5504).Text;
  intl5 = tmp9(1112).intl;
  obj26 = { membersOnline: server.online };
  items10[1] = tmp23(Text, obj25);
  items11 = [authStore2(metroImportDefault, obj23), ];
  const obj28 = { style: items12 };
  items12 = [, ];
  const obj27 = { style: tmp.metaItem, children: items13 };
  ({ dot: arr13[0], mutedDot: arr13[1] } = tmp);
  items13 = [tmp23(metroImportDefault, obj28), ];
  const obj29 = { variant: "body-xs/medium", color: "text-subtle", style: tmp.metaText, children: intl6.format(intl7.t.zRl6XR, obj30) };
  const Text2 = tmp9(5504).Text;
  intl6 = tmp9(1112).intl;
  obj30 = { count: server.members };
  items13[1] = tmp23(Text2, obj29);
  items11[1] = authStore2(metroImportDefault, obj27);
  items9[1] = authStore2(metroImportDefault, obj22);
  items14 = [authStore2(metroImportDefault, obj18), ];
  let tmp23Result3 = null;
  if (null != server.description) {
    tmp23Result3 = null;
    if ("" !== server.description) {
      const obj31 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: server.description };
      tmp23Result3 = tmp23(tmp9(5504).Text, obj31);
    }
  }
  items14[1] = tmp23Result3;
  items7[1] = authStore2(metroImportDefault, obj17);
  items3[1] = authStore2(metroImportDefault, obj13);
  items15 = [authStore2(tmp18, obj10), ];
  const obj32 = { style: tmp.serverContent, children: tmp23(ServerActionButton, { server, variant: "secondary", grow: true, joiningGuildIds, onAction }) };
  items15[1] = tmp23(metroImportDefault, obj32);
  items2[1] = authStore2(metroImportDefault, obj9);
  return authStore2(metroImportDefault, obj6);
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
  const tmp = closure_17();
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
    const intl = game(onAction[18]).intl;
    let obj = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(width(onAction[19]).mnK52O, obj);
  }
  const items1 = [game.name, formatToPlainStringResult, game.description];
  const found = items1.filter((item) => null != item);
  let obj2 = { style: memo, children: items7 };
  const obj3 = {
    style: tmp.heroBody,
    accessibilityRole: "button",
    accessibilityLabel: found.join(", "),
    accessibilityHint: intl2.string(width(onAction[19]).xH6QTw),
    onPress() {
      let obj2;
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: obj2 };
      obj2 = { game_id: game.gameId };
      return onAction(obj, "identity");
    },
    children: items5
  };
  intl2 = game(onAction[18]).intl;
  let tmp13 = null;
  const obj4 = { style: tmp.heroArt, children: items2 };
  const tmp9 = closure_5;
  if (null != coverUrl) {
    const obj5 = { accessible: false, style: tmp.heroImage, source: obj6, resizeMode: "cover" };
    obj6 = { uri: coverUrl };
    tmp13 = closure_11(tmp12(tmp11[14]), obj5);
  }
  items2 = [tmp13, , ];
  const obj7 = { pointerEvents: "none", colors, style: tmp.heroImage };
  items2[1] = closure_11(width(onAction[23]), obj7);
  let tmp15Result = null;
  const obj8 = { style: tmp.heroTop, children: items3 };
  if (null != game.coverUrl) {
    const obj9 = { accessible: false, style: tmp.cover, source: obj10 };
    obj10 = { uri: game.coverUrl };
    tmp15Result = tmp15(tmp12(tmp11[14]), obj9);
  }
  items3 = [tmp15Result, ];
  let tmp15Result3 = null;
  const obj11 = { style: tmp.heroTitle, children: items4 };
  if (null != game.l30Rank) {
    const obj12 = { style: tmp.heroRank, children: closure_11(width(onAction[24]), obj13) };
    obj13 = { rank: game.l30Rank, compact: true };
    tmp15Result3 = tmp15(tmp8, obj12);
  }
  items4 = [tmp15Result3, ];
  const obj14 = { variant: "heading-md/semibold", color: "text-overlay-light", lineClamp: 2, children: game.name };
  items4[1] = closure_11(game(onAction[15]).Heading, obj14);
  items3[1] = closure_12(closure_7, obj11);
  items2[2] = closure_12(closure_7, obj8);
  items5 = [closure_12(closure_7, obj4), , ];
  let tmp15Result4 = null;
  if (null != game.description) {
    const obj15 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description };
    tmp15Result4 = tmp15(tmp10(tmp11[15]).Text, obj15);
  }
  items5[1] = tmp15Result4;
  let tmp7Result = null;
  if (null == game.server) {
    const obj16 = { style: tmp.heroCta, children: items6 };
    const obj17 = { variant: "body-sm/semibold", color: "text-strong", children: intl3.string(width(onAction[19]).xH6QTw) };
    const Text = tmp10(tmp11[15]).Text;
    intl3 = tmp10(tmp11[18]).intl;
    items6 = [closure_11(Text, obj17), ];
    const obj18 = { size: "xxs", color: width(onAction[7]).colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp10(tmp11[17]).ChevronSmallRightIcon;
    items6[1] = closure_11(ChevronSmallRightIcon, obj18);
    tmp7Result = tmp7(tmp8, obj16);
  }
  items5[2] = tmp7Result;
  items7 = [closure_12(tmp9, obj3), ];
  let tmp7Result2 = null;
  if (null != game.server) {
    const obj19 = { style: tmp.heroServer, children: items8 };
    const obj20 = { server: game.server, compact: true, onAction };
    items8 = [closure_11(ServerIdentity, obj20), ];
    const obj21 = { server: game.server, variant: "secondary", joiningGuildIds, onAction };
    items8[1] = closure_11(ServerActionButton, obj21);
    tmp7Result2 = tmp7(tmp8, obj19);
  }
  items7[1] = tmp7Result2;
  return closure_12(closure_7, obj2);
}
function GamePoster(game) {
  let Badge;
  let intl2;
  let intl3;
  let items3;
  let obj6;
  let obj7;
  let obj8;
  game = game.game;
  const onAction = game.onAction;
  const tmp = closure_17();
  let obj = game(504);
  const items = [GameStore];
  const items1 = [game.gameId];
  let formatToPlainStringResult = null;
  const stateFromStores = obj.useStateFromStores(items, () => GameStore.getGame(game.gameId), items1);
  if (null != game.l30Rank) {
    const intl = tmp2(1112).intl;
    let obj2 = { rank: game.l30Rank };
    formatToPlainStringResult = intl.formatToPlainString(onAction(2643).mnK52O, obj2);
  }
  const items2 = [game.name, formatToPlainStringResult, game.description];
  const found = items2.filter((item) => null != item);
  const obj3 = {
    style: tmp.poster,
    accessibilityRole: "button",
    accessibilityLabel: found.join(", "),
    accessibilityHint: intl2.string(onAction(2643).xH6QTw),
    onPress() {
      let obj2;
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: obj2 };
      obj2 = { game_id: game.gameId };
      return onAction(obj, "identity");
    },
    children: items3
  };
  intl2 = tmp2(1112).intl;
  items3 = [, ];
  const obj4 = { gameId: game.gameId, name: game.name, coverUrl: game.coverUrl, iconGame: stateFromStores, width: 114, aspectRatio: 0.6909090909090909 };
  items3[0] = closure_11(game(17822).GameCoverFromURLs, obj4);
  let tmp9Result = null;
  const tmp7 = closure_12;
  const tmp8 = closure_5;
  if (null != game.l30Rank) {
    const obj5 = { style: tmp.posterRank, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_11(Badge, obj6) };
    obj6 = { type: obj7, variant: "inverted", icon: game(13803).FireIcon };
    obj7 = { text: intl3.formatToPlainString(game(1112).t.UA6RoE, obj8) };
    Badge = tmp2(7061).Badge;
    intl3 = tmp2(1112).intl;
    obj8 = { rank: game.l30Rank };
    tmp9Result = tmp9(closure_7, obj5);
  }
  items3[1] = tmp9Result;
  return tmp7(tmp8, obj3);
}
function CarouselCard(arg0) {
  let GameControllerIcon;
  let _undefined;
  let c2;
  let carousel;
  let diff;
  let items;
  let items1;
  let joiningGuildIds;
  let obj3;
  let onAction;
  let tmp6;
  ({ carousel, joiningGuildIds: require, onAction: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_17();
  let tmp4 = useChannelListWidthDefault();
  [tmp6, c2] = _slicedToArray(react.useState(null), 2);
  const tmp5 = _slicedToArray(react.useState(null), 2);
  if (diff == null) {
    diff = tmp4 - 2 * PX_16;
  }
  let num = 0;
  if (carousel.items.length > 1) {
    num = PX_64;
  }
  _slicedToArray = Math.max(0, diff - num);
  let obj = { style: tmp.carouselSection, children: items };
  let obj2 = { icon: closure_11(GameControllerIcon, obj3), text: carousel.header.title };
  obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED, accessible: false };
  const tmp2Result = WaterwheelsSectionLabelDefault;
  GameControllerIcon = GameControllerIcon2.GameControllerIcon;
  items = [closure_11(tmp2Result, obj2), ];
  const obj4 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      width = nativeEvent.nativeEvent.layout.width;
      if (width > 0) {
        _undefined(width);
      }
    },
    contentContainerStyle: tmp.carouselContent,
    children: items1.map((server) => {
      let tmp4;
      if (null != server.server) {
        const obj2 = { game: server, width, joiningGuildIds: require, onAction: importDefault };
        tmp4 = unpackModuleId(GameHero, obj2, server.gameId);
      } else {
        const obj = { game: server, onAction: importDefault };
        tmp4 = unpackModuleId(GamePoster, obj, server.gameId);
      }
      return tmp4;
    })
  };
  items1 = carousel.items;
  items[1] = closure_11(closure_6, obj4);
  return closure_12(closure_7, obj);
}
function WaterwheelsDiscoverCardContent(entry) {
  let joiningGuildIds;
  let obj4;
  let onAction;
  entry = entry.entry;
  ({ joiningGuildIds, onAction } = entry);
  const onProfileOpen = entry.onProfileOpen;
  const showServerSectionLabel = entry.showServerSectionLabel;
  const card = entry.card;
  const layout = card.layout;
  const items = [entry, onAction];
  const tmp = closure_17();
  const callback = react.useCallback((arg0, arg1) => onAction(entry, arg0, arg1), items);
  const items1 = [entry, onProfileOpen];
  const type = layout.type;
  if ("server_row" === type) {
    const obj2 = { server: layout, showSectionLabel: showServerSectionLabel, joiningGuildIds, onAction: callback, onProfileOpen: tmp3 };
    return unpackModuleId(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, joiningGuildIds, onAction: callback };
    return unpackModuleId(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { style: tmp.row, children: unpackModuleId(WaterwheelsPostCardDefault, obj4) };
    obj4 = {
      post: layout,
      discoverSectionLabel: true,
      action: card.actions[0],
      onAction(arg0) {
          return callback(arg0, "button");
        }
    };
    return unpackModuleId(metroImportDefault, obj);
  }
}
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const PX_64 = nativeDefault.space.PX_64;
const PX_10 = nativeDefault.space.PX_10;
const PX_16 = nativeDefault.space.PX_16;
const colors = ["rgba(0,0,0,0.65)", "rgba(0,0,0,0.85)"];
let createStyles = createStyles_mod;
let obj = { row: obj2, carouselSection: obj3, carouselContent: { gap: PX_10 }, poster: size, posterRank: rect, serverRow: obj4, serverProfile: obj5, serverCard: obj6, serverBanner: { height: 111, width: "100%" }, serverContent: obj7, serverContentWithoutBanner: obj8, serverIcon: size1, serverIconOverlap: { marginTop: -30 }, serverCopy: obj9, serverTitle: obj10, badge: size2, identity: { flex: 1, flexDirection: "row", alignItems: "center", gap: PX_12, minWidth: 0 }, identityCompact: obj11, identityCopy: obj12, nameRow: obj13, name: { flexShrink: 1 }, icon: size3, iconCompact: size4, meta: obj14, metaItem: obj15, metaText: { flexShrink: 1 }, dot: size5, mutedDot: obj16, hero: obj17, heroBody: obj18, heroArt: obj19, heroImage: StyleSheet.absoluteFillObject, heroTop: obj20, heroTitle: obj21, heroRank: obj22, cover: size6, heroCta: obj23, heroServer: obj24 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
size = { width: 114, height: 165, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
obj6 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
obj7 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj8 = { paddingTop: nativeDefault.space.PX_12 };
size1 = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.md, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { gap: nativeDefault.space.PX_12 };
obj10 = { gap: nativeDefault.space.PX_4 };
size2 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj11 = { gap: nativeDefault.space.PX_8 };
obj12 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
size3 = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size4 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
obj14 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj15 = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
size5 = { flexShrink: 0, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE };
obj16 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj17 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj18 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj19 = { minHeight: 184, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj20 = { flexDirection: "row", alignItems: "flex-end", gap: nativeDefault.space.PX_12 };
obj21 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj22 = { flexDirection: "row", minHeight: 20, marginBottom: nativeDefault.space.PX_4 };
size6 = { width: 72, height: 96, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj23 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: nativeDefault.space.PX_12 };
obj24 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles((arg0, arg1) => {
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
  const obj = { fallback: null, children: unpackModuleId(WaterwheelsDiscoverCardContent, obj2) };
  obj2 = {};
  const ErrorBoundary = entry_data_ErrorBoundary.ErrorBoundary;
  const merged = Object.assign(entry);
  return unpackModuleId(ErrorBoundary, obj, entry.entry.key);
};
export { ServerActionButton };
