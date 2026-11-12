// Module ID: 18884
// Function ID: 18885
// Name: WaterwheelsDiscoverCard
// Dependencies: [32, 19, 17, 5114, 1072, 21, 575, 5243, 5881, 504, 18885, 10156, 5957, 5866, 7657, 7897, 1113, 2553, 5873, 18879, 2]
// Exports: default

// Module 18884 (WaterwheelsDiscoverCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5866 */;
import FastImageDefault from "FastImage" /* 5957 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10156 */;
import entry_data_ErrorBoundary from "entry_data/ErrorBoundary" /* 18879 */;
import selectDiscoverServerAction from "selectDiscoverServerAction" /* 18885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 5114 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

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
let obj2;
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
let tmp5;
let unpackModuleId;
const components_Button_Button = tmp5(5873);
function ServerIdentity(server) {
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items5;
  let items7;
  let items8;
  let items9;
  let obj18;
  let obj22;
  let obj4;
  let tmp9;
  let tmp9Result;
  let tmp9Result4;
  let tmp9Result7;
  server = server.server;
  let flag = server.compact;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = server.onAction;
  let obj = server(5881);
  const fontScale = obj.useFontScale();
  const tmp4 = closure_15();
  let obj2 = server(504);
  const items = [GuildStore];
  const items1 = [server.guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = selectDiscoverServerAction;
    const discoverServerAction = obj.selectDiscoverServerAction(GuildStore.getGuild(server.guildId));
    return discoverServerAction === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD;
  }, items1);
  let identityCompact = flag;
  const tmp6 = closure_16(fontScale, flag);
  const tmp8 = closure_12;
  if (null != server.iconUrl) {
    const items2 = [tmp4.icon, ];
    let iconCompact2 = identityCompact;
    const tmp14 = onAction(5957);
    if (identityCompact) {
      iconCompact2 = tmp4.iconCompact;
    }
    const obj3 = { style: items2, source: obj4 };
    items2[1] = iconCompact2;
    obj4 = { uri: server.iconUrl };
    tmp9Result4 = tmp12(tmp14, obj3);
    tmp9 = tmp12;
  } else {
    tmp9 = closure_10;
    const items3 = [tmp4.icon, ];
    let iconCompact = identityCompact;
    const tmp10 = closure_7;
    if (identityCompact) {
      iconCompact = tmp4.iconCompact;
    }
    const obj5 = { style: items3 };
    items3[1] = iconCompact;
    tmp9Result4 = tmp9(tmp10, obj5);
  }
  const items4 = [tmp9Result4, ];
  const obj6 = { style: tmp4.identityCopy, children: items8 };
  const obj7 = { style: tmp4.nameRow, children: items5 };
  const tmpResult = server(5866);
  if (identityCompact) {
    const obj8 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp9Result = tmp9(tmpResult.Text, obj8);
  } else {
    const obj9 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: 1, style: tmp4.name, children: server.name };
    tmp9Result = tmp9(tmpResult.Heading, obj9);
  }
  items5 = [tmp9Result, , ];
  let tmp9Result5 = null;
  if (server.verified) {
    const obj11 = { id: null, name: null, icon: null, features: items7, approximate_member_count: null, approximate_presence_count: null };
    ({ guildId: obj10.id, name: obj10.name, iconUrl: obj10.icon } = server);
    const tmp19 = onAction;
    const tmp20 = onAction(7657);
    if (server.verified) {
      const items6 = [GuildFeatures.VERIFIED];
      items7 = items6;
    } else {
      items7 = [];
    }
    ({ members: obj10.approximate_member_count, online: obj10.approximate_presence_count } = server);
    const obj12 = { guild: obj11, size: tmp19(7657).Sizes.REFRESH_SMALL_16 };
    tmp9Result5 = tmp9(tmp20, obj12);
  }
  items5[1] = tmp9Result5;
  let tmp9Result6 = null;
  if (stateFromStores) {
    const obj13 = { size: "xxs", color: onAction(575).colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp(7897).ChevronSmallRightIcon;
    tmp9Result6 = tmp9(ChevronSmallRightIcon, obj13);
  }
  items5[2] = tmp9Result6;
  items8 = [closure_11(closure_7, obj7), ];
  const obj15 = { style: tmp4.metaItem, children: items9 };
  items9 = [, ];
  const obj14 = { style: tmp4.meta, children: items10 };
  const obj16 = { style: tmp4.dot };
  items9[0] = tmp9(closure_7, obj16);
  const obj17 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl.format(server(1113).t["LC+S+m"], obj18) };
  const Text = tmp(5866).Text;
  intl = tmp(1113).intl;
  obj18 = { membersOnline: server.online };
  items9[1] = tmp9(Text, obj17);
  items10 = [closure_11(closure_7, obj15), ];
  let tmp7Result = null;
  if (!identityCompact) {
    const obj20 = { style: items11 };
    items11 = [, ];
    const obj19 = { style: tmp4.metaItem, children: items12 };
    ({ dot: arr12[0], mutedDot: arr12[1] } = tmp4);
    items12 = [tmp9(closure_7, obj20), ];
    const obj21 = { variant: "body-xs/medium", color: "text-subtle", style: tmp4.metaText, children: intl2.format(server(1113).t.zRl6XR, obj22) };
    const Text2 = tmp(5866).Text;
    intl2 = tmp(1113).intl;
    obj22 = { count: server.members };
    items12[1] = tmp9(Text2, obj21);
    tmp7Result = tmp7(tmp15, obj19);
  }
  const obj23 = { children: items4 };
  items10[1] = tmp7Result;
  items8[1] = closure_11(closure_7, obj14);
  items4[1] = closure_11(closure_7, obj6);
  const tmp7Result2 = closure_11(tmp8, obj23);
  const items13 = [tmp4.identity, tmp6.scaled, ];
  if (identityCompact) {
    identityCompact = tmp4.identityCompact;
  }
  items13[2] = identityCompact;
  if (stateFromStores) {
    const obj24 = {
      accessibilityRole: "link",
      accessibilityLabel: server.name,
      onPress() {
          let obj2;
          const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: obj2 };
          obj2 = { guild_id: server.guildId };
          return onAction(obj, "identity");
        },
      style: items13,
      children: tmp7Result2
    };
    tmp9Result7 = tmp9(closure_5, obj24);
  } else {
    const obj46 = { style: items13, children: tmp7Result2 };
    tmp9Result7 = tmp9(tmp15, obj46);
  }
  return tmp9Result7;
}
function ServerActionButton(server) {
  server = server.server;
  const onAction = server.onAction;
  let stateFromStores;
  const variant = server.variant;
  let obj = server(stateFromStores[9]);
  const items = [GuildStore];
  const items1 = [server.guildId];
  stateFromStores = obj.useStateFromStores(items, () => {
    const obj = selectDiscoverServerAction;
    return obj.selectDiscoverServerAction(GuildStore.getGuild(server.guildId));
  }, items1);
  const tmp4 = stateFromStores === server(stateFromStores[11]).WaterwheelsActionType.OPEN_GUILD;
  const intl = server(stateFromStores[16]).intl;
  const string = intl.string;
  const t = server(stateFromStores[16]).t;
  let formatToPlainStringResult;
  const stringResult = string(tmp4 ? t["HO/oXl"] : t.VJlc0S);
  if (!tmp4) {
    const intl2 = tmp(tmp2[16]).intl;
    let obj2 = { guild: server.name };
    formatToPlainStringResult = intl2.formatToPlainString(onAction(tmp2[17]).NOfX8z, obj2);
  }
  const obj3 = {
    size: "sm",
    variant,
    text: stringResult,
    accessibilityLabel: formatToPlainStringResult,
    onPress: function handlePress() {
      let obj2;
      const obj = { type: stateFromStores, value: obj2 };
      obj2 = { guild_id: server.guildId };
      onAction(obj, "button");
    }
  };
  return closure_10(server(stateFromStores[18]).Button, obj3);
}
function ServerRowCard(arg0) {
  let items;
  let obj2;
  let onAction;
  let server;
  ({ server, onAction } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.row, children: unpackModuleId(metroImportDefault, obj2) };
  obj2 = { style: tmp.identityRow, children: items };
  items = [authStore(ServerIdentity, { server, onAction }), authStore(ServerActionButton, { server, variant: "primary", onAction })];
  return authStore(metroImportDefault, obj);
}
function GameHero(game) {
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj6;
  let obj9;
  game = game.game;
  const width = game.width;
  const onAction = game.onAction;
  const tmp = closure_15();
  const hero = tmp;
  let items = [tmp.hero, width];
  let obj = {
    style: react.useMemo(() => {
      const items = [hero.hero, ];
      const obj = { width };
      items[1] = obj;
      return items;
    }, items),
    children: items4
  };
  let obj2 = {
    style: tmp.heroBody,
    accessibilityRole: "button",
    accessibilityLabel: game.name,
    onPress() {
      let obj2;
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME, value: obj2 };
      obj2 = { game_id: game.gameId };
      return onAction(obj, "identity");
    },
    children: items3
  };
  const obj3 = { style: tmp.heroTop, children: items2 };
  const obj4 = { style: tmp.heroTitle, children: items1 };
  const obj5 = { variant: "display-lg", color: "text-strong", accessibilityLabel: intl.formatToPlainString(width(onAction[17]).mnK52O, obj6), children: game.rank };
  const Text = game(onAction[13]).Text;
  intl = game(onAction[16]).intl;
  obj6 = { rank: game.rank };
  items1 = [closure_10(Text, obj5), ];
  const obj7 = { variant: "heading-md/semibold", color: "text-strong", lineClamp: 2, children: game.name };
  items1[1] = closure_10(game(onAction[13]).Heading, obj7);
  items2 = [closure_11(closure_7, obj4), ];
  let tmp5Result = null;
  const tmp4 = closure_5;
  const tmp6 = game;
  const tmp8 = width;
  if (null != game.coverUrl) {
    const obj8 = { style: tmp.cover, source: obj9 };
    obj9 = { uri: game.coverUrl };
    tmp5Result = tmp5(tmp8(tmp7[12]), obj8);
  }
  items2[1] = tmp5Result;
  items3 = [closure_11(closure_7, obj3), ];
  const obj10 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: game.description };
  items3[1] = closure_10(tmp6(onAction[13]).Text, obj10);
  items4 = [closure_11(tmp4, obj2), ];
  let tmp2Result = null;
  if (null != game.server) {
    const obj11 = { style: tmp.heroServer, children: items5 };
    const obj12 = { server: game.server, compact: true, onAction };
    items5 = [closure_10(ServerIdentity, obj12), ];
    const obj13 = { server: game.server, variant: "secondary", onAction };
    items5[1] = closure_10(ServerActionButton, obj13);
    tmp2Result = tmp2(tmp3, obj11);
  }
  items4[1] = tmp2Result;
  return closure_11(closure_7, obj);
}
function CarouselCard(arg0) {
  let _undefined;
  let c1;
  let carousel;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let onAction;
  let tmp3;
  ({ carousel, onAction: require } = arg0);
  importDefault = undefined;
  const tmp = closure_15();
  [tmp3, c1] = react.useState(null);
  let num = 309;
  _slicedToArray(react.useState(null), 2);
  if (null != tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(240, Math.min(309, tmp3 - closure_13 - PX_32));
  }
  let obj = { style: tmp.carouselSection, children: items2 };
  let tmp9 = null;
  const obj2 = { style: tmp.carouselHeader, children: items };
  if (null != carousel.header.iconUrl) {
    const obj3 = { style: tmp.icon, source: obj4 };
    obj4 = { uri: carousel.header.iconUrl };
    tmp9 = closure_10(require("FastImage"), obj3);
  }
  items = [tmp9, ];
  const obj5 = { style: tmp.identityCopy, children: items1 };
  items1 = [, ];
  const obj6 = { variant: "heading-sm/semibold", color: "text-strong", children: carousel.header.title };
  items1[0] = closure_10(require("Text/Text").Heading, obj6);
  const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: carousel.header.subtitle };
  items1[1] = closure_10(require("Text/Text").Text, obj7);
  items[1] = closure_11(closure_7, obj5);
  items2 = [closure_11(closure_7, obj2), ];
  const obj8 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    onLayout: function handleLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.width);
    },
    contentContainerStyle: tmp.carouselContent,
    children: items3.map((game) => {
      const obj = { game, width: num, onAction: require };
      return authStore(GameHero, obj, game.gameId);
    })
  };
  items3 = carousel.items;
  items2[1] = closure_10(closure_6, obj8);
  return closure_11(closure_7, obj);
}
function PostCard(onAction) {
  let action;
  let items;
  let obj5;
  let obj7;
  let post;
  ({ post, action } = onAction);
  onAction = onAction.onAction;
  const tmp = closure_15();
  const obj = { style: tmp.row, children: items };
  items = [, , , ];
  const obj2 = { variant: "heading-sm/semibold", color: "text-strong", children: post.title };
  items[0] = authStore(Text_Text.Heading, obj2);
  const obj3 = { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body };
  items[1] = authStore(Text_Text.Text, obj3);
  let tmp4Result = null;
  const tmp2 = unpackModuleId;
  if (null != post.imageUrl) {
    const obj4 = { style: tmp.media, source: obj5 };
    obj5 = { uri: post.imageUrl };
    tmp4Result = tmp4(FastImageDefault, obj4);
  }
  items[2] = tmp4Result;
  let tmp4Result2 = null;
  if (null != action) {
    tmp4Result2 = null;
    if (null != post.actionLabel) {
      const obj6 = { style: tmp.postAction, children: authStore(components_Button_Button.Button, obj7) };
      obj7 = {
        size: "sm",
        variant: "primary",
        text: post.actionLabel,
        onPress() {
              return onAction(action, "button");
            }
      };
      tmp4Result2 = tmp4(tmp3, obj6);
    }
  }
  items[3] = tmp4Result2;
  return tmp2(metroImportDefault, obj);
}
function WaterwheelsDiscoverCardContent(entry) {
  entry = entry.entry;
  const onAction = entry.onAction;
  const card = entry.card;
  const layout = card.layout;
  const items = [entry, onAction];
  const callback = react.useCallback((arg0, arg1) => onAction(entry, arg0, arg1), items);
  const type = layout.type;
  if ("server_row" === type) {
    const obj2 = { server: layout, onAction: callback };
    return authStore(ServerRowCard, obj2);
  } else if ("carousel" === type) {
    const obj3 = { carousel: layout, onAction: callback };
    return authStore(CarouselCard, obj3);
  } else if ("post" === type) {
    const obj = { post: layout, action: card.actions[0], onAction: callback };
    return authStore(PostCard, obj);
  }
}
({ Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const sum = PX_40 + PX_12;
const PX_32 = nativeDefault.space.PX_32;
let createStyles = createStyles_mod;
let obj = { row: obj2, carouselSection: obj3, carouselHeader: obj4, carouselContent: obj5, identityRow: obj6, identity: { flex: 1, flexDirection: "row", alignItems: "center", gap: PX_12, minWidth: 0 }, identityCompact: obj7, identityCopy: obj8, nameRow: obj9, name: { flexShrink: 1 }, icon: size, iconCompact: size1, meta: obj10, metaItem: obj11, metaText: { flexShrink: 1 }, dot: size2, mutedDot: obj12, hero: obj13, heroBody: obj14, heroTop: obj15, heroTitle: obj16, cover: size3, heroServer: obj17, media: obj18, postAction: { alignSelf: "flex-start" } };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: PX_12, paddingRight: nativeDefault.space.PX_16 };
obj5 = { paddingTop: nativeDefault.space.PX_4, paddingLeft: sum, paddingRight: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_8 };
obj8 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, minWidth: 0 };
size = { width: PX_40, height: PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
obj10 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj11 = { flexDirection: "row", maxWidth: "100%", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_4 };
size2 = { flexShrink: 0, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_STATUS_ONLINE };
obj12 = { backgroundColor: nativeDefault.colors.ICON_STATUS_OFFLINE };
obj13 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj14 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj15 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj16 = { flex: 1, justifyContent: "space-between", gap: nativeDefault.space.PX_8, minWidth: 0 };
size3 = { width: 105, height: 140, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj17 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj18 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_15 = createStyles(obj);
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles((arg0, arg1) => {
  let num = 180;
  const tmp = arg1;
  if (tmp) {
    num = 120;
  }
  return { scaled: { flexBasis: num * arg0 } };
});
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverCard.tsx");

export default function WaterwheelsDiscoverCard(entry) {
  let obj2;
  const obj = { fallback: null, children: authStore(WaterwheelsDiscoverCardContent, obj2) };
  obj2 = {};
  const ErrorBoundary = entry_data_ErrorBoundary.ErrorBoundary;
  const merged = Object.assign(entry);
  return authStore(ErrorBoundary, obj, entry.entry.key);
};
