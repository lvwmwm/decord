// Module ID: 16130
// Function ID: 16131
// Name: ICYMIShared
// Dependencies: [19, 17, 6724, 2045, 2108, 4469, 1372, 1074, 21, 7796, 9217, 5401, 8176, 16057, 6531, 6665, 6459, 6876, 4763, 16091, 1364, 576, 1177, 8276, 5896, 5288, 5435, 4832, 7055, 16131, 7365, 504, 4988, 7799, 7624, 5408, 7798, 6729, 9076, 1115, 16092, 4767, 4531, 4683, 4566, 4837, 4849, 5385, 6630, 4823, 2]
// Exports: AnnouncementContentPost, GuildEventPost, MessageContentPost, SimplePost, ThreadAsComments, navigateToPost, truncateUsername

// Module 16130 (ICYMIShared)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import flow_Client from "flow/Client" /* 4763 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import timing from "timing" /* 4837 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6665 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import ICYMIUtils from "ICYMIUtils" /* 7798 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ClipView from "ClipView" /* 8276 */;
import openDetailsActionSheet2 from "openDetailsActionSheet" /* 16131 */;
import react from "react" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;
let _require, dependencyMap, importDefault, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
let unpackModuleId;
class Separator {
  constructor() {
    const obj = { style: closure_21().separator };
    return authStore4(View, obj);
  }
}
function CutoutGuildIconWithUser(guild) {
  let Avatar;
  let obj2;
  guild = guild.guild;
  const author = guild.author;
  const obj = { guild, icon: authStore4(Avatar, obj2) };
  obj2 = { animate: true, style: closure_21().authorIcon, guildId: guild.id, user: author, size: native.AvatarSizes.XSMALL };
  Avatar = native.Avatar;
  return authStore4(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    let guild;
    let icon;
    let items;
    let items1;
    let obj3;
    let tmp2;
    const obj = { style: { width: 40, height: 40 }, children: items1 };
    ({ guild, icon } = arg0);
    const obj2 = { cutouts: items, children: authStore4(tmp2, obj3) };
    const point = { shape: ClipView.CutoutShape.Circle, x: 16, y: 14, size: 32 };
    items = [point];
    const tmp = ClipViewDefault;
    obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL };
    tmp2 = GuildIconDefault;
    items1 = [authStore4(tmp, obj2), icon];
    return closure_19(View, obj);
  }
}
class GuildContentPost {
  constructor(guild) {
    let MoreHorizontalIcon;
    let avatar;
    let children;
    let disableInteractions;
    let hideTimestamp;
    let id;
    let id2;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj10;
    let obj13;
    let obj3;
    let obj4;
    let onHeaderLongPress;
    let onHeaderPress;
    let subtitle;
    let timestamp;
    let title;
    let tmp2Result;
    let type;
    guild = guild.guild;
    ({ channel: importDefault, hideTimestamp, id: dependencyMap, type: react } = guild);
    ({ timestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = guild);
    const tmp = closure_21();
    let obj = guild(5288);
    const fontScale = obj.useFontScale();
    const obj2 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: closure_18(View, obj3) };
    obj3 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: closure_19(View, obj4) };
    obj4 = { style: tmp.header, children: items };
    items = [avatar, ];
    const obj7 = { style: tmp.titleLeft, children: items1 };
    items1 = [title, ];
    let tmp7Result = !hideTimestamp;
    const obj5 = { style: tmp.headerInfo, children: items3 };
    const obj6 = { style: tmp.title, children: items2 };
    const PressableHighlight = guild(5435).PressableHighlight;
    const tmp6 = closure_20;
    if (!hideTimestamp) {
      const obj8 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp2Result.getRelativeTimestamp(timestamp) };
      const Text = tmp2(4832).Text;
      tmp2Result = guild(7055);
      tmp7Result = tmp7(Text, obj8);
    }
    items1[1] = tmp7Result;
    items2 = [closure_19(View, obj7), ];
    let tmp7Result2 = null;
    if (!disableInteractions) {
      tmp7Result2 = null;
      if (null != guild) {
        const obj9 = {
          onPress() {
                const obj = { guildId: guild.id, channelId: importDefault, id: dependencyMap, type: react };
                importDefault = undefined;
                const openDetailsActionSheet = openDetailsActionSheet2.openDetailsActionSheet;
                openDetailsActionSheet2;
                if (null != importDefault) {
                  importDefault = importDefault.id;
                }
                return openDetailsActionSheet(obj);
              },
          style: tmp.subtitleTrailing,
          hitSlop: 8,
          children: closure_18(MoreHorizontalIcon, obj10)
        };
        const PressableOpacity = tmp2(5435).PressableOpacity;
        obj10 = { color: nativeDefault.colors.ICON_MUTED, size: "sm" };
        MoreHorizontalIcon = tmp2(7365).MoreHorizontalIcon;
        tmp7Result2 = tmp7(PressableOpacity, obj9);
      }
    }
    const obj11 = { children: items4 };
    items2[1] = tmp7Result2;
    items3 = [closure_19(View, obj6), ];
    const obj12 = { style: tmp.subTitleContainer, children: closure_18(View, obj13) };
    obj13 = { style: tmp.subtitle, children: subtitle };
    items3[1] = closure_18(View, obj12);
    items[1] = closure_19(View, obj5);
    items4 = [closure_18(PressableHighlight, obj2), children];
    return closure_19(tmp6, obj11);
  }
}
const View = react_native.View;
({ AnalyticsObjects: c10, AnalyticsObjectTypes: unpackModuleId, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: map1, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let closure_21 = createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let num2;
  let rect;
  let size1;
  let num = 0;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    num = -2;
  }
  const obj2 = { simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" }, content: { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin }, insetIconWrapper: rect, authorIcon: { position: "absolute", right: -4, bottom: -2 }, moreDetailsIcon: { tintColor: nativeDefault.colors.TEXT_MUTED }, channelNameAndAccessory: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin }, channelNameAndAccessoryLarge: { flexDirection: "column", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin }, header: { flexDirection: "row", flexGrow: 1 }, headerInfo: { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin }, title: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }, titleLeft: { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 }, subTitleContainer: { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm }, subtitle: { flexShrink: 1, flexGrow: 0, width: "100%" }, genContentSubtitle: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, genContentSubtitleChannel: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 }, subtitleTrailing: { paddingVertical: 1 }, separator: size, eventsSubtitle: { flexDirection: "row", alignItems: "center" }, comments: { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, recentCommentText: { flexGrow: 1, flexShrink: 1, marginRight: 12 }, commentCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" }, commentsIcon: size1, chevron: { tintColor: nativeDefault.colors.TEXT_MUTED } };
  num2 = 0;
  const tmpResult = PlatformUtils;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  rect = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  ({ tintColor: nativeDefault.colors.TEXT_MUTED });
  ({ flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 });
  size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  ({ tintColor: nativeDefault.colors.TEXT_MUTED });
  return obj2;
});
const __initData = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  let channelId;
  let messageId;
  _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    const obj = ReadStateActionCreators;
    const obj2 = { page: constants2.ICYMI, object: constants.ACK_MESSAGE_VIEWED, objectType: unpackModuleId.ACK_SEMI_AUTOMATIC };
    obj.ack(channelId, obj2, true, true, messageId);
  }, 1500);
  const tmp3 = safeTransitionToDefault;
  tmp3(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    let obj = require("RunAfterInteractionsUtils");
    obj.runAfterInteractions(() => {
      const obj2 = { channelId, limit, jump: { messageId, flash: true, jumpType: flow_Client.JumpType.ANIMATED } };
      const obj = MessageActionCreatorsDefault;
      ({ messageId, flash: true, jumpType: flow_Client.JumpType.ANIMATED });
      const messages = obj.fetchMessages(obj2);
    }, 150);
  }
};
export { Separator };
export const truncateUsername = function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
};
export { CutoutGuildIcon };
export { GuildContentPost };
export const AnnouncementContentPost = function AnnouncementContentPost(guild) {
  let Text;
  let children;
  let items2;
  let mentioned;
  let obj2;
  let obj3;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  let tmp9;
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const id = guild.id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  const tmp = closure_21();
  let obj = guild(author[31]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const tmp2Result = guild(author[32]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
  const items1 = [author.id, channel.id, id];
  const element = { guild, channel, timestamp, avatar: closure_18(CutoutGuildIconWithUser, { guild, author }), title: closure_18(guild(tmp3[27]).Text, obj2, channel.id), subtitle: tmp9(Text, obj3), onHeaderPress, onHeaderLongPress, id, type: "announcement", children };
  const callback = id.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, "announcement", "open_profile");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    obj2.feedItemActioned(obj3);
    const obj4 = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj4);
  }, items1);
  obj2 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: items2 };
  Text = tmp2(tmp3[27]).Text;
  let obj4 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: `${tmp10} ` };
  let combined = name;
  const Text2 = tmp2(tmp3[27]).Text;
  const tmp8 = GuildContentPost;
  tmp9 = closure_19;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  items2 = [closure_18(Text2, obj4), , ];
  const obj5 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
  const AnnouncementsIcon = tmp2(tmp3[35]).AnnouncementsIcon;
  items2[1] = closure_18(AnnouncementsIcon, obj5);
  const contentTypeToText = guild(tmp3[36]).contentTypeToText;
  guild(author[36]);
  items2[2] = ` ${contentTypeToText(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  return closure_18(tmp8, element);
};
export const GuildEventPost = function GuildEventPost(guild) {
  let Text;
  let children;
  let items1;
  let items6;
  let obj3;
  let obj4;
  let obj6;
  let obj9;
  let onHeaderPress;
  let tmp14Result;
  let tmp20;
  let tmp21;
  guild = guild.guild;
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  let creator_id = event.host_id;
  const tmp = closure_21();
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  const useEnsureHydratedGuildUsers = guild(event[37]).useEnsureHydratedGuildUsers;
  const guild_id = event.guild_id;
  const tmp4 = guild(event[37]);
  if (null != creator_id) {
    const items = [creator_id];
    items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedGuildUsers = useEnsureHydratedGuildUsers(guild_id, items1);
  const items2 = [UserStore];
  const tmp2Result = guild(event[31]);
  stateFromStores = tmp2Result.useStateFromStores(items2, () => UserStore.getUser(creator_id));
  const items3 = [GuildMemberStore];
  const tmp2Result2 = guild(event[31]);
  stateFromStores1 = tmp2Result2.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = GuildMemberStore.getMember(guild.id, tmp);
    }
    return member;
  });
  const items4 = [stateFromStores, , , , ];
  let id;
  const useCallback = type.useCallback;
  if (channel != null) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = event.id;
  let highestRoleId;
  if (stateFromStores1 != null) {
    highestRoleId = stateFromStores1.highestRoleId;
  }
  items4[3] = highestRoleId;
  items4[4] = type;
  let colorString;
  const callback = useCallback(() => {
    let highestRoleId;
    let id;
    if (null != stateFromStores) {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(event.id, type, "open_profile");
      const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedItemActioned(obj3);
      const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
      highestRoleId = undefined;
      const tmp11 = showUserProfileActionSheetDefault;
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      tmp11(obj4);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: tmp14Result, title: closure_18(guild(tmp3[27]).Text, obj3, event.id), subtitle: closure_18(Text, obj4), id: event.id, type, onHeaderPress, children };
  const tmp13 = null != event.host_id;
  const tmp15 = GuildContentPost;
  if (null != stateFromStores) {
    let obj = { guild, author: stateFromStores };
    tmp14Result = tmp14(CutoutGuildIconWithUser, obj);
  } else {
    let obj2 = { guild, size: guild(tmp3[24]).GuildIconSizes.NORMAL };
    const tmp17 = channel(event[24]);
    tmp14Result = tmp14(tmp17, obj2);
  }
  obj3 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj4 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: tmp20(tmp21, obj9) };
  Text = tmp2(tmp3[27]).Text;
  tmp20 = closure_19;
  tmp21 = closure_20;
  if (null != stateFromStores) {
    let text;
    const obj5 = { variant: "text-md/semibold", onPress: callback, style: obj6, children: `${tmp22} ` };
    const username = stateFromStores.username;
    let combined = username;
    obj6 = { color: colorString };
    const Text2 = tmp2(tmp3[27]).Text;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    const items5 = [closure_18(Text2, obj5), , ];
    const obj7 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    const CalendarIcon = tmp2(tmp3[38]).CalendarIcon;
    items5[1] = closure_18(CalendarIcon, obj7);
    const intl = tmp2(tmp3[39]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[39]).t;
    if (tmp13) {
      text = ` ${string(t["42OrO4"])}`;
    } else {
      text = ` ${string(t.Vu15se)}`;
    }
    const obj8 = { children: items5 };
    items5[2] = text;
    obj9 = obj8;
  } else {
    obj9 = { children: items6 };
    const obj10 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    const CalendarIcon2 = tmp2(tmp3[38]).CalendarIcon;
    items6 = [closure_18(CalendarIcon2, obj10), ];
    const intl2 = tmp2(tmp3[39]).intl;
    const string2 = intl2.string;
    items6[1] = ` ${string2(guild(event[39]).t.T7MIsc)}`;
  }
  return closure_18(tmp15, element);
};
export const MessageContentPost = function MessageContentPost(guild) {
  let LightbulbIcon;
  let Text;
  let children;
  let items3;
  let obj3;
  let obj4;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  let tmp9;
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  let obj = message;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => {
    const obj = ICYMIUtils;
    return obj.determineContentType(channel, message);
  }, items);
  let obj2 = guild(author[31]);
  const items1 = [GuildMemberStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const tmp2Result = guild(author[32]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
  if (guild(author[9]).ContentType.POPULAR_MESSAGE === memo) {
    LightbulbIcon = tmp2(tmp3[10]).FireIcon;
  } else if (guild(author[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = tmp2(tmp3[11]).ImageIcon;
  } else if (guild(author[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = tmp2(tmp3[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = tmp2(tmp3[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = obj.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, type, "open_profile");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    obj2.feedItemActioned(obj3);
    const obj4 = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj4);
  }, items2);
  const element = { guild, channel, timestamp, avatar: closure_18(CutoutGuildIconWithUser, { guild, author }), title: closure_18(guild(tmp3[27]).Text, obj3, channel.id), subtitle: tmp9(Text, obj4), onHeaderPress, onHeaderLongPress, id, type, children };
  const margin = obj.useContext(tmp2(tmp3[40]).ICYMIContext).margin;
  obj3 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  obj4 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: margin }, children: items3 };
  Text = tmp2(tmp3[27]).Text;
  let combined = name;
  const obj5 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: `${tmp10} ` };
  const Text2 = tmp2(tmp3[27]).Text;
  const tmp8 = GuildContentPost;
  tmp9 = closure_19;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  items3 = [closure_18(Text2, obj5), , ];
  const obj6 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
  items3[1] = closure_18(LightbulbIcon, obj6);
  guild(author[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  return closure_18(tmp8, element);
};
export const SimplePost = function SimplePost(arg0) {
  let c2;
  let children;
  let hideDivider;
  let highlight;
  let items1;
  let tmp16;
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  let token;
  let tmp = closure_21();
  const tmp4 = token(4767)();
  let obj = highlight(4531);
  const tmp2 = token;
  token = obj.useToken(token(576).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp4);
  let obj2 = highlight(4683);
  const hexWithOpacityResult = obj2.hexWithOpacity(token(576).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  const obj3 = highlight(4566);
  const sharedValue = obj3.useSharedValue(0);
  const fn = function c() {
    let items;
    let obj2;
    const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), [0, 1], items) };
    items = [token, c2];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj4 = highlight(4566);
  fn.__closure = { interpolateColor: highlight(4566).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__workletHash = 11116019021445;
  fn.__initData = __initData;
  let items = [highlight, sharedValue];
  ({ interpolateColor: highlight(4566).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    const tmp = highlight;
    if (tmp) {
      set = sharedValue.set;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming(1, { duration: 500 });
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      const result = set(withSequence(withTimingResult, withDelay(500, obj2.withTiming(0, { duration: 350 }))));
    }
  }, items);
  const obj6 = { children: null };
  const tmp10 = closure_19;
  const tmp11 = closure_20;
  if (highlight) {
    const obj7 = { style: items1, children };
    items1 = [tmp.simplePostContent, animatedStyle];
    const items2 = [closure_18(tmp2(4566).View, obj7), ];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = tmp12(Separator, {});
    }
    items2[1] = tmp12Result;
    obj6.children = items2;
    tmp16 = obj6;
  } else {
    const obj8 = { style: tmp.simplePostContent, children };
    const items3 = [closure_18(View, obj8), ];
    let tmp12Result2 = null;
    if (!hideDivider) {
      tmp12Result2 = tmp12(Separator, {});
    }
    items3[1] = tmp12Result2;
    obj6.children = items3;
    tmp16 = obj6;
  }
  return tmp10(tmp11, tmp16);
};
export const ThreadAsComments = function ThreadAsComments(arg0) {
  let channel;
  let guild;
  let inForum;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let messageCount;
  let mostRecentMessage;
  let onPress;
  let parentMessage;
  let parseInlineReplyResult;
  let style;
  let thread;
  ({ guild, parentMessage } = arg0);
  ({ onPress, style, inForum } = arg0);
  let tmp = closure_21();
  if (inForum == null) {
    inForum = false;
  }
  let tmp2 = parentMessage;
  let obj = parentMessage(504);
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let num;
    let obj2;
    let tmp;
    const obj = { thread: channel.getChannel(parentMessage.id), messageCount: num, mostRecentMessage: obj2.getMostRecentMessage(tmp.id) };
    num = ThreadMessageStore.getCount(parentMessage.id);
    obj2 = ThreadMessageStore;
    tmp = parentMessage;
    if (num == null) {
      num = 0;
    }
    return obj;
  });
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const items1 = [guild.id, inForum, parentMessage];
  const effect = react.useEffect(() => {
    const tmp2 = (parentMessage.hasFlag(constants.HAS_THREAD) || inForum) && null == ThreadMessageStore.getMostRecentMessage(tmp.id);
    if (tmp2) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(guild.id, parentMessage.id);
      const obj3 = { channelId: parentMessage.id, isPreload: true, limit: 25 };
      const obj2 = MessageActionCreatorsDefault;
      const messages = obj2.fetchMessages(obj3);
    }
  }, items1);
  let obj2 = parentMessage(504);
  const items2 = [PermissionStore];
  if (obj2.useStateFromStores(items2, () => {
    const obj = { channelId: parentMessage.id };
    return PermissionStore.canWithPartialContext(constants.VIEW_CHANNEL, obj);
  })) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        let obj3 = { style: items3, onPress, children: items4 };
        items3 = [tmp.comments, style];
        const PressableHighlight = tmp2(5435).PressableHighlight;
        let author;
        const Avatar = tmp2(1177).Avatar;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        const obj4 = { user: author, guildId: thread.guild_id, size: tmp2(1177).AvatarSizes.XSMALL };
        items4 = [tmp7(Avatar, obj4), , ];
        let num = 0;
        const obj5 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText, children: parseInlineReplyResult };
        const Text = tmp2(4832).Text;
        if (mostRecentMessage.content.length > 0) {
          const obj6 = MarkupUtilsDefault;
          parseInlineReplyResult = obj6.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = tmp2(1115).intl;
          parseInlineReplyResult = intl.string(tmp2(1115).t["6kp9H2"]);
        }
        items4[1] = closure_18(Text, obj5);
        const obj7 = { style: tmp.commentCount, children: items5 };
        const obj8 = { style: tmp.commentsIcon };
        items5 = [tmp7(tmp2(5385).ChatIcon, obj8), , ];
        const obj9 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items5[1] = closure_18(tmp2(4832).Text, obj9);
        const obj10 = { style: tmp.chevron, size: "xxs" };
        items5[2] = closure_18(tmp2(6630).ChevronSmallRightIcon, obj10);
        items4[2] = closure_19(View, obj7);
        return closure_19(PressableHighlight, obj3);
      }
    }
    const obj11 = { style: items6, onPress, children: items7 };
    items6 = [tmp.comments, style];
    const PressableHighlight2 = tmp2(5435).PressableHighlight;
    const obj12 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.recentCommentText, children: intl2.string(tmp2(1115).t.VMWjXW) };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items7 = [closure_18(Text2, obj12), ];
    const obj13 = { style: tmp.commentCount, children: items8 };
    const obj14 = { style: tmp.commentsIcon };
    items8 = [closure_18(tmp2(5385).ChatIcon, obj14), ];
    const obj15 = { style: tmp.chevron, size: "xxs" };
    items8[1] = closure_18(tmp2(6630).ChevronSmallRightIcon, obj15);
    items7[1] = closure_19(View, obj13);
    return closure_19(PressableHighlight2, obj11);
  } else {
    return null;
  }
};
