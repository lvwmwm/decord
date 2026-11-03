// Module ID: 18716
// Function ID: 18717
// Name: WaterwheelsCard
// Dependencies: [19, 17, 14104, 1072, 8064, 21, 5141, 575, 504, 5837, 5747, 5754, 9056, 7087, 1113, 7498, 2]
// Exports: WaterwheelsCard, getWaterwheelsCardEligible, useWaterwheelsCardEligible

// Module 18716 (WaterwheelsCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5747 */;
import FastImageDefault from "FastImage" /* 5837 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8064 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 9056 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14104 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let obj10;
let obj11;
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
function WaterwheelsServerRowRenderer(server) {
  let intl;
  let intl2;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj16;
  let obj20;
  let obj4;
  let tmp5;
  let tmp6;
  server = server.server;
  const onAction = server.onAction;
  const tmp = closure_11();
  const joined = server.joined;
  let obj = { style: tmp.row, children: items9 };
  let obj2 = {
    accessibilityRole: "link",
    accessibilityLabel: server.name,
    accessibilityState: { disabled: !joined },
    disabled: !joined,
    onPress: function open() {
      let obj2;
      const obj = { type: WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD, value: obj2 };
      obj2 = { guild_id: server.guildId };
      return onAction(obj);
    },
    style: tmp.identity,
    children: items
  };
  const tmp4 = closure_3;
  if (null != server.iconUrl) {
    const obj3 = { style: tmp.icon, source: obj4 };
    obj4 = { uri: server.iconUrl };
    tmp6 = closure_9(onAction(joined[9]), obj3);
    tmp5 = closure_9;
  } else {
    tmp5 = closure_9;
    const obj5 = { style: tmp.icon };
    tmp6 = closure_9(tmp3, obj5);
  }
  items = [tmp6, , ];
  let tmp5Result = null;
  const obj6 = { style: tmp.copy, children: items4 };
  const obj7 = { style: tmp.row, children: items3 };
  if (server.verified) {
    const obj9 = { id: null, name: null, icon: null, features: items2, approximate_member_count: null, approximate_presence_count: null };
    ({ guildId: obj8.id, name: obj8.name, iconUrl: obj8.icon } = server);
    const tmp11 = onAction;
    const tmp12 = joined;
    const tmp13 = onAction(joined[13]);
    if (server.verified) {
      const items1 = [GuildFeatures.VERIFIED];
      items2 = items1;
    } else {
      items2 = [];
    }
    ({ members: obj8.approximate_member_count, online: obj8.approximate_presence_count } = server);
    const obj10 = { guild: obj9, size: tmp11(tmp12[13]).Sizes.REFRESH_SMALL_16, disableColor: true };
    tmp5Result = tmp5(tmp13, obj10);
  }
  items3 = [tmp5Result, ];
  const obj11 = { variant: "text-md/semibold", lineClamp: 1, children: server.name };
  items3[1] = tmp5(server(joined[10]).Text, obj11);
  items4 = [closure_10(closure_5, obj7), ];
  let tmp2Result = null;
  const obj12 = { style: tmp.serverMeta, children: items6 };
  if (null != server.online) {
    const obj13 = { style: tmp.row, children: items5 };
    const obj14 = { style: tmp.dot };
    items5 = [tmp5(closure_5, obj14), ];
    const obj15 = { variant: "text-xs/medium", children: intl.format(server(joined[14]).t["LC+S+m"], obj16) };
    const Text = tmp15(tmp16[10]).Text;
    intl = tmp15(tmp16[14]).intl;
    obj16 = { membersOnline: server.online };
    items5[1] = tmp5(Text, obj15);
    tmp2Result = tmp2(tmp3, obj13);
  }
  items6 = [tmp2Result, ];
  let tmp2Result2 = null;
  if (null != server.members) {
    const obj18 = { style: items7 };
    items7 = [, ];
    const obj17 = { style: tmp.row, children: items8 };
    ({ dot: arr8[0], mutedDot: arr8[1] } = tmp);
    items8 = [tmp5(closure_5, obj18), ];
    const obj19 = { variant: "text-xs/medium", children: intl2.format(server(joined[14]).t.zRl6XR, obj20) };
    const Text2 = tmp15(tmp16[10]).Text;
    intl2 = tmp15(tmp16[14]).intl;
    obj20 = { count: server.members };
    items8[1] = tmp5(Text2, obj19);
    tmp2Result2 = tmp2(tmp3, obj17);
  }
  items6[1] = tmp2Result2;
  items4[1] = closure_10(closure_5, obj12);
  items[1] = closure_10(closure_5, obj6);
  let tmp5Result2 = null;
  if (joined) {
    const obj21 = { size: "md", color: onAction(joined[7]).colors.INTERACTIVE_MUTED };
    const ChevronSmallRightIcon = tmp15(tmp16[15]).ChevronSmallRightIcon;
    tmp5Result2 = tmp5(ChevronSmallRightIcon, obj21);
  }
  items[2] = tmp5Result2;
  items9 = [closure_10(tmp4, obj2), ];
  const Button = tmp15(tmp16[11]).Button;
  const intl3 = tmp15(tmp16[14]).intl;
  const string = intl3.string;
  const t = tmp15(tmp16[14]).t;
  const obj41 = {
    size: "sm",
    variant: "secondary",
    text: string(joined ? t["HO/oXl"] : t.VJlc0S),
    onPress() {
      let obj2;
      const WaterwheelsActionType = WaterwheelsCardTypes.WaterwheelsActionType;
      const obj = { type: joined ? WaterwheelsActionType.OPEN_GUILD : WaterwheelsActionType.JOIN_GUILD, value: obj2 };
      obj2 = { guild_id: server.guildId };
      return onAction(obj);
    }
  };
  items9[1] = tmp5(Button, obj41);
  return closure_10(closure_5, obj);
}
({ Pressable: c3, ScrollView: closure_4, View: hasOwnProperty } = react_native);
const GuildFeatures = Constants.GuildFeatures;
const constants = NativePermissionConstants.NotificationAuthorizationStatus;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, row: obj3, identity: obj4, copy: obj5, icon: size, media: obj6, game: obj7, hero: obj8, serverMeta: obj9, dot: size1, mutedDot: obj10, rail: obj11 };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj6 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj7 = { width: 280, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { height: 144, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size1 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj10 = { backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
obj11 = { gap: nativeDefault.space.PX_12 };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsCard.tsx");

export function getWaterwheelsCardEligible(clientEligibility, stateFromStores) {
  let authorizationStatus = stateFromStores;
  if (stateFromStores === undefined) {
    authorizationStatus = PushNotificationPermissionStore.authorizationStatus;
  }
  let tmp2 = "notifications_permission" !== clientEligibility.clientEligibility;
  if (!tmp2) {
    tmp2 = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
  }
  return tmp2;
}
export function useWaterwheelsCardEligible(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  return obj.useStateFromStores([], () => {
    authorizationStatus = authorizationStatus.authorizationStatus;
    let tmp = "notifications_permission" !== card.clientEligibility;
    if (!tmp) {
      tmp = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    }
    return tmp;
  });
}
export function WaterwheelsCard(card) {
  let game;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj3;
  let obj7;
  card = card.card;
  const onAction = card.onAction;
  let first;
  function handleAction(arg0) {
    onAction(arg0, card);
  }
  let tmp = closure_11();
  dependencyMap = tmp;
  let tmp2 = card;
  let tmp3 = dependencyMap;
  let obj = card(504);
  if (obj.useStateFromStores([], () => {
    authorizationStatus = authorizationStatus.authorizationStatus;
    let tmp = "notifications_permission" !== card.clientEligibility;
    if (!tmp) {
      tmp = authorizationStatus === constants.UNDETERMINED || authorizationStatus === constants.DENIED;
    }
    return tmp;
  })) {
    const layout = card.layout;
    if ("server_row" === layout.type) {
      let obj2 = { style: tmp.card, children: closure_9(WaterwheelsServerRowRenderer, obj3) };
      obj3 = { server: layout, onAction: handleAction };
      return closure_9(closure_5, obj2);
    } else if ("carousel" === layout.type) {
      let obj4 = { style: tmp.card, children: items2 };
      let obj5 = { style: tmp.row, children: items };
      let tmp10 = null;
      if (null != layout.header.iconUrl) {
        let obj6 = { style: tmp.icon, source: obj7 };
        obj7 = { uri: layout.header.iconUrl };
        tmp10 = closure_9(onAction(5837), obj6);
      }
      items = [tmp10, ];
      const obj8 = { children: items1 };
      const obj9 = { variant: "heading-sm/semibold", children: layout.header.title };
      items1 = [closure_9(tmp2(5747).Heading, obj9), ];
      const obj10 = { variant: "text-sm/normal", children: layout.header.subtitle };
      items1[1] = closure_9(tmp2(5747).Text, obj10);
      items[1] = closure_10(closure_5, obj8);
      items2 = [tmp8(closure_5, obj5), ];
      const obj11 = {
        horizontal: true,
        contentContainerStyle: tmp.rail,
        children: items3.map((children) => {
              let items;
              let obj4;
              const obj = { style: game.game, children: items };
              items = [, , , , ];
              const obj2 = { variant: "text-xs/medium", children: children.rank };
              items[0] = React4(Text_Text.Text, obj2);
              let tmp4Result = null;
              const tmp = authStore;
              const tmp2 = hasOwnProperty;
              const tmp3 = game;
              if (null != children.coverUrl) {
                const obj3 = { style: tmp3.hero, source: obj4 };
                obj4 = { uri: children.coverUrl };
                tmp4Result = tmp4(FastImageDefault, obj3);
              }
              items[1] = tmp4Result;
              const obj5 = { variant: "heading-md/semibold", children: children.name };
              items[2] = React4(Text_Text.Heading, obj5);
              const obj6 = { variant: "text-sm/normal", children: children.description };
              items[3] = React4(Text_Text.Text, obj6);
              let tmp4Result2 = null;
              if (null != children.server) {
                const obj7 = { server: children.server, onAction: handleAction };
                tmp4Result2 = tmp4(WaterwheelsServerRowRenderer, obj7);
              }
              items[4] = tmp4Result2;
              return tmp(tmp2, obj, children.gameId);
            })
      };
      items3 = layout.items;
      items2[1] = closure_9(first, obj11);
      return closure_10(closure_5, obj4);
    } else {
      first = card.actions[0];
      const obj12 = { style: tmp.card, children: items4 };
      const obj13 = { variant: "heading-md/semibold", children: layout.title };
      items4 = [closure_9(tmp2(5747).Heading, obj13), , , ];
      const obj14 = { variant: "text-md/normal", children: layout.body };
      items4[1] = closure_9(tmp2(5747).Text, obj14);
      let tmp21Result = null;
      const tmp19 = closure_10;
      const tmp20 = closure_5;
      if (null != layout.imageUrl) {
        const obj15 = { style: tmp.media, source: obj16 };
        obj16 = { uri: layout.imageUrl };
        tmp21Result = tmp21(onAction(5837), obj15);
      }
      items4[2] = tmp21Result;
      let tmp21Result2 = null;
      if (null != first) {
        tmp21Result2 = null;
        if (null != layout.actionLabel) {
          const obj17 = {
            text: layout.actionLabel,
            onPress() {
                      onAction(first, card);
                    }
          };
          tmp21Result2 = tmp21(tmp2(5754).Button, obj17);
        }
      }
      items4[3] = tmp21Result2;
      return tmp19(tmp20, obj12);
    }
  } else {
    const tmp4 = null;
    return null;
  }
}
