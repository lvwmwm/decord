// Module ID: 15269
// Function ID: 116368
// Name: MessageRowContent
// Dependencies: [31, 27, 1348, 1917, 1838, 3767, 4325, 1849, 15264, 653, 33, 689, 15226, 477, 15227, 8320, 7086, 566, 15270, 15271, 4126, 1212, 1273, 4319, 5048, 8364, 8365, 9137, 9565, 15265, 15267, 21, 4660, 8494, 15273, 2]
// Exports: default

// Module 15269 (MessageRowContent)
import importAllResult from "DISCORD_EPOCH";
import { View } from "openChannelLongPressActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { ITEM_PADDING } from "ITEM_PADDING";
import ME from "ME";
import jsxProd from "getStatusLabel";
import createICYMIStyles from "createICYMIStyles";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
class MessageRowContent {
  constructor(arg0) {
    message = global.message;
    channel = global.channel;
    num = global.lineClamp;
    if (num === undefined) {
      num = 3;
    }
    flag = global.nested;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.visible;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = f116376();
    context = defineProperty.useContext(require("useICYMIContextConstructor").ICYMIContext);
    obj = require("_createForOfIteratorHelperLoose");
    result = obj.extractMediaSourcesFromMessage(message, message, channel.guild_id, require("MessageEmbedTypes").GRAVITY_VALID_EMBED_TYPES);
    obj2 = require("initialize");
    items = [];
    items[0] = c9;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_9.isChannelMuted(channel.getGuildId(), channel.id));
    items1 = [, , ];
    items1[0] = message.attachments.length;
    ({ content: arr3[1], embeds: arr3[2], attachments } = message);
    memo = defineProperty.useMemo(() => {
      let tmp = 1 !== message.embeds.length;
      if (!tmp) {
        tmp = message.attachments.length > 0;
      }
      let tmp3 = !tmp;
      if (!tmp) {
        let tmp6 = message.embeds[0].type === outer1_13.GIFV;
        if (tmp6) {
          tmp6 = message.embeds[0].url === message.content;
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }, items1);
    obj = {};
    items2 = [, ];
    items2[0] = tmp.messagePreview;
    tmp8 = null;
    everyResult = attachments.every((content_type) => {
      content_type = content_type.content_type;
      let startsWithResult;
      if (null != content_type) {
        startsWithResult = content_type.startsWith("audio/");
      }
      return startsWithResult;
    });
    tmp6 = jsxs;
    tmp7 = View;
    if (!flag) {
      obj1 = {};
      obj1.paddingLeft = context.margin;
      tmp8 = obj1;
    }
    items2[1] = tmp8;
    obj.style = items2;
    tmp10Result = !memo;
    if (tmp10Result) {
      tmp11 = message;
      tmp12 = closure_2;
      num2 = 18;
      tmp10 = jsx;
      obj2 = {};
      obj2.message = message;
      obj2.muted = stateFromStores;
      obj2.lineClamp = num;
      num3 = 0;
      tmp13 = undefined;
      if (0 === result.length) {
        if (message.attachments.length > 0) {
          if (0 === message.embeds.length) {
            obj3 = {};
            flag3 = true;
            obj3.renderAttachments = true;
            tmp13 = obj3;
          }
        }
      }
      obj2.messageOptions = tmp13;
      str = "none";
      if (everyResult) {
        str = "auto";
      }
      obj2.pointerEvents = str;
      tmp10Result = tmp10(require("isMediaEmbed").MessageRowPreview, obj2);
    }
    items3 = [, , ];
    items3[0] = tmp10Result;
    tmp14 = result.length > 0;
    if (tmp14) {
      tmp15 = jsx;
      tmp16 = View;
      obj4 = {};
      obj4.style = tmp.media;
      tmp17 = jsx;
      tmp18 = channel;
      tmp19 = closure_2;
      num4 = 19;
      obj5 = {};
      obj5.message = message;
      obj5.visible = flag2;
      str2 = "message";
      obj5.itemType = "message";
      obj4.children = jsx(require("isMediaSourceGif"), obj5);
      tmp14 = jsx(View, obj4);
    }
    items3[1] = tmp14;
    tmp20 = 0 === result.length && message.embeds.length > 0;
    if (tmp20) {
      tmp21 = jsx;
      tmp22 = View;
      obj6 = {};
      obj6.style = tmp.media;
      tmp23 = jsx;
      tmp24 = message;
      tmp25 = closure_2;
      num5 = 18;
      obj7 = {};
      obj7.message = message;
      obj7.muted = stateFromStores;
      num6 = 3;
      obj7.lineClamp = 3;
      obj6.children = jsx(require("isMediaEmbed").NonMediaEmbedsRowPreview, obj7);
      tmp20 = jsx(View, obj6);
    }
    items3[2] = tmp20;
    obj.children = items3;
    return tmp6(tmp7, obj);
  }
}
function ReplyMessageContent(message) {
  let channel;
  let guild;
  message = message.message;
  ({ channel, guild } = message);
  const tmp = callback3();
  const context = importAllResult.useContext(message(15227).ICYMIContext);
  let obj = message(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getUser(message.author.id));
  let obj1 = message(566);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.getMember(guild.id, message.author.id));
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  if (null == colorString) {
    colorString = closure_12;
  }
  const width = importAllResult.useContext(message(15227).ICYMIContext).width;
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.replyPreview };
    obj = { variant: "text-sm/semibold", color: "text-muted" };
    obj1 = { fontStyle: "italic" };
    obj.style = obj1;
    const intl = message(1212).intl;
    obj.children = intl.string(message(1212).t.mPPcez);
    const items2 = [callback(message(4126).Text, obj), ];
    const obj2 = { style: tmp.replyInner };
    const obj3 = { animate: false, guildId: guild.id, user: stateFromStores, size: message(1273).AvatarSizes.SMALL };
    const items3 = [callback(message(1273).Avatar, obj3), ];
    const obj4 = {};
    const obj5 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
    obj4.style = obj5;
    const obj6 = { variant: "text-md/semibold", style: null, lineClamp: 1 };
    const obj7 = { color: colorString };
    obj6.style = obj7;
    obj6.children = message(4319).getName(guild.id, channel.id, stateFromStores);
    const items4 = [callback(message(4126).Text, obj6), ];
    const obj8 = {};
    const obj9 = { width: width - 2 * PX_12 - 30 - PX_8 - 2 };
    ({ margin: obj14.margin, inset: obj14.inset } = context);
    obj8.value = obj9;
    const obj10 = { message, channel, guild, nested: true };
    obj8.children = callback(MessageRowContent, obj10);
    items4[1] = callback(message(15227).ICYMIContext.Provider, obj8);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj2.children = items3;
    items2[1] = callback2(View, obj2);
    obj.children = items2;
    tmp6 = callback2(View, obj);
    const obj12 = message(4319);
  }
  return tmp6;
}
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let closure_18 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let obj = {};
  obj = { flex: 1, paddingLeft: paddingLeft.inset, gap: importDefault(689).space.PX_8 };
  obj.pressable = obj;
  obj = {};
  let obj3 = require(477) /* set */;
  let num = 0;
  if (obj3.isAndroid()) {
    num = -2;
  }
  obj.marginTop = num;
  obj.borderRadius = importDefault(689).radii.md;
  obj.gap = 0;
  obj.messagePreview = obj;
  obj.replyPreview = { gap: importDefault(689).space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: importDefault(689).colors.BORDER_SUBTLE, borderRadius: importDefault(689).radii.lg, maxHeight: 132 };
  const obj2 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.replyInner = obj2;
  obj.afterMessage = { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin };
  obj.media = { marginRight: paddingLeft.margin };
  obj3 = { marginTop: importDefault(689).space.PX_8, marginBottom: paddingLeft.margin, gap: importDefault(689).space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset };
  obj.footer = obj3;
  return obj;
});
let closure_19 = importAllResult.memo((message) => {
  let messageContext;
  let visible;
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  let obj = message(guild[17]);
  const items = [closure_9];
  let id;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.isChannelMuted(channel.getGuildId(), channel.id));
  if (null != guild) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = importAllResult.useEffect(() => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      const membersById = channel(guild[24]).requestMembersById(id1, message.author.id);
      const obj = channel(guild[24]);
    }
  }, items1);
  let obj1 = message(guild[25]);
  let reply_message_id;
  if (null != messageContext) {
    reply_message_id = messageContext.reply_message_id;
  }
  const iCYMIMessage = obj1.useICYMIMessage(channel.id, reply_message_id);
  let obj2 = message(guild[25]);
  let before_message_id;
  if (null != messageContext) {
    before_message_id = messageContext.before_message_id;
  }
  const iCYMIMessage1 = obj2.useICYMIMessage(channel.id, before_message_id);
  const tmp9 = callback3();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "long_press_channel");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    const result = message(guild[27]).openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = importAllResult.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "long_press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    obj = { channel, message, user: outer1_10.getUser(message.author.id) };
    const result = message(guild[28]).showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = importAllResult.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    message(guild[29]).navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  obj = {};
  const intl = message(guild[21]).intl;
  obj.actionLabel = intl.string(message(guild[21]).t.hMFMY9);
  obj.id = message.id;
  obj.interactionType = "message";
  obj.channelId = channel.id;
  let obj4 = channel(guild[31]);
  obj.timestamp = obj4.extractTimestamp(message.id);
  obj.onHeaderPress = callback2;
  obj.onHeaderLongPress = callback;
  obj.message = message;
  obj.shouldFeatureUser = true;
  obj = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(guild[33])({ channel }) };
  const tmp13 = closure_15;
  const tmp14 = channel(guild[30]);
  const tmp15 = closure_15;
  obj.accessibilityHint = message(guild[33]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj.style = tmp9.pressable;
  let tmp16 = null;
  if (null != iCYMIMessage1) {
    obj1 = { message: iCYMIMessage1, channel, guild, visible };
    tmp16 = callback(MessageRowContent, obj1);
  }
  const items5 = [tmp16, callback(MessageRowContent, { message, channel, guild, visible }), ];
  let tmp19 = null;
  if (null != iCYMIMessage) {
    obj2 = { message: iCYMIMessage, channel, guild };
    tmp19 = callback(ReplyMessageContent, obj2);
  }
  items5[2] = tmp19;
  obj.children = items5;
  const items6 = [tmp15(message(guild[32]).PressableHighlight, obj), ];
  const obj7 = message(guild[33]);
  obj4 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" };
  items6[1] = callback(View, { style: tmp9.footer, children: callback(channel(guild[34]), obj4) });
  obj.children = items6;
  return tmp13(tmp14, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default function MessageRowWrapper(arg0) {
  let message;
  let messageContext;
  let visible;
  ({ message, messageContext, visible } = arg0);
  let obj = gravityMessage(8364);
  gravityMessage = obj.useGravityMessage(message);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = gravityMessage(566).useStateFromStores(items, () => outer1_5.getChannel(gravityMessage.getChannelId()));
  const obj2 = gravityMessage(566);
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = gravityMessage(566).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_7.getGuild(guild_id);
  });
  gravityMessage(566);
  [][0] = closure_8;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      tmp6 = null;
      if (!tmp5) {
        obj = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        tmp6 = callback(closure_19, obj);
      }
    }
  }
  return tmp6;
};
export { MessageRowContent };
