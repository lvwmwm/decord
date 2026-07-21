// Module ID: 15092
// Function ID: 113753
// Name: Separator
// Dependencies: []
// Exports: AnnouncementContentPost, GuildEventPost, MessageContentPost, SimplePost, ThreadAsComments, navigateToPost

// Module 15092 (Separator)
class Separator {
  constructor() {
    obj = { style: f113760().separator };
    return jsx(View, obj);
  }
}
function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
}
function CutoutGuildIconWithUser(guild) {
  guild = guild.guild;
  let obj = { guild };
  obj = { animate: true, style: callback3().authorIcon, guildId: guild.id, user: guild.author, size: arg1(dependencyMap[22]).AvatarSizes.XSMALL };
  obj.icon = callback(arg1(dependencyMap[22]).Avatar, obj);
  return callback(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    obj = { style: {} };
    ({ guild, icon } = global);
    obj = {};
    obj1 = {};
    tmp = importDefault(dependencyMap[23]);
    obj1.shape = arg1(dependencyMap[23]).CutoutShape.Circle;
    items = [];
    items[0] = obj1;
    obj.cutouts = items;
    obj2 = { guild };
    tmp2 = importDefault(dependencyMap[24]);
    obj2.size = arg1(dependencyMap[24]).GuildIconSizes.NORMAL;
    obj.children = jsx(tmp2, obj2);
    items1 = [, ];
    items1[0] = jsx(tmp, obj);
    items1[1] = icon;
    obj.children = items1;
    return jsxs(View, obj);
  }
}
class GuildContentPost {
  constructor(arg0) {
    guild = global.guild;
    arg1 = guild;
    ({ channel: closure_1, id: closure_2, type: closure_3 } = global);
    ({ timestamp, hideTimestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = global);
    tmp = f113760();
    obj = arg1(dependencyMap[25]);
    obj = {};
    fontScale = obj.useFontScale();
    tmp3 = jsxs;
    tmp4 = Fragment;
    tmp5 = jsx;
    obj1 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content };
    obj2 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory };
    obj3 = { style: tmp.header };
    items = [, ];
    items[0] = avatar;
    obj4 = { style: tmp.headerInfo };
    obj5 = { style: tmp.title };
    obj6 = { style: tmp.titleLeft };
    items1 = [, ];
    items1[0] = title;
    tmp16 = !hideTimestamp;
    tmp6 = jsx;
    tmp7 = View;
    tmp8 = jsxs;
    tmp9 = View;
    tmp10 = jsxs;
    tmp11 = View;
    tmp12 = jsxs;
    tmp13 = View;
    tmp14 = jsxs;
    tmp15 = View;
    if (tmp16) {
      tmp17 = jsx;
      tmp18 = arg1;
      tmp19 = dependencyMap;
      num = 27;
      obj7 = { encodingConfig: 0, showRemove: 5.566, PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: 10 };
      num2 = 28;
      obj10 = arg1(dependencyMap[28]);
      obj7.children = obj10.getRelativeTimestamp(timestamp);
      tmp16 = jsx(arg1(dependencyMap[27]).Text, obj7);
    }
    items1[1] = tmp16;
    obj6.children = items1;
    items2 = [, ];
    items2[0] = tmp14(tmp15, obj6);
    tmp20 = null;
    if (!disableInteractions) {
      tmp20 = null;
      if (null != guild) {
        tmp21 = jsx;
        tmp22 = arg1;
        tmp23 = dependencyMap;
        obj8 = {};
        obj8.onPress = function onPress() {
          let id;
          let obj = guild(closure_2[29]);
          obj = { guildId: guild.id };
          if (null != id) {
            id = id.id;
          }
          obj.channelId = id;
          obj.id = closure_2;
          obj.type = closure_3;
          return obj.openDetailsActionSheet(obj);
        };
        obj8.style = tmp.subtitleTrailing;
        num3 = 8;
        obj8.hitSlop = 8;
        tmp24 = jsx;
        num4 = 30;
        obj9 = {};
        tmp25 = importDefault;
        num5 = 21;
        obj9.color = importDefault(dependencyMap[21]).colors.ICON_MUTED;
        str = "sm";
        obj9.size = "sm";
        obj8.children = jsx(arg1(dependencyMap[30]).MoreHorizontalIcon, obj9);
        tmp20 = jsx(arg1(dependencyMap[26]).PressableOpacity, obj8);
      }
    }
    items2[1] = tmp20;
    obj5.children = items2;
    items3 = [, ];
    items3[0] = tmp12(tmp13, obj5);
    obj10 = { style: tmp.subTitleContainer, children: jsx(View, obj11) };
    obj11 = { style: tmp.subtitle, children: subtitle };
    items3[1] = jsx(View, obj10);
    obj4.children = items3;
    items[1] = tmp10(tmp11, obj4);
    obj3.children = items;
    obj2.children = tmp8(tmp9, obj3);
    obj1.children = tmp6(tmp7, obj2);
    items4 = [, ];
    items4[0] = tmp5(arg1(dependencyMap[26]).PressableHighlight, obj1);
    items4[1] = children;
    obj.children = items4;
    return tmp3(tmp4, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ AnalyticsObjects: closure_10, AnalyticsObjectTypes: closure_11, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: closure_13, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let closure_21 = arg1(dependencyMap[19]).createICYMIStyles((margin) => {
  let obj = {};
  obj = {};
  let obj2 = arg1(dependencyMap[20]);
  let num = 0;
  if (obj2.isAndroid()) {
    num = -2;
  }
  obj.marginTop = num;
  obj.simplePostContent = obj;
  obj = {};
  let obj4 = arg1(dependencyMap[20]);
  let num2 = 0;
  if (obj4.isAndroid()) {
    num2 = -2;
  }
  obj.marginTop = num2;
  obj.paddingTop = margin.margin;
  obj.content = obj;
  const obj1 = { "Null": false, "Null": false, "Null": false, "Null": false, borderRadius: importDefault(dependencyMap[21]).radii.round, backgroundColor: importDefault(dependencyMap[21]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  obj.insetIconWrapper = obj1;
  obj.authorIcon = { 314033: false, 315680: false, 314067: "press" };
  obj2 = { tintColor: importDefault(dependencyMap[21]).colors.TEXT_MUTED };
  obj.moreDetailsIcon = obj2;
  ({ margin: obj8.paddingBottom, margin: obj8.marginHorizontal } = margin);
  obj.channelNameAndAccessory = { bottom: "<string:3435973836>", left: "<string:1903247380>", padding: "r" };
  obj4 = { flexDirection: "column", paddingBottom: margin.margin, marginHorizontal: margin.margin };
  obj.channelNameAndAccessoryLarge = obj4;
  obj.header = { <string:2316633720>: "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED", <string:1071949164>: "keyboardAppearance" };
  obj.headerInfo = { marginLeft: margin.margin };
  obj.title = { items: 0, width: "", flex: 0, justifyContent: 0 };
  obj.titleLeft = {};
  const obj5 = { 1449229240: "row", 371666258: "center", borderRadius: importDefault(dependencyMap[21]).radii.sm };
  obj.subTitleContainer = obj5;
  obj.subtitle = {};
  obj.genContentSubtitle = { gap: importDefault(dependencyMap[21]).space.PX_4 };
  obj.genContentSubtitleChannel = {};
  obj.subtitleTrailing = { paddingVertical: 1 };
  const obj3 = { bottom: "<string:3435973836>", left: "<string:1903247380>", padding: "r" };
  const obj6 = { gap: importDefault(dependencyMap[21]).space.PX_4 };
  obj.separator = { backgroundColor: importDefault(dependencyMap[21]).colors.BORDER_SUBTLE };
  obj.eventsSubtitle = {};
  const obj8 = { <string:2471618329>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045856417437685, <string:3096204232>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008452491928007849, <string:3664558111>: 139264.00001610073, <string:1369504610>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003375041563059219, <string:1398886034>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049814743080912026, <string:1644430417>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200346588526, <string:72526422>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015493702505500123, backgroundColor: importDefault(dependencyMap[21]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[21]).radii.md };
  obj.comments = obj8;
  obj.recentCommentText = { "Null": true, "Null": true, "Null": true };
  obj.commentCount = { <string:3798027838>: 40, <string:1627573841>: null, <string:3151386190>: "center", <string:45572556>: "text-md/medium", <string:1435107624>: "input-placeholder-text-default" };
  const obj9 = { bhk: false, bic: "internal", tintColor: importDefault(dependencyMap[21]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = obj9;
  const obj7 = { backgroundColor: importDefault(dependencyMap[21]).colors.BORDER_SUBTLE };
  obj.chevron = { tintColor: importDefault(dependencyMap[21]).colors.TEXT_MUTED };
  return obj;
});
let closure_22 = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
const obj = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[50]).fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  id2 = id;
  const importDefault = id3;
  const timerId = setTimeout(() => {
    let obj = arg0(closure_2[14]);
    obj = { page: constants3.ICYMI, object: constants.ACK_MESSAGE_VIEWED, objectType: constants2.ACK_SEMI_AUTOMATIC };
    obj.ack(arg0, obj, true, true, arg2);
  }, 1500);
  importDefault(dependencyMap[15])(closure_17.CHANNEL(id2, id, id3), { textContentType: true, autoCapitalize: true });
  if (null != id3) {
    id2(dependencyMap[16]).runAfterInteractions(() => {
      let obj = arg2(closure_2[17]);
      obj = { channelId: arg0, limit: closure_14 };
      obj = { messageId: arg2, flash: true, jumpType: arg0(closure_2[18]).JumpType.ANIMATED };
      obj.jump = obj;
      const messages = obj.fetchMessages(obj);
    }, 150);
    const obj = id2(dependencyMap[16]);
  }
};
export { Separator };
export { truncateUsername };
export { CutoutGuildIcon };
export { GuildContentPost };
export const AnnouncementContentPost = function AnnouncementContentPost(guild) {
  let children;
  let mentioned;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const author = guild.author;
  const dependencyMap = author;
  const id = guild.id;
  const React = id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  let obj = arg1(dependencyMap[31]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => member.getMember(guild.id, author.id));
  let colorString;
  if (null != stateFromStores) {
    colorString = stateFromStores.colorString;
  }
  if (null == colorString) {
    colorString = closure_13;
  }
  let obj1 = arg1(dependencyMap[32]);
  const items1 = [author.id, channel.id, id];
  const name = obj1.useName(guild.id, channel.id, author);
  obj = { guild, channel, timestamp };
  const callback = React.useCallback(() => {
    let obj = channel(author[33]);
    obj.itemInteracted(id, "announcement", "open_profile");
    obj = { itemId: id, itemType: "announcement", actionParameters: { "Bool(false)": 544342527, "Bool(false)": 536870912, "Bool(false)": 1358954496, "Bool(false)": -465465325 } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items1);
  obj.avatar = callback(CutoutGuildIconWithUser, { guild, author });
  obj = { style: { maxWidth: 225 }, children: guild.name };
  obj.title = callback(arg1(dependencyMap[27]).Text, obj, channel.id);
  obj1 = { encodingConfig: "bendrumas", showRemove: "<string:745668608>", PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: "<string:4227858432>", style: callback3().subtitle };
  const obj2 = { variant: "text-md/semibold", onPress: callback, style: obj3 };
  const obj3 = { color: colorString };
  obj2.children = `${closure_24(tmp4)} `;
  const items2 = [callback(arg1(dependencyMap[27]).Text, obj2), , ];
  const obj4 = { size: "sm", color: importDefault(dependencyMap[21]).colors.TEXT_SUBTLE };
  items2[1] = callback(arg1(dependencyMap[35]).AnnouncementsIcon, obj4);
  arg1(dependencyMap[36]);
  items2[2] = ` ${tmp7(closure_0(closure_2[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj1.children = items2;
  obj.subtitle = callback2(arg1(dependencyMap[27]).Text, obj1);
  obj.onHeaderPress = onHeaderPress;
  obj.onHeaderLongPress = onHeaderLongPress;
  obj.id = id;
  obj.type = "announcement";
  obj.children = children;
  return callback(GuildContentPost, obj);
};
export const GuildEventPost = function GuildEventPost(guild) {
  let children;
  let onHeaderPress;
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const event = guild.event;
  const dependencyMap = event;
  const type = guild.type;
  const React = type;
  let View;
  let closure_5;
  let closure_6;
  ({ children, onHeaderPress } = guild);
  let creator_id = event.host_id;
  if (null == creator_id) {
    creator_id = event.creator_id;
  }
  View = creator_id;
  let obj = arg1(dependencyMap[37]);
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedUsers = obj.useEnsureHydratedUsers(event.guild_id, items1);
  let obj1 = arg1(dependencyMap[31]);
  const items2 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items2, () => user.getUser(creator_id));
  closure_5 = stateFromStores;
  let obj2 = arg1(dependencyMap[31]);
  const items3 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = member.getMember(guild.id, creator_id);
    }
    return member;
  });
  closure_6 = stateFromStores1;
  const items4 = [stateFromStores, , , , ];
  let id;
  if (null != channel) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = event.id;
  let highestRoleId;
  if (null != stateFromStores1) {
    highestRoleId = stateFromStores1.highestRoleId;
  }
  items4[3] = highestRoleId;
  items4[4] = type;
  let colorString;
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let obj = channel(event[33]);
      obj.itemInteracted(event.id, type, "open_profile");
      obj = { itemId: event.id, itemType: "guild_event", actionParameters: { "Bool(false)": 544342527, "Bool(false)": 536870912, "Bool(false)": 1358954496, "Bool(false)": -465465325 } };
      channel(event[33]).feedItemActioned(obj);
      obj = { userId: stateFromStores.id };
      let highestRoleId;
      const obj2 = channel(event[33]);
      if (null != stateFromStores1) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      obj.roleId = highestRoleId;
      let id;
      if (null != channel) {
        id = channel.id;
      }
      obj.channelId = id;
      channel(event[34])(obj);
      const tmp13 = channel(event[34]);
    }
  }, items4);
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  if (null == colorString) {
    colorString = closure_13;
  }
  obj = { guild, channel, timestamp: 0, hideTimestamp: true };
  if (null != stateFromStores) {
    obj = { guild, author: stateFromStores };
    let tmp18 = callback(CutoutGuildIconWithUser, obj);
  } else {
    obj1 = { guild, size: arg1(dependencyMap[24]).GuildIconSizes.NORMAL };
    tmp18 = callback(importDefault(dependencyMap[24]), obj1);
    const tmp16 = importDefault(dependencyMap[24]);
  }
  obj.avatar = tmp18;
  obj2 = { style: { maxWidth: 225 }, children: guild.name };
  obj.title = callback(arg1(dependencyMap[27]).Text, obj2, event.id);
  const obj3 = { encodingConfig: "bendrumas", showRemove: "<string:745668608>", PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: "<string:4227858432>", style: callback3().subtitle };
  if (null != stateFromStores) {
    const obj4 = {};
    const obj5 = { variant: "text-md/semibold", onPress: callback };
    const obj6 = { color: colorString };
    obj5.style = obj6;
    obj5.children = `${closure_24(tmp3.username)} `;
    const items5 = [callback(arg1(dependencyMap[27]).Text, obj5), , ];
    const obj7 = { size: "sm", color: importDefault(dependencyMap[21]).colors.TEXT_SUBTLE };
    items5[1] = callback(arg1(dependencyMap[38]).CalendarIcon, obj7);
    const intl = arg1(dependencyMap[39]).intl;
    const string = intl.string;
    let t = arg1(dependencyMap[39]).t;
    if (tmp10) {
      t = string(t.42OrO4);
      let text = ` ${t}`;
    } else {
      text = ` ${string(t.Vu15se)}`;
    }
    items5[2] = text;
    obj4.children = items5;
  } else {
    const obj8 = {};
    const obj9 = { size: "sm", color: importDefault(dependencyMap[21]).colors.TEXT_SUBTLE };
    const items6 = [callback(arg1(dependencyMap[38]).CalendarIcon, obj9), ];
    const intl2 = arg1(dependencyMap[39]).intl;
    items6[1] = ` ${tmp39(closure_0(closure_2[39]).t.T7MIsc)}`;
    obj8.children = items6;
    obj3.children = tmp23(tmp24, obj8);
    obj.subtitle = callback(tmp22, obj3);
    obj.id = event.id;
    obj.type = type;
    obj.onHeaderPress = onHeaderPress;
    obj.children = children;
    return callback(GuildContentPost, obj);
  }
};
export const MessageContentPost = function MessageContentPost(guild) {
  let children;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const author = guild.author;
  const dependencyMap = author;
  const message = guild.message;
  const React = message;
  const id = guild.id;
  const View = id;
  const type = guild.type;
  let closure_5 = type;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = React.useMemo(() => guild(author[36]).determineContentType(channel, message), items);
  let obj = arg1(dependencyMap[31]);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => member.getMember(guild.id, author.id));
  let colorString;
  if (null != stateFromStores) {
    colorString = stateFromStores.colorString;
  }
  if (null == colorString) {
    colorString = closure_13;
  }
  let obj1 = arg1(dependencyMap[32]);
  const name = obj1.useName(guild.id, channel.id, author);
  if (arg1(dependencyMap[9]).ContentType.POPULAR_MESSAGE === memo) {
    let LightbulbIcon = arg1(dependencyMap[10]).FireIcon;
  } else if (arg1(dependencyMap[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = arg1(dependencyMap[11]).ImageIcon;
  } else if (arg1(dependencyMap[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = arg1(dependencyMap[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = arg1(dependencyMap[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = React.useCallback(() => {
    let obj = channel(author[33]);
    obj.itemInteracted(id, type, "open_profile");
    obj = { itemId: id, itemType: "message", actionParameters: { "Bool(false)": 544342527, "Bool(false)": 536870912, "Bool(false)": 1358954496, "Bool(false)": -465465325 } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items2);
  obj = { guild, channel, timestamp, avatar: callback(CutoutGuildIconWithUser, { guild, author }) };
  obj = { style: { maxWidth: 225 }, children: guild.name };
  obj.title = callback(arg1(dependencyMap[27]).Text, obj, channel.id);
  obj1 = { encodingConfig: "bendrumas", showRemove: "<string:745668608>", PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: "<string:4227858432>", style: { marginRight: React.useContext(arg1(dependencyMap[40]).ICYMIContext).margin } };
  const obj2 = { style: obj3, onPress: callback, variant: "text-md/semibold" };
  const obj3 = { color: colorString };
  obj2.children = `${closure_24(tmp6)} `;
  const items3 = [callback(arg1(dependencyMap[27]).Text, obj2), callback(LightbulbIcon, { size: "sm", color: importDefault(dependencyMap[21]).colors.TEXT_SUBTLE }), ];
  arg1(dependencyMap[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  obj1.children = items3;
  obj.subtitle = callback2(arg1(dependencyMap[27]).Text, obj1);
  obj.onHeaderPress = onHeaderPress;
  obj.onHeaderLongPress = onHeaderLongPress;
  obj.id = id;
  obj.type = type;
  obj.children = children;
  return callback(GuildContentPost, obj);
};
export const SimplePost = function SimplePost(arg0) {
  let children;
  let hideDivider;
  let highlight;
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  const arg1 = highlight;
  let importDefault;
  let dependencyMap;
  let React;
  const tmp = callback3();
  let obj = arg1(dependencyMap[42]);
  const token = obj.useToken(importDefault(dependencyMap[21]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, importDefault(dependencyMap[41])());
  importDefault = token;
  let obj1 = arg1(dependencyMap[43]);
  const hexWithOpacityResult = obj1.hexWithOpacity(importDefault(dependencyMap[21]).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = arg1(dependencyMap[44]);
  const sharedValue = obj2.useSharedValue(0);
  React = sharedValue;
  const tmp2 = importDefault(dependencyMap[41])();
  const fn = function c() {
    const obj = {};
    const items = [token, hexWithOpacityResult];
    obj.backgroundColor = highlight(hexWithOpacityResult[44]).interpolateColor(sharedValue.get(), ["Text", "lc"], items);
    return obj;
  };
  obj = { interpolateColor: arg1(dependencyMap[44]).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__closure = obj;
  fn.__workletHash = 11116019021445;
  fn.__initData = closure_22;
  const items = [highlight, sharedValue];
  const animatedStyle = arg1(dependencyMap[44]).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    if (highlight) {
      let obj = highlight(hexWithOpacityResult[44]);
      obj = { duration: 500 };
      const obj2 = highlight(hexWithOpacityResult[45]);
      const withTimingResult = highlight(hexWithOpacityResult[45]).withTiming(1, obj);
      const obj4 = highlight(hexWithOpacityResult[44]);
      obj = { duration: 350 };
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj4.withDelay(500, highlight(hexWithOpacityResult[45]).withTiming(0, obj))));
      const obj5 = highlight(hexWithOpacityResult[45]);
    }
  }, items);
  obj = {};
  if (highlight) {
    obj1 = {};
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj1.style = items1;
    obj1.children = children;
    const items2 = [tmp10(importDefault(dependencyMap[44]).View, obj1), ];
    let tmp18 = null;
    if (!hideDivider) {
      tmp18 = callback(Separator, {});
    }
    items2[1] = tmp18;
    obj.children = items2;
    let tmp15 = obj;
  } else {
    obj2 = { style: tmp.simplePostContent, children };
    const items3 = [tmp10(View, obj2), ];
    let tmp12 = null;
    if (!hideDivider) {
      tmp12 = callback(Separator, {});
    }
    items3[1] = tmp12;
    obj.children = items3;
    tmp15 = obj;
  }
  return closure_19(closure_20, tmp15);
};
export const ThreadAsComments = function ThreadAsComments(parentMessage) {
  let inForum;
  let messageCount;
  let mostRecentMessage;
  let onPress;
  let style;
  let thread;
  parentMessage = parentMessage.parentMessage;
  const arg1 = parentMessage;
  ({ onPress, style, inForum } = parentMessage);
  const tmp = callback3();
  ({ thread, messageCount, mostRecentMessage } = function useThread(guild, parentMessage, arg2) {
    let messageCount;
    let mostRecentMessage;
    let thread;
    parentMessage = guild;
    const items = [closure_6, closure_5];
    const stateFromStoresObject = parentMessage(arg2[31]).useStateFromStoresObject(items, () => {
      const obj = { thread: channel.getChannel(arg1.id) };
      const count = store.getCount(arg1.id);
      let num = 0;
      if (null != count) {
        num = count;
      }
      obj.messageCount = num;
      obj.mostRecentMessage = store.getMostRecentMessage(arg1.id);
      return obj;
    });
    const items1 = [guild.id, arg2, parentMessage];
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    const effect = React.useEffect((arg0, self) => {
      let tmp = self.hasFlag(constants.HAS_THREAD) || arg2;
      if (tmp) {
        tmp = null == store.getMostRecentMessage(self.id);
      }
      if (tmp) {
        let obj = self(arg2[46]);
        obj.preload(arg0.id, self.id);
        obj = { channelId: self.id };
        const messages = self(arg2[17]).fetchMessages(obj);
        const obj2 = self(arg2[17]);
      }
    }, items1);
    return { thread, messageCount, mostRecentMessage };
  }(parentMessage.guild, parentMessage, null != inForum && inForum));
  let obj = arg1(dependencyMap[31]);
  const items = [closure_8];
  if (obj.useStateFromStores(items, () => closure_8.canWithPartialContext(constants.VIEW_CHANNEL, { channelId: parentMessage.id }))) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        obj = {};
        const items1 = [tmp.comments, style];
        obj.style = items1;
        obj.onPress = onPress;
        obj = {};
        let author;
        if (null != mostRecentMessage) {
          author = mostRecentMessage.author;
        }
        obj.user = author;
        obj.guildId = thread.guild_id;
        obj.size = arg1(dependencyMap[22]).AvatarSizes.XSMALL;
        const items2 = [callback(arg1(dependencyMap[22]).Avatar, obj), , ];
        const obj1 = { "Null": true, "Null": true, style: tmp.recentCommentText };
        if (mostRecentMessage.content.length > 0) {
          let obj4 = importDefault(dependencyMap[49]);
          let parseInlineReplyResult = obj4.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = arg1(dependencyMap[39]).intl;
          parseInlineReplyResult = intl.string(arg1(dependencyMap[39]).t.6kp9H2);
        }
        obj1.children = parseInlineReplyResult;
        items2[1] = callback(arg1(dependencyMap[27]).Text, obj1);
        const obj2 = { style: tmp.commentCount };
        const obj3 = { style: tmp.commentsIcon };
        const items3 = [callback(arg1(dependencyMap[47]).ChatIcon, obj3), , ];
        obj4 = { children: str };
        items3[1] = callback(arg1(dependencyMap[27]).Text, obj4);
        const obj5 = { style: tmp.chevron, size: "xxs" };
        items3[2] = callback(arg1(dependencyMap[48]).ChevronSmallRightIcon, obj5);
        obj2.children = items3;
        items2[2] = callback2(View, obj2);
        obj.children = items2;
        return callback2(arg1(dependencyMap[26]).PressableHighlight, obj);
      }
    }
    const obj6 = {};
    const items4 = [tmp.comments, style];
    obj6.style = items4;
    obj6.onPress = onPress;
    const obj7 = { style: tmp.recentCommentText };
    const intl2 = arg1(dependencyMap[39]).intl;
    obj7.children = intl2.string(arg1(dependencyMap[39]).t.VMWjXW);
    const items5 = [callback(arg1(dependencyMap[27]).Text, obj7), ];
    const obj8 = { style: tmp.commentCount };
    const obj9 = { style: tmp.commentsIcon };
    const items6 = [callback(arg1(dependencyMap[47]).ChatIcon, obj9), ];
    const obj10 = { style: tmp.chevron, size: "xxs" };
    items6[1] = callback(arg1(dependencyMap[48]).ChevronSmallRightIcon, obj10);
    obj8.children = items6;
    items5[1] = callback2(View, obj8);
    obj6.children = items5;
    return callback2(arg1(dependencyMap[26]).PressableHighlight, obj6);
  } else {
    return null;
  }
  const tmp2 = null != inForum && inForum;
  const tmp3 = function useThread(guild, parentMessage, arg2) {
    let messageCount;
    let mostRecentMessage;
    let thread;
    parentMessage = guild;
    const items = [closure_6, closure_5];
    const stateFromStoresObject = parentMessage(arg2[31]).useStateFromStoresObject(items, () => {
      const obj = { thread: channel.getChannel(arg1.id) };
      const count = store.getCount(arg1.id);
      let num = 0;
      if (null != count) {
        num = count;
      }
      obj.messageCount = num;
      obj.mostRecentMessage = store.getMostRecentMessage(arg1.id);
      return obj;
    });
    const items1 = [guild.id, arg2, parentMessage];
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    const effect = React.useEffect((arg0, self) => {
      let tmp = self.hasFlag(constants.HAS_THREAD) || arg2;
      if (tmp) {
        tmp = null == store.getMostRecentMessage(self.id);
      }
      if (tmp) {
        let obj = self(arg2[46]);
        obj.preload(arg0.id, self.id);
        obj = { channelId: self.id };
        const messages = self(arg2[17]).fetchMessages(obj);
        const obj2 = self(arg2[17]);
      }
    }, items1);
    return { thread, messageCount, mostRecentMessage };
  }(parentMessage.guild, parentMessage, null != inForum && inForum);
};
