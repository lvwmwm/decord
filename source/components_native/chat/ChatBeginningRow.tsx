// Module ID: 11501
// Function ID: 89500
// Name: ChatBeginningRowIcon
// Dependencies: [57, 5, 31, 27, 4122, 1347, 5656, 8439, 5066, 6856, 1352, 1391, 1348, 1907, 1917, 1838, 3758, 3767, 4325, 1849, 653, 1355, 11502, 11476, 10420, 33, 4130, 689, 4629, 1212, 4631, 4636, 4638, 4528, 4126, 3827, 3834, 4660, 10878, 1273, 11503, 7596, 9106, 566, 3969, 7650, 3994, 4320, 8413, 5654, 9644, 4066, 4120, 11504, 11505, 44, 21, 11507, 3830, 8438, 4674, 11511, 5917, 8481, 6289, 1920, 11623, 11626, 7600, 4140, 4543, 11630, 4472, 11631, 5472, 10525, 675, 10203, 7638, 5079, 5073, 3831, 4098, 11633, 1934, 5464, 11634, 7888, 8492, 5492, 11635, 8267, 5737, 4337, 11651, 5515, 8923, 9057, 11653, 10421, 11660, 7498, 3981, 7460, 3946, 1334, 10872, 5606, 9096, 10195, 4074, 11664, 11668, 2]
// Exports: default

