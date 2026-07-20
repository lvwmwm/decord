// Module ID: 8470
// Function ID: 67571
// Name: showInstantInviteActionSheet
// Dependencies: []
// Exports: getShareMessage, handleCopy, handleOpenInviteActionsheet, handleOpenShareSheet, handlePressSettings, hasDeferredInvite, isAppInstalled, showInstantInviteActionSheetForChannel

// Module 8470 (showInstantInviteActionSheet)
function showInstantInviteActionSheet(channel, source) {
  let obj = { "Bool(false)": "Array", "Bool(false)": "isArray" };
  let obj1 = importDefault(dependencyMap[12]);
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
    const streamerApplication = source(dependencyMap[13]).getStreamerApplication(stream, closure_9);
    const obj4 = source(dependencyMap[13]);
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
    importDefault(dependencyMap[12]).track(constants.OPEN_MODAL, obj);
    const obj5 = importDefault(dependencyMap[12]);
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
    importDefault(dependencyMap[14]).init(channel.getGuildId(), channel.id, obj);
    const obj7 = importDefault(dependencyMap[14]);
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
  importDefault(dependencyMap[15])(obj1);
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
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "Vanity URL Invite", source: GUILD_SCHEDULED_EVENT };
  obj.track(constants.OPEN_POPOUT, obj);
  importDefault(dependencyMap[14]).init(guild.id, channel.id, { skipCreateInvite: true });
  obj = { vanityURLCode: guild.vanityURLCode, channel, source: GUILD_SCHEDULED_EVENT };
  let prop;
  const obj3 = importDefault(dependencyMap[14]);
  if (null != guildScheduledEventId) {
    prop = guildScheduledEventId.guildScheduledEventId;
  }
  obj.guildScheduledEventId = prop;
  let stackingBehavior;
  if (null != guildScheduledEventId) {
    stackingBehavior = guildScheduledEventId.stackingBehavior;
  }
  obj.stackingBehavior = stackingBehavior;
  importDefault(dependencyMap[15])(obj);
}
function trackOptionClicked(code, channel, COPY, _location) {
  let obj = channel(dependencyMap[16]);
  const invite = store4.getInvite(obj.parseExtraDataFromInviteKey(code).baseCode);
  obj = { invite_type: COPY, guild_id: getAnalyticsGuildId(channel) };
  let id;
  if (null != channel) {
    id = channel.id;
  }
  obj.channel_id = id;
  const obj2 = importDefault(dependencyMap[12]);
  obj.invite_code = channel(dependencyMap[16]).parseInviteCodeFromInviteKey(code);
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
let closure_3 = importDefault(dependencyMap[0]);
const ChannelRecordBase = arg1(dependencyMap[1]).ChannelRecordBase;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const InviteTargetTypes = arg1(dependencyMap[9]).InviteTargetTypes;
const IOS_COPY_TO_PASTEBOARD = arg1(dependencyMap[10]).IOS_COPY_TO_PASTEBOARD;
({ AnalyticEvents: closure_14, InviteOptionsType: closure_15, Permissions: closure_16 } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/instant_invite/native/InstantInviteUtils.tsx");

export const showInstantInviteActionSheetForChannel = function showInstantInviteActionSheetForChannel(channelId) {
  const channel = store2.getChannel(channelId);
  if (null != channel) {
    showInstantInviteActionSheet(channel);
  }
};
export { showInstantInviteActionSheet };
export { showVanityUrlInviteActionSheet };
export { trackOptionClicked };
export function getShareMessage(tmp14Result) {
  return tmp14Result;
}
export const handleOpenShareSheet = function handleOpenShareSheet(code, channel, intl, ADD_FRIENDS_WIDGET) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = channel(dependencyMap[16]).parseExtraDataFromInviteKey(code);
    const invite = store4.getInvite(result.baseCode);
    const obj4 = channel(dependencyMap[16]);
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
    importDefault(dependencyMap[12]).track(constants.INSTANT_INVITE_SHARED, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.SHARE, ADD_FRIENDS_WIDGET);
    }
    obj = importDefault(dependencyMap[17]);
    obj.hideAllActionSheets();
    const obj5 = importDefault(dependencyMap[12]);
    obj = {
      message: intl,
      iOSOnlyShareCallback(arg0, arr) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != arr;
          }
          if (tmp) {
            tmp = !arr.includes(closure_13);
          }
          if (tmp) {
            callback(closure_2[19]).presentInviteSent();
            const obj = callback(closure_2[19]);
          }
        }
    };
    channel(dependencyMap[18]).showShareActionSheet(obj, ADD_FRIENDS_WIDGET);
    const obj2 = channel(dependencyMap[18]);
  }
};
export const handleCopy = function handleCopy(code, channel, GROUP_DM, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (null != code) {
    const result = channel(dependencyMap[16]).parseExtraDataFromInviteKey(code);
    const obj2 = channel(dependencyMap[16]);
    const tmp16 = importDefault(dependencyMap[20])(code);
    channel(dependencyMap[21]).copy(tmp16);
    const invite = store4.getInvite(result.baseCode);
    const obj3 = channel(dependencyMap[21]);
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
    importDefault(dependencyMap[12]).track(constants.COPY_INSTANT_INVITE, obj);
    if (flag) {
      trackOptionClicked(code, channel, constants2.COPY);
    }
    obj = channel(dependencyMap[19]);
    obj.presentLinkCopied();
    const obj4 = importDefault(dependencyMap[12]);
  }
};
export const handlePressSettings = function handlePressSettings(channel, closure_1, closure_3) {
  let guild_id;
  let id;
  closure_1 = channel;
  const importDefault = closure_1;
  importDefault(pendingSettings2[17]).hideActionSheet();
  const pendingSettings2 = pendingSettings.getPendingSettings();
  const obj = importDefault(pendingSettings2[17]);
  ({ guild_id, id } = channel);
  let str = "Instant Invite Action Sheet";
  if (null != closure_3) {
    str = closure_3;
  }
  importDefault(pendingSettings2[14]).openSettings(guild_id, id, str, () => {
    if (null != arg1) {
      arg1();
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
      closure_17(arg0, obj);
      const tmp = closure_17;
      const tmp2 = arg0;
    }
  });
};
export const isAppInstalled = function isAppInstalled(GMAIL) {
  return arg1(dependencyMap[22]).canOpenUrlScheme(GMAIL);
};
export const handleOpenInviteActionsheet = function handleOpenInviteActionsheet(guild, id, channels, GUILD_HEADER) {
  let channel = store2.getChannel(id);
  if (null == channel) {
    channel = store3.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
  }
  importDefault(dependencyMap[23])(null != channel, "Channel cannot be null");
  if (null != guild.vanityURLCode) {
    if ("" !== guild.vanityURLCode) {
      showVanityUrlInviteActionSheet(guild, channel, GUILD_HEADER);
    }
  }
  let obj = id(dependencyMap[24]);
  const inviteChannelId = obj.getInviteChannelId(channel.id, channels);
  if (null != inviteChannelId) {
    let channel1 = store2.getChannel(inviteChannelId);
    if (null == channel1) {
      channel1 = store3.getDefaultChannel(guild.id, true, constants3.CREATE_INSTANT_INVITE);
    }
    importDefault(dependencyMap[23])(null != channel1, "Channel cannot be null");
    obj = { source: GUILD_HEADER };
    showInstantInviteActionSheet(channel1, obj);
  }
};
export const hasDeferredInvite = function hasDeferredInvite() {
  const displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
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
