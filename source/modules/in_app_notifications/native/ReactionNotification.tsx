// Module ID: 10324
// Function ID: 79712
// Name: ReactorNotificationIcon
// Dependencies: []
// Exports: default

// Module 10324 (ReactorNotificationIcon)
function ReactorNotificationIcon(isMilestone) {
  let guild;
  let user;
  ({ user, guild } = isMilestone);
  if (isMilestone.isMilestone) {
    let obj = { style: tmp.clydeNotificationIcon, children: callback(arg1(dependencyMap[10]).ClydeIcon, {}) };
    let tmp9Result = callback(View, obj);
  } else if (null != user) {
    obj = { user };
    let id;
    if (null != guild) {
      id = guild.id;
    }
    obj.guildId = id;
    obj.size = arg1(dependencyMap[6]).AvatarSizes.NORMAL;
    tmp9Result = callback(arg1(dependencyMap[6]).Avatar, obj);
    const tmp9 = callback;
  } else {
    obj = { guild, size: arg1(dependencyMap[11]).GuildIconSizes.NORMAL };
    tmp9Result = callback(importDefault(dependencyMap[11]), obj);
    const tmp6 = importDefault(dependencyMap[11]);
  }
  return tmp9Result;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_6, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = arg1(dependencyMap[3]));