// Module 11501 (ChatBeginningRowIcon)
import useIOSCompletionStates from "useIOSCompletionStates";
import closure_4 from "_createForOfIteratorHelperLoose";
import TextLockIcon from "TextLockIcon";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import { isGuildOwner } from "isGuildOwner";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_createForOfIteratorHelperLoose";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";
import Steps from "Steps";
import { MOBILE_MESSAGE_REQUESTS_MODAL_KEY as closure_40 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_41 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import jsxProd from "SCREEN_READER_ENABLED_GETTER";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_38;
let closure_39;
let closure_42;
let closure_43;
let closure_44;
let closure_6;
let closure_7;
const require = arg1;
function ChatBeginningRowIcon(arg0) {
  let IconComponent;
  let isForumPost;
  let isPrivate;
  let isThread;
  let label;
  ({ isPrivate, isThread, isForumPost } = arg0);
  let obj = {};
  if (isForumPost) {
    obj.IconComponent = tmp2(4629).ChatIcon;
    obj.label = tmp2(1212).t.Y4REmB;
    let tmp4 = obj;
  } else if (isThread) {
    obj.IconComponent = tmp2(4631).ThreadIcon;
    obj.label = tmp2(1212).t["7Xm5QI"];
    tmp4 = obj;
  } else if (isPrivate) {
    obj.IconComponent = tmp2(4636).TextLockIcon;
    obj.label = tmp2(1212).t.GK18KJ;
    tmp4 = obj;
  } else {
    obj.IconComponent = tmp2(4638).TextIcon;
    obj.label = tmp2(1212).t.GK18KJ;
    tmp4 = obj;
  }
  obj = { style: _createForOfIteratorHelperLoose().iconContainer };
  obj = { size: "lg", color: "icon-strong" };
  ({ IconComponent, label } = tmp4);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(label);
  obj.children = callback2(IconComponent, obj);
  return callback2(closure_7, obj);
}
function ChatBeginningRowHeader(arg0) {
  let isForumPost;
  let isNSFW;
  let isPrivate;
  let isThread;
  let subtitle;
  let subtitleLink;
  let title;
  ({ subtitle, isForumPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = subtitleLink(4528);
  const tmp2 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  obj = {};
  const items = [callback2(ChatBeginningRowIcon, { isNSFW, isPrivate, isThread, isForumPost }), , ];
  obj = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const items1 = [tmp.title, ];
  const obj1 = {};
  let num = 8;
  if (isForumPost) {
    num = 0;
  }
  obj1.marginBottom = num;
  items1[1] = obj1;
  obj.style = items1;
  obj.children = title;
  items[1] = callback2(subtitleLink(4126).Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    const obj2 = {};
    let str;
    if (tmp2) {
      str = "link";
    }
    obj2.accessibilityRole = str;
    let fn;
    if (tmp2) {
      fn = () => outer1_1(outer1_2[35]).openURL(subtitleLink);
    }
    obj2.onPress = fn;
    obj2.style = tmp.subtitle;
    obj2.variant = "text-md/medium";
    obj2.color = "text-default";
    obj2.children = subtitle;
    tmp7Result = callback2(subtitleLink(4126).Text, obj2);
    const tmp7 = callback2;
  }
  items[2] = tmp7Result;
  obj.children = items;
  return closure_44(closure_43, obj);
}
function LinkManageButtons(arg0) {
  let canEdit;
  let canManageRoles;
  let isPrivate;
  let require;
  let theme;
  ({ canEdit, isPrivate, channel: require } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.TEXT_LINK, theme);
  obj = { style: tmp.ctaContainer };
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    obj = {
      accessibilityRole: "button",
      onPress() {
          return outer1_0(outer1_2[38]).openAddMembersActionSheet(closure_0);
        }
    };
    const items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj.style = items;
    const obj1 = { source: importDefault(11503), size: require(1273) /* Button */.IconSizes.REFRESH_SMALL_16, color: token };
    const items1 = [callback2(require(1273) /* Button */.Icon, obj1), ];
    const obj2 = { style: null, variant: "text-sm/medium", color: "text-link" };
    const items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj2.style = items2;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl.string(require(1212) /* getSystemLocale */.t.dMJ3Y6);
    items1[1] = callback2(require(4126) /* Text */.Text, obj2);
    obj.children = items1;
    isPrivate = callback3(require(4660) /* PressableBase */.PressableOpacity, obj);
  }
  const items3 = [isPrivate, ];
  if (canEdit) {
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
          outer1_1(outer1_2[41]).setSection(outer1_28.OVERVIEW);
          const obj = outer1_1(outer1_2[41]);
          outer1_1(outer1_2[41]).open(id.id);
        }
    };
    const items4 = [, ];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    obj3.style = items4;
    const obj4 = { size: "xs", color: token };
    const items5 = [callback2(require(9106) /* PencilIcon */.PencilIcon, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-link" };
    const items6 = [tmp.ctaLabel];
    obj5.style = items6;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj5.children = intl2.string(require(1212) /* getSystemLocale */.t.GE1Tlo);
    items5[1] = callback2(require(4126) /* Text */.Text, obj5);
    obj3.children = items5;
    canEdit = callback3(require(4660) /* PressableBase */.PressableOpacity, obj3);
  }
  items3[1] = canEdit;
  obj.children = items3;
  return callback3(closure_7, obj);
}
function ThreadOwner(arg0) {
  let guildId;
  let require;
  ({ userId: require, guildId } = arg0);
  let obj = require(566) /* initialize */;
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_24.getUser(closure_0));
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_19];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_0) {
      member = outer1_19.getMember(guildId, closure_0);
    }
    return member;
  });
  let obj2 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_8.roleStyle);
  let nick;
  if (null != stateFromStores1) {
    nick = stateFromStores1.nick;
  }
  if (null == nick) {
    let obj3 = guildId(3969);
    nick = obj3.getName(stateFromStores);
  }
  let str = "???";
  if (null != nick) {
    str = nick;
  }
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  let tmp9 = null;
  if (null != colorString) {
    tmp9 = colorString;
  }
  let colorStrings;
  if (null != stateFromStores1) {
    colorStrings = stateFromStores1.colorStrings;
  }
  let tmp11 = null;
  if (null != colorStrings) {
    tmp11 = colorStrings;
  }
  const tmp = _createForOfIteratorHelperLoose();
  const processColorStringsArray = require(7650) /* processColorStringsInternal */.useProcessColorStringsArray(tmp11);
  require(7650) /* processColorStringsInternal */;
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp22;
    if (null != tmp9) {
      obj = { color: tmp9 };
      tmp22 = obj;
    }
    obj = { experimental_useNativeText: !require(3994) /* isFabric */.isFabric() };
    let tmp26;
    if (tmp14) {
      tmp26 = processColorStringsArray;
    }
    obj.gradientColors = tmp26;
    obj.style = tmp22;
    obj.variant = "text-md/semibold";
    obj.color = "text-default";
    obj.children = str;
    return callback2(require(4126) /* Text */.Text, obj);
  } else {
    obj1 = {};
    let tmp15 = "dot" === stateFromStores2;
    if (tmp15) {
      tmp15 = null != tmp9;
    }
    if (tmp15) {
      obj2 = { color: tmp9, colors: tmp11, containerStyles: tmp.threadCreatorRoleDot };
      tmp15 = callback2(require(1273) /* Button */.RoleDot, obj2);
    }
    const items3 = [tmp15, ];
    obj3 = { variant: "text-md/semibold", color: "text-default", children: str };
    items3[1] = callback2(require(4126) /* Text */.Text, obj3);
    obj1.children = items3;
    return closure_44(closure_43, obj1);
  }
  const obj5 = require(7650) /* processColorStringsInternal */;
}
function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(8413);
  const result = obj.isPrivateGuildChannel(channel);
  let obj1 = channel(5654);
  const appliedTags = obj1.useAppliedTags(channel);
  channel(566);
  [][0] = closure_10;
  let tmp7Result = null;
  if (null != channel.threadMetadata) {
    obj = {};
    obj = { isNSFW: channel.isNSFW(), title: tmp2, isPrivate: result, isThread: true, isForumPost: channel.isForumPost() };
    const items = [callback2(ChatBeginningRowHeader, obj), , , ];
    let tmp11 = null;
    if (channel.isForumPost()) {
      tmp11 = null;
      if (appliedTags.length > 0) {
        obj1 = { style: tmp.tagContainer, children: appliedTags.map((id) => outer1_42(channel(outer1_2[50]).AppliedForumTagPill, { tag: id }, id.id)) };
        tmp11 = callback2(closure_7, obj1);
      }
    }
    items[1] = tmp11;
    let tmp14 = !channel.isForumPost();
    if (tmp14) {
      const obj2 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default" };
      const intl = channel(1212).intl;
      const obj3 = {
        usernameHook(arg0, arg1) {
              return outer1_42(outer1_50, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
            }
      };
      obj2.children = intl.format(channel(1212).t.imPXd5, obj3);
      tmp14 = callback2(channel(4126).Text, obj2);
    }
    items[2] = tmp14;
    let tmp18 = null;
    if (channel.isForumPost()) {
      tmp18 = null;
      if (null == tmp5) {
        const obj4 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default" };
        const intl2 = channel(1212).intl;
        obj4.children = intl2.string(channel(1212).t.mE3KJN);
        tmp18 = callback2(channel(4126).Text, obj4);
      }
    }
    items[3] = tmp18;
    obj.children = items;
    tmp7Result = closure_44(closure_43, obj);
    const tmp7 = closure_44;
    const tmp8 = closure_43;
  }
  return tmp7Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const tmp = importDefault(4320)(channel, true);
  const canResult = closure_21.can(constants2.MANAGE_CHANNELS, channel);
  const tmp2 = importDefault(4320)(channel, false);
  const canResult1 = closure_21.can(constants2.MANAGE_ROLES, channel);
  let obj = channel(8413);
  const result = obj.isPrivateGuildChannel(channel);
  const canResult2 = closure_21.can(constants2.READ_MESSAGE_HISTORY, channel);
  const intl = channel(1212).intl;
  const tmp7 = importDefault(4066)();
  const intl2 = channel(1212).intl;
  if (result) {
    obj = {
      channelName: tmp,
      topicHook() {
          let obj = outer1_1(outer1_2[52]);
          obj = { channelId: channel.id };
          return obj.parseTopic(channel.topic, true, obj);
        }
    };
    let formatResult = intl2.format(tmp9(1212).t.QuwqjG, obj);
  } else if (canResult2) {
    obj = { channelName: tmp };
    formatResult = intl2.formatToPlainString(tmp9(1212).t.JHKUGB, obj);
  } else {
    const obj1 = { channelName: tmp2 };
    formatResult = intl2.format(tmp9(1212).t.hPVEQG, obj1);
  }
  const obj2 = {};
  const obj3 = { title: intl.formatToPlainString(channel(1212).t.q0tgLe, { channelName: tmp }), subtitle: formatResult, isPrivate: result };
  const items = [callback2(ChatBeginningRowHeader, obj3), callback2(LinkManageButtons, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp7 }), ];
  let tmp14 = null;
  if (result) {
    tmp14 = null;
    if (canResult) {
      const obj4 = { channel, guild: channel.guild };
      tmp14 = callback2(importDefault(11504), obj4);
    }
  }
  items[2] = tmp14;
  obj2.children = items;
  return closure_44(closure_43, obj2);
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let obj = guild(566);
  const items = [closure_18];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_18.getDefaultChannel(guild.id));
  if (closure_21.can(constants2.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      obj = { guild, channel };
      let tmp4 = callback2(ChatBeginningRowGuildDefaultChannel, obj);
    }
    return tmp4;
  }
  tmp4 = callback2(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
}
function DMSpamButton(channel) {
  channel = channel.channel;
  const user = channel.user;
  let obj = channel(11626);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      obj = { size: "sm", variant: "destructive" };
      const intl = channel(1212).intl;
      obj.text = intl.string(channel(1212).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = function handleShowReportModal() {
        if (null != message) {
          const result = channel(outer1_2[68]).showReportModalForFirstDM(message, () => {
            message(outer2_2[69]).closePrivateChannel(outer1_0.id, true);
          });
          const obj = channel(outer1_2[68]);
        }
      };
      return callback2(channel(4543).Button, obj);
    }
  }
  return null;
}
function ManageAppButton(application) {
  let dependencyMap;
  let importDefault;
  application = application.application;
  ({ channel: importDefault, oauth2Token: dependencyMap } = application);
  let obj = application(566);
  const items = [closure_9];
  let useIOSCompletionStates = obj.useStateFromStores(items, () => outer1_9.getSelfEmbeddedActivities());
  let tmp2 = null;
  if (application.user.bot) {
    tmp2 = null;
    if (null != application) {
      obj = { size: "sm", variant: "secondary" };
      const intl = application(1212).intl;
      obj.text = intl.string(application(1212).t["5S3sQF"]);
      obj = { size: application(1273).Icon.Sizes.SMALL, source: importDefault(11630), style: tmp.appDMButtonIcon };
      obj.icon = callback2(application(1273).Icon, obj);
      obj.onPress = function onPress() {
        let obj = application(outer1_2[72]);
        obj = {
          application,
          scopes: scopes.scopes,
          onDelete() {
            let obj = outer2_1(outer2_2[74]);
            obj.delete(outer1_2.id);
            const value = outer1_3.get(outer1_0.id);
            obj = {};
            let _location;
            if (null != value) {
              _location = value.location;
            }
            obj.location = _location;
            obj.applicationId = outer1_0.id;
            outer2_1(outer2_2[75]).leaveActivity(obj);
          }
        };
        obj.openAlert("confirm-delete-authed-app", outer1_42(outer1_1(outer1_2[73]), obj));
        obj = { application_id: application.id, channel_id: closure_1.id, channel_type: closure_1.type };
        outer1_1(outer1_2[76]).track(outer1_25.APP_MANAGE_CTA_CLICKED, obj);
      };
      tmp2 = callback2(application(4543).Button, obj);
    }
  }
  return tmp2;
}
function MuteAppButton(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = channel(stateFromStores[43]);
  const items = [closure_23];
  stateFromStores = obj.useStateFromStores(items, () => outer1_23.isChannelMuted(null, channel.id));
  let tmp4Result = null;
  if (channel.user.bot) {
    obj = { size: "sm" };
    let str2 = "destructive";
    if (stateFromStores) {
      str2 = "secondary";
    }
    obj.variant = str2;
    let intl = channel(stateFromStores[29]).intl;
    const string = intl.string;
    const t = channel(stateFromStores[29]).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj.text = stringResult;
    obj = { size: channel(stateFromStores[39]).Icon.Sizes.SMALL };
    if (stateFromStores) {
      let tmp15 = tmp14[77];
    } else {
      tmp15 = tmp14[78];
    }
    obj.source = importDefault(tmp15);
    let WHITE;
    if (!stateFromStores) {
      WHITE = importDefault(stateFromStores[27]).unsafe_rawColors.WHITE;
    }
    obj.color = WHITE;
    obj.style = tmp.appDMButtonIcon;
    obj.icon = closure_42(channel(stateFromStores[39]).Icon, obj);
    obj.onPress = function onPress() {
      if (stateFromStores) {
        let tmpResult = tmp(tmp2[79]);
        let obj = { muted: false };
        const result = tmpResult.updateChannelOverrideSettings(null, channel.id, obj, channel(tmp2[80]).NotificationLabels.Unmuted);
        tmpResult = tmp(tmp2[81]);
        obj = { key: "NOTIFICATIONS_UNMUTED" };
        const intl = channel(tmp2[29]).intl;
        obj.content = intl.string(channel(tmp2[29]).t["/6kulz"]);
        obj.icon = function icon() {
          let obj = { style: outer1_1.unmutedNotificationContainer };
          obj = { source: callback(stateFromStores[78]), color: callback(stateFromStores[27]).unsafe_rawColors.WHITE, style: outer1_1.unmutedNotification };
          obj.children = outer2_42(channel(stateFromStores[39]).Icon, obj);
          return outer2_42(outer2_7, obj);
        };
        tmpResult.open(obj);
      } else {
        const obj1 = { channel };
        tmp(tmp2[82]).openLazy(channel(tmp2[84])(tmp2[83], tmp2.paths), "MessageNotificationChannelActionSheet", obj1);
        const tmpResult1 = tmp(tmp2[82]);
      }
    };
    tmp4Result = closure_42(channel(stateFromStores[70]).Button, obj);
    const tmp10 = closure_42;
    const tmp13 = importDefault;
    const tmp4 = closure_42;
  }
  return tmp4Result;
}
function ChatBeginningRowDMGuard(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => {
    channel = channel.channel;
    return outer1_24.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(arg0);
    obj["user"] = stateFromStores;
    tmp2 = callback2(ChatBeginningRowDM, obj);
  }
  return tmp2;
}
function ChatBeginningRowDM(channel) {
  let authorizedAppToken;
  let authorizedAppsFetchState;
  channel = channel.channel;
  const user = channel.user;
  let dependencyMap;
  let c4;
  authorizedAppsFetchState = undefined;
  let closure_6;
  let userTag;
  function handleCopyUserTag() {
    channel(_undefined[89]).copy(userTag);
    const obj = channel(_undefined[89]);
    const result = channel(_undefined[58]).presentUsernameCopied();
  }
  function handleOpenMutualGuilds() {
    if (null != user) {
      let obj = user(_undefined[82]);
      obj = {
        user,
        onPressMutualGuild(arg0) {
            const result = channel(8267).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
            const obj = channel(8267);
            channel(5737).transitionToGuild(arg0);
            const obj2 = channel(5737);
            user(4098).hideActionSheet();
            const obj3 = user(4098);
            user(4337).popWithKey(outer2_40);
          }
      };
      obj.openLazy(channel(_undefined[84])(_undefined[90], _undefined.paths), "MutualGuildsActionSheet", obj);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  dependencyMap = tmp;
  const analyticsLocations = user(5464)().analyticsLocations;
  let id;
  if (null != user) {
    id = user.id;
  }
  if (null == id) {
    id = closure_29;
  }
  const tmp2Result = user(11634)(id);
  c4 = tmp2Result;
  let obj = channel(566);
  let items = [closure_12];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let id;
    if (null != _undefined2) {
      id = _undefined2.id;
    }
    obj.authorizedAppToken = outer1_12.getNewestTokenForApplication(id);
    obj.authorizedAppsFetchState = outer1_12.getFetchState();
    return obj;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj1 = channel(566);
  let items1 = [closure_14];
  let items2 = [user];
  closure_6 = obj1.useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = outer1_14.getMutualGuilds(user.id);
    }
    return mutualGuilds;
  }, items2);
  let items3 = [user, channel];
  const tmp2 = user(11634);
  const effect = authorizedAppsFetchState.useEffect(() => {
    let getAvatarURL;
    let id;
    let guild_id;
    ({ id, getAvatarURL } = user);
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    user(_undefined[87])(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true, dispatchWait: true });
  }, items3);
  let bot;
  if (null != user) {
    bot = user.bot;
  }
  const items4 = [bot, authorizedAppToken, authorizedAppsFetchState];
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    let bot = null != user;
    if (bot) {
      bot = user.bot;
    }
    if (bot) {
      bot = authorizedAppsFetchState === outer1_13.NOT_FETCHED;
    }
    if (bot) {
      const response = user(_undefined[74]).fetch();
      const obj = user(_undefined[74]);
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    userTag = user(3969).getUserTag(user, { decoration: "never", identifiable: "always" });
    const obj20 = user(3969);
    const name = user(3969).getName(user);
    let intl5 = channel(1212).intl;
    let stringResult = intl5.string(channel(1212).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = channel(1212).intl;
      obj = { username: name };
      stringResult = intl.formatToPlainString(channel(1212).t.Q56TRC, obj);
    }
    obj = { channel, user, showingSpamBanner: channel.showingSpamBanner };
    const tmp16 = callback2(DMSpamButton, obj);
    obj1 = {};
    let obj2 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile(nativeEvent, items) {
          user(_undefined[88])({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
        }
    };
    let intl2 = channel(1212).intl;
    obj2.accessibilityLabel = intl2.string(channel(1212).t.iXAna6);
    let obj3 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(1273).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    obj2.children = callback2(channel(1273).Avatar, obj3);
    const items5 = [callback2(channel(4660).PressableOpacity, obj2), , , , , , ];
    let obj4 = { accessibilityRole: "button", onPress: handleCopyUserTag };
    let intl3 = channel(1212).intl;
    obj4.accessibilityHint = intl3.string(channel(1212).t.y5MwJy);
    let obj5 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    obj4.children = callback2(channel(4126).Text, obj5);
    items5[1] = callback2(channel(4660).PressableOpacity, obj4);
    let tmp25 = null;
    if (!user.isProvisional) {
      let obj6 = { accessibilityRole: "button", onPress: handleCopyUserTag };
      let intl4 = channel(1212).intl;
      obj6.accessibilityHint = intl4.string(channel(1212).t.y5MwJy);
      let obj7 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      obj6.children = callback2(channel(4126).Text, obj7);
      tmp25 = callback2(channel(4660).PressableOpacity, obj6);
    }
    items5[2] = tmp25;
    let obj8 = { style: tmp.dmBeginningMessage, variant: "text-md/medium", color: "text-default", children: stringResult };
    items5[3] = callback2(channel(4126).Text, obj8);
    let tmp33 = null;
    if (user.isProvisional) {
      let obj9 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp33 = callback2(channel(11660).ChatProvisionalAccountExplainerCard, obj9);
    }
    items5[4] = tmp33;
    items5[5] = (function renderMutualGuilds() {
      if (null != arr) {
        if (arr.length >= 1) {
          let num = 5;
          if (arr.length > 5) {
            num = 4;
          }
          const substr = arr.slice(0, num);
          let obj = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: _undefined.mutualGuildsContainer };
          obj = {
            size: channel(_undefined[95]).GuildIconSizes.SMALL,
            names: substr.map((guild) => guild.guild.name),
            totalCount: arr.length,
            children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: channel(5515).GuildIconSizes.SMALL };
                  return outer2_42(user(5515), obj, guild.id);
                })
          };
          const items = [outer1_42(channel(_undefined[94]).GuildIconPile, obj), ];
          obj = { style: _undefined.mutualGuildsLabel, variant: "text-sm/medium", color: "text-default" };
          const intl = channel(_undefined[29]).intl;
          const obj1 = { count: arr.length };
          obj.children = intl.format(channel(_undefined[29]).t.eE3oep, obj1);
          items[1] = outer1_42(channel(_undefined[34]).Text, obj);
          obj.children = items;
          return outer1_44(channel(_undefined[37]).PressableOpacity, obj);
        }
      }
    })();
    let obj10 = { style: tmp.dmButtonRow };
    if (user.isNonUserBot()) {
      obj10.children = null;
      items5[6] = tmp37(tmp38, obj10);
      obj1.children = items5;
      return tmp17(tmp18, obj1);
    } else if (user.bot) {
      let obj11 = {};
      let tmp44 = null;
      if (null != authorizedAppToken) {
        tmp44 = null;
        if (null != tmp2Result) {
          const obj12 = {};
          const obj13 = { channel, user };
          const items6 = [callback2(MuteAppButton, obj13), ];
          const obj14 = { user, application: tmp2Result, channel, oauth2Token: authorizedAppToken };
          items6[1] = callback2(ManageAppButton, obj14);
          obj12.children = items6;
          tmp44 = callback3(closure_43, obj12);
        }
      }
      const items7 = [tmp44, tmp16];
      obj11.children = items7;
      let tmp42Result = callback3(closure_43, obj11);
      const tmp42 = callback3;
      const tmp43 = closure_43;
    } else {
      const obj15 = { reportButton: tmp16 };
      tmp42Result = callback2(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          let obj = user(paths[82]);
          obj = { userId: outer1_1.id, channelId: outer1_0.id };
          obj.openLazy(channel(paths[84])(paths[99], paths.paths), outer2_41, obj);
        }
        let obj = channel(_undefined[43]);
        const items = [outer1_22];
        const stateFromStores = obj.useStateFromStores(items, () => outer2_22.getRelationshipType(outer1_1.id));
        obj = { text: null, size: "sm", variant: "secondary" };
        const Button = channel(_undefined[70]).Button;
        const intl = channel(_undefined[29]).intl;
        obj.text = intl.string(channel(_undefined[29]).t.l4Emac);
        obj.onPress = handleBlock;
        if (stateFromStores === outer1_34.PENDING_INCOMING) {
          obj = { style: _undefined.pendingIncoming };
          const obj1 = { variant: "text-sm/normal", color: "text-default" };
          const intl5 = channel(_undefined[29]).intl;
          const obj2 = {};
          let obj8 = user(_undefined[44]);
          obj2.username = obj8.getName(user);
          obj1.children = intl5.format(channel(_undefined[29]).t.uIomXw, obj2);
          const items1 = [outer1_42(channel(_undefined[34]).Text, obj1), ];
          const obj3 = { style: _undefined.pendingIncomingButtons };
          const obj4 = { text: null, size: "sm", variant: "active" };
          const intl6 = channel(_undefined[29]).intl;
          obj4.text = intl6.string(channel(_undefined[29]).t["+WbSn5"]);
          obj4.onPress = function handleAcceptFriend() {
            let obj = user(paths[97]);
            obj = { userId: outer1_1.id, location: outer2_26.DM_CHANNEL };
            const result = obj.maybeConfirmFriendRequestAccept(obj);
          };
          const items2 = [outer1_42(channel(_undefined[70]).Button, obj4), , , ];
          const obj5 = { text: null, size: "sm", variant: "secondary" };
          const intl7 = channel(_undefined[29]).intl;
          obj5.text = intl7.string(channel(_undefined[29]).t.rQSndv);
          obj5.onPress = function handleIgnoreFriendRequest() {
            let obj = user(paths[96]);
            obj = { location: outer2_26.DM_CHANNEL };
            obj.cancelFriendRequest(outer1_1.id, obj);
          };
          items2[1] = outer1_42(channel(_undefined[70]).Button, obj5);
          const obj6 = { text: null, size: "sm", variant: "secondary" };
          const intl8 = channel(_undefined[29]).intl;
          obj6.text = intl8.string(channel(_undefined[29]).t.l4Emac);
          obj6.onPress = handleBlock;
          items2[2] = outer1_42(channel(_undefined[70]).Button, obj6);
          items2[3] = reportButton;
          obj3.children = items2;
          items1[1] = outer1_44(userTag, obj3);
          obj.children = items1;
          return outer1_44(userTag, obj);
        } else {
          const obj7 = {};
          if (outer1_34.NONE === stateFromStores) {
            if (null == user) {
              obj8 = { text: null, size: "sm", variant: "active" };
              const intl4 = channel(_undefined[29]).intl;
              obj8.text = intl4.string(channel(_undefined[29]).t["PMsq/b"]);
              obj8.onPress = function handleAddFriend() {
                let obj = user(paths[96]);
                obj = { userId: outer1_1.id, context: obj };
                obj = { location: outer2_26.DM_CHANNEL };
                obj.addRelationship(obj);
              };
              let tmp13 = outer1_42(channel(_undefined[70]).Button, obj8);
            } else {
              tmp13 = null;
            }
            let tmp6 = tmp13;
          } else if (outer1_34.FRIEND === stateFromStores) {
            const obj9 = { text: null, size: "sm", variant: "secondary" };
            const intl3 = channel(_undefined[29]).intl;
            obj9.text = intl3.string(channel(_undefined[29]).t.cvSt1J);
            obj9.onPress = function handleRemoveFriend() {
              let obj = channel(paths[98]);
              obj = {
                userDisplayName: user(paths[44]).getName(outer1_1),
                onConfirm() {
                  let obj = user(table[96]);
                  obj = { location: outer3_26.DM_CHANNEL };
                  obj.removeFriend(outer2_1.id, obj);
                }
              };
              obj.confirmRemoveFriend(obj);
            };
            tmp6 = outer1_42(channel(_undefined[70]).Button, obj9);
          } else if (outer1_34.BLOCKED === stateFromStores) {
            const obj10 = { text: null, size: "sm", variant: "secondary" };
            const intl2 = channel(_undefined[29]).intl;
            obj10.text = intl2.string(channel(_undefined[29]).t.XyHpKH);
            obj10.onPress = function handleUnblock() {
              let obj = user(paths[96]);
              obj = { location: outer2_26.DM_CHANNEL };
              obj.unblockUser(outer1_1.id, obj);
            };
            tmp6 = outer1_42(channel(_undefined[70]).Button, obj10);
          } else {
            tmp6 = null;
            if (outer1_34.PENDING_OUTGOING === stateFromStores) {
              const obj11 = { text: null, size: "sm", variant: "active", disabled: true };
              const intl9 = channel(_undefined[29]).intl;
              obj11.text = intl9.string(channel(_undefined[29]).t.xMH6vD);
              obj11.onPress = undefined;
              tmp6 = outer1_42(channel(_undefined[70]).Button, obj11);
            }
          }
          const items3 = [tmp6, , ];
          let tmp18 = null;
          if (stateFromStores !== outer1_34.BLOCKED) {
            tmp18 = tmp2;
          }
          items3[1] = tmp18;
          items3[2] = reportButton;
          obj7.children = items3;
          return outer1_44(outer1_43, obj7);
        }
      }, obj15);
    }
    const obj21 = user(3969);
    tmp17 = callback3;
    tmp18 = closure_43;
    tmp37 = callback2;
    tmp38 = userTag;
  }
}
function ChatBeginningRowButton(style) {
  let IconComponent;
  let iconVariant;
  let onPress;
  let subtitle;
  let title;
  let trailing;
  let obj = { style: style.style };
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  obj = { onPress, icon: callback2(require(7498) /* RowButtonWrapper */.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  obj.children = callback2(require(7498) /* RowButtonWrapper */.RowButton, obj);
  return callback2(closure_7, obj);
}
function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const arr = first(4320)(channel);
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  const dependencyMap = tmp4;
  let obj = channel(566);
  const items = [closure_22];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_22.getRelationshipCount() > 0);
  const items1 = [channel];
  callback = React.useCallback(() => {
    channel(tmp4[102]).navigateToNewGroupDM(channel.id, outer1_27.CHANNEL_TEXT_AREA);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [channel, first, tmp2[1]];
  callback1 = React.useCallback(callback1(items1), items2);
  const items3 = [callback];
  const items4 = [callback1];
  const callback2 = React.useCallback(() => {
    let obj = channel(tmp4[104]);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(tmp4[105]).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback();
    } else {
      obj = { onClick: callback };
      tmp4 = first(tmp4[106])(obj);
    }
  }, items3);
  const callback3 = React.useCallback(() => {
    let obj = channel(tmp4[104]);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(tmp4[105]).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      obj = { onClick: callback1 };
      tmp4 = first(tmp4[106])(obj);
    }
  }, items4);
  const tmp10 = channel.id === channel(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj = { style: tmp.centerHeader };
  obj = { style: tmp.avatarRedesign, channel, size: channel(1273).AvatarSizes.XXLARGE, accessible: false };
  const items5 = [callback2(first(9096), obj), , , ];
  const obj1 = { style: tmp.dmTitle };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  obj1.variant = str;
  obj1.color = "mobile-text-heading-primary";
  obj1.children = arr;
  items5[1] = callback2(channel(4126).Text, obj1);
  const obj2 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default" };
  const intl = channel(1212).intl;
  if (tmp10) {
    const obj3 = { name: arr };
    let formatResult = intl.format(tmp16(1212).t.MFwcqO, obj3);
  } else {
    formatResult = intl.string(tmp16(1212).t["0Q7uk0"]);
  }
  obj2.children = formatResult;
  items5[2] = callback2(channel(4126).Text, obj2);
  let tmp20Result = null;
  if (!tmp10) {
    const obj4 = {};
    let tmp22 = null;
    if (stateFromStores) {
      const obj5 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: channel(10195).GroupPlusIcon, iconVariant: "default" };
      const intl2 = channel(1212).intl;
      obj5.title = intl2.string(channel(1212).t["LR+Ptf"]);
      tmp22 = callback2(ChatBeginningRowButton, obj5);
    }
    const items6 = [tmp22, , ];
    const obj6 = {};
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    items7[1] = prop;
    obj6.style = items7;
    obj6.onPress = callback3;
    obj6.IconComponent = channel(4074).LinkIcon;
    const intl3 = channel(1212).intl;
    obj6.title = intl3.string(channel(1212).t["3XVNyt"]);
    const intl4 = channel(1212).intl;
    obj6.subtitle = intl4.string(channel(1212).t.qa9CQu);
    let tmp32 = null;
    if (first) {
      tmp32 = callback2(closure_6, {});
    }
    obj6.trailing = tmp32;
    items6[1] = callback2(ChatBeginningRowButton, obj6);
    let tmp36 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj7 = { channelId: channel.id };
      tmp36 = callback2(first(11664), obj7);
    }
    items6[2] = tmp36;
    obj4.children = items6;
    tmp20Result = closure_44(closure_43, obj4);
    const tmp20 = closure_44;
    const tmp21 = closure_43;
    const tmp27 = callback2;
    const tmp28 = ChatBeginningRowButton;
  }
  items5[3] = tmp20Result;
  obj.children = items5;
  return closure_44(closure_7, obj);
}
({ ActivityIndicator: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, EMPTY_STRING_SNOWFLAKE_ID: closure_29, GuildSettingsSections: closure_30, HelpdeskArticles: closure_31, InstantInviteSources: closure_32, Permissions: closure_33, RelationshipTypes: closure_34, UPLOAD_MEDIUM_SIZE: closure_35, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_36 } = ME);
({ AnalyticsActions: closure_38, AnalyticsSetupTypes: closure_39 } = Steps);
({ jsx: closure_42, Fragment: closure_43, jsxs: closure_44 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { position: "absolute", width: "100%" }, contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 }, title: { marginTop: 16 }, subtitle: { marginBottom: 16, lineHeight: 20 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginTop: 16, width: "100%" };
_createForOfIteratorHelperLoose.gdmInviteFriends = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginTop: 8, width: "100%" };
_createForOfIteratorHelperLoose.gdmShareInviteLink = obj1;
_createForOfIteratorHelperLoose.gdmShareInviteLinkNoRelationships = { marginTop: 16 };
_createForOfIteratorHelperLoose.ctaLabel = { marginLeft: 8 };
_createForOfIteratorHelperLoose.ctaContainer = { flexDirection: "row", flexWrap: "wrap" };
_createForOfIteratorHelperLoose.ctaButton = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.ctaAddRoles = { paddingRight: 24 };
_createForOfIteratorHelperLoose.avatar = { marginBottom: 16 };
_createForOfIteratorHelperLoose.avatarRedesign = { marginBottom: 16 };
_createForOfIteratorHelperLoose.centerHeader = { paddingHorizontal: 8, alignItems: "center" };
_createForOfIteratorHelperLoose.gdmText = { textAlign: "center" };
_createForOfIteratorHelperLoose.dmTitle = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.dmBeginningMessage = { marginTop: 8 };
_createForOfIteratorHelperLoose.provisionalAccountExplainer = { marginTop: 12 };
_createForOfIteratorHelperLoose.mutualGuildsLabel = { marginTop: 8, marginLeft: 8, height: 26 };
_createForOfIteratorHelperLoose.mutualGuildsContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj2 = { width: 64, height: 64, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.iconContainer = obj2;
_createForOfIteratorHelperLoose.threadDetails = { lineHeight: 20 };
_createForOfIteratorHelperLoose.threadCreatorRoleDot = { paddingRight: 4, paddingTop: 2 };
_createForOfIteratorHelperLoose.tagContainer = { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap" };
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE, height: 24, width: 24, padding: 4, alignContent: "center" };
_createForOfIteratorHelperLoose.unmutedNotificationContainer = obj3;
_createForOfIteratorHelperLoose.unmutedNotification = { width: 16, height: 16 };
_createForOfIteratorHelperLoose.dmButtonRow = { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 };
_createForOfIteratorHelperLoose.pendingIncoming = { flexDirection: "column", gap: 8 };
_createForOfIteratorHelperLoose.pendingIncomingButtons = { flexDirection: "row", flexWrap: "wrap", gap: 8 };
_createForOfIteratorHelperLoose.appDMButtonIcon = { marginRight: 2 };
_createForOfIteratorHelperLoose.formCtaIcon = { width: 32, height: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function ChatBeginningRowGuildDefaultChannel(guild) {
  let canInvite;
  let canManageGuild;
  let guildPersonalized;
  let guildPopulated;
  guild = guild.guild;
  const channel = guild.channel;
  let id;
  function _addServerIcon() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _addServerIcon(tmp);
    return obj(...arguments);
  }
  id = guild.id;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(id[54]);
  const completedStates = obj.useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj1 = guild(id[54]);
  const permissions = obj1.usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = guild(id[43]);
  const items = [closure_24];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_24.getCurrentUser());
  channel(id[55])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = channel(id[56]);
  const tmp6 = isGuildOwner(guild, stateFromStores);
  const extractTimestampResult = obj3.extractTimestamp(guild.id);
  let obj4 = guild(id[48]);
  let result = obj4.isPrivateGuildChannel(channel);
  let obj5 = guild(id[57]);
  const isEligibleForGuildProgress = obj5.useIsEligibleForGuildProgress(guild);
  let obj6 = guild(id[43]);
  const items1 = [closure_11];
  const stateFromStoresObject = obj6.useStateFromStoresObject(items1, () => outer1_11.getErrors());
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(id[58]).presentError(stateFromStoresObject.message);
      const obj = guild(id[58]);
    }
  }, items2);
  if (canManageGuild) {
    obj = {
      onPress: function addServerIcon() {
          return _addServerIcon(...arguments);
        }
    };
    obj = { uri: channel(id[62]) };
    obj.source = obj;
    obj.iconStyle = tmp.formCtaIcon;
    const intl = guild(id[29]).intl;
    obj.title = intl.string(guild(id[29]).t["Yhi9/N"]);
    obj.isCompleted = guildPersonalized;
    obj.analyticsSetupType = constants4.CHANNEL_WELCOME;
    obj.analyticsAction = constants3.PERSONALIZE_SERVER;
    const tmp13 = callback2(channel(id[61]), obj);
    const tmp17 = channel(id[61]);
  }
  if (canInvite) {
    obj1 = {
      onPress: function inviteFriends() {
          if (null != guild.vanityURLCode) {
            const result = guild(id[63]).showVanityUrlInviteActionSheet(guild, channel, outer1_32.WELCOME_MESSAGE);
            const obj3 = guild(id[63]);
          } else {
            let obj = guild(id[63]);
            obj = { source: outer1_32.WELCOME_MESSAGE };
            const result1 = obj.showInstantInviteActionSheet(channel, obj);
          }
        }
    };
    obj2 = { uri: channel(id[64]) };
    obj1.source = obj2;
    obj1.iconStyle = tmp.formCtaIcon;
    const intl2 = guild(id[29]).intl;
    obj1.title = intl2.string(guild(id[29]).t.q9n0Ta);
    obj1.isCompleted = guildPopulated;
    obj1.analyticsSetupType = constants4.CHANNEL_WELCOME;
    obj1.analyticsAction = constants3.INVITE;
    const tmp21 = callback2(channel(id[61]), obj1);
    const tmp25 = channel(id[61]);
  }
  const intl3 = guild(id[29]).intl;
  const string = intl3.string;
  const t = guild(id[29]).t;
  if (tmp8) {
    let stringResult = string(t["gwyU/J"]);
  } else if (tmp6) {
    stringResult = string(t["1ach9C"]);
  } else {
    stringResult = string(t["ezm+/j"]);
  }
  let tmp30 = !isEligibleForGuildProgress;
  if (tmp30) {
    tmp30 = null != tmp21 || null != tmp13;
    const tmp31 = null != tmp21 || null != tmp13;
  }
  tmp8 = obj3.extractTimestamp(guild.id) < Date.now() - closure_36;
  const combined = "" + channel(id[65]).getArticleURL(constants.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  obj3 = {};
  const items3 = [stringResult, ];
  let tmp35 = null;
  if (tmp30) {
    obj4 = {};
    const intl4 = guild(id[29]).intl;
    obj5 = { guideURL: combined };
    const items4 = [" ", intl4.format(guild(id[29]).t.UOtD32, obj5)];
    obj4.children = items4;
    tmp35 = callback3(closure_43, obj4);
  }
  items3[1] = tmp35;
  obj3.children = items3;
  obj6 = {};
  const obj7 = {};
  const obj12 = channel(id[65]);
  const tmp33 = callback3;
  const tmp34 = closure_43;
  const intl5 = guild(id[29]).intl;
  obj7.title = intl5.formatToPlainString(guild(id[29]).t["j59F/c"], { guildName: guild.name });
  obj7.subtitle = callback3(closure_43, obj3);
  obj7.isPrivate = result;
  let tmp44;
  if (tmp30) {
    tmp44 = combined;
  }
  obj7.subtitleLink = tmp44;
  const items5 = [callback2(ChatBeginningRowHeader, obj7), ];
  if (isEligibleForGuildProgress) {
    const obj9 = { guild };
    let tmp47 = callback2(channel(id[66]), obj9);
  } else {
    const obj10 = {};
    const items6 = [tmp21, tmp13];
    obj10.children = items6;
    tmp47 = callback3(closure_43, obj10);
  }
  items5[1] = tmp47;
  obj6.children = items5;
  return callback3(React.Fragment, obj6);
}
let result = require("result").fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default function ChatBeginningRow(channelId) {
  let dependencyMap;
  let importDefault;
  let shouldRender;
  let tmp4;
  channelId = channelId.channelId;
  ({ guildId: importDefault, shouldRender } = channelId);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(566);
  const items = [closure_17];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_17.getChannel(channelId));
  let obj2 = channelId(566);
  const items1 = [closure_20];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_20.getGuild(closure_1));
  [tmp4, dependencyMap] = callback(React.useState(undefined), 2);
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    callback = React.useCallback((nativeEvent) => {
      const height = nativeEvent.nativeEvent.layout.height;
      callback((arg0) => {
        let tmp = arg0;
        if (null == arg0) {
          tmp = height;
        } else {
          const _Math = Math;
        }
        return tmp;
      });
    }, []);
    obj = {};
    const items2 = [tmp.container, ];
    obj = {};
    let num2 = 0;
    if (null != null) {
      num2 = tmp4;
    }
    obj.height = num2;
    items2[1] = obj;
    obj.style = items2;
    let tmp23 = null != null;
    if (tmp23) {
      const obj1 = { style: tmp.contentWrapper, onLayout: callback, children: null };
      tmp23 = callback2(closure_7, obj1, channelId);
    }
    obj.children = tmp23;
    return callback2(importDefault(11668), obj);
  } else if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
    obj2 = { channel: stateFromStores };
    let tmp7 = callback2(ChatBeginningRowThread, obj2);
  } else if (stateFromStores.isDM()) {
    const obj3 = { channel: stateFromStores, showingSpamBanner: channelId.showingSpamBanner };
    tmp7 = callback2(ChatBeginningRowDMGuard, obj3);
  } else if (stateFromStores.isGroupDM()) {
    const obj4 = { channel: stateFromStores };
    tmp7 = callback2(ChatBeginningRowGroupDM, obj4);
  } else {
    tmp7 = null;
    if (null != stateFromStores1) {
      const obj5 = { guild: stateFromStores1, channel: stateFromStores };
      tmp7 = callback2(ChatBeginningRowGuild, obj5);
    }
  }
};
