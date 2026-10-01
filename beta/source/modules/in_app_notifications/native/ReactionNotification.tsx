// Module ID: 9678
// Function ID: 9679
// Name: ReactionNotification
// Dependencies: [19, 17, 4825, 9555, 1074, 1085, 21, 4836, 1365, 576, 2021, 9590, 4832, 1397, 9679, 6551, 1115, 6720, 9554, 9567, 9568, 9596, 10371, 1177, 5896, 12, 5083, 504, 5039, 4847, 9556, 9598, 1981, 9630, 9634, 2]
// Exports: default

// Module 9678 (ReactionNotification)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import intl13 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import Text_Text from "Text/Text" /* 4832 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import EmojiDefault from "Emoji" /* 6551 */;
import isForwardMessageDefault from "isForwardMessage" /* 6720 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 9556 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 9567 */;
import usePreviewableMedia from "usePreviewableMedia" /* 9590 */;
import ForumPostReactionButton from "ForumPostReactionButton" /* 9679 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1365 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let constants, count_details, dependencyMap;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp6;
let unpackModuleId;
function ReactionNotificationBody(arg0) {
  let gradientColors;
  let gradientStyles;
  let hasMessageContent;
  let messagePreview;
  let secondaryText;
  let text;
  ({ secondaryText, messagePreview } = arg0);
  ({ text, hasMessageContent } = arg0);
  const tmp = closure_13();
  const obj = InAppNotificationUtils;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  const children = [, , ];
  const obj2 = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text };
  useTruncatedGradientColorsDefault();
  children[0] = authStore(Text_Text.Text, obj2);
  let tmp8Result = null;
  const tmp6 = closure_12;
  const tmp7 = unpackModuleId;
  if (null != secondaryText) {
    const obj3 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: metroImportDefault, children: secondaryText };
    tmp8Result = tmp8(tmp2(4832).Text, obj3);
  }
  children[1] = tmp8Result;
  let tmp8Result2 = null;
  if (hasMessageContent) {
    tmp8Result2 = null;
    if (null != messagePreview) {
      const obj4 = { message: messagePreview, lineClamp: 1, maxHeight: metroRequire, textColor: "text-subtle", gradientStyles, gradientColors };
      tmp8Result2 = tmp8(tmp2(9568).NativeChannelRowPreview, obj4);
    }
  }
  children[2] = tmp8Result2;
  return tmp6(tmp7, { children });
}
function ReactionNotificationBodyWrapper(arg0) {
  let closure_2;
  let intl2;
  let isMilestone;
  let italic;
  let message;
  let obj5;
  let reaction;
  let reactionCount;
  let renderAnnouncementText;
  let secondaryText;
  let text;
  ({ message, reaction, reactionCount } = arg0);
  let tmp = message.embeds.length > 0;
  ({ renderAnnouncementText, isMilestone } = arg0);
  if (tmp) {
    tmp = message.embeds[0].type === constants2.GIFV;
  }
  let tmp3 = null != message.content;
  if (tmp3) {
    const str = message.content;
    tmp3 = "" !== str.trim();
  }
  if (tmp3) {
    tmp3 = !tmp;
  }
  dependencyMap = tmp3;
  const tmp4 = closure_13();
  react = tmp4;
  const AnimateEmoji = message(2021).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = message(9590);
  const previewableMedia = obj.usePreviewableMedia(message);
  const items = [setting, reaction, , , ];
  ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp4);
  const emojiHook = react.useCallback(() => {
    let animated;
    let name;
    if (reaction != null) {
      name = tmp.emoji.name;
    }
    if (null == name) {
      return null;
    } else {
      let name1;
      if (reaction != null) {
        name1 = tmp.emoji.name;
      }
      if (null != name1) {
        let id;
        if (reaction != null) {
          id = tmp.emoji.id;
        }
        if (null == id) {
          const obj3 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
          return authStore(Text_Text.Text, obj3, reaction.emoji.name);
        }
      }
      let id1;
      if (reaction != null) {
        id1 = tmp.emoji.id;
      }
      let emojiURL;
      if (null != id1) {
        const obj = { id: reaction.emoji.id, animated, size: ForumPostReactionButton.DEFAULT_EMOJI_SIZE };
        animated = setting;
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (setting) {
          animated = tmp.emoji.animated;
        }
        emojiURL = getEmojiURL(obj);
      }
      const obj5 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: reaction.emoji.name };
      ({ textEmoji: obj2.textEmojiStyle, imageEmoji: obj2.fastImageStyle } = italic);
      return authStore(EmojiDefault, obj5);
    }
  }, items);
  const items1 = [emojiHook, tmp3, message, previewableMedia];
  const memo = react.useMemo(() => {
    let intl10;
    let intl11;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let text;
    if (0 !== previewableMedia.length) {
      const tmp64 = closure_2;
      if (!tmp64) {
        if (1 === previewableMedia.length) {
          const first = arr[0];
          const type = first.type;
          if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
            const obj2 = { text: intl11.format(intl13.t.I7mNcA, obj3), secondaryText: null };
            intl11 = intl13.intl;
            return obj2;
          } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
            const obj4 = { text: intl10.format(intl13.t["Umew/z"], obj5), secondaryText: null };
            intl10 = intl13.intl;
            return obj4;
          } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
            const obj6 = { text: intl9.format(intl13.t["P/bwx9"], obj7), secondaryText: first.media.filename };
            intl9 = intl13.intl;
            return obj6;
          } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
            const obj8 = { text: intl8.format(intl13.t.TXNjGW, obj9), secondaryText: first.media.filename };
            intl8 = intl13.intl;
            return obj8;
          } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
            const obj10 = { text: intl7.format(intl13.t.pnm8NC, obj11), secondaryText: null };
            intl7 = intl13.intl;
            return obj10;
          } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
            const obj12 = { text: intl6.format(intl13.t.k6YnQO, obj13), secondaryText: null };
            intl6 = intl13.intl;
            return obj12;
          } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
            const obj14 = { text: intl5.format(intl13.t["3oS3Jq"], obj15), secondaryText: null };
            intl5 = intl13.intl;
            return obj14;
          } else {
            const obj16 = { text: intl4.format(intl13.t.sHV43G, obj17), secondaryText: null };
            intl4 = intl13.intl;
            return obj16;
          }
        } else if (isForwardMessageDefault(message)) {
          const obj18 = { text: intl3.format(intl13.t["8xg9ZQ"], obj19), secondaryText: null };
          intl3 = intl13.intl;
          return obj18;
        } else {
          const everyResult = previewableMedia.every((type) => type.type === message(closure_1_2[11]).PreviewableMediaTypes.FILE);
          const intl = intl13.intl;
          const obj = { emojiHook, count: previewableMedia.length };
          const formatResult = intl.format(intl13.t.sec4g7, obj);
          const intl2 = intl13.intl;
          const obj20 = { emojiHook, count: previewableMedia.length };
          let formatResult1 = intl2.format(intl13.t.UNRyki, obj20);
          if (everyResult) {
            formatResult1 = formatResult;
          }
          return { text: formatResult1, secondaryText: null };
        }
      }
    }
    const intl12 = intl13.intl;
    const format = intl12.format;
    const t = intl13.t;
    if (closure_2) {
      const obj22 = { emojiHook };
      text = format(t.sHV43G, obj22);
    } else {
      const obj23 = { emojiHook };
      text = format(t.ZOzpKt, obj23);
    }
    return { text, secondaryText: null };
  }, items1);
  ({ secondaryText, text } = memo);
  let obj2 = message(9554);
  const hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  let obj3 = message(9596);
  if (hasPreviewableMedia) {
    message = obj3.useGetInitialMessagePreview({ message });
  }
  if (renderAnnouncementText) {
    let obj4 = { text: intl2.format(tmp5(1115).t.Tqk79E, obj5) };
    intl2 = tmp5(1115).intl;
    obj5 = { count: reactionCount };
    return closure_10(ReactionNotificationBody, obj4);
  } else if (isMilestone) {
    let formatResult;
    let intl = tmp5(1115).intl;
    let format = intl.format;
    let t = tmp5(1115).t;
    if (tmp3) {
      let obj6 = { count: reactionCount };
      formatResult = format(t.NfZxrD, obj6);
    } else {
      const obj7 = { count: reactionCount };
      formatResult = format(t.vfYN5b, obj7);
    }
    let obj8 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj8);
  } else {
    const obj9 = { text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj9);
  }
}
function ReactorNotificationIcon(isMilestone) {
  let channel;
  let guild;
  let id;
  let tmp8Result;
  let tmp9;
  let user;
  isMilestone = isMilestone.isMilestone;
  ({ user, guild, channel } = isMilestone.notification);
  const tmp = closure_13();
  if (isMilestone) {
    if (channel.isGroupDM()) {
      const obj2 = { channel, size: native.AvatarSizes.NORMAL };
      const tmp15 = GroupDMAvatarDefault;
      tmp8Result = authStore(tmp15, obj2);
    }
    return tmp8Result;
  }
  if (null != user) {
    const obj3 = { user, guildId: id, size: tmp9(1177).AvatarSizes.NORMAL };
    id = undefined;
    const Avatar = native.Avatar;
    const tmp8 = authStore;
    tmp9 = require;
    if (guild != null) {
      id = guild.id;
    }
    tmp8Result = tmp8(Avatar, obj3);
  } else {
    const obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp.guildIcon };
    const tmp5 = GuildIconDefault;
    tmp8Result = authStore(tmp5, obj);
  }
}
let react = react_mod;
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportDefault } = InAppNotificationConstants);
({ ChannelTypes: metroImportAll, MessageEmbedTypes: c9 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 }, imageEmoji: { height: 16, width: 16, transform: tmp6 }, italic: obj2, guildIcon: obj3 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
tmp6 = undefined;
if (!PlatformUtils.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp6 = items;
}
PlatformUtils = PlatformUtils_mod;
obj2 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
obj3 = { borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  let closure_8;
  let colorStrings;
  let obj4;
  notification = notification.notification;
  let id;
  let message;
  let c7;
  constants = undefined;
  let userAuthor;
  const tmp = closure_13();
  const channel = notification.channel;
  const guild = notification.guild;
  const parentChannel = notification.parentChannel;
  let id1;
  const user = notification.user;
  if (guild != null) {
    id1 = guild.id;
  }
  if (id1 == null) {
    id1 = channel.guild_id;
  }
  id = channel.id;
  message = notification.message;
  const type = channel.type;
  const GUILD_ANNOUNCEMENT = constants.GUILD_ANNOUNCEMENT;
  const reaction = notification.reaction;
  let type1;
  const isReactionMilestoneNotification = notification(guild[18]).isReactionMilestoneNotification;
  const reactions = message.reactions;
  notification(guild[18]);
  if (channel != null) {
    type1 = channel.type;
  }
  let tmp7 = type === GUILD_ANNOUNCEMENT;
  const result = isReactionMilestoneNotification(reactions, type1);
  c7 = result;
  let obj = parentChannel;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(() => {
    const obj = _mod12;
    return obj.sumBy(message.reactions, (count_details) => {
      count_details = count_details.count_details;
      let num;
      if (count_details != null) {
        num = count_details.burst;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (count_details != null) {
        num2 = count_details.normal;
      }
      if (num2 == null) {
        num2 = 0;
      }
      return num + num2;
    });
  }, items);
  if (tmp7) {
    let num = 1;
    tmp7 = 1 !== memo;
  }
  constants = tmp7;
  userAuthor = null;
  if (!tmp7) {
    userAuthor = null;
    if (!result) {
      const tmp3Result = notification(guild[26]);
      userAuthor = tmp3Result.getUserAuthor(user, channel);
    }
  }
  const items1 = [id];
  let colorString;
  const tmp3Result2 = notification(guild[27]);
  const stateFromStores = tmp3Result2.useStateFromStores(items1, () => id.roleStyle);
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  let tmp14Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      let obj2 = { color: colorString, colors: colorStrings, containerStyles: tmp.newContainerRoleDot };
      colorStrings = undefined;
      const RoleDot = tmp3(tmp4[23]).RoleDot;
      const tmp14 = closure_10;
      if (userAuthor != null) {
        colorStrings = userAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      tmp14Result = tmp14(RoleDot, obj2);
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp7, result];
  const items3 = [channel.id, id, id1, message.id, , ];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = obj.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str }), items2);
  const items4 = [id];
  const callback = obj.useCallback(() => {
    const obj = InAppNotificationUtils;
    const obj2 = { type: notification.type, dismissReason: "notification_clicked", guildId: id1, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    obj.trackDismissed(obj2);
    const obj3 = ModalActionCreatorsDefault;
    obj3.popAll();
    const obj4 = transitionToChannel;
    obj4.transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj5 = InAppNotificationActionCreatorsDefault;
    obj5.clearNotification();
  }, items3);
  const callback1 = obj.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channelId: id };
    return obj.pushLazy(asyncRequire(9598, dependencyMap.paths), obj2, "in-app-notification-settings-modal");
  }, items4);
  let obj3 = { icon: closure_10(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp14Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: closure_10(notification(guild[34]).MediaPreviewRightAccessory, { message }), children: closure_10(id1, obj4) };
  const NotificationPressable = tmp3(tmp4[33]).NotificationPressable;
  obj4 = { style: tmp.container, children: closure_10(ReactionNotificationBodyWrapper, { message, reaction, reactionCount: memo, renderAnnouncementText: tmp7, isMilestone: result }) };
  return closure_10(NotificationPressable, obj3);
};
