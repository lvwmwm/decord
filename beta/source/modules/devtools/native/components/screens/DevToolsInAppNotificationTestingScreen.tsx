// Module ID: 15329
// Function ID: 15330
// Name: DevToolsInAppNotificationTestingScreen
// Dependencies: [19, 17, 5814, 2049, 4480, 2045, 2067, 2099, 1372, 1074, 21, 4836, 576, 4528, 8048, 9554, 9556, 5581, 11, 1613, 1177, 5999, 5917, 15139, 5924, 2]
// Exports: default

// Module 15329 (DevToolsInAppNotificationTestingScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import StickersTypes from "StickersTypes" /* 5581 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 9556 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 5814 */;
import MessageRecord from "MessageRecord" /* 4480 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let InAppNotificationTypes;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let obj3;
function icon() {
  return closure_1_14(require("WarningIcon").WarningIcon, {});
}
function onDismiss() {
  const obj = InAppNotificationActionCreatorsDefault;
  return obj.clearNotification();
}
function getSelectedGuildChannel() {
  let guild;
  let obj;
  const channelId = SelectedChannelStore.getChannelId();
  let channel;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (null == channel) {
    const obj3 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open(obj3);
    obj = null;
  } else {
    const guildId = channel.getGuildId();
    obj = { channel, guild };
    guild = undefined;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
  }
  let tmp10 = null;
  if (null != obj) {
    let obj9;
    if (null == obj.guild) {
      const obj6 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a guild channel first", toastDurationMs: 4000 };
      const obj5 = ToastActionCreatorsDefault;
      obj5.open(obj6);
      obj9 = null;
    } else {
      obj9 = { channel: null, guild: null };
      ({ channel: obj4.channel, guild: obj4.guild } = obj);
    }
    tmp10 = obj9;
  }
  return tmp10;
}
function buildTestMessageData(arg0, items) {
  let cast;
  let date;
  let guild;
  let items2;
  let obj;
  let obj14;
  let obj8;
  if (items === undefined) {
    items = [];
  }
  const channelId = SelectedChannelStore.getChannelId();
  let channel1;
  if (null != channelId) {
    channel1 = ChannelStore.getChannel(channelId);
  }
  if (null == channel1) {
    const obj3 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open(obj3);
    obj = null;
  } else {
    const guildId = channel1.getGuildId();
    obj = { channel: channel1, guild };
    guild = undefined;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
  }
  let currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    const obj5 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
    const obj4 = ToastActionCreatorsDefault;
    obj4.open(obj5);
    currentUser = null;
  }
  if (null != obj) {
    if (null != currentUser) {
      let tmp14;
      if ("media-only" === arg0) {
        let obj9;
        const obj6 = { content: "", attachments: [], stickerItems: items1 };
        const stickerById = StickersStore.getStickerById(c17);
        const tmp21 = c17;
        if (null != stickerById) {
          const obj7 = { id: null, format_type: null, name: null };
          ({ id: obj11.id, format_type: obj11.format_type, name: obj11.name } = stickerById);
          obj9 = obj7;
        } else {
          obj9 = { id: tmp21, format_type: StickersTypes.StickerFormat.APNG, name: "Cheer" };
        }
        items1 = [obj9];
        tmp14 = obj6;
      } else if ("text-and-media" === arg0) {
        const obj10 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: items2, stickerItems: [] };
        size = { id: cast(obj8.fromTimestamp(Date.now())), url: httpscdndiscordappcomassetsog_img_discord_homepng, proxy_url: httpscdndiscordappcomassetsog_img_discord_homepng, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
        cast = SnowflakeUtilsDefault.cast;
        SnowflakeUtilsDefault;
        const _Date = Date;
        items2 = [size];
        tmp14 = obj10;
        obj8 = SnowflakeUtilsDefault;
      } else if ("text-only" === arg0) {
        tmp14 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
        const obj13 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
      }
      const obj16 = { attachments: null, stickerItems: null, reactions: items };
      ({ attachments: obj12.attachments, stickerItems: obj12.stickerItems } = tmp14);
      let attachments = obj16.attachments;
      const content = tmp14.content;
      const channel = obj.channel;
      if (undefined === attachments) {
        attachments = [];
      }
      let stickerItems = obj16.stickerItems;
      if (undefined === stickerItems) {
        stickerItems = [];
      }
      let reactions = obj16.reactions;
      if (undefined === reactions) {
        reactions = [];
      }
      const _Date2 = Date;
      const obj26 = { id: obj14.fromTimestamp(Date.now()), channel_id: channel.id, author: currentUser, content, attachments, sticker_items: stickerItems, reactions, timestamp: date };
      const _Date3 = Date;
      const self = this;
      const self2 = this;
      obj14 = SnowflakeUtilsDefault;
      const self3 = this;
      const self4 = this;
      date = new Date();
      ({ channel: obj15.channel, guild: obj15.guild } = obj);
      const obj27 = { channel: null, guild: null, user: currentUser, message: new MessageRecord(obj26) };
      return obj27;
    }
  }
  return null;
}
function buildReactionNotification(arg0, items) {
  let REACTION;
  let channel;
  let channel1;
  let message;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [reaction];
    tmp = items;
  }
  const tmp3 = buildTestMessageData(arg0, tmp);
  if (null == tmp3) {
    return null;
  } else {
    ({ channel, message } = tmp3);
    const obj5 = { type: InAppNotificationTypes.REACTION, channel, guild: null, user: null, message, parentChannel: channel1, reaction };
    ({ guild: obj4.guild, user: obj4.user } = tmp3);
    channel1 = undefined;
    const tmp12 = InAppNotificationTypes;
    if (null != channel.parent_id) {
      channel1 = ChannelStore.getChannel(channel.parent_id);
    }
    const obj = { key: message.id, duration: obj2.getNotificationDuration(REACTION), onDismiss, inAppNotificationId: obj3.generateInAppNotificationId() };
    REACTION = tmp12.REACTION;
    obj2 = InAppNotificationUtils;
    obj3 = InAppNotificationUtils;
    const merged = Object.assign(obj);
    return obj5;
  }
}
const ScrollView = react_native.ScrollView;
const createChannelRecord = ChannelRecord.createChannelRecord;
({ ChannelTypes: closure_12, InAppNotificationTypes } = Constants);
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let c17 = "781324722394103808";
let c18 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
const reaction = { emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 1, count_details: { normal: 1 }, burst_count: 0 };
let items = [{ emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 10, count_details: { normal: 10 }, burst_count: 0 }];
let items1 = [{ variant: "text-only", label: "Text Only" }, { variant: "media-only", label: "Media Only" }, { variant: "text-and-media", label: "Message and Media" }];
let obj4 = {
  type: InAppNotificationTypes.MESSAGE,
  label: "Message",
  build: function buildMessageNotification(arg0) {
    let MESSAGE;
    let channel;
    let channel1;
    let message;
    let obj2;
    let obj3;
    const tmp = buildTestMessageData(arg0);
    if (null == tmp) {
      return null;
    } else {
      ({ channel, message } = tmp);
      const obj4 = { type: InAppNotificationTypes.MESSAGE, channel, guild: tmp.guild, parentChannel: channel1, message, mentionCount: 1 };
      channel1 = undefined;
      const tmp9 = InAppNotificationTypes;
      if (null != channel.parent_id) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      const obj = { key: message.id, duration: obj2.getNotificationDuration(MESSAGE), onDismiss, inAppNotificationId: obj3.generateInAppNotificationId() };
      MESSAGE = tmp9.MESSAGE;
      obj2 = InAppNotificationUtils;
      obj3 = InAppNotificationUtils;
      const merged = Object.assign(obj);
      return obj4;
    }
  }
};
let items2 = [
  obj4,
  { type: InAppNotificationTypes.REACTION, label: "Reaction", build: buildReactionNotification },
  {
    type: InAppNotificationTypes.REACTION,
    label: "Reaction Milestone",
    build: function buildReactionMilestoneNotification(arg0) {
      return buildReactionNotification(arg0, items);
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REMINDER,
    label: "Message Reminder",
    build: function buildMessageReminderNotification(arg0) {
      let MESSAGE_REMINDER;
      let channel;
      let date;
      let message;
      let obj2;
      let obj3;
      let obj5;
      let obj6;
      const tmp = buildTestMessageData(arg0);
      if (null == tmp) {
        return null;
      } else {
        ({ channel, message } = tmp);
        const obj = { type: InAppNotificationTypes.MESSAGE_REMINDER, channel, author: tmp.user, savedMessage: obj2 };
        obj2 = { message, saveData: obj3 };
        const _Date = Date;
        const self = this;
        const self2 = this;
        obj3 = { channelId: channel.id, messageId: message.id, savedAt: date };
        date = new Date();
        const obj4 = { key: message.id, duration: obj5.getNotificationDuration(MESSAGE_REMINDER), onDismiss, inAppNotificationId: obj6.generateInAppNotificationId() };
        MESSAGE_REMINDER = InAppNotificationTypes.MESSAGE_REMINDER;
        obj5 = InAppNotificationUtils;
        obj6 = InAppNotificationUtils;
        const merged = Object.assign(obj4);
        return obj;
      }
    }
  }
];
let closure_25 = items2.map((label) => {
  let closure_129_0;
  let closure_129_1;
  ({ type: closure_129_0, build: closure_129_1 } = label);
  const obj = {
    title: label.label,
    options: items1.map((label) => {
      const variant = label.variant;
      return {
        type: variant,
        label: label.label,
        build() {
          return closure_2_1(variant);
        }
      };
    })
  };
  return obj;
});
let obj5 = {
  type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
  label: "Message Failed To Send",
  subLabel: "Enqueues notification using the currently selected channel.",
  build: function buildMessageFailedToSendNotification() {
    let MESSAGE_FAILED_TO_SEND;
    let guild;
    let obj;
    let obj7;
    let obj8;
    const channelId = SelectedChannelStore.getChannelId();
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(channelId);
    }
    if (null == channel) {
      const obj3 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
      const obj2 = ToastActionCreatorsDefault;
      obj2.open(obj3);
      obj = null;
    } else {
      const guildId = channel.getGuildId();
      obj = { channel, guild };
      guild = undefined;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
    }
    if (null == obj) {
      return null;
    } else {
      const cast = SnowflakeUtilsDefault.cast;
      SnowflakeUtilsDefault;
      const _Date = Date;
      const obj4 = SnowflakeUtilsDefault;
      const castResult = cast(obj4.fromTimestamp(Date.now()));
      const obj5 = { type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND, channelId: obj.channel.id, messageId: castResult };
      const obj6 = { key: castResult, duration: obj7.getNotificationDuration(MESSAGE_FAILED_TO_SEND), onDismiss, inAppNotificationId: obj8.generateInAppNotificationId() };
      MESSAGE_FAILED_TO_SEND = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
      obj7 = InAppNotificationUtils;
      obj8 = InAppNotificationUtils;
      const merged = Object.assign(obj6);
      return obj5;
    }
  }
};
const items3 = [
  obj5,
  {
    type: InAppNotificationTypes.FORUM_THREAD_CREATED,
    label: "Forum Thread Created",
    subLabel: "Enqueues notification using the currently selected channel as the parent and a mock thread.",
    build: function buildForumThreadCreatedNotification() {
      let FORUM_THREAD_CREATED;
      let cast;
      let guild;
      let obj4;
      let obj7;
      let obj8;
      let tmp6;
      const tmp = getSelectedGuildChannel();
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        const obj2 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
        const obj = ToastActionCreatorsDefault;
        obj.open(obj2);
        currentUser = null;
      }
      if (null != tmp) {
        if (null != currentUser) {
          const channel = tmp.channel;
          const obj3 = { id: cast(obj4.fromTimestamp(Date.now())), type: tmp6, name: "Test Thread", guild_id: guild.id, parent_id: channel.id, ownerId: currentUser.id };
          guild = tmp.guild;
          tmp6 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          cast = SnowflakeUtilsDefault.cast;
          SnowflakeUtilsDefault;
          const _Date = Date;
          obj4 = SnowflakeUtilsDefault;
          const tmp12 = createChannelRecord(obj3);
          const obj6 = { type: InAppNotificationTypes.FORUM_THREAD_CREATED, thread: tmp12, threadCreator: currentUser, parentChannel: null, guild: null };
          ({ channel: obj5.parentChannel, guild: obj5.guild } = tmp);
          const obj12 = { key: tmp12.id, duration: obj7.getNotificationDuration(FORUM_THREAD_CREATED), onDismiss, inAppNotificationId: obj8.generateInAppNotificationId() };
          FORUM_THREAD_CREATED = InAppNotificationTypes.FORUM_THREAD_CREATED;
          obj7 = InAppNotificationUtils;
          obj8 = InAppNotificationUtils;
          const merged = Object.assign(obj12);
          return obj6;
        }
      }
      return null;
    }
  },
  {
    type: InAppNotificationTypes.BUG_REPORTER,
    label: "Bug Reporter",
    subLabel: "Enqueues notification.",
    build: function buildBugReporterNotification() {
      let BUG_REPORTER;
      let obj3;
      let obj4;
      const obj2 = { key: "dev-tools-bug-reporter-test", duration: obj3.getNotificationDuration(BUG_REPORTER), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      BUG_REPORTER = InAppNotificationTypes.BUG_REPORTER;
      const obj = { type: InAppNotificationTypes.BUG_REPORTER, image: null };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.ALERT,
    label: "Alert",
    subLabel: "Enqueues notification using the currently selected server channel.",
    build: function buildAlertNotification() {
      let ALERT;
      let obj3;
      let obj4;
      const tmp = getSelectedGuildChannel();
      let tmp2 = null;
      if (null != tmp) {
        const obj = { type: InAppNotificationTypes.ALERT, channel: null, guild: null };
        ({ channel: obj.channel, guild: obj.guild } = tmp);
        const obj2 = { key: tmp.guild.id, duration: obj3.getNotificationDuration(ALERT), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
        ALERT = InAppNotificationTypes.ALERT;
        obj3 = InAppNotificationUtils;
        obj4 = InAppNotificationUtils;
        const merged = Object.assign(obj2);
        tmp2 = obj;
      }
      return tmp2;
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let obj5;
      let obj6;
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        const obj2 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
        const obj = ToastActionCreatorsDefault;
        obj.open(obj2);
        currentUser = null;
      }
      let tmp5 = null;
      if (null != currentUser) {
        const _HermesInternal = HermesInternal;
        const MESSAGE_REQUEST = InAppNotificationTypes.MESSAGE_REQUEST;
        const obj3 = { type: InAppNotificationTypes.MESSAGE_REQUEST, author: currentUser, numMutualGuilds: 3 };
        const obj4 = { key: "dev-tools-message-request-" + currentUser.id, duration: obj5.getNotificationDuration(MESSAGE_REQUEST), onDismiss, inAppNotificationId: obj6.generateInAppNotificationId() };
        obj5 = InAppNotificationUtils;
        obj6 = InAppNotificationUtils;
        const merged = Object.assign(obj4);
        tmp5 = obj3;
      }
      return tmp5;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING,
    label: "Restricted Hours Warning",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedHoursWarningNotification() {
      let RESTRICTED_HOURS_WARNING;
      let obj3;
      let obj4;
      const obj2 = { key: "dev-tools-restricted-hours-warning", duration: obj3.getNotificationDuration(RESTRICTED_HOURS_WARNING), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      RESTRICTED_HOURS_WARNING = InAppNotificationTypes.RESTRICTED_HOURS_WARNING;
      const obj = { type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING, title: "Restricted Hours Warning", subtitle: "Test restricted hours warning." };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED,
    label: "Restricted Schedule Updated",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedScheduleUpdatedNotification() {
      let RESTRICTED_SCHEDULE_UPDATED;
      let obj3;
      let obj4;
      let obj = { type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED, title: "Restricted Schedule Updated", subtitle: "Test restricted schedule update." };
      const obj2 = { key: "dev-tools-restricted-schedule-updated", duration: obj3.getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      RESTRICTED_SCHEDULE_UPDATED = InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED;
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  }
];
let size = size_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default function DevToolsInAppNotificationTestingScreen() {
  const tmp = closure_16();
  const tmp2 = useSafeAreaInsetsDefault();
  _require = react.useCallback((build) => {
    const buildResult = build.build();
    if (null != buildResult) {
      const obj = InAppNotificationActionCreatorsDefault;
      obj.enqueueNotification(buildResult);
    }
  }, []);
  let obj = { style: tmp.container, contentContainerStyle: items, children: items1 };
  items = [tmp.content, { paddingBottom: tmp.content.padding + tmp2.bottom }];
  let obj2 = { size: nativeDefault.space.PX_16 };
  let Spacer = require("native").Spacer;
  items1 = [
    closure_14(Spacer, obj2),
    closure_25.map((title) => {
      let options;
      let obj = { children: items };
      const Fragment = react.Fragment;
      const obj2 = {
        title: title.title,
        description: "Enqueues notification using the currently selected channel.",
        hasIcons: true,
        children: options.map((label) => {
          closure_0 = label;
          const obj = {
            label: label.label,
            subLabel: label.subLabel,
            icon: closure_1_14(closure_1_0(closure_1_2[23]).BeakerIcon, {}),
            onPress() {
              return closure_2_0(label);
            },
            trailing: closure_1_14(closure_1_0(closure_1_2[24]).TableRowArrow, {})
          };
          const TableRow = closure_1_0(closure_1_2[22]).TableRow;
          return closure_1_14(TableRow, obj, label.label);
        })
      };
      options = title.options;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items = [authStore2(TableRowGroup, obj2), ];
      const obj3 = { size: nativeDefault.space.PX_16 };
      const Spacer = native.Spacer;
      items[1] = authStore2(Spacer, obj3);
      return closure_15(Fragment, obj, title.title);
    }),

  ];
  let obj3 = {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) => {
      const obj = {
        label: label.label,
        subLabel: label.subLabel,
        icon: closure_1_14(label(dependencyMap[23]).BeakerIcon, {}),
        onPress() {
          return label(label);
        },
        trailing: closure_1_14(label(dependencyMap[24]).TableRowArrow, {})
      };
      const TableRow = label(dependencyMap[22]).TableRow;
      return closure_1_14(TableRow, obj, label.label);
    })
  };
  let TableRowGroup = require("TableRowGroup").TableRowGroup;
  items1[2] = closure_14(TableRowGroup, obj3);
  return closure_15(ScrollView, obj);
};
