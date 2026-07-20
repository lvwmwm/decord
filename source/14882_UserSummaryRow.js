// Module ID: 14882
// Function ID: 112128
// Name: UserSummaryRow
// Dependencies: []
// Exports: getScaledLiveChannelNoticeHeight

// Module 14882 (UserSummaryRow)
function UserSummaryRow(arg0) {
  let audienceCount;
  let isLiveStreaming;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  const arg1 = max;
  ({ guildId: closure_1, audienceCount, isLiveStreaming } = arg0);
  let closure_2;
  let dependencyMap;
  closure_2 = Math.max(users.length - max, 0);
  const tmp = callback4(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let obj = { style: tmp.container };
    const items = [
      users.map((user) => {
          if (arg1 < max) {
            if (arg1 === max - 1) {
              if (closure_2 > 0) {
                let obj = {};
                const items = [tmp.wrapper, ];
                let tmp16 = 0 !== arg1;
                if (tmp16) {
                  obj = { marginLeft: 4 };
                  tmp16 = obj;
                }
                items[1] = tmp16;
                obj.style = items;
                const obj1 = { style: tmp.overflowCircle };
                const obj2 = {};
                const _HermesInternal = HermesInternal;
                obj2.children = "+" + closure_2 + 1;
                obj1.children = callback(max(tmp[19]).Text, obj2);
                obj.children = callback(closure_5, obj1);
                let tmp2Result = callback(closure_5, obj, "overflow");
                const tmp13 = callback;
                const tmp14 = closure_5;
              }
              return tmp2Result;
            }
            obj = {};
            const items1 = [tmp.wrapper, ];
            let tmp5 = 0 !== arg1;
            if (tmp5) {
              const obj3 = { marginLeft: 4 };
              tmp5 = obj3;
            }
            items1[1] = tmp5;
            obj.style = items1;
            const obj4 = { user, guildId: closure_1, size: closure_18 };
            obj.children = callback(max(tmp[11]).Avatar, obj4);
            tmp2Result = callback(closure_5, obj, arg1);
            const tmp2 = callback;
            const tmp3 = closure_5;
          }
        }),
  ,

    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      obj = {};
      const items1 = [tmp.wrapper, ];
      let tmp10 = users.length > 0;
      if (tmp10) {
        obj = { marginLeft: 4 };
        tmp10 = obj;
      }
      items1[1] = tmp10;
      obj.style = items1;
      const obj1 = {};
      const items2 = [, ];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      obj1.style = items2;
      const obj2 = { size: "custom" };
      let obj5 = arg1(dependencyMap[21]);
      obj2.style = obj5.makeSizeStyle(14);
      const items3 = [callback(arg1(dependencyMap[20]).HeadphonesIcon, obj2), ];
      const obj3 = {};
      const obj4 = { marginLeft: 4 };
      obj3.style = obj4;
      obj3.children = audienceCount;
      items3[1] = callback(arg1(dependencyMap[19]).Text, obj3);
      obj1.children = items3;
      obj.children = callback2(View, obj1);
      tmp8Result = callback(View, obj);
      const tmp8 = callback;
      const tmp9 = View;
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      obj5 = {};
      const obj6 = { marginLeft: 4 };
      obj5.style = obj6;
      isLiveStreaming = callback(arg1(dependencyMap[11]).LiveTag, obj5);
    }
    items[2] = isLiveStreaming;
    obj.children = items;
    let tmp4Result = callback2(View, obj);
    const tmp4 = callback2;
    const tmp5 = View;
  } else if (null == audienceCount) {
    tmp4Result = null;
  }
  return tmp4Result;
}
function useJoin(activeEventOrStageInstanceChannel) {
  const arg1 = activeEventOrStageInstanceChannel;
  const items = [activeEventOrStageInstanceChannel];
  return importAllResult.useCallback(() => {
    if (null != arg0) {
      const result = callback(closure_3[22]).dismissGlobalKeyboard();
      if (arg0.isGuildVoice()) {
        let tmp5Result = tmp5(tmp6[23]);
        tmp5Result.openGuildVoiceModal(arg0);
      } else {
        tmp5Result = tmp5(tmp6[24]);
        tmp5Result.connectAndOpen(arg0);
      }
      const obj = callback(closure_3[22]);
    }
  }, items);
}
function JoinChannelButton(disabled) {
  let channel;
  let label;
  let flag = disabled.disabled;
  ({ channel, label } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback5();
  const tmp2 = importDefault(dependencyMap[25])();
  let obj = { style: tmp.button };
  const tmp3 = importDefault(dependencyMap[26])();
  obj = { onPress: useJoin(channel) };
  const tmp4 = useJoin(channel);
  const tmp5 = closure_13;
  const tmp6 = View;
  const tmp7 = closure_13;
  let str = "tertiary";
  if (obj3.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  obj.variant = str;
  obj.size = "sm";
  obj.disabled = flag;
  obj.text = label;
  obj.children = tmp7(arg1(dependencyMap[27]).Button, obj);
  return tmp5(tmp6, obj);
}
function GuildVoiceEventNotice(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[30]);
  const items = [closure_10];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  let obj1 = arg1(dependencyMap[30]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => closure_9.can(constants.CONNECT, channel));
  const tmp = importDefault(dependencyMap[29])(channel);
  const items2 = [closure_8];
  obj = {};
  const stateFromStores1 = arg1(dependencyMap[30]).useStateFromStores(items2, () => allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id).length > 0);
  const intl = arg1(dependencyMap[31]).intl;
  obj.heading = intl.string(arg1(dependencyMap[31]).t.X2K3/4);
  obj.topic = channel.guildEvent.name;
  obj.location = tmp;
  const obj3 = arg1(dependencyMap[30]);
  const tmp5 = callback;
  const tmp6 = closure_26;
  obj.LocationIcon = arg1(dependencyMap[32]).getChannelIconComponent(channel);
  obj.LiveIcon = arg1(dependencyMap[33]).CalendarIcon;
  obj = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  obj.voiceUsers = callback(UserSummaryRow, obj);
  let tmp7;
  if (stateFromStores) {
    obj1 = { channel };
    const intl2 = arg1(dependencyMap[31]).intl;
    obj1.label = intl2.string(arg1(dependencyMap[31]).t.VJlc0S);
    tmp7 = callback(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp7;
  return tmp5(tmp6, obj);
}
function GuildExternalEventNotice(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  let obj = arg1(dependencyMap[34]);
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp2 = null;
  if (null != locationFromEvent) {
    obj = {};
    const intl = arg1(dependencyMap[31]).intl;
    obj.heading = intl.string(arg1(dependencyMap[31]).t.TxqPQR);
    obj.topic = guildEvent.name;
    obj.location = callback3(locationFromEvent, true);
    obj.LocationIcon = arg1(dependencyMap[35]).LocationIcon;
    obj.LiveIcon = arg1(dependencyMap[33]).CalendarIcon;
    obj = { guildEvent };
    obj.joinButton = callback(SeeDetailButton, obj);
    tmp2 = callback(closure_26, obj);
  }
  return tmp2;
}
function SeeDetailButton(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const arg1 = guildEvent;
  const items = [guildEvent];
  let obj = { style: callback5().button };
  const callback = importAllResult.useCallback(() => {
    let obj = guildEvent(closure_3[36]);
    obj = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj);
  }, items);
  obj = { <string:1650710704>: 36, <string:1420607057>: 8, <string:3096691101>: 8, onPress: callback };
  const intl = arg1(dependencyMap[31]).intl;
  obj.text = intl.string(arg1(dependencyMap[31]).t.z4FcDs);
  obj.children = callback(arg1(dependencyMap[27]).Button, obj);
  return callback(View, obj);
}
function GuildLiveStageNotice(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[37]);
  const stageParticipants = obj.useStageParticipants(channel.id, arg1(dependencyMap[38]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(closure_3[38]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  let obj1 = arg1(dependencyMap[30]);
  const items = [closure_6];
  const items1 = [channel.id];
  const stateFromStores = obj1.useStateFromStores(items, () => participantCount.getParticipantCount(channel.id, channel(closure_3[38]).StageChannelParticipantNamedIndex.AUDIENCE), items1);
  const tmp = importDefault(dependencyMap[29])(channel);
  const items2 = [closure_9];
  const stateFromStores1 = arg1(dependencyMap[30]).useStateFromStores(items2, () => closure_9.can(constants.CONNECT, channel));
  const obj3 = arg1(dependencyMap[30]);
  const stageHasStream = arg1(dependencyMap[39]).useStageHasStream(channel.id);
  const obj4 = arg1(dependencyMap[39]);
  const guildActiveEvent = arg1(dependencyMap[40]).useGuildActiveEvent(channel.guild_id);
  obj = {};
  const intl = arg1(dependencyMap[31]).intl;
  obj.heading = intl.string(arg1(dependencyMap[31]).t.X2K3/4);
  obj.location = tmp;
  let channelIconComponent;
  if (null != guildActiveEvent) {
    channelIconComponent = arg1(dependencyMap[32]).getChannelIconComponent(channel);
    const obj7 = arg1(dependencyMap[32]);
  }
  obj.LocationIcon = channelIconComponent;
  if (null != guildActiveEvent) {
    let StageIcon = arg1(dependencyMap[33]).CalendarIcon;
  } else {
    StageIcon = arg1(dependencyMap[41]).StageIcon;
  }
  obj.LiveIcon = StageIcon;
  obj.topic = channel.stageInstance.topic;
  obj = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  obj.voiceUsers = callback(UserSummaryRow, obj);
  let tmp16;
  if (stateFromStores1) {
    obj1 = { channel };
    const intl2 = arg1(dependencyMap[31]).intl;
    obj1.label = intl2.string(arg1(dependencyMap[31]).t.7vb2cc);
    tmp16 = callback(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp16;
  return callback(closure_26, obj);
}
let num = 0;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).GuildScheduledEventEntityTypes;
const Permissions = arg1(dependencyMap[8]).Permissions;
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[9]));
const PX_8 = importDefault(dependencyMap[10]).space.PX_8;
const PX_12 = importDefault(dependencyMap[10]).space.PX_12;
const XSMALL = arg1(dependencyMap[11]).AvatarSizes.XSMALL;
let closure_19 = arg1(dependencyMap[11]).AVATAR_SIZE_MAP[XSMALL];
const PX_122 = importDefault(dependencyMap[10]).space.PX_12;
const PX_82 = importDefault(dependencyMap[10]).space.PX_8;
const PX_4 = importDefault(dependencyMap[10]).space.PX_4;
const guildEventRules = importDefault(dependencyMap[12]).guildEventRules;
const tmp2 = arg1(dependencyMap[9]);
let obj = {};
const merged = Object.assign(guildEventRules);
obj = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj["react"] = arg1(dependencyMap[13]).inlineChannelMentionReact;
obj["channelMention"] = obj;
obj["guild"] = {
  react(content, output, state) {
    if ("string" === typeof content.content) {
      content = content.content;
    } else {
      content = output(dependencyMap[14]).smartOutput(content, output, state);
      const obj = output(dependencyMap[14]);
    }
    return content;
  }
};
const importDefaultResult = importDefault(dependencyMap[12]);
const obj1 = {
  react(content, output, state) {
    if ("string" === typeof content.content) {
      content = content.content;
    } else {
      content = output(dependencyMap[14]).smartOutput(content, output, state);
      const obj = output(dependencyMap[14]);
    }
    return content;
  }
};
obj["channel"] = { react: arg1(dependencyMap[13]).inlineChannelReact };
let closure_23 = importDefaultResult.reactParserFor(obj);
const obj2 = { react: arg1(dependencyMap[13]).inlineChannelReact };
let closure_24 = arg1(dependencyMap[18]).createStyles((height) => {
  let obj = { container: obj };
  obj = { -9223372036854775808: true, filter: true, marginTop: PX_82 };
  obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.round, height };
  obj.overflowCircle = obj;
  obj.wrapper = { borderRadius: importDefault(dependencyMap[10]).radii.round, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, height: closure_19 };
  const obj2 = { expand: "y", backgroundColor: "isArray", padding: "key", alignItems: "Array", experimental_useNativeText: "construct", borderRadius: importDefault(dependencyMap[10]).radii.round, height };
  obj.badge = obj2;
  const obj1 = { borderRadius: importDefault(dependencyMap[10]).radii.round, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, height: closure_19 };
  obj.audienceBadge = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const obj7 = arg1(dependencyMap[18]);
const obj3 = { card: { padding: PX_122 }, row: { -9223372036854775808: true, filter: true }, infoRow: { marginTop: PX_4 }, liveNowIcon: { marginEnd: 4 }, uppercase: { textTransform: "uppercase" } };
const obj4 = {};
const obj8 = arg1(dependencyMap[18]);
if (obj11.isAndroid()) {
  num = -2;
}
obj4.marginTop = num;
obj3.headingText = obj4;
const obj11 = arg1(dependencyMap[16]);
obj3.liveDot = { backgroundColor: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE, borderRadius: importDefault(dependencyMap[10]).radii.xs };
obj3.calendarIcon = { marginRight: 7 };
obj3.topic = { marginTop: PX_82 };
obj3.button = { marginTop: PX_82 };
let closure_25 = obj8.createStyles(obj3);
let closure_26 = importAllResult.memo((arg0) => {
  let LiveIcon;
  let LocationIcon;
  let _location;
  let heading;
  let isLiveStreaming;
  let joinButton;
  let topic;
  let voiceUsers;
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = callback5();
  let obj = {};
  obj = { style: tmp.row };
  if (null != LiveIcon) {
    obj = { flexDirection: true, alignItems: true, style: tmp.calendarIcon };
    let tmp6 = callback(LiveIcon, obj);
  } else {
    const obj1 = { style: tmp.liveDot };
    tmp6 = callback(View, obj1);
  }
  const items = [tmp6, ];
  const obj2 = {};
  let str = "text-xs/semibold";
  if (isLiveStreaming) {
    str = "text-xs/bold";
  }
  obj2.variant = str;
  obj2.color = "status-positive";
  const items1 = [tmp.headingText, ];
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  obj2.style = items1;
  obj2.children = heading;
  items[1] = callback(arg1(dependencyMap[19]).Text, obj2);
  obj.children = items;
  const items2 = [closure_14(View, obj), voiceUsers, callback(arg1(dependencyMap[19]).Text, { style: tmp.topic, children: topic }), , ];
  const obj4 = { style: items3 };
  const items3 = [, ];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  let tmp12Result = null != _location;
  if (tmp12Result) {
    const obj5 = {};
    let tmp14 = null != LocationIcon;
    if (tmp14) {
      const obj6 = { style: tmp.liveNowIcon };
      tmp14 = callback(LocationIcon, obj6);
    }
    const items4 = [tmp14, ];
    const obj7 = {};
    const obj8 = {};
    let num2 = 0;
    if (obj12.isAndroid()) {
      num2 = -2;
    }
    obj8.marginTop = num2;
    obj8.flexShrink = 1;
    obj7.style = obj8;
    obj7.children = _location;
    items4[1] = callback(arg1(dependencyMap[19]).Text, obj7);
    obj5.children = items4;
    tmp12Result = closure_14(closure_15, obj5);
    const obj12 = arg1(dependencyMap[16]);
    const tmp12 = closure_14;
    const tmp13 = closure_15;
    const tmp16 = callback;
  }
  obj4.children = tmp12Result;
  items2[3] = callback(View, obj4);
  items2[4] = joinButton;
  obj.children = items2;
  return closure_14(View, obj);
});
const obj5 = { backgroundColor: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE, borderRadius: importDefault(dependencyMap[10]).radii.xs };
const memoResult = importAllResult.memo((guild) => {
  guild = guild.guild;
  let obj = arg1(dependencyMap[42]);
  const activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  const arg1 = activeEventOrStageInstanceChannel;
  let obj1 = arg1(dependencyMap[40]);
  const guildActiveEvent = obj1.useGuildActiveEvent(guild.id);
  const importDefault = guildActiveEvent;
  let obj2 = arg1(dependencyMap[30]);
  const items = [closure_7];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (null != activeEventOrStageInstanceChannel) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return stageInstanceByChannel.getStageInstanceByChannel(id);
  }, items1);
  let id;
  const tmp = callback5();
  if (null != activeEventOrStageInstanceChannel) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items2 = [id, guildActiveEvent];
  let entity_type;
  const callback = importAllResult.useCallback(() => {
    if (null != guildActiveEvent) {
      let obj = { eventId: guildActiveEvent.id, event: guildActiveEvent };
      const result = activeEventOrStageInstanceChannel(closure_3[36]).openGuildEventDetails(obj);
      const obj2 = activeEventOrStageInstanceChannel(closure_3[36]);
    } else {
      let id;
      if (null != activeEventOrStageInstanceChannel) {
        id = activeEventOrStageInstanceChannel.id;
      }
      if (null != id) {
        obj = activeEventOrStageInstanceChannel(closure_3[43]);
        const result1 = obj.openChannelLongPressActionSheet(activeEventOrStageInstanceChannel.id);
      }
    }
  }, items2);
  if (null != guildActiveEvent) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    obj = { guildEvent: guildActiveEvent };
    let tmp11 = callback(GuildExternalEventNotice, obj);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        obj = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp11 = callback(GuildLiveStageNotice, obj);
      }
    }
    tmp11 = null;
    if (tmp10) {
      obj1 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp11 = callback(GuildVoiceEventNotice, obj1);
    }
    const tmp10 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp18 = null;
  if (null != tmp11) {
    obj2 = { variant: "secondary" };
    const items3 = [tmp.card, guild.style];
    obj2.style = items3;
    obj2.onPress = tmp5;
    obj2.onLongPress = callback;
    obj2.children = tmp11;
    tmp18 = callback(arg1(dependencyMap[44]).Card, obj2);
  }
  return tmp18;
});
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx");

export default memoResult;
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo) {
  let hasAudience;
  let hasButton;
  let hasSpeakers;
  let hasStream;
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  guildLiveChannelNoticeInfo(dependencyMap[15]);
  if (!hasSpeakers) {
    if (!hasAudience) {
      let num = 0;
    }
    const sum = PX_82 + guildLiveChannelNoticeInfo(dependencyMap[15]).scaleTextLineHeight("text-md/semibold", fontScale);
    const obj = guildLiveChannelNoticeInfo(dependencyMap[15]);
    const tmp7 = PX_4;
    let num3 = 0;
    if (obj2.isAndroid()) {
      num3 = -2;
    }
    const sum1 = tmp7 + num3;
    const obj2 = guildLiveChannelNoticeInfo(dependencyMap[16]);
    let num4 = 0;
    const sum2 = sum1 + guildLiveChannelNoticeInfo(dependencyMap[15]).scaleTextLineHeight("text-xs/medium", fontScale);
    if (hasButton) {
      num4 = PX_82 + guildLiveChannelNoticeInfo(dependencyMap[17]).SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp2 + num + sum + sum2 + num4 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};