const ChannelTypes = arg1(dependencyMap[4]).ChannelTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.NORMAL];
let obj = arg1(dependencyMap[7]);
obj = { newContainerRoleDot: {}, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 } };
obj = { hideWhenScrolling: null, autoCapitalize: null };
let obj3 = arg1(dependencyMap[8]);
let tmp5;
if (!obj3.isIOS()) {
  const obj1 = { translateY: 2 };
  const items = [obj1];
  tmp5 = items;
}
obj.transform = tmp5;
obj.imageEmoji = obj;
const obj2 = {};
const tmp3 = arg1(dependencyMap[5]);
let num = 0;
if (obj7.isIOS()) {
  num = 4;
}
obj2.marginBottom = num;
obj.notificationBodyText = obj2;
obj3 = { fontStyle: "italic" };
const obj7 = arg1(dependencyMap[8]);
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (obj9.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
obj3.fontFamily = str;
obj.italic = obj3;
let closure_12 = obj.createStyles(obj);
const obj9 = arg1(dependencyMap[8]);
const obj4 = {};
const obj5 = { __v_isVNode: "string", _$esjava$I_x: "string", EmbeddedActivitiesStore: "color", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BRAND, width: tmp4, height: tmp4, borderRadius: tmp4 / 2 };
obj4.clydeNotificationIcon = obj5;
let closure_13 = arg1(dependencyMap[7]).createStyles(obj4);
const obj10 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  let channel;
  let user;
  notification = notification.notification;
  const arg1 = notification;
  let id;
  let ChannelTypes;
  let message;
  let result;
  let tmp4;
  let callback2;
  const tmp = callback2();
  const importDefault = tmp;
  const AnimateEmoji = arg1(dependencyMap[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const dependencyMap = setting;
  ({ user, channel } = notification);
  const React = channel;
  const guild = notification.guild;
  const View = guild;
  const parentChannel = notification.parentChannel;
  let closure_5 = parentChannel;
  const reaction = notification.reaction;
  id = undefined;
  if (null != guild) {
    id = guild.id;
  }
  if (null == id) {
    id = channel.guild_id;
  }
  id = channel.id;
  ChannelTypes = id;
  tmp4 = channel.type === ChannelTypes.GUILD_ANNOUNCEMENT;
  message = notification.message;
  let obj = arg1(dependencyMap[13]);
  let type;
  if (null != channel) {
    type = channel.type;
  }
  result = obj.isReactionMilestoneNotification(message.reactions, type);
  const items = [setting, reaction, , , ];
  ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp);
  const callback = React.useCallback(() => {
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
          return message(notification(setting[14]).Text, obj, reaction.emoji.name);
        }
      }
      let id1;
      if (null != reaction) {
        id1 = reaction.emoji.id;
      }
      let emojiURL;
      if (null != id1) {
        obj = tmp(setting[15]);
        obj = { id: reaction.emoji.id };
        let animated = setting;
        if (setting) {
          animated = reaction.emoji.animated;
        }
        obj.animated = animated;
        obj.size = notification(setting[16]).DEFAULT_EMOJI_SIZE;
        emojiURL = obj.getEmojiURL(obj);
      }
      const obj1 = {};
      ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = tmp);
      obj1.src = emojiURL;
      obj1.name = reaction.emoji.name;
      return message(tmp(setting[17]), obj1);
    }
  }, items);
  const items1 = [message.reactions];
  const memo = React.useMemo(() => notification(setting[18]).sumBy(message.reactions, (count_details) => {
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
  }), items1);
  if (tmp4) {
    tmp4 = 1 !== memo;
  }
  let userAuthor = null;
  if (!tmp4) {
    userAuthor = null;
    if (!result) {
      let obj1 = arg1(dependencyMap[19]);
      userAuthor = obj1.getUserAuthor(user, channel);
    }
  }
  callback2 = userAuthor;
  let obj2 = arg1(dependencyMap[20]);
  const items2 = [closure_5];
  let colorString;
  const stateFromStores = obj2.useStateFromStores(items2, () => parentChannel.roleStyle);
  if (null != userAuthor) {
    colorString = userAuthor.colorString;
  }
  let tmp16Result;
  if ("dot" === stateFromStores) {
    if (undefined !== tmp14) {
      obj = { color: tmp14 };
      let colorStrings;
      if (null != userAuthor) {
        colorStrings = userAuthor.colorStrings;
      }
      let tmp20 = null;
      if (null != colorStrings) {
        tmp20 = colorStrings;
      }
      obj.colors = tmp20;
      obj.containerStyles = tmp.newContainerRoleDot;
      tmp16Result = message(arg1(dependencyMap[6]).RoleDot, obj);
      const tmp16 = message;
    }
  }
  const items3 = [channel, parentChannel, guild, userAuthor, tmp4, result];
  const memo1 = React.useMemo(() => {
    const obj = { type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str };
    return obj;
  }, items3);
  let obj4 = arg1(dependencyMap[8]);
  let str2 = "text-md/medium";
  if (obj4.isIOS()) {
    str2 = "text-md/normal";
  }
  if (tmp4) {
    obj = { variant: str2, color: "text-default", style: tmp.italic };
    const intl4 = arg1(dependencyMap[21]).intl;
    obj1 = { count: memo };
    obj.children = intl4.format(arg1(dependencyMap[21]).t.Tqk79E, obj1);
    let tmp22Result = message(arg1(dependencyMap[14]).Text, obj);
  } else if (result) {
    obj2 = { variant: str2, color: "text-default", style: tmp.italic };
    const intl3 = arg1(dependencyMap[21]).intl;
    const obj3 = { count: memo };
    obj2.children = intl3.format(arg1(dependencyMap[21]).t.KTurAR, obj3);
    tmp22Result = message(arg1(dependencyMap[14]).Text, obj2);
  } else {
    obj4 = {};
    const obj5 = { variant: str2, color: "text-default" };
    const items4 = [, ];
    ({ notificationBodyText: arr5[0], italic: arr5[1] } = tmp);
    obj5.style = items4;
    if (null != str) {
      if ("" !== str.trim()) {
        const intl2 = arg1(dependencyMap[21]).intl;
        const obj6 = { emojiHook: callback };
        let formatResult = intl2.format(arg1(dependencyMap[21]).t.sHV43G, obj6);
      }
      obj5.children = formatResult;
      const items5 = [tmp24(tmp27, obj5), ];
      const obj7 = { message, lineClamp: id, maxHeight: reaction };
      items5[1] = message(arg1(dependencyMap[22]).NativeChannelRowPreview, obj7);
      obj4.children = items5;
      tmp22Result = tmp22(tmp23, obj4);
    }
    const intl = arg1(dependencyMap[21]).intl;
    const obj8 = { emojiHook: callback };
    formatResult = intl.format(arg1(dependencyMap[21]).t.ZOzpKt, obj8);
    const tmp22 = tmp4;
    const tmp23 = result;
    const tmp24 = message;
  }
  const items6 = [channel.id, id, id, message.id, , ];
  ({ inAppNotificationId: arr7[4], type: arr7[5] } = notification);
  const items7 = [id];
  const callback1 = React.useCallback(() => {
    let obj = notification(setting[13]);
    obj = { type: notification.type, dismissReason: "notification_clicked", guildId: id, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    obj.trackDismissed(obj);
    tmp(setting[23]).popAll();
    const obj3 = tmp(setting[23]);
    notification(setting[24]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj4 = notification(setting[24]);
    tmp(setting[25]).clearNotification();
  }, items6);
  callback2 = React.useCallback(() => {
    let obj = tmp(setting[23]);
    obj = { channelId: id };
    return obj.pushLazy(notification(setting[27])(setting[26], setting.paths), obj);
  }, items7);
  const obj9 = { icon: message(ReactorNotificationIcon, { user, guild, isMilestone: result }), accessoryLabelNode: tmp16Result };
  const obj10 = { style: tmp.container, children: tmp22Result };
  obj9.children = message(View, obj10);
  obj9.header = memo1;
  obj9.onPress = callback1;
  obj9.onSettingsPress = callback2;
  obj9.notification = notification;
  return message(arg1(dependencyMap[28]).NotificationPressable, obj9);
};
