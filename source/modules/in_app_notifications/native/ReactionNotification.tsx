// Module ID: 10337
// Function ID: 79786
// Name: NotificationBody
// Dependencies: [31, 27, 4122, 10237, 653, 33, 4130, 478, 689, 3803, 10271, 4126, 1392, 10338, 5151, 1212, 5679, 10236, 10277, 10255, 9096, 1273, 5515, 22, 4360, 566, 4337, 4138, 10235, 10279, 1934, 10310, 10309, 2]
// Exports: default

// Module 10337 (NotificationBody)
import NotificationPressable from "NotificationPressable";
import { View } from "transitionToChannel";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import ME from "ME";
import jsxProd from "set";
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
function NotificationBody(arg0) {
  let isMilestone;
  let message;
  let reaction;
  let reactionCount;
  let renderAnnouncementText;
  ({ message, reactionCount } = arg0);
  ({ reaction, renderAnnouncementText, isMilestone } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(10236) /* hasMedia */;
  const hasPreviewableMedia = obj.useHasPreviewableMedia(message);
  let tmp3 = message.embeds.length > 0;
  if (tmp3) {
    tmp3 = message.embeds[0].type === constants2.GIFV;
  }
  let tmp5 = null != message.content;
  if (tmp5) {
    tmp5 = "" !== message.content.trim();
    const str = message.content;
  }
  if (tmp5) {
    tmp5 = !tmp3;
  }
  obj = { message, reaction, hasMessageContent: tmp5 };
  const tmp6 = (function useReactionSystemText(message) {
    message = message.message;
    const reaction = message.reaction;
    const hasMessageContent = message.hasMessageContent;
    const tmp = outer1_13();
    let NotificationPressable = tmp;
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
  const secondaryText = tmp6.secondaryText;
  let obj2 = require(10277) /* useGetInitialMessagePreview */;
  obj = { message };
  const getInitialMessagePreview = obj2.useGetInitialMessagePreview(obj);
  let obj4 = require(10236) /* hasMedia */;
  const messagePreviewTextVariant = obj4.getMessagePreviewTextVariant();
  if (renderAnnouncementText) {
    let obj1 = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic };
    let intl2 = require(1212) /* getSystemLocale */.intl;
    obj2 = { count: reactionCount };
    obj1.children = intl2.format(require(1212) /* getSystemLocale */.t.Tqk79E, obj2);
    return callback(require(4126) /* Text */.Text, obj1);
  } else if (isMilestone) {
    let intl = require(1212) /* getSystemLocale */.intl;
    let format = intl.format;
    let t = require(1212) /* getSystemLocale */.t;
    if (tmp5) {
      let obj3 = { count: reactionCount };
      let formatResult = format(t.NfZxrD, obj3);
    } else {
      obj4 = { count: reactionCount };
      formatResult = format(t.vfYN5b, obj4);
    }
    let obj5 = {};
    let obj6 = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: formatResult };
    let items = [callback(require(4126) /* Text */.Text, obj6), , ];
    let tmp33 = null;
    if (null !== secondaryText) {
      let obj7 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: closure_7, children: secondaryText };
      tmp33 = callback(require(4126) /* Text */.Text, obj7);
    }
    items[1] = tmp33;
    let tmp39Result = null;
    if (tmp5) {
      let obj8 = {};
      if (hasPreviewableMedia) {
        message = getInitialMessagePreview;
      }
      obj8.message = message;
      obj8.lineClamp = 1;
      obj8.maxHeight = closure_6;
      obj8.textColor = "text-subtle";
      tmp39Result = callback(require(10255) /* PreviewIcon */.NativeChannelRowPreview, obj8);
      const tmp39 = callback;
    }
    items[2] = tmp39Result;
    obj5.children = items;
    return closure_12(closure_11, obj5);
  } else {
    let obj9 = {};
    let obj10 = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: tmp6.text };
    let items1 = [callback(require(4126) /* Text */.Text, obj10), , ];
    let tmp14 = null;
    if (null !== secondaryText) {
      let obj11 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: closure_7, children: secondaryText };
      tmp14 = callback(require(4126) /* Text */.Text, obj11);
    }
    items1[1] = tmp14;
    let tmp20Result = null;
    if (tmp5) {
      let obj12 = {};
      let tmp23 = message;
      if (hasPreviewableMedia) {
        tmp23 = getInitialMessagePreview;
      }
      obj12.message = tmp23;
      obj12.lineClamp = 1;
      obj12.maxHeight = closure_6;
      obj12.textColor = "text-subtle";
      tmp20Result = callback(require(10255) /* PreviewIcon */.NativeChannelRowPreview, obj12);
      const tmp20 = callback;
    }
    items1[2] = tmp20Result;
    obj9.children = items1;
    return closure_12(closure_11, obj9);
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
      let tmp8Result = callback(importDefault(9096), obj);
      const tmp17 = importDefault(9096);
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
    obj = { guild, size: require(5515) /* makeSizeStyle */.GuildIconSizes.NORMAL, style: tmp.guildIcon };
    tmp8Result = callback(importDefault(5515), obj);
    const tmp5 = importDefault(5515);
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
  const memo = parentChannel.useMemo(() => notification(guild[23]).sumBy(message.reactions, (count_details) => {
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
      let obj1 = notification(guild[24]);
      userAuthor = obj1.getUserAuthor(notification.user, channel);
    }
  }
  let obj2 = notification(guild[25]);
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
      tmp14Result = callback(notification(guild[21]).RoleDot, obj);
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
    channel(guild[26]).popAll();
    const obj3 = channel(guild[26]);
    notification(guild[27]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj4 = notification(guild[27]);
    channel(guild[28]).clearNotification();
  }, items3);
  const callback1 = parentChannel.useCallback(() => {
    let obj = channel(guild[26]);
    obj = { channelId: id };
    return obj.pushLazy(notification(guild[30])(guild[29], guild.paths), obj);
  }, items4);
  obj = { icon: callback(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp14Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: callback(notification(guild[32]).MediaPreviewRightAccessory, { message }) };
  obj1 = { style: tmp.container, children: callback(NotificationBody, obj2) };
  obj2 = { message, reaction: notification.reaction, reactionCount: memo, renderAnnouncementText: tmp3, isMilestone: result };
  obj.children = callback(id, obj1);
  return callback(notification(guild[31]).NotificationPressable, obj);
};
