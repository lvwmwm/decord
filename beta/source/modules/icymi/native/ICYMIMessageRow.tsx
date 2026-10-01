// Module ID: 16134
// Function ID: 16135
// Name: ICYMIMessageRow
// Dependencies: [19, 17, 2045, 2108, 2067, 4479, 5017, 1372, 16129, 1074, 21, 576, 16091, 1364, 16092, 7713, 7796, 504, 16135, 16136, 4832, 1115, 1177, 4988, 5832, 7798, 7799, 10374, 11152, 16130, 16132, 11, 5435, 9060, 16138, 2]
// Exports: default

// Module 16134 (ICYMIMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11152 */;
import DesignConstants from "DesignConstants" /* 16129 */;
import ICYMIShared from "ICYMIShared" /* 16130 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size from "module_2" /* 2 */;

let content_type;

let closure_12;
let closure_14;
let closure_15;
let map1;
class MessageRowContent {
  constructor(message) {
    let items3;
    let obj10;
    let obj6;
    let obj8;
    let str;
    message = message.message;
    const channel = message.channel;
    let num = message.lineClamp;
    if (num === undefined) {
      num = 3;
    }
    let flag = message.nested;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = message.visible;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const tmp = closure_18();
    let tmp2 = message;
    let tmp3 = dependencyMap;
    const context = react.useContext(message(16092).ICYMIContext);
    const obj = message(7713);
    const result = obj.extractMediaSourcesFromMessage(message, message, channel.guild_id, message(7796).GRAVITY_VALID_EMBED_TYPES);
    const items = [UserGuildSettingsStore];
    const obj2 = message(504);
    const stateFromStores = obj2.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
    const items1 = [message.attachments.length, , ];
    ({ content: arr3[1], embeds: arr3[2] } = message);
    const memo = react.useMemo(() => {
      let tmp3 = !(1 !== message.embeds.length || tmp.attachments.length > 0);
      const tmp2 = 1 !== message.embeds.length || tmp.attachments.length > 0;
      if (tmp3) {
        tmp3 = message.embeds[0].type === map1.GIFV && message.embeds[0].url === message.content;
      }
      return tmp3;
    }, items1);
    const attachments = message.attachments;
    const items2 = [tmp.messagePreview, ];
    let tmp10 = null;
    const everyResult = attachments.every((content_type) => {
      content_type = content_type.content_type;
      let startsWithResult;
      if (content_type != null) {
        startsWithResult = content_type.startsWith("audio/");
      }
      return startsWithResult;
    });
    const tmp8 = closure_15;
    if (!flag) {
      tmp10 = { paddingLeft: context.margin };
      const obj3 = { paddingLeft: context.margin };
    }
    const obj4 = { style: items2, children: items3 };
    items2[1] = tmp10;
    let tmp12Result = !memo;
    if (tmp12Result) {
      const obj5 = { message, muted: stateFromStores, lineClamp: num, messageOptions: obj6, pointerEvents: str };
      obj6 = undefined;
      const MessageRowPreview = tmp2(16135).MessageRowPreview;
      const tmp12 = closure_14;
      if (0 === result.length) {
        if (message.attachments.length > 0) {
          if (0 === message.embeds.length) {
            obj6 = { renderAttachments: true };
          }
        }
      }
      str = "none";
      if (everyResult) {
        str = "auto";
      }
      tmp12Result = tmp12(MessageRowPreview, obj5);
    }
    items3 = [tmp12Result, , ];
    let tmp13 = result.length > 0;
    if (tmp13) {
      const obj7 = { style: tmp.media, children: closure_14(channel(16136), obj8) };
      obj8 = { message, visible: flag2, itemType: "message" };
      tmp13 = closure_14(tmp9, obj7);
    }
    items3[1] = tmp13;
    let tmp16 = 0 === result.length && message.embeds.length > 0;
    if (tmp16) {
      const obj9 = { style: tmp.media, children: closure_14(tmp2(16135).NonMediaEmbedsRowPreview, obj10) };
      obj10 = { message, muted: stateFromStores, lineClamp: 3 };
      tmp16 = closure_14(tmp9, obj9);
    }
    items3[2] = tmp16;
    return tmp8(View, obj4);
  }
}
function ReplyMessageContent(message) {
  let channel;
  let guild;
  let intl;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let obj15;
  let obj9;
  let tmp2Result;
  message = message.message;
  ({ channel, guild } = message);
  const tmp = closure_18();
  const context = react.useContext(message(16092).ICYMIContext);
  const items = [UserStore];
  const obj2 = message(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(message.author.id));
  const items1 = [GuildMemberStore];
  const obj3 = message(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, message.author.id));
  let colorString;
  const obj = react;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_12;
  }
  const width = obj.useContext(tmp2(16092).ICYMIContext).width;
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj4 = { style: tmp.replyPreview, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: { fontStyle: "italic" }, children: intl.string(message(1115).t.mPPcez) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items2 = [closure_14(Text, obj5), ];
    const obj6 = { style: tmp.replyInner, children: items3 };
    const obj7 = { animate: false, guildId: guild.id, user: stateFromStores, size: message(1177).AvatarSizes.SMALL };
    const Avatar = tmp2(1177).Avatar;
    items3 = [closure_14(Avatar, obj7), ];
    const obj8 = { style: obj9, children: items4 };
    obj9 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
    const obj10 = { variant: "text-md/semibold", style: obj11, lineClamp: 1, children: tmp2Result.getName(guild.id, channel.id, stateFromStores) };
    obj11 = { color: colorString };
    const Text2 = tmp2(4832).Text;
    tmp2Result = message(4988);
    items4 = [closure_14(Text2, obj10), ];
    const obj12 = { value: obj13, children: closure_14(MessageRowContent, obj15) };
    obj13 = { width: width - 2 * PX_12 - 30 - PX_8 - 2, margin: null, inset: null };
    ({ margin: obj14.margin, inset: obj14.inset } = context);
    obj15 = { message, channel, guild, nested: true };
    const Provider = tmp2(16092).ICYMIContext.Provider;
    items4[1] = closure_14(Provider, obj12);
    items3[1] = closure_15(View, obj8);
    items2[1] = closure_15(View, obj6);
    tmp8 = closure_15(View, obj4);
  }
  return tmp8;
}
const View = react_native.View;
const ITEM_PADDING = DesignConstants.ITEM_PADDING;
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
const authStore4 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let num;
  let obj6;
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 }, messagePreview: { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 }, replyPreview: { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 }, replyInner: obj6, afterMessage: { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin }, media: { marginRight: paddingLeft.margin }, footer: { marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset } };
  ({ flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 });
  num = 0;
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num = -2;
  }
  ({ marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 });
  obj6 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  ({ gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 });
  ({ marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset });
  return obj;
});
let closure_21 = react.memo((message) => {
  let intl;
  let items5;
  let items6;
  let messageContext;
  let obj4;
  let obj9;
  let tmpResult4;
  let visible;
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  const tmp = message;
  let obj = message(guild[17]);
  const items = [UserGuildSettingsStore];
  let obj2 = react;
  let id1;
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const useEffect = react.useEffect;
  if (guild != null) {
    id1 = guild.id;
  }
  const items1 = [id1, message.author.id];
  const effect = useEffect(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let id1;
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      GuildActionCreatorsDefault;
      if (guild != null) {
        id1 = tmp.id;
      }
      const membersById = requestMembersById(id1, message.author.id);
    }
  }, items1);
  let reply_message_id;
  const useICYMIMessage = tmp(guild[25]).useICYMIMessage;
  let id = channel.id;
  tmp(guild[25]);
  if (messageContext != null) {
    reply_message_id = messageContext.reply_message_id;
  }
  const iCYMIMessage = useICYMIMessage(id, reply_message_id);
  let before_message_id;
  const useICYMIMessage2 = tmp(guild[25]).useICYMIMessage;
  const id2 = channel.id;
  tmp(guild[25]);
  if (messageContext != null) {
    before_message_id = messageContext.before_message_id;
  }
  const iCYMIMessage2 = useICYMIMessage2(id2, before_message_id);
  const tmp12 = closure_18();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_channel");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = openChannelLongPressActionSheet;
    const result = obj4.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = showLongPressMessageActionSheet;
    const obj5 = { channel, message, user: UserStore.getUser(message.author.id) };
    const result = obj4.showLongPressMessageActionSheet(obj5);
  }, items3);
  const callback2 = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const obj4 = ICYMIShared;
    obj4.navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  let obj3 = { actionLabel: intl.string(tmp(guild[21]).t.hMFMY9), id: message.id, interactionType: "message", channelId: channel.id, timestamp: obj4.extractTimestamp(message.id), onHeaderPress: callback2, onHeaderLongPress: callback, message, shouldFeatureUser: true, children: items6 };
  const tmp18 = channel(guild[30]);
  intl = tmp(tmp2[21]).intl;
  obj4 = channel(tmp2[31]);
  let obj5 = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(guild[33])({ channel }), accessibilityHint: tmpResult4.getChannelA11yHint({ channel, muted: stateFromStores }), style: tmp12.pressable, children: items5 };
  const PressableHighlight = tmp(tmp2[32]).PressableHighlight;
  let tmp19 = null;
  const tmp17 = channel;
  tmpResult4 = tmp(guild[33]);
  if (null != iCYMIMessage2) {
    const obj6 = { message: iCYMIMessage2, channel, guild, visible };
    tmp19 = closure_14(MessageRowContent, obj6);
  }
  items5 = [tmp19, closure_14(MessageRowContent, { message, channel, guild, visible }), ];
  let tmp22Result = null;
  if (null != iCYMIMessage) {
    const obj7 = { message: iCYMIMessage, channel, guild };
    tmp22Result = tmp22(ReplyMessageContent, obj7);
  }
  items5[2] = tmp22Result;
  items6 = [closure_15(PressableHighlight, obj5), ];
  const obj8 = { style: tmp12.footer, children: closure_14(tmp17(guild[34]), obj9) };
  obj9 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" };
  items6[1] = closure_14(View, obj8);
  return closure_15(tmp18, obj3);
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default function MessageRowWrapper(arg0) {
  let message;
  let messageContext;
  let visible;
  let gravityMessage;
  ({ message, messageContext, visible } = arg0);
  const obj = gravityMessage(7798);
  gravityMessage = obj.useGravityMessage(message);
  const items = [ChannelStore];
  const obj2 = gravityMessage(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(gravityMessage.getChannelId()));
  const items1 = [GuildStore];
  const obj3 = gravityMessage(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  gravityMessage(504);
  [][0] = RelationshipStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      tmp6 = null;
      if (!tmp5) {
        const obj4 = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        tmp6 = closure_14(closure_21, obj4);
      }
    }
  }
  return tmp6;
};
export { MessageRowContent };
