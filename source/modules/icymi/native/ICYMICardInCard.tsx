// Module ID: 15105
// Function ID: 113862
// Name: truncateUsername
// Dependencies: []
// Exports: default

// Module 15105 (truncateUsername)
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
  let obj = { style: { "Null": "isArray", "Null": "c" } };
  obj = {};
  obj = {};
  const tmp = callback3();
  obj.shape = arg1(dependencyMap[9]).CutoutShape.Circle;
  const items = [obj];
  obj.cutouts = items;
  const obj1 = { guild };
  const tmp2 = importDefault(dependencyMap[9]);
  obj1.size = arg1(dependencyMap[10]).GuildIconSizes.SMALL_32;
  obj.children = callback(importDefault(dependencyMap[10]), obj1);
  const items1 = [callback(tmp2, obj), ];
  const obj2 = { animate: true, style: tmp.authorAvatar, guildId: guild.id, user: guild.author, size: arg1(dependencyMap[11]).AvatarSizes.XSMALL_20 };
  items1[1] = callback(arg1(dependencyMap[11]).Avatar, obj2);
  obj.children = items1;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DEFAULT_ROLE_COLOR_HEX = arg1(dependencyMap[5]).DEFAULT_ROLE_COLOR_HEX;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createICYMIStyles((margin) => {
  let obj = { container: obj, content: {} };
  obj = { marginTop: margin.margin };
  obj = { "Null": "<string:3435973836>", "Null": "<string:1903247380>", "Null": "r", paddingBottom: importDefault(dependencyMap[8]).space.PX_4, marginHorizontal: margin.margin };
  obj.channelNameAndAccessory = obj;
  obj.channelNameAndAccessoryLarge = { flexDirection: "column", paddingBottom: importDefault(dependencyMap[8]).space.PX_4, marginHorizontal: margin.margin };
  obj.header = { "Bool(false)": "REDESIGN_INPUT_CONTROL_ACTIVE_BG", "Bool(false)": "CAN" };
  const obj2 = { nestedScrollEnabled: "<string:2491613185>", scrollEventThrottle: "<string:2941583362>", marginLeft: importDefault(dependencyMap[8]).space.PX_12 };
  obj.headerInfo = obj2;
  obj.title = { "Null": 0, "Null": "", paddingHorizontal: 0, alignItems: 0 };
  obj.titleLeft = { error: "values", phone: "isArray", phoneToken: "isArray", name: "isArray", isNameFromContactBook: "values" };
  const obj3 = { "Bool(false)": false, "Bool(false)": 0, borderRadius: importDefault(dependencyMap[8]).radii.sm };
  obj.subTitleContainer = obj3;
  obj.subtitle = {};
  obj.genContentSubtitle = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
  obj.genContentSubtitleChannel = {};
  obj.subtitleTrailing = { paddingVertical: 1 };
  const obj4 = { hideWhenScrolling: false, autoCapitalize: false, backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
  obj.separator = obj4;
  const obj1 = { flexDirection: "column", paddingBottom: importDefault(dependencyMap[8]).space.PX_4, marginHorizontal: margin.margin };
  obj.normalContent = { borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_STRONG };
  obj.authorAvatar = {};
  return obj;
});
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/icymi/native/ICYMICardInCard.tsx");

export default function ICYMICardInCard(message) {
  let children;
  let guildId;
  let hideTimestamp;
  let onHeaderLongPress;
  let timestamp;
  message = message.message;
  const arg1 = message;
  const actionLabel = message.actionLabel;
  const importDefault = actionLabel;
  let id = message.id;
  const dependencyMap = id;
  const interactionType = message.interactionType;
  const React = interactionType;
  const onHeaderPress = message.onHeaderPress;
  const View = onHeaderPress;
  const channelId = message.channelId;
  let closure_5 = channelId;
  ({ guildId, hideTimestamp } = message);
  ({ children, timestamp, onHeaderLongPress } = message);
  if (hideTimestamp === undefined) {
    hideTimestamp = false;
  }
  let flag = message.shouldFeatureUser;
  if (flag === undefined) {
    flag = false;
  }
  let closure_6 = flag;
  let closure_7;
  let DEFAULT_ROLE_COLOR_HEX;
  let stateFromStores;
  guildId = undefined;
  let stateFromStores1;
  let callback3;
  let truncateUsername;
  let CutoutGuildIconWithUserCustom;
  let tmp20;
  const tmp = callback3();
  closure_7 = tmp;
  let obj = arg1(dependencyMap[12]);
  const fontScale = obj.useFontScale();
  DEFAULT_ROLE_COLOR_HEX = fontScale;
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_5];
  const items1 = [channelId];
  stateFromStores = obj1.useStateFromStores(items, () => channelId.getChannel(channelId), items1);
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  if (null != guild_id) {
    guildId = guild_id;
  }
  let obj2 = arg1(dependencyMap[13]);
  const items2 = [closure_7];
  const items3 = [guildId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild = null;
    if (null != guildId) {
      guild = tmp.getGuild(guildId);
    }
    return guild;
  }, items3);
  let obj3 = arg1(dependencyMap[13]);
  const items4 = [closure_6];
  const items5 = [flag, guildId, message];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
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
  callback3 = stateFromStores2;
  obj = {};
  id = undefined;
  if (null != message) {
    let author = message.author;
    if (null != author) {
      id = author.id;
    }
  }
  obj.userId = id;
  const tmp7 = importDefault(dependencyMap[14]);
  let obj5 = arg1(dependencyMap[15]);
  const displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[14])(obj) });
  truncateUsername = displayNameStylesFont;
  arg1(dependencyMap[16]);
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
  CutoutGuildIconWithUserCustom = tmp13;
  const items6 = [stateFromStores1, flag, ];
  let author1;
  if (null != message) {
    author1 = message.author;
  }
  items6[2] = author1;
  const items7 = [stateFromStores1];
  const memo = React.useMemo(() => {
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
      tmp11 = stateFromStores(tmp13, obj);
    }
  }, items6);
  const memo1 = React.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores1) {
      let obj = {};
      obj = { maxWidth: 225 };
      obj.style = obj;
      obj.children = stateFromStores1.name;
      tmp = stateFromStores(message(id[17]).Text, obj, stateFromStores1.id);
    }
    return tmp;
  }, items7);
  tmp20 = importDefault(dependencyMap[18])(stateFromStores);
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
  const memo2 = React.useMemo(() => {
    if (flag) {
      let author;
      if (null != message) {
        author = message.author;
      }
      if (null != author) {
        if (null != guildId) {
          if (null != stateFromStores) {
            if (null != tmp13) {
              let colorString;
              if (null != stateFromStores2) {
                colorString = stateFromStores2.colorString;
              }
              if (null == colorString) {
                colorString = fontScale;
              }
              let obj8 = message(id[19]);
              let obj = { style: tmp.genContentSubtitle };
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
              obj.children = displayNameStylesFont(tmp13);
              const items1 = [stateFromStores(message(id[17]).Text, obj), , ];
              const obj3 = {};
              const intl2 = message(id[20]).intl;
              obj3.children = intl2.string(message(id[20]).t.CHUAYk);
              items1[1] = stateFromStores(message(id[17]).Text, obj3);
              const obj4 = { style: tmp.genContentSubtitleChannel };
              const items2 = [stateFromStores(iconForChannel, {}), ];
              const obj5 = { onPress: onHeaderPress };
              const obj6 = { flex: 1 };
              obj5.style = obj6;
              obj5.children = tmp20;
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
    const obj7 = { style: tmp.genContentSubtitle };
    obj8 = { children: actionLabel };
    const items3 = [stateFromStores(message(id[17]).Text, obj8), ];
    let tmp15 = null;
    if (null != stateFromStores) {
      const obj9 = {};
      const obj10 = {};
      const intl = message(id[20]).intl;
      obj10.children = intl.string(message(id[20]).t.CHUAYk);
      const items4 = [stateFromStores(message(id[17]).Text, obj10), ];
      const obj11 = { style: tmp.genContentSubtitleChannel };
      const items5 = [stateFromStores(TextIcon, {}), ];
      const obj12 = { onPress: onHeaderPress };
      const obj13 = { flex: 1 };
      obj12.style = obj13;
      obj12.children = id;
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
  const callback = React.useCallback(() => {
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
  const memo3 = React.useMemo(() => {
    if (fontScale > 1.8) {
      let channelNameAndAccessory = tmp.channelNameAndAccessoryLarge;
    } else {
      channelNameAndAccessory = tmp.channelNameAndAccessory;
    }
    return channelNameAndAccessory;
  }, items10);
  obj1 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content };
  obj2 = { style: memo3 };
  obj3 = { style: tmp.header };
  const items11 = [memo, ];
  const obj4 = { style: tmp.headerInfo };
  obj5 = { style: tmp.title };
  const obj6 = { style: tmp.titleLeft };
  const items12 = [memo1, ];
  let tmp38 = !hideTimestamp;
  if (tmp38) {
    const obj7 = { children: arg1(dependencyMap[24]).getRelativeTimestamp(timestamp) };
    tmp38 = stateFromStores(arg1(dependencyMap[17]).Text, obj7);
    const obj15 = arg1(dependencyMap[24]);
  }
  items12[1] = tmp38;
  obj6.children = items12;
  const items13 = [guildId(View, obj6), ];
  const obj8 = { onPress: callback, style: tmp.subtitleTrailing, hitSlop: 8 };
  const obj9 = { color: importDefault(dependencyMap[8]).colors.ICON_MUTED, size: "sm" };
  obj8.children = stateFromStores(arg1(dependencyMap[25]).MoreHorizontalIcon, obj9);
  items13[1] = stateFromStores(arg1(dependencyMap[23]).PressableOpacity, obj8);
  obj5.children = items13;
  const items14 = [guildId(View, obj5), ];
  const tmp25 = guildId;
  const tmp26 = View;
  const tmp27 = stateFromStores;
  const tmp28 = stateFromStores;
  const tmp29 = View;
  const tmp30 = guildId;
  const tmp31 = View;
  const tmp32 = guildId;
  const tmp33 = View;
  const tmp34 = guildId;
  const tmp35 = View;
  const tmp36 = guildId;
  const tmp37 = View;
  const tmp7Result = importDefault(dependencyMap[14])(obj);
  items14[1] = stateFromStores(View, { style: tmp.subTitleContainer, children: stateFromStores(View, obj11) });
  obj4.children = items14;
  items11[1] = tmp32(tmp33, obj4);
  obj3.children = items11;
  obj2.children = tmp30(tmp31, obj3);
  obj1.children = tmp28(tmp29, obj2);
  const items15 = [tmp27(arg1(dependencyMap[23]).PressableHighlight, obj1), stateFromStores(View, { style: tmp.normalContent, children })];
  obj.children = items15;
  return tmp25(tmp26, obj);
};
