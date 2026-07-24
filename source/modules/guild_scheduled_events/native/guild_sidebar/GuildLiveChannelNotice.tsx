// Module ID: 15063
// Function ID: 114718
// Name: UserSummaryRow
// Dependencies: [31, 27, 4951, 1353, 4149, 3758, 4203, 1354, 482, 33, 689, 1273, 4120, 10297, 10001, 9921, 477, 4547, 4130, 4126, 11590, 10290, 1820, 4341, 7557, 4066, 8869, 4543, 3976, 4320, 566, 1212, 4593, 8505, 8393, 8431, 8397, 4963, 4957, 4950, 8499, 4654, 15062, 9137, 5167, 2]
// Exports: getScaledLiveChannelNoticeHeight

// Module 15063 (UserSummaryRow)
import importAllResult from "getSystemLocale";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_11 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "sum";
import jsxProd from "CalendarIcon";
import { guildEventRules } from "combineAndInjectMentionRule";
import importDefaultResult from "combineAndInjectMentionRule";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function UserSummaryRow(arg0) {
  let audienceCount;
  let importDefault;
  let isLiveStreaming;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
  let closure_2;
  let dependencyMap;
  closure_2 = Math.max(users.length - max, 0);
  const tmp = callback4(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let obj = { style: tmp.container };
    let items = [
      users.map((user) => {
          if (arg1 < max) {
            if (arg1 === max - 1) {
              if (closure_2 > 0) {
                let obj = {};
                const items = [_undefined.wrapper, ];
                let tmp16 = 0 !== arg1;
                if (tmp16) {
                  obj = { marginLeft: 4 };
                  tmp16 = obj;
                }
                items[1] = tmp16;
                obj.style = items;
                const obj1 = { style: _undefined.overflowCircle };
                const obj2 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1 };
                const _HermesInternal = HermesInternal;
                obj2.children = "+" + closure_2 + 1;
                obj1.children = outer1_13(max(_undefined[19]).Text, obj2);
                obj.children = outer1_13(outer1_5, obj1);
                let tmp2Result = outer1_13(outer1_5, obj, "overflow");
                const tmp13 = outer1_13;
                const tmp14 = outer1_5;
              }
              return tmp2Result;
            }
            obj = {};
            const items1 = [_undefined.wrapper, ];
            let tmp5 = 0 !== arg1;
            if (tmp5) {
              const obj3 = { marginLeft: 4 };
              tmp5 = obj3;
            }
            items1[1] = tmp5;
            obj.style = items1;
            const obj4 = { user, guildId: closure_1, size: outer1_18 };
            obj.children = outer1_13(max(_undefined[11]).Avatar, obj4);
            tmp2Result = outer1_13(outer1_5, obj, arg1);
            const tmp2 = outer1_13;
            const tmp3 = outer1_5;
          }
        }),
  ,

    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      obj = {};
      let items1 = [tmp.wrapper, ];
      let tmp10 = users.length > 0;
      if (tmp10) {
        obj = { marginLeft: 4 };
        tmp10 = obj;
      }
      items1[1] = tmp10;
      obj.style = items1;
      let obj1 = {};
      const items2 = [, ];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      obj1.style = items2;
      let obj2 = { size: "custom" };
      let obj5 = max(10290);
      obj2.style = obj5.makeSizeStyle(14);
      const items3 = [callback(max(11590).HeadphonesIcon, obj2), ];
      let obj3 = { variant: "text-xs/semibold", style: null, maxFontSizeMultiplier: 1 };
      let obj4 = { marginLeft: 4 };
      obj3.style = obj4;
      obj3.children = audienceCount;
      items3[1] = callback(max(4126).Text, obj3);
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
      isLiveStreaming = callback(max(1273).LiveTag, obj5);
    }
    items[2] = isLiveStreaming;
    obj.children = items;
    let tmp4Result = callback2(View, obj);
    const tmp4 = callback2;
    let tmp5 = View;
  } else if (null == audienceCount) {
    tmp4Result = null;
  }
  return tmp4Result;
}
function useJoin(activeEventOrStageInstanceChannel) {
  let closure_0 = activeEventOrStageInstanceChannel;
  const items = [activeEventOrStageInstanceChannel];
  return importAllResult.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = outer1_2(outer1_3[22]).dismissGlobalKeyboard();
      if (activeEventOrStageInstanceChannel.isGuildVoice()) {
        let tmp5Result = tmp5(tmp6[23]);
        tmp5Result.openGuildVoiceModal(activeEventOrStageInstanceChannel);
      } else {
        tmp5Result = tmp5(tmp6[24]);
        tmp5Result.connectAndOpen(activeEventOrStageInstanceChannel);
      }
      const obj = outer1_2(outer1_3[22]);
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
  const tmp2 = importDefault(4066)();
  let obj = { style: tmp.button };
  const tmp3 = importDefault(8869)();
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
  obj.children = tmp7(require(4543) /* Button */.Button, obj);
  return tmp5(tmp6, obj);
}
function GuildVoiceEventNotice(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_10];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = outer1_10.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  let obj1 = channel(566);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_9.can(outer1_12.CONNECT, channel));
  const tmp = importDefault(4320)(channel);
  const items2 = [closure_8];
  obj = {};
  const stateFromStores1 = channel(566).useStateFromStores(items2, () => outer1_8.getAllApplicationStreamsForChannel(channel.id).length > 0);
  const intl = channel(1212).intl;
  obj.heading = intl.string(channel(1212).t["X2K3/4"]);
  obj.topic = channel.guildEvent.name;
  obj.location = tmp;
  const obj3 = channel(566);
  const tmp5 = callback;
  const tmp6 = closure_26;
  obj.LocationIcon = channel(4593).getChannelIconComponent(channel);
  obj.LiveIcon = channel(8505).CalendarIcon;
  obj = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  obj.voiceUsers = callback(UserSummaryRow, obj);
  let tmp7;
  if (stateFromStores) {
    obj1 = { channel };
    const intl2 = channel(1212).intl;
    obj1.label = intl2.string(channel(1212).t.VJlc0S);
    tmp7 = callback(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp7;
  return tmp5(tmp6, obj);
}
function GuildExternalEventNotice(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  let obj = require(8393) /* _getLocationFromEvent */;
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp2 = null;
  if (null != locationFromEvent) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.heading = intl.string(require(1212) /* getSystemLocale */.t.TxqPQR);
    obj.topic = guildEvent.name;
    obj.location = callback3(locationFromEvent, true);
    obj.LocationIcon = require(8431) /* LocationIcon */.LocationIcon;
    obj.LiveIcon = require(8505) /* CalendarIcon */.CalendarIcon;
    obj = { guildEvent };
    obj.joinButton = callback(SeeDetailButton, obj);
    tmp2 = callback(closure_26, obj);
  }
  return tmp2;
}
function SeeDetailButton(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  let obj = { style: callback5().button };
  const callback = importAllResult.useCallback(() => {
    let obj = guildEvent(outer1_3[36]);
    obj = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj);
  }, items);
  obj = { onPress: callback, variant: "active", size: "sm" };
  const intl = guildEvent(1212).intl;
  obj.text = intl.string(guildEvent(1212).t.z4FcDs);
  obj.children = callback(guildEvent(4543).Button, obj);
  return callback(View, obj);
}
function GuildLiveStageNotice(channel) {
  channel = channel.channel;
  let obj = channel(4963);
  const stageParticipants = obj.useStageParticipants(channel.id, channel(4957).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(outer1_3[38]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  let obj1 = channel(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getParticipantCount(channel.id, channel(outer1_3[38]).StageChannelParticipantNamedIndex.AUDIENCE), items1);
  const tmp = importDefault(4320)(channel);
  const items2 = [closure_9];
  const stateFromStores1 = channel(566).useStateFromStores(items2, () => outer1_9.can(outer1_12.CONNECT, channel));
  const obj3 = channel(566);
  const stageHasStream = channel(4950).useStageHasStream(channel.id);
  const obj4 = channel(4950);
  const guildActiveEvent = channel(8499).useGuildActiveEvent(channel.guild_id);
  obj = {};
  const intl = channel(1212).intl;
  obj.heading = intl.string(channel(1212).t["X2K3/4"]);
  obj.location = tmp;
  let channelIconComponent;
  if (null != guildActiveEvent) {
    channelIconComponent = channel(4593).getChannelIconComponent(channel);
    const obj7 = channel(4593);
  }
  obj.LocationIcon = channelIconComponent;
  if (null != guildActiveEvent) {
    let StageIcon = channel(8505).CalendarIcon;
  } else {
    StageIcon = channel(4654).StageIcon;
  }
  obj.LiveIcon = StageIcon;
  obj.topic = channel.stageInstance.topic;
  obj = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  obj.voiceUsers = callback(UserSummaryRow, obj);
  let tmp16;
  if (stateFromStores1) {
    obj1 = { channel };
    const intl2 = channel(1212).intl;
    obj1.label = intl2.string(channel(1212).t["7vb2cc"]);
    tmp16 = callback(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp16;
  return callback(closure_26, obj);
}
let num = 0;
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const XSMALL = require("Button").AvatarSizes.XSMALL;
let closure_19 = require("Button").AVATAR_SIZE_MAP[XSMALL];
const PX_122 = require("_createForOfIteratorHelperLoose").space.PX_12;
const PX_82 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_4 = require("_createForOfIteratorHelperLoose").space.PX_4;
let obj = {};
const merged = Object.assign(guildEventRules);
obj = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj["react"] = require("createInlineChannelReact").inlineChannelMentionReact;
obj["channelMention"] = obj;
obj["guild"] = {
  react(content, output, state) {
    if ("string" === typeof content.content) {
      content = content.content;
    } else {
      content = require(10001) /* smartOutput */.smartOutput(content, output, state);
      const obj = require(10001) /* smartOutput */;
    }
    return content;
  }
};
let obj1 = {
  react(content, output, state) {
    if ("string" === typeof content.content) {
      content = content.content;
    } else {
      content = require(10001) /* smartOutput */.smartOutput(content, output, state);
      const obj = require(10001) /* smartOutput */;
    }
    return content;
  }
};
obj["channel"] = { react: require("createInlineChannelReact").inlineChannelReact };
let closure_23 = importDefaultResult.reactParserFor(obj);
let closure_24 = _createForOfIteratorHelperLoose.createStyles((height) => {
  obj = { container: obj };
  obj = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(689).radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 };
  obj.overflowCircle = obj;
  obj.wrapper = { borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, height: closure_19 };
  const obj2 = { borderRadius: importDefault(689).radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj.badge = obj2;
  const obj1 = { borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, height: closure_19 };
  obj.audienceBadge = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let obj3 = { card: { padding: PX_122 }, row: { flexDirection: "row", alignItems: "center" }, infoRow: { marginTop: PX_4 }, liveNowIcon: { marginEnd: 4 }, uppercase: { textTransform: "uppercase" } };
let obj4 = {};
if (set.isAndroid()) {
  num = -2;
}
obj4.marginTop = num;
obj3.headingText = obj4;
let obj5 = { width: 7, height: 7, marginRight: 7, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
obj3.liveDot = obj5;
obj3.calendarIcon = { marginRight: 7 };
obj3.topic = { marginTop: PX_82 };
obj3.button = { marginTop: PX_82 };
let closure_25 = _createForOfIteratorHelperLoose.createStyles(obj3);
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
    obj = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
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
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items2 = [closure_14(View, obj), voiceUsers, , , ];
  const obj3 = { style: tmp.topic, lineClamp: 1, variant: "text-md/semibold", color: "redesign-channel-name-text", children: topic };
  items2[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { style: items3 };
  items3 = [, ];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  let tmp12Result = null != _location;
  if (tmp12Result) {
    const obj5 = {};
    let tmp14 = null != LocationIcon;
    if (tmp14) {
      const obj6 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
      tmp14 = callback(LocationIcon, obj6);
    }
    const items4 = [tmp14, ];
    const obj7 = { lineClamp: 1, variant: "text-xs/medium", color: "redesign-channel-name-muted-text" };
    const obj8 = {};
    let num2 = 0;
    if (obj12.isAndroid()) {
      num2 = -2;
    }
    obj8.marginTop = num2;
    obj8.flexShrink = 1;
    obj7.style = obj8;
    obj7.children = _location;
    items4[1] = callback(require(4126) /* Text */.Text, obj7);
    obj5.children = items4;
    tmp12Result = closure_14(closure_15, obj5);
    obj12 = require(477) /* set */;
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
let obj2 = { react: require("createInlineChannelReact").inlineChannelReact };
let result = set.fileFinishedImporting("modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx");

export default importAllResult.memo((guild) => {
  guild = guild.guild;
  let obj = activeEventOrStageInstanceChannel(15062);
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  let obj1 = activeEventOrStageInstanceChannel(8499);
  const guildActiveEvent = obj1.useGuildActiveEvent(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(566);
  const items = [closure_7];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (null != activeEventOrStageInstanceChannel) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return outer1_7.getStageInstanceByChannel(id);
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
      const result = activeEventOrStageInstanceChannel(outer1_3[36]).openGuildEventDetails(obj);
      const obj2 = activeEventOrStageInstanceChannel(outer1_3[36]);
    } else {
      let id;
      if (null != activeEventOrStageInstanceChannel) {
        id = activeEventOrStageInstanceChannel.id;
      }
      if (null != id) {
        obj = activeEventOrStageInstanceChannel(outer1_3[43]);
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
    tmp10 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp18 = null;
  if (null != tmp11) {
    obj2 = { variant: "secondary" };
    const items3 = [tmp.card, guild.style];
    obj2.style = items3;
    obj2.onPress = tmp5;
    obj2.onLongPress = callback;
    obj2.children = tmp11;
    tmp18 = callback(activeEventOrStageInstanceChannel(5167).Card, obj2);
  }
  return tmp18;
});
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo) {
  let hasAudience;
  let hasButton;
  let hasSpeakers;
  let hasStream;
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  require(9921) /* scaleLineHeight */;
  if (!hasSpeakers) {
    if (!hasAudience) {
      let num = 0;
    }
    const sum = PX_82 + require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-md/semibold", fontScale);
    const obj = require(9921) /* scaleLineHeight */;
    const tmp7 = PX_4;
    let num3 = 0;
    if (obj2.isAndroid()) {
      num3 = -2;
    }
    const sum1 = tmp7 + num3;
    obj2 = require(477) /* set */;
    let num4 = 0;
    const sum2 = sum1 + require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-xs/medium", fontScale);
    if (hasButton) {
      num4 = PX_82 + require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp2 + num + sum + sum2 + num4 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};
