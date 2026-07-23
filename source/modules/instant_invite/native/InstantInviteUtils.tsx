// Module ID: 8481
// Function ID: 67643
// Name: showInstantInviteActionSheet
// Dependencies: [6693, 1352, 1348, 8482, 1907, 4115, 4217, 1849, 8486, 6979, 8487, 653, 675, 6981, 8488, 8489, 4116, 4098, 8332, 3830, 7001, 5492, 4304, 44, 8484, 2]
// Exports: getShareMessage, handleCopy, handleOpenInviteActionsheet, handleOpenShareSheet, handlePressSettings, hasDeferredInvite, isAppInstalled, showInstantInviteActionSheetForChannel

// Module 8481 (showInstantInviteActionSheet)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ChannelRecordBase } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { InviteTargetTypes } from "InviteSendStates";
import { IOS_COPY_TO_PASTEBOARD } from "SHARE_APPS_KEY";
import ME from "ME";

let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function showInstantInviteActionSheet(channel, source) {
  let obj = { isActionSheet: true, location: "IOS Instant Invite Action Sheet Mount" };
  let obj1 = importDefault(675);
  obj = { type: "Instant Invite" };
  source = undefined;
  if (null != source) {
    source = source.source;
  }
  obj.source = source;
  obj1.track(constants.OPEN_POPOUT, obj);
  let stream;
  if (null != source) {
    stream = source.stream;
  }
  if (null != stream) {
    stream = source.stream;
    obj.targetType = InviteTargetTypes.STREAM;
    obj.targetUserId = stream.ownerId;
    const streamerApplication = require(6981) /* _findPlayingActivity */.getStreamerApplication(stream, closure_9);
    const obj4 = require(6981) /* _findPlayingActivity */;
    obj = { type: "Send Stream Invite" };
    obj.location = obj.location;
    obj.other_user_id = stream.ownerId;
    let id;
    if (null != streamerApplication) {
      id = streamerApplication.id;
    }
    obj.application_id = id;
    let name;
    if (null != streamerApplication) {
      name = streamerApplication.name;
    }
    obj.application_name = name;
    let id1;
    if (null != streamerApplication) {
      id1 = streamerApplication.id;
    }
    obj.game_id = id1;
    importDefault(675).track(constants.OPEN_MODAL, obj);
    const obj5 = importDefault(675);
  } else {
    let targetApplicationId;
    if (null != source) {
      targetApplicationId = source.targetApplicationId;
    }
    if (null != targetApplicationId) {
      obj.targetType = InviteTargetTypes.EMBEDDED_APPLICATION;
      obj.targetApplicationId = source.targetApplicationId;
    }
  }
  let createInvite;
  if (null != source) {
    createInvite = source.createInvite;
  }
  let tmp17 = false !== createInvite;
  if (tmp17) {
    let code;
    if (null != source) {
      code = source.code;
    }
    tmp17 = null == code;
  }
  if (tmp17) {
    importDefault(8488).init(channel.getGuildId(), channel.id, obj);
    const obj7 = importDefault(8488);
  }
  obj1 = { channel };
  let source1;
  if (null != source) {
    source1 = source.source;
  }
  obj1.source = source1;
  let prop;
  if (null != source) {
    prop = source.guildScheduledEventId;
  }
  obj1.guildScheduledEventId = prop;
  let targetApplicationId1;
  if (null != source) {
    targetApplicationId1 = source.targetApplicationId;
  }
  obj1.targetApplicationId = targetApplicationId1;
  let code1;
  if (null != source) {
    code1 = source.code;
  }
  obj1.code = code1;
  obj1.vanityURLCode = null;
  let stackingBehavior;
  if (null != source) {
    stackingBehavior = source.stackingBehavior;
  }
  obj1.stackingBehavior = stackingBehavior;
  importDefault(8489)(obj1);
}
function getAnalyticsGuildId(guild_id) {
  if (guild_id instanceof ChannelRecordBase) {
    guild_id = guild_id.guild_id;
  } else {
    let id;
    if (null != guild_id) {
      id = guild_id.id;
    }
    const channel = store2.getChannel(id);
    if (null != channel) {
      guild_id = channel.getGuildId();
    }
  }
  return guild_id;
}
function showVanityUrlInviteActionSheet(guild, channel, GUILD_SCHEDULED_EVENT, guildScheduledEventId) {
  let obj = importDefault(675);
  obj = { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT };
  obj.track(constants.OPEN_POPOUT, obj);
  importDefault(8488).init(guild.id, channel.id, { skipCreateInvite: true });
  obj = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_SCHEDULED_EVENT };
  let prop;
  const obj3 = importDefault(8488);
  if (null != guildScheduledEventId) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  obj.guildScheduledEventId = prop;
  let stackingBehavior;
  if (null != guildScheduledEventId) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  obj.stackingBehavior = stackingBehavior;
  importDefault(8489)(obj);
}
function trackOptionClicked(code, channel, COPY, _location) {
  let obj = require(4116) /* readSnowflake */;
  const invite = store4.getInvite(obj.parseExtraDataFromInviteKey(code).baseCode);
  obj = { invite_type: COPY, guild_id: getAnalyticsGuildId(channel) };
  let id;
  if (null != channel) {
    id = channel.id;
  }
  obj.channel_id = id;
  const obj2 = importDefault(675);
  obj.invite_code = require(4116) /* readSnowflake */.parseInviteCodeFromInviteKey(code);
  let type;
  if (null != channel) {
    type = channel.type;
  }
  obj.invite_channel_type = type;
  const currentUser = authStore.getCurrentUser();
  let id1;
  if (null != currentUser) {
    id1 = currentUser.id;
  }
  obj.invite_inviter_id = id1;
  obj.location = _location;
  let id2;
  if (null != invite) {
    const target_application = invite.target_application;
    if (null != target_application) {
      id2 = target_application.id;
    }
  }
  obj.application_id = id2;
  obj2.track(constants.INSTANT_INVITE_OPTION_CLICKED, obj);
}
({ AnalyticEvents: closure_14, InviteOptionsType: closure_15, Permissions: closure_16 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/InstantInviteUtils.tsx");

export const showInstantInviteActionSheetForChannel = function showInstantInviteActionSheetForChannel(channelId) {
  const channel = store2.getChannel(channelId);
  if (null != channel) {
    showInstantInviteActionSheet(channel);
  }
};
export { showInstantInviteActionSheet };
export { showVanityUrlInviteActionSheet };
export { trackOptionClicked };
export function getShareMessage(c10) {
  return c10;
}
export const handleOpenShareSheet = function handleOpenShareSheet(code, channel, intl, ADD_FRIENDS_WIDGET) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = require(4116) /* readSnowflake */.parseExtraDataFromInviteKey(code);
    const invite = store4.getInvite(result.baseCode);
    const obj4 = require(4116) /* readSnowflake */;
    let obj = { guild_id: getAnalyticsGuildId(channel) };
    let id;
    if (null != channel) {
      id = channel.id;
    }
    obj.channel_id = id;
    obj.invite_code = result.baseCode;
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.invite_channel_type = type;
    const currentUser = authStore.getCurrentUser();
    let id1;
    if (null != currentUser) {
      id1 = currentUser.id;
    }
    obj.invite_inviter_id = id1;
    obj.invite_guild_scheduled_event_id = result.guildScheduledEventId;
    obj.location = ADD_FRIENDS_WIDGET;
    let id2;
    if (null != invite) {
      const target_application = invite.target_application;
      if (null != target_application) {
        id2 = target_application.id;
      }
    }
    obj.application_id = id2;
    importDefault(675).track(constants.INSTANT_INVITE_SHARED, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.SHARE, ADD_FRIENDS_WIDGET);
    }
    obj = importDefault(4098);
    obj.hideAllActionSheets();
    const obj5 = importDefault(675);
    obj = {
      message: intl,
      iOSOnlyShareCallback(arg0, arr) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != arr;
          }
          if (tmp) {
            tmp = !arr.includes(outer1_13);
          }
          if (tmp) {
            outer1_0(outer1_2[19]).presentInviteSent();
            const obj = outer1_0(outer1_2[19]);
          }
        }
    };
    require(8332) /* showShareActionSheet */.showShareActionSheet(obj, ADD_FRIENDS_WIDGET);
    const obj2 = require(8332) /* showShareActionSheet */;
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = require(4116) /* readSnowflake */.parseExtraDataFromInviteKey(code);
    const obj2 = require(4116) /* readSnowflake */;
    const tmp16 = importDefault(7001)(code);
    require(5492) /* _copy */.copy(tmp16);
    const invite = store4.getInvite(result.baseCode);
    const obj3 = require(5492) /* _copy */;
    let obj = { server: getAnalyticsGuildId(channel) };
    let id;
    if (null != channel) {
      id = channel.id;
    }
    obj.channel = id;
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.channel_type = type;
    obj.location = GROUP_DM;
    ({ baseCode: obj5.code, guildScheduledEventId: obj5.guild_scheduled_event_id } = result);
    let id1;
    if (null != invite) {
      const target_application = invite.target_application;
      if (null != target_application) {
        id1 = target_application.id;
      }
    }
    obj.application_id = id1;
    importDefault(675).track(constants.COPY_INSTANT_INVITE, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.COPY);
    }
    obj = require(3830) /* presentAddedFriendToast */;
    obj.presentLinkCopied();
    const obj4 = importDefault(675);
  }
};
export const handlePressSettings = function handlePressSettings(channel, closure_1, _createForOfIteratorHelperLoose) {
  let guild_id;
  let id;
  let closure_0 = channel;
  const importDefault = closure_1;
  importDefault(4098).hideActionSheet();
  const dependencyMap = pendingSettings.getPendingSettings();
  let obj = importDefault(4098);
  ({ guild_id, id } = channel);
  let str = "Instant Invite Action Sheet";
  if (null != _createForOfIteratorHelperLoose) {
    str = _createForOfIteratorHelperLoose;
  }
  importDefault(8488).openSettings(guild_id, id, str, () => {
    if (null != callback) {
      callback();
    } else {
      const obj = { createInvite: false };
      let targetApplicationId;
      if (null != targetApplicationId) {
        targetApplicationId = targetApplicationId.targetApplicationId;
      }
      let tmp6;
      if (null != targetApplicationId) {
        tmp6 = targetApplicationId;
      }
      obj.targetApplicationId = tmp6;
      outer1_17(closure_0, obj);
      const tmp = outer1_17;
      const tmp2 = closure_0;
    }
  });
};
export const isAppInstalled = function isAppInstalled(GMAIL) {
  return require(4304) /* sendSMS */.canOpenUrlScheme(GMAIL);
};
export const handleOpenInviteActionsheet = function handleOpenInviteActionsheet(guild, id, channels, GUILD_HEADER) {
  let channel = store2.getChannel(id);
  if (null == channel) {
    channel = store3.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
  }
  importDefault(44)(null != channel, "Channel cannot be null");
  if (null != guild.vanityURLCode) {
    if ("" !== guild.vanityURLCode) {
      showVanityUrlInviteActionSheet(guild, channel, GUILD_HEADER);
    }
  }
  let obj = require(8484) /* makeOption */;
  const inviteChannelId = obj.getInviteChannelId(channel.id, channels);
  if (null != inviteChannelId) {
    let channel1 = store2.getChannel(inviteChannelId);
    if (null == channel1) {
      channel1 = store3.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
    }
    importDefault(44)(null != channel1, "Channel cannot be null");
    obj = { source: GUILD_HEADER };
    showInstantInviteActionSheet(channel1, obj);
  }
};
export const hasDeferredInvite = function hasDeferredInvite() {
  displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
  const displayedGuildTemplateCode = store.getDisplayedGuildTemplateCode();
  let invite = null;
  if (null != displayedInviteCode) {
    invite = store4.getInvite(displayedInviteCode);
  }
  let guildTemplate = null;
  if (null != displayedGuildTemplateCode) {
    guildTemplate = store.getGuildTemplate(displayedGuildTemplateCode);
  }
  return null != invite || null != guildTemplate;
};
