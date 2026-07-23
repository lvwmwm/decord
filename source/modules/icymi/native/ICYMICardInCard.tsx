// Module ID: 15220
// Function ID: 116031
// Name: truncateUsername
// Dependencies: [31, 27, 1348, 1917, 1838, 653, 33, 15179, 689, 7873, 5515, 1273, 4549, 566, 4361, 8516, 4319, 4126, 4320, 15221, 1212, 4638, 15219, 4660, 6884, 8968, 2]
// Exports: default

// Module 15220 (truncateUsername)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
}
function CutoutGuildIconWithUserCustom(guild) {
  guild = guild.guild;
  let obj = { style: { width: 40, height: 40 } };
  obj = {};
  obj = { shape: null, x: 18, y: 18, size: 24 };
  const tmp = callback3();
  obj.shape = require(7873) /* SolidCutout */.CutoutShape.Circle;
  const items = [obj];
  obj.cutouts = items;
  const obj1 = { guild };
  const tmp2 = importDefault(7873);
  obj1.size = require(5515) /* makeSizeStyle */.GuildIconSizes.SMALL_32;
  obj.children = callback(importDefault(5515), obj1);
  const items1 = [callback(tmp2, obj), ];
  const obj2 = { animate: true, style: tmp.authorAvatar, guildId: guild.id, user: guild.author, size: require(1273) /* Button */.AvatarSizes.XSMALL_20 };
  items1[1] = callback(require(1273) /* Button */.Avatar, obj2);
  obj.children = items1;
  return callback2(View, obj);
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { container: obj, content: { flex: 1, overflow: "hidden" } };
  obj = { marginTop: margin.margin };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: importDefault(689).space.PX_4, marginHorizontal: margin.margin };
  obj.channelNameAndAccessory = obj;
  obj.channelNameAndAccessoryLarge = { flexDirection: "column", paddingBottom: importDefault(689).space.PX_4, marginHorizontal: margin.margin };
  obj.header = { flexDirection: "row", flexGrow: 1 };
  const obj2 = { flexGrow: 1, flexShrink: 1, marginLeft: importDefault(689).space.PX_12 };
  obj.headerInfo = obj2;
  obj.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj3 = { flexDirection: "row", justifyContent: "space-between", borderRadius: importDefault(689).radii.sm };
  obj.subTitleContainer = obj3;
  obj.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  obj.genContentSubtitle = { flexDirection: "row", alignItems: "center", gap: 2 };
  obj.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj.subtitleTrailing = { paddingVertical: 1 };
  const obj4 = { height: 1, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.separator = obj4;
  const obj5 = { borderBottomWidth: 1, borderBottomColor: importDefault(689).colors.BORDER_STRONG, flexShrink: 0 };
  obj.normalContent = obj5;
  obj.authorAvatar = { position: "absolute", right: 0, bottom: 0 };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ICYMICardInCard.tsx");

export default function ICYMICardInCard(message) {
  let children;
  let guildId;
  let hideTimestamp;
  let onHeaderLongPress;
  let timestamp;
  message = message.message;
  const actionLabel = message.actionLabel;
  let id = message.id;
  const interactionType = message.interactionType;
  const onHeaderPress = message.onHeaderPress;
  const channelId = message.channelId;
  ({ guildId, hideTimestamp } = message);
  ({ children, timestamp, onHeaderLongPress } = message);
  if (hideTimestamp === undefined) {
    hideTimestamp = false;
  }
  let flag = message.shouldFeatureUser;
  if (flag === undefined) {
    flag = false;
  }
  let c7;
  let fontScale;
  let stateFromStores;
  guildId = undefined;
  let stateFromStores1;
  let stateFromStores2;
  let displayNameStylesFont;
  let c14;
  let c15;
  let tmp = stateFromStores2();
  c7 = tmp;
  let obj = message(id[12]);
  fontScale = obj.useFontScale();
  let obj1 = message(id[13]);
  let items = [channelId];
  let items1 = [channelId];
  stateFromStores = obj1.useStateFromStores(items, () => channelId.getChannel(channelId), items1);
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  if (null != guild_id) {
    guildId = guild_id;
  }
  let obj2 = message(id[13]);
  let items2 = [c7];
  let items3 = [guildId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild = null;
    if (null != guildId) {
      guild = _undefined.getGuild(guildId);
    }
    return guild;
  }, items3);
  let obj3 = message(id[13]);
  let items4 = [flag];
  let items5 = [flag, guildId, message];
  stateFromStores2 = obj3.useStateFromStores(items4, () => {
    let member = null;
    if (flag) {
      member = null;
      if (null != guildId) {
        let id;
        if (null != message) {
          id = message.author.id;
        }
        member = null;
        if (null != id) {
          member = flag.getMember(guildId, message.author.id);
        }
      }
    }
    return member;
  }, items5);
  obj = {};
  id = undefined;
  if (null != message) {
    let author = message.author;
    if (null != author) {
      id = author.id;
    }
  }
  obj.userId = id;
  const tmp7 = actionLabel(id[14]);
  let obj5 = message(id[15]);
  displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: actionLabel(id[14])(obj) });
  message(id[16]);
  if (null != stateFromStores) {
    const id2 = stateFromStores.id;
  }
  if (null != message) {
    let author2 = message.author;
  }
  let tmp13 = null;
  if (flag) {
    author = undefined;
    if (null != message) {
      author = message.author;
    }
    tmp13 = null;
    if (null != author) {
      tmp13 = null;
      if (null != guildId) {
        tmp13 = null;
        if (null != stateFromStores) {
          tmp13 = tmp12;
        }
      }
    }
  }
  c14 = tmp13;
  const items6 = [stateFromStores1, flag, ];
  let author1;
  if (null != message) {
    author1 = message.author;
  }
  items6[2] = author1;
  const items7 = [stateFromStores1];
  const memo = interactionType.useMemo(() => {
    if (null == stateFromStores1) {
      return null;
    } else {
      if (!flag) {
        let obj = { guild: stateFromStores1, size: message(id[10]).GuildIconSizes.NORMAL };
        let tmp11 = stateFromStores(actionLabel(id[10]), obj);
        const tmp8 = actionLabel(id[10]);
      } else {
        let author;
        if (null != message) {
          author = message.author;
        }
      }
      obj = { guild: stateFromStores1, author: message.author };
      tmp11 = stateFromStores(c14, obj);
    }
  }, items6);
  const memo1 = interactionType.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores1) {
      let obj = { style: null, lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
      obj = { maxWidth: 225 };
      obj.style = obj;
      obj.children = stateFromStores1.name;
      tmp = stateFromStores(message(id[17]).Text, obj, stateFromStores1.id);
    }
    return tmp;
  }, items7);
  const tmp20 = actionLabel(id[18])(stateFromStores);
  c15 = tmp20;
  const items8 = [flag, , , , , , , , , , , ];
  author2 = undefined;
  if (null != message) {
    author2 = message.author;
  }
  items8[1] = author2;
  items8[2] = guildId;
  items8[3] = stateFromStores;
  items8[4] = tmp20;
  items8[5] = tmp13;
  items8[6] = stateFromStores2;
  items8[7] = displayNameStylesFont;
  ({ genContentSubtitle: arr9[8], genContentSubtitleChannel: arr9[9] } = tmp);
  items8[10] = onHeaderPress;
  items8[11] = actionLabel;
  const items9 = [stateFromStores1, stateFromStores, id, interactionType];
  const memo2 = interactionType.useMemo(() => {
    if (flag) {
      let author;
      if (null != message) {
        author = message.author;
      }
      if (null != author) {
        if (null != guildId) {
          if (null != stateFromStores) {
            if (null != c14) {
              let colorString;
              if (null != stateFromStores2) {
                colorString = stateFromStores2.colorString;
              }
              if (null == colorString) {
                colorString = fontScale;
              }
              let obj8 = message(id[19]);
              let obj = { style: _undefined.genContentSubtitle };
              const iconForChannel = obj8.getIconForChannel(stateFromStores);
              obj = { variant: "text-sm/semibold" };
              const obj1 = { color: colorString };
              const items = [obj1, ];
              let tmp40;
              if (null != displayNameStylesFont) {
                const obj2 = { fontFamily: displayNameStylesFont };
                tmp40 = obj2;
              }
              items[1] = tmp40;
              obj.style = items;
              obj.children = displayNameStylesFont(c14);
              const items1 = [stateFromStores(message(id[17]).Text, obj), , ];
              const obj3 = { variant: "text-sm/medium", color: "text-default" };
              const intl2 = message(id[20]).intl;
              obj3.children = intl2.string(message(id[20]).t.CHUAYk);
              items1[1] = stateFromStores(message(id[17]).Text, obj3);
              const obj4 = { style: _undefined.genContentSubtitleChannel };
              const items2 = [stateFromStores(iconForChannel, { size: "xs", color: "text-default" }), ];
              const obj5 = { variant: "text-sm/medium", color: "text-default", onPress: onHeaderPress, style: null, lineClamp: 1, ellipsizeMode: "tail" };
              const obj6 = { flex: 1 };
              obj5.style = obj6;
              obj5.children = c15;
              items2[1] = stateFromStores(message(id[17]).Text, obj5);
              obj4.children = items2;
              items1[2] = guildId(onHeaderPress, obj4);
              obj.children = items1;
              return guildId(onHeaderPress, obj);
            }
          }
        }
      }
    }
    if (null != stateFromStores) {
      obj = message(id[19]);
      let TextIcon = obj.getIconForChannel(stateFromStores);
    } else {
      TextIcon = message(id[21]).TextIcon;
    }
    const obj7 = { style: _undefined.genContentSubtitle };
    obj8 = { variant: "text-sm/medium", color: "text-default", children: actionLabel };
    const items3 = [stateFromStores(message(id[17]).Text, obj8), ];
    let tmp15 = null;
    if (null != stateFromStores) {
      const obj9 = {};
      const obj10 = { variant: "text-sm/medium", color: "text-default" };
      const intl = message(id[20]).intl;
      obj10.children = intl.string(message(id[20]).t.CHUAYk);
      const items4 = [stateFromStores(message(id[17]).Text, obj10), ];
      const obj11 = { style: _undefined.genContentSubtitleChannel };
      const items5 = [stateFromStores(TextIcon, { size: "xs", color: "text-default" }), ];
      const obj12 = { variant: "text-sm/medium", color: "text-default", onPress: onHeaderPress, style: null, lineClamp: 1, ellipsizeMode: "tail" };
      const obj13 = { flex: 1 };
      obj12.style = obj13;
      obj12.children = c15;
      items5[1] = stateFromStores(message(id[17]).Text, obj12);
      obj11.children = items5;
      items4[1] = guildId(onHeaderPress, obj11);
      obj9.children = items4;
      tmp15 = guildId(stateFromStores1, obj9);
    }
    items3[1] = tmp15;
    obj7.children = items3;
    return guildId(onHeaderPress, obj7);
  }, items8);
  const items10 = [fontScale, , ];
  ({ channelNameAndAccessoryLarge: arr11[1], channelNameAndAccessory: arr11[2] } = tmp);
  const callback = interactionType.useCallback(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = message(id[22]);
      obj = { guildId: stateFromStores1.id, channelId: stateFromStores.id, id, type: interactionType };
      const result = obj.openDetailsActionSheet(obj);
    }
  }, items9);
  obj = { style: tmp.container };
  const memo3 = interactionType.useMemo(() => {
    if (fontScale > 1.8) {
      let channelNameAndAccessory = _undefined.channelNameAndAccessoryLarge;
    } else {
      channelNameAndAccessory = _undefined.channelNameAndAccessory;
    }
    return channelNameAndAccessory;
  }, items10);
  obj1 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content };
  obj2 = { style: memo3 };
  obj3 = { style: tmp.header };
  const items11 = [memo, ];
  let obj4 = { style: tmp.headerInfo };
  obj5 = { style: tmp.title };
  let obj6 = { style: tmp.titleLeft };
  const items12 = [memo1, ];
  let tmp38 = !hideTimestamp;
  if (tmp38) {
    let obj7 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: message(id[24]).getRelativeTimestamp(timestamp) };
    tmp38 = stateFromStores(message(id[17]).Text, obj7);
    const obj15 = message(id[24]);
  }
  items12[1] = tmp38;
  obj6.children = items12;
  const items13 = [guildId(onHeaderPress, obj6), ];
  let obj8 = { onPress: callback, style: tmp.subtitleTrailing, hitSlop: 8 };
  let obj9 = { color: actionLabel(id[8]).colors.ICON_MUTED, size: "sm" };
  obj8.children = stateFromStores(message(id[25]).MoreHorizontalIcon, obj9);
  items13[1] = stateFromStores(message(id[23]).PressableOpacity, obj8);
  obj5.children = items13;
  const items14 = [guildId(onHeaderPress, obj5), ];
  const tmp25 = guildId;
  const tmp26 = onHeaderPress;
  const tmp27 = stateFromStores;
  const tmp28 = stateFromStores;
  const tmp29 = onHeaderPress;
  const tmp30 = guildId;
  const tmp31 = onHeaderPress;
  const tmp32 = guildId;
  const tmp33 = onHeaderPress;
  const tmp34 = guildId;
  const tmp35 = onHeaderPress;
  const tmp36 = guildId;
  const tmp37 = onHeaderPress;
  const tmp7Result = actionLabel(id[14])(obj);
  items14[1] = stateFromStores(onHeaderPress, { style: tmp.subTitleContainer, children: stateFromStores(onHeaderPress, obj11) });
  obj4.children = items14;
  items11[1] = tmp32(tmp33, obj4);
  obj3.children = items11;
  obj2.children = tmp30(tmp31, obj3);
  obj1.children = tmp28(tmp29, obj2);
  const items15 = [tmp27(message(id[23]).PressableHighlight, obj1), stateFromStores(onHeaderPress, { style: tmp.normalContent, children })];
  obj.children = items15;
  return tmp25(tmp26, obj);
};
