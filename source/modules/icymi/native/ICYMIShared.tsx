// Module ID: 15218
// Function ID: 115999
// Name: Separator
// Dependencies: [31, 27, 5683, 1348, 1917, 3758, 1849, 653, 33, 7087, 11878, 4644, 9851, 15147, 5069, 5628, 5584, 6691, 4062, 15179, 477, 689, 1273, 7873, 5515, 4549, 4660, 4126, 6884, 15219, 8968, 566, 4319, 8321, 8492, 4651, 8320, 14951, 8461, 1212, 15180, 4066, 3834, 3974, 3991, 4131, 4140, 4629, 5514, 4120, 2]
// Exports: AnnouncementContentPost, GuildEventPost, MessageContentPost, SimplePost, ThreadAsComments, navigateToPost

// Module 15218 (Separator)
import initialize from "initialize";
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "module_8321";
import createICYMIStyles from "createICYMIStyles";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const require = arg1;
class Separator {
  constructor() {
    obj = { style: f116006().separator };
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
  obj = { animate: true, style: callback3().authorIcon, guildId: guild.id, user: guild.author, size: require(1273) /* Button */.AvatarSizes.XSMALL };
  obj.icon = callback(require(1273) /* Button */.Avatar, obj);
  return callback(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    obj = { style: { width: 40, height: 40 } };
    ({ guild, icon } = global);
    obj = {};
    obj1 = { shape: null, x: 16, y: 14, size: 32 };
    tmp = require("SolidCutout");
    obj1.shape = require("SolidCutout").CutoutShape.Circle;
    items = [];
    items[0] = obj1;
    obj.cutouts = items;
    obj2 = { guild };
    tmp2 = require("makeSizeStyle");
    obj2.size = require("makeSizeStyle").GuildIconSizes.NORMAL;
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
    ({ channel, id, type } = global);
    ({ timestamp, hideTimestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = global);
    tmp = f116006();
    obj = require("getFontScale");
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
      tmp18 = guild;
      tmp19 = id;
      num = 27;
      obj7 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted" };
      num2 = 28;
      obj10 = require("getRelativeTimestamp");
      obj7.children = obj10.getRelativeTimestamp(timestamp);
      tmp16 = jsx(require("Text").Text, obj7);
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
        tmp22 = guild;
        tmp23 = id;
        obj8 = {};
        obj8.onPress = function onPress() {
          let id;
          let obj = guild(outer1_2[29]);
          obj = { guildId: guild.id };
          if (null != id) {
            id = id.id;
          }
          obj.channelId = id;
          obj.id = closure_2;
          obj.type = initialize;
          return obj.openDetailsActionSheet(obj);
        };
        obj8.style = tmp.subtitleTrailing;
        num3 = 8;
        obj8.hitSlop = 8;
        tmp24 = jsx;
        num4 = 30;
        obj9 = {};
        tmp25 = channel;
        num5 = 21;
        obj9.color = require("_createForOfIteratorHelperLoose").colors.ICON_MUTED;
        str = "sm";
        obj9.size = "sm";
        obj8.children = jsx(require("MoreHorizontalIcon").MoreHorizontalIcon, obj9);
        tmp20 = jsx(require("PressableBase").PressableOpacity, obj8);
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
    items4[0] = tmp5(require("PressableBase").PressableHighlight, obj1);
    items4[1] = children;
    obj.children = items4;
    return tmp3(tmp4, obj);
  }
}
({ AnalyticsObjects: closure_10, AnalyticsObjectTypes: closure_11, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: closure_13, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = ME);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let closure_21 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = { flex: 1, marginTop: null, overflow: "hidden" };
  let obj2 = require(477) /* set */;
  let num = 0;
  if (obj2.isAndroid()) {
    num = -2;
  }
  obj.marginTop = num;
  obj.simplePostContent = obj;
  obj = { flex: 1, marginTop: null, overflow: "hidden" };
  let obj4 = require(477) /* set */;
  let num2 = 0;
  if (obj4.isAndroid()) {
    num2 = -2;
  }
  obj.marginTop = num2;
  obj.paddingTop = margin.margin;
  obj.content = obj;
  const obj1 = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  obj.insetIconWrapper = obj1;
  obj.authorIcon = { position: "absolute", right: -4, bottom: -2 };
  obj2 = { tintColor: importDefault(689).colors.TEXT_MUTED };
  obj.moreDetailsIcon = obj2;
  ({ margin: obj8.paddingBottom, margin: obj8.marginHorizontal } = margin);
  obj.channelNameAndAccessory = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
  obj4 = { flexDirection: "column", paddingBottom: margin.margin, marginHorizontal: margin.margin };
  obj.channelNameAndAccessoryLarge = obj4;
  obj.header = { flexDirection: "row", flexGrow: 1 };
  const obj5 = { flexGrow: 1, flexShrink: 1, marginLeft: margin.margin };
  obj.headerInfo = obj5;
  obj.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj6 = { flexDirection: "row", justifyContent: "space-between", borderRadius: importDefault(689).radii.sm };
  obj.subTitleContainer = obj6;
  obj.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  const obj7 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.genContentSubtitle = obj7;
  obj.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj.subtitleTrailing = { paddingVertical: 1 };
  const obj8 = { height: 1, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.separator = obj8;
  obj.eventsSubtitle = { flexDirection: "row", alignItems: "center" };
  const obj9 = { padding: 8, backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(689).radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj.comments = obj9;
  obj.recentCommentText = { flexGrow: 1, flexShrink: 1, marginRight: 12 };
  obj.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" };
  const obj10 = { width: 20, height: 20, tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = obj10;
  obj.chevron = { tintColor: importDefault(689).colors.TEXT_MUTED };
  return obj;
});
let closure_22 = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  const _require = id;
  const importDefault = id3;
  const timerId = setTimeout(() => {
    let obj = id(outer1_2[14]);
    obj = { page: outer1_12.ICYMI, object: outer1_10.ACK_MESSAGE_VIEWED, objectType: outer1_11.ACK_SEMI_AUTOMATIC };
    obj.ack(id, obj, true, true, closure_1);
  }, 1500);
  importDefault(5628)(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    _require(5584).runAfterInteractions(() => {
      let obj = id3(outer1_2[17]);
      obj = { channelId: id, limit: outer1_14 };
      obj = { messageId: id3, flash: true, jumpType: id(outer1_2[18]).JumpType.ANIMATED };
      obj.jump = obj;
      const messages = obj.fetchMessages(obj);
    }, 150);
    let obj = _require(5584);
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
  const channel = guild.channel;
  const author = guild.author;
  const id = guild.id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  let obj = guild(author[31]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getMember(guild.id, author.id));
  let colorString;
  if (null != stateFromStores) {
    colorString = stateFromStores.colorString;
  }
  if (null == colorString) {
    colorString = closure_13;
  }
  let obj1 = guild(author[32]);
  const items1 = [author.id, channel.id, id];
  const name = obj1.useName(guild.id, channel.id, author);
  obj = { guild, channel, timestamp };
  const callback = id.useCallback(() => {
    let obj = channel(author[33]);
    obj.itemInteracted(id, "announcement", "open_profile");
    obj = { itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items1);
  obj.avatar = callback(CutoutGuildIconWithUser, { guild, author });
  obj = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj.title = callback(guild(author[27]).Text, obj, channel.id);
  obj1 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: callback3().subtitle };
  const obj2 = { variant: "text-md/semibold", onPress: callback, style: obj3 };
  obj3 = { color: colorString };
  obj2.children = `${truncateUsername(tmp4)} `;
  const items2 = [callback(guild(author[27]).Text, obj2), , ];
  const obj4 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
  items2[1] = callback(guild(author[35]).AnnouncementsIcon, obj4);
  guild(author[36]);
  items2[2] = ` ${tmp7(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj1.children = items2;
  obj.subtitle = callback2(guild(author[27]).Text, obj1);
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
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let creator_id;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  creator_id = event.host_id;
  if (null == creator_id) {
    creator_id = event.creator_id;
  }
  let obj = guild(event[37]);
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedUsers = obj.useEnsureHydratedUsers(event.guild_id, items1);
  let obj1 = guild(event[31]);
  const items2 = [closure_9];
  stateFromStores = obj1.useStateFromStores(items2, () => outer1_9.getUser(creator_id));
  let obj2 = guild(event[31]);
  const items3 = [closure_7];
  stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = outer1_7.getMember(guild.id, creator_id);
    }
    return member;
  });
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
  const callback = type.useCallback(() => {
    if (null != stateFromStores) {
      let obj = channel(event[33]);
      obj.itemInteracted(event.id, type, "open_profile");
      obj = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
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
    obj1 = { guild, size: guild(event[24]).GuildIconSizes.NORMAL };
    tmp18 = callback(channel(event[24]), obj1);
    const tmp16 = channel(event[24]);
  }
  obj.avatar = tmp18;
  obj2 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj.title = callback(guild(event[27]).Text, obj2, event.id);
  const obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: callback3().subtitle };
  if (null != stateFromStores) {
    const obj4 = {};
    const obj5 = { variant: "text-md/semibold", onPress: callback };
    const obj6 = { color: colorString };
    obj5.style = obj6;
    obj5.children = `${truncateUsername(tmp3.username)} `;
    const items5 = [callback(guild(event[27]).Text, obj5), , ];
    const obj7 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    items5[1] = callback(guild(event[38]).CalendarIcon, obj7);
    const intl = guild(event[39]).intl;
    const string = intl.string;
    let t = guild(event[39]).t;
    if (tmp10) {
      t = string(t["42OrO4"]);
      let text = ` ${t}`;
    } else {
      text = ` ${string(t.Vu15se)}`;
    }
    items5[2] = text;
    obj4.children = items5;
  } else {
    const obj8 = {};
    const obj9 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    const items6 = [callback(guild(event[38]).CalendarIcon, obj9), ];
    const intl2 = guild(event[39]).intl;
    items6[1] = ` ${tmp39(guild(event[39]).t.T7MIsc)}`;
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
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => guild(author[36]).determineContentType(channel, message), items);
  let obj = guild(author[31]);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getMember(guild.id, author.id));
  let colorString;
  if (null != stateFromStores) {
    colorString = stateFromStores.colorString;
  }
  if (null == colorString) {
    colorString = closure_13;
  }
  let obj1 = guild(author[32]);
  const name = obj1.useName(guild.id, channel.id, author);
  if (guild(author[9]).ContentType.POPULAR_MESSAGE === memo) {
    let LightbulbIcon = guild(author[10]).FireIcon;
  } else if (guild(author[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = guild(author[11]).ImageIcon;
  } else if (guild(author[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = guild(author[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = guild(author[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = message.useCallback(() => {
    let obj = channel(author[33]);
    obj.itemInteracted(id, type, "open_profile");
    obj = { itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items2);
  obj = { guild, channel, timestamp, avatar: callback(CutoutGuildIconWithUser, { guild, author }) };
  obj = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  obj.title = callback(guild(author[27]).Text, obj, channel.id);
  obj1 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: message.useContext(guild(author[40]).ICYMIContext).margin } };
  const obj2 = { style: obj3, onPress: callback, variant: "text-md/semibold" };
  obj3 = { color: colorString };
  obj2.children = `${truncateUsername(tmp6)} `;
  const items3 = [callback(guild(author[27]).Text, obj2), callback(LightbulbIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE }), ];
  guild(author[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  obj1.children = items3;
  obj.subtitle = callback2(guild(author[27]).Text, obj1);
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
  let token;
  let dependencyMap;
  let sharedValue;
  const tmp = callback3();
  let obj = highlight(3834);
  token = obj.useToken(token(689).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, token(4066)());
  let obj1 = highlight(3974);
  const hexWithOpacityResult = obj1.hexWithOpacity(token(689).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = highlight(3991);
  sharedValue = obj2.useSharedValue(0);
  const tmp2 = token(4066)();
  const fn = function c() {
    const obj = {};
    const items = [token, _undefined];
    obj.backgroundColor = highlight(_undefined[44]).interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  obj = { interpolateColor: highlight(3991).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__closure = obj;
  fn.__workletHash = 11116019021445;
  fn.__initData = closure_22;
  let items = [highlight, sharedValue];
  const animatedStyle = highlight(3991).useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      let obj = highlight(_undefined[44]);
      obj = { duration: 500 };
      const obj2 = highlight(_undefined[45]);
      const withTimingResult = highlight(_undefined[45]).withTiming(1, obj);
      const obj4 = highlight(_undefined[44]);
      obj = { duration: 350 };
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj4.withDelay(500, highlight(_undefined[45]).withTiming(0, obj))));
      const obj5 = highlight(_undefined[45]);
    }
  }, items);
  obj = {};
  if (highlight) {
    obj1 = {};
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj1.style = items1;
    obj1.children = children;
    const items2 = [tmp10(token(3991).View, obj1), ];
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
  ({ onPress, style, inForum } = parentMessage);
  let tmp = callback3();
  ({ thread, messageCount, mostRecentMessage } = (function useThread(guild, parentMessage, arg2) {
    let messageCount;
    let mostRecentMessage;
    let thread;
    let closure_0 = guild;
    let closure_1 = parentMessage;
    let closure_2 = arg2;
    const items = [outer1_6, outer1_5];
    const stateFromStoresObject = parentMessage(outer1_2[31]).useStateFromStoresObject(items, () => {
      const obj = { thread: outer2_6.getChannel(parentMessage.id) };
      const count = outer2_5.getCount(parentMessage.id);
      let num = 0;
      if (null != count) {
        num = count;
      }
      obj.messageCount = num;
      obj.mostRecentMessage = outer2_5.getMostRecentMessage(parentMessage.id);
      return obj;
    });
    const items1 = [guild.id, arg2, parentMessage];
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    const effect = outer1_3.useEffect(() => {
      let tmp = parentMessage.hasFlag(outer2_15.HAS_THREAD) || closure_2;
      if (tmp) {
        tmp = null == outer2_5.getMostRecentMessage(parentMessage.id);
      }
      if (tmp) {
        let obj = outer2_1(outer2_2[46]);
        obj.preload(guild.id, parentMessage.id);
        obj = { channelId: parentMessage.id, isPreload: true, limit: 25 };
        const messages = outer2_1(outer2_2[17]).fetchMessages(obj);
        const obj2 = outer2_1(outer2_2[17]);
      }
    }, items1);
    return { thread, messageCount, mostRecentMessage };
  })(parentMessage.guild, parentMessage, null != inForum && inForum));
  let obj = parentMessage(566);
  let items = [closure_8];
  if (obj.useStateFromStores(items, () => outer1_8.canWithPartialContext(outer1_16.VIEW_CHANNEL, { channelId: parentMessage.id }))) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        obj = {};
        let items1 = [tmp.comments, style];
        obj.style = items1;
        obj.onPress = onPress;
        obj = {};
        let author;
        if (null != mostRecentMessage) {
          author = mostRecentMessage.author;
        }
        obj.user = author;
        obj.guildId = thread.guild_id;
        obj.size = parentMessage(1273).AvatarSizes.XSMALL;
        const items2 = [callback(parentMessage(1273).Avatar, obj), , ];
        const obj1 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText };
        if (mostRecentMessage.content.length > 0) {
          let obj4 = importDefault(4120);
          let parseInlineReplyResult = obj4.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = parentMessage(1212).intl;
          parseInlineReplyResult = intl.string(parentMessage(1212).t["6kp9H2"]);
        }
        obj1.children = parseInlineReplyResult;
        items2[1] = callback(parentMessage(4126).Text, obj1);
        let obj2 = { style: tmp.commentCount };
        const obj3 = { style: tmp.commentsIcon };
        const items3 = [callback(parentMessage(4629).ChatIcon, obj3), , ];
        obj4 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items3[1] = callback(parentMessage(4126).Text, obj4);
        const obj5 = { style: tmp.chevron, size: "xxs" };
        items3[2] = callback(parentMessage(5514).ChevronSmallRightIcon, obj5);
        obj2.children = items3;
        items2[2] = callback2(View, obj2);
        obj.children = items2;
        return callback2(parentMessage(4660).PressableHighlight, obj);
      }
    }
    const obj6 = {};
    const items4 = [tmp.comments, style];
    obj6.style = items4;
    obj6.onPress = onPress;
    const obj7 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.recentCommentText };
    const intl2 = parentMessage(1212).intl;
    obj7.children = intl2.string(parentMessage(1212).t.VMWjXW);
    const items5 = [callback(parentMessage(4126).Text, obj7), ];
    const obj8 = { style: tmp.commentCount };
    const obj9 = { style: tmp.commentsIcon };
    const items6 = [callback(parentMessage(4629).ChatIcon, obj9), ];
    const obj10 = { style: tmp.chevron, size: "xxs" };
    items6[1] = callback(parentMessage(5514).ChevronSmallRightIcon, obj10);
    obj8.children = items6;
    items5[1] = callback2(View, obj8);
    obj6.children = items5;
    return callback2(parentMessage(4660).PressableHighlight, obj6);
  } else {
    return null;
  }
  const tmp2 = null != inForum && inForum;
  const tmp3 = (function useThread(guild, parentMessage, arg2) {
    let messageCount;
    let mostRecentMessage;
    let thread;
    let closure_0 = guild;
    let closure_1 = parentMessage;
    let closure_2 = arg2;
    const items = [outer1_6, outer1_5];
    const stateFromStoresObject = parentMessage(outer1_2[31]).useStateFromStoresObject(items, () => {
      const obj = { thread: outer2_6.getChannel(parentMessage.id) };
      const count = outer2_5.getCount(parentMessage.id);
      let num = 0;
      if (null != count) {
        num = count;
      }
      obj.messageCount = num;
      obj.mostRecentMessage = outer2_5.getMostRecentMessage(parentMessage.id);
      return obj;
    });
    const items1 = [guild.id, arg2, parentMessage];
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    const effect = outer1_3.useEffect(() => {
      let tmp = parentMessage.hasFlag(outer2_15.HAS_THREAD) || closure_2;
      if (tmp) {
        tmp = null == outer2_5.getMostRecentMessage(parentMessage.id);
      }
      if (tmp) {
        let obj = outer2_1(outer2_2[46]);
        obj.preload(guild.id, parentMessage.id);
        obj = { channelId: parentMessage.id, isPreload: true, limit: 25 };
        const messages = outer2_1(outer2_2[17]).fetchMessages(obj);
        const obj2 = outer2_1(outer2_2[17]);
      }
    }, items1);
    return { thread, messageCount, mostRecentMessage };
  })(parentMessage.guild, parentMessage, null != inForum && inForum);
};
