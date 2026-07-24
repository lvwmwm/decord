// Module ID: 10366
// Function ID: 79977
// Name: ReactionNotificationBody
// Dependencies: [31, 27, 4122, 10267, 653, 33, 4130, 478, 689, 3803, 10300, 4126, 1392, 10367, 5151, 1212, 5679, 10266, 10285, 10286, 10306, 9134, 1273, 5513, 22, 4360, 566, 4337, 4138, 10265, 10308, 1934, 10339, 10338, 2]
// Exports: default

// Module 10366 (ReactionNotificationBody)
import maybeLoadBundle from "maybeLoadBundle";
import { View } from "module_4337";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import ME from "ME";
import jsxProd from "VideoBadge";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";
import isWindows from "isWindows";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ReactionNotificationBody(arg0) {
  let gradientColors;
  let gradientStyles;
  let hasMessageContent;
  let messagePreview;
  let secondaryText;
  let text;
  ({ secondaryText, messagePreview } = arg0);
  ({ text, hasMessageContent } = arg0);
  let obj = require(10266) /* hasMedia */;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  const tmp = _createForOfIteratorHelperLoose();
  obj = {};
  ({ gradientColors, gradientStyles } = importDefault(10285)());
  obj = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text };
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  let tmp6 = null;
  if (null != secondaryText) {
    const obj1 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: closure_7, children: secondaryText };
    tmp6 = callback(require(4126) /* Text */.Text, obj1);
  }
  items[1] = tmp6;
  let tmp11 = null;
  if (hasMessageContent) {
    tmp11 = null;
    if (null != messagePreview) {
      const obj2 = { message: messagePreview, lineClamp: 1, maxHeight: closure_6, textColor: "text-subtle", gradientStyles, gradientColors };
      tmp11 = callback(require(10286) /* PreviewIcon */.NativeChannelRowPreview, obj2);
    }
  }
  items[2] = tmp11;
  obj.children = items;
  return closure_12(closure_11, obj);
}
function ReactionNotificationBodyWrapper(arg0) {
  let isMilestone;
  let message;
  let reaction;
  let reactionCount;
  let renderAnnouncementText;
  ({ message, reactionCount } = arg0);
  let tmp = message.embeds.length > 0;
  ({ reaction, renderAnnouncementText, isMilestone } = arg0);
  if (tmp) {
    tmp = message.embeds[0].type === constants2.GIFV;
  }
  let tmp3 = null != message.content;
  if (tmp3) {
    tmp3 = "" !== message.content.trim();
    const str = message.content;
  }
  if (tmp3) {
    tmp3 = !tmp;
  }
  let obj = { message, reaction, hasMessageContent: tmp3 };
  const tmp4 = (function useReactionSystemText(message) {
    message = message.message;
    const reaction = message.reaction;
    const hasMessageContent = message.hasMessageContent;
    const tmp = outer1_13();
    let maybeLoadBundle = tmp;
    const AnimateEmoji = outer1_0(outer1_2[9]).AnimateEmoji;
    const setting = AnimateEmoji.useSetting();
    const previewableMedia = outer1_0(outer1_2[10]).usePreviewableMedia(message);
    const items = [setting, reaction, , , ];
    ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp);
    const callback = outer1_3.useCallback(() => {
      let name;
      if (null != reaction) {
        name = reaction.emoji.name;
      }
      if (null == name) {
        return null;
      } else {
        let name1;
        if (null != reaction) {
          name1 = reaction.emoji.name;
        }
        if (null != name1) {
          let id;
          if (null != reaction) {
            id = reaction.emoji.id;
          }
          if (null == id) {
            let obj = { style: tmp.italic, variant: "text-sm/normal", children: reaction.emoji.name };
            return outer2_10(outer2_0(outer2_2[11]).Text, obj, reaction.emoji.name);
          }
        }
        let id1;
        if (null != reaction) {
          id1 = reaction.emoji.id;
        }
        let emojiURL;
        if (null != id1) {
          obj = outer2_1(outer2_2[12]);
          obj = { id: reaction.emoji.id };
          let animated = setting;
          if (setting) {
            animated = reaction.emoji.animated;
          }
          obj.animated = animated;
          obj.size = outer2_0(outer2_2[13]).DEFAULT_EMOJI_SIZE;
          emojiURL = obj.getEmojiURL(obj);
        }
        const obj1 = {};
        ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = tmp);
        obj1.src = emojiURL;
        obj1.name = reaction.emoji.name;
        return outer2_10(outer2_1(outer2_2[14]), obj1);
      }
    }, items);
    const items1 = [callback, hasMessageContent, message, previewableMedia];
    return outer1_3.useMemo(() => {
      if (0 !== previewableMedia.length) {
        if (!hasMessageContent) {
          if (1 === previewableMedia.length) {
            const first = previewableMedia[0];
            const type = first.type;
            if (outer2_0(outer2_2[10]).PreviewableMediaTypes.IMAGE === type) {
              let obj = {};
              const intl11 = outer2_0(outer2_2[15]).intl;
              obj = { emojiHook: callback };
              obj.text = intl11.format(outer2_0(outer2_2[15]).t.I7mNcA, obj);
              obj.secondaryText = null;
              return obj;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.VIDEO === type) {
              const obj1 = {};
              const intl10 = outer2_0(outer2_2[15]).intl;
              const obj2 = { emojiHook: callback };
              obj1.text = intl10.format(outer2_0(outer2_2[15]).t["Umew/z"], obj2);
              obj1.secondaryText = null;
              return obj1;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.AUDIO === type) {
              const obj3 = {};
              const intl9 = outer2_0(outer2_2[15]).intl;
              const obj4 = { emojiHook: callback };
              obj3.text = intl9.format(outer2_0(outer2_2[15]).t["P/bwx9"], obj4);
              obj3.secondaryText = first.media.filename;
              return obj3;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.FILE === type) {
              const obj5 = {};
              const intl8 = outer2_0(outer2_2[15]).intl;
              const obj6 = { emojiHook: callback };
              obj5.text = intl8.format(outer2_0(outer2_2[15]).t.TXNjGW, obj6);
              obj5.secondaryText = first.media.filename;
              return obj5;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.STICKER === type) {
              const obj7 = {};
              const intl7 = outer2_0(outer2_2[15]).intl;
              const obj8 = { emojiHook: callback };
              obj7.text = intl7.format(outer2_0(outer2_2[15]).t.pnm8NC, obj8);
              obj7.secondaryText = null;
              return obj7;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
              const obj9 = {};
              const intl6 = outer2_0(outer2_2[15]).intl;
              const obj10 = { emojiHook: callback };
              obj9.text = intl6.format(outer2_0(outer2_2[15]).t.k6YnQO, obj10);
              obj9.secondaryText = null;
              return obj9;
            } else if (outer2_0(outer2_2[10]).PreviewableMediaTypes.GIF === type) {
              const obj11 = {};
              const intl5 = outer2_0(outer2_2[15]).intl;
              const obj12 = { emojiHook: callback };
              obj11.text = intl5.format(outer2_0(outer2_2[15]).t["3oS3Jq"], obj12);
              obj11.secondaryText = null;
              return obj11;
            } else {
              const obj13 = {};
              const intl4 = outer2_0(outer2_2[15]).intl;
              const obj14 = { emojiHook: callback };
              obj13.text = intl4.format(outer2_0(outer2_2[15]).t.sHV43G, obj14);
              obj13.secondaryText = null;
              return obj13;
            }
          } else if (outer2_1(outer2_2[16])(message)) {
            const obj15 = {};
            const intl3 = outer2_0(outer2_2[15]).intl;
            const obj16 = { emojiHook: callback };
            obj15.text = intl3.format(outer2_0(outer2_2[15]).t["8xg9ZQ"], obj16);
            obj15.secondaryText = null;
            return obj15;
          } else {
            const intl = outer2_0(outer2_2[15]).intl;
            obj = { emojiHook: callback, count: previewableMedia.length };
            const everyResult = previewableMedia.every((type) => type.type === outer3_0(outer3_2[10]).PreviewableMediaTypes.FILE);
            const intl2 = outer2_0(outer2_2[15]).intl;
            const obj17 = { emojiHook: callback, count: previewableMedia.length };
            let formatResult1 = intl2.format(outer2_0(outer2_2[15]).t.UNRyki, obj17);
            const obj18 = {};
            if (everyResult) {
              formatResult1 = formatResult;
            }
            obj18.text = formatResult1;
            obj18.secondaryText = null;
            return obj18;
          }
        }
      }
      const obj19 = {};
      const intl12 = outer2_0(outer2_2[15]).intl;
      const format = intl12.format;
      const t = outer2_0(outer2_2[15]).t;
      if (hasMessageContent) {
        const obj20 = { emojiHook: callback };
        let formatResult2 = format(t.sHV43G, obj20);
      } else {
        const obj21 = { emojiHook: callback };
        formatResult2 = format(t.ZOzpKt, obj21);
      }
      obj19.text = formatResult2;
      obj19.secondaryText = null;
      return obj19;
    }, items1);
  })(obj);
  const secondaryText = tmp4.secondaryText;
  let obj1 = require(10266) /* hasMedia */;
  const hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  let obj2 = require(10306) /* useGetInitialMessagePreview */;
  obj = { message };
  if (hasPreviewableMedia) {
    message = obj2.useGetInitialMessagePreview(obj);
  }
  if (renderAnnouncementText) {
    obj = {};
    let intl2 = require(1212) /* getSystemLocale */.intl;
    obj1 = { count: reactionCount };
    obj.text = intl2.format(require(1212) /* getSystemLocale */.t.Tqk79E, obj1);
    return callback(ReactionNotificationBody, obj);
  } else if (isMilestone) {
    let intl = require(1212) /* getSystemLocale */.intl;
    let format = intl.format;
    let t = require(1212) /* getSystemLocale */.t;
    if (tmp3) {
      obj2 = { count: reactionCount };
      let formatResult = format(t.NfZxrD, obj2);
    } else {
      let obj3 = { count: reactionCount };
      formatResult = format(t.vfYN5b, obj3);
    }
    let obj4 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return callback(ReactionNotificationBody, obj4);
  } else {
    let obj5 = { text: tmp4.text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return callback(ReactionNotificationBody, obj5);
  }
}
function ReactorNotificationIcon(notification) {
  let channel;
  let guild;
  let user;
  ({ user, guild, channel } = notification.notification);
  if (notification.isMilestone) {
    if (channel.isGroupDM()) {
      let obj = { channel, size: require(1273) /* Button */.AvatarSizes.NORMAL };
      let tmp8Result = callback(importDefault(9134), obj);
      const tmp17 = importDefault(9134);
    }
    return tmp8Result;
  }
  if (null != user) {
    obj = { user };
    let id;
    if (null != guild) {
      id = guild.id;
    }
    obj.guildId = id;
    obj.size = require(1273) /* Button */.AvatarSizes.NORMAL;
    tmp8Result = callback(require(1273) /* Button */.Avatar, obj);
    const tmp8 = callback;
  } else {
    obj = { guild, size: require(5513) /* makeSizeStyle */.GuildIconSizes.NORMAL, style: tmp.guildIcon };
    tmp8Result = callback(importDefault(5513), obj);
    const tmp5 = importDefault(5513);
  }
}
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_6, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = set);
({ ChannelTypes: closure_8, MessageEmbedTypes: closure_9 } = ME);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 } };
_createForOfIteratorHelperLoose = { height: 16, width: 16 };
let tmp5;
if (!isWindows.isIOS()) {
  let obj1 = { translateY: 2 };
  let items = [obj1];
  tmp5 = items;
}
_createForOfIteratorHelperLoose.transform = tmp5;
_createForOfIteratorHelperLoose.imageEmoji = _createForOfIteratorHelperLoose;
let obj2 = { fontStyle: "italic" };
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (isWindows.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
obj2.fontFamily = str;
_createForOfIteratorHelperLoose.italic = obj2;
isWindows = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.guildIcon = isWindows;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  notification = notification.notification;
  let id;
  id = undefined;
  let message;
  let c7;
  let constants;
  let userAuthor;
  const tmp = _createForOfIteratorHelperLoose();
  const channel = notification.channel;
  const guild = notification.guild;
  const parentChannel = notification.parentChannel;
  id = undefined;
  if (null != guild) {
    id = guild.id;
  }
  if (null == id) {
    id = channel.guild_id;
  }
  id = channel.id;
  let tmp3 = channel.type === constants.GUILD_ANNOUNCEMENT;
  message = notification.message;
  let obj = notification(guild[17]);
  let type;
  if (null != channel) {
    type = channel.type;
  }
  const result = obj.isReactionMilestoneNotification(message.reactions, type);
  c7 = result;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(() => notification(guild[24]).sumBy(message.reactions, (count_details) => {
    count_details = count_details.count_details;
    let burst;
    if (null != count_details) {
      burst = count_details.burst;
    }
    let num = 0;
    if (null != burst) {
      num = burst;
    }
    let normal;
    if (null != count_details) {
      normal = count_details.normal;
    }
    let num2 = 0;
    if (null != normal) {
      num2 = normal;
    }
    return num + num2;
  }), items);
  if (tmp3) {
    tmp3 = 1 !== memo;
  }
  constants = tmp3;
  userAuthor = null;
  if (!tmp3) {
    userAuthor = null;
    if (!result) {
      let obj1 = notification(guild[25]);
      userAuthor = obj1.getUserAuthor(notification.user, channel);
    }
  }
  let obj2 = notification(guild[26]);
  const items1 = [id];
  let colorString;
  const stateFromStores = obj2.useStateFromStores(items1, () => id.roleStyle);
  if (null != userAuthor) {
    colorString = userAuthor.colorString;
  }
  let tmp14Result;
  if ("dot" === stateFromStores) {
    if (undefined !== tmp12) {
      obj = { color: tmp12 };
      let colorStrings;
      if (null != userAuthor) {
        colorStrings = userAuthor.colorStrings;
      }
      let tmp18 = null;
      if (null != colorStrings) {
        tmp18 = colorStrings;
      }
      obj.colors = tmp18;
      obj.containerStyles = tmp.newContainerRoleDot;
      tmp14Result = callback(notification(guild[22]).RoleDot, obj);
      const tmp14 = callback;
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp3, result];
  const items3 = [channel.id, id, id, message.id, , ];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = parentChannel.useMemo(() => {
    const obj = { type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str };
    return obj;
  }, items2);
  const items4 = [id];
  callback = parentChannel.useCallback(() => {
    let obj = notification(guild[17]);
    obj = { type: notification.type, dismissReason: "notification_clicked", guildId: id, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    obj.trackDismissed(obj);
    channel(guild[27]).popAll();
    const obj3 = channel(guild[27]);
    notification(guild[28]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj4 = notification(guild[28]);
    channel(guild[29]).clearNotification();
  }, items3);
  const callback1 = parentChannel.useCallback(() => {
    let obj = channel(guild[27]);
    obj = { channelId: id };
    return obj.pushLazy(notification(guild[31])(guild[30], guild.paths), obj);
  }, items4);
  obj = { icon: callback(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp14Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: callback(notification(guild[33]).MediaPreviewRightAccessory, { message }) };
  obj1 = { style: tmp.container, children: callback(ReactionNotificationBodyWrapper, obj2) };
  obj2 = { message, reaction: notification.reaction, reactionCount: memo, renderAnnouncementText: tmp3, isMilestone: result };
  obj.children = callback(id, obj1);
  return callback(notification(guild[32]).NotificationPressable, obj);
};
