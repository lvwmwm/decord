// Module ID: 10746
// Function ID: 83485
// Name: closeStageModal
// Dependencies: []
// Exports: HideChannelCallButton

// Module 10746 (closeStageModal)
function closeStageModal(id) {
  let obj = importDefault(dependencyMap[14]);
  obj = { video_layout: "pop out" };
  const merged = Object.assign(arg1(dependencyMap[15]).collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
  const obj3 = arg1(dependencyMap[15]);
  importDefault(dependencyMap[16]).setHidden(false);
  const obj4 = importDefault(dependencyMap[16]);
  const obj5 = importDefault(dependencyMap[17]);
  obj5.popWithKey(arg1(dependencyMap[18]).getVoiceChannelKey(id.id));
}
class HideStageChannelCallIcon {
  constructor(arg0) {
    arg1 = global.channel;
    tmp = closure_14();
    obj = arg1(dependencyMap[19]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
    obj = {};
    tmp3 = importDefault(dependencyMap[20]);
    obj.source = importDefault(dependencyMap[21]);
    intl = arg1(dependencyMap[22]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.cpT0Cq);
    obj.onPress = function onPress() {
      callback2(channel);
      const participant = callback(closure_2[23]).selectParticipant(channel.id, null);
    };
    obj.containerStyle = tmp.iconContainer;
    obj.disableBackground = true;
    obj.children = jsx(arg1(dependencyMap[24]).MaskedBadge, { value: stateFromStores, maskStyle: {} });
    return jsx(tmp3, obj);
  }
}
class StageChannelCallHeader {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    tmp = closure_14();
    tmp2 = importDefault(dependencyMap[25])(channel);
    obj = arg1(dependencyMap[19]);
    items = [];
    items[0] = closure_8;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(channel.id), items1);
    obj2 = arg1(dependencyMap[26]);
    stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, arg1(dependencyMap[27]).StageChannelParticipantNamedIndex.AUDIENCE);
    obj3 = arg1(dependencyMap[26]);
    actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
    obj4 = arg1(dependencyMap[19]);
    items2 = [];
    items2[0] = closure_4;
    obj = { pointerEvents: "none", style: tmp.leftTitleContainer };
    obj1 = { style: tmp.titleWrapper };
    tmp10 = null == obj4.useStateFromStores(items2, () => selectedParticipant.getSelectedParticipant(channel.id));
    tmp6 = jsxs;
    tmp7 = View;
    tmp8 = jsxs;
    tmp9 = View;
    if (tmp10) {
      tmp11 = jsx;
      tmp12 = importDefault;
      tmp13 = dependencyMap;
      num = 28;
      obj2 = {};
      obj2.style = tmp.linearGradient;
      obj2.colors = ["SENDING", "PURPLE"];
      obj2.start = {};
      obj2.end = {};
      tmp10 = jsx(importDefault(dependencyMap[28]), obj2);
    }
    items3 = [, ];
    items3[0] = tmp10;
    tmp14 = jsx;
    obj3 = {};
    topic = undefined;
    if (null != stateFromStores) {
      topic = stateFromStores.topic;
    }
    tmp16 = tmp2;
    if (null != topic) {
      tmp16 = topic;
    }
    obj3.children = tmp16;
    items3[1] = tmp14(arg1(dependencyMap[29]).Text, obj3);
    obj1.children = items3;
    items4 = [, ];
    items4[0] = tmp8(tmp9, obj1);
    tmp17 = null != stateFromStores;
    if (tmp17) {
      tmp18 = jsxs;
      tmp19 = View;
      obj4 = {};
      obj4.style = tmp.stageInfo;
      tmp20 = jsx;
      tmp21 = arg1;
      tmp22 = dependencyMap;
      num2 = 24;
      obj5 = {};
      tmp23 = importDefault;
      num3 = 30;
      obj5.source = importDefault(dependencyMap[30]);
      obj5.size = arg1(dependencyMap[24]).Icon.Sizes.SMALL;
      flag = true;
      obj5.disableColor = true;
      items5 = [, , , , , ];
      items5[0] = jsx(arg1(dependencyMap[24]).Icon, obj5);
      tmp24 = jsx;
      obj6 = {};
      str = "text-xs/normal";
      obj6.variant = "text-xs/normal";
      obj6.style = tmp.stageInfoTopic;
      obj6.children = tmp2;
      items5[1] = jsx(arg1(dependencyMap[29]).Text, obj6);
      tmp25 = jsx;
      obj7 = {};
      num4 = 31;
      obj7.source = importDefault(dependencyMap[31]);
      obj7.size = arg1(dependencyMap[24]).Icon.Sizes.SMALL;
      obj7.style = tmp.icon;
      items5[2] = jsx(arg1(dependencyMap[24]).Icon, obj7);
      tmp26 = jsx;
      obj8 = {};
      obj8.variant = "text-xs/normal";
      obj8.children = actualStageSpeakerCount;
      items5[3] = jsx(arg1(dependencyMap[29]).Text, obj8);
      tmp27 = jsx;
      obj9 = {};
      num5 = 32;
      obj9.source = importDefault(dependencyMap[32]);
      obj9.size = arg1(dependencyMap[24]).Icon.Sizes.SMALL;
      obj9.style = tmp.icon;
      items5[4] = jsx(arg1(dependencyMap[24]).Icon, obj9);
      tmp28 = jsx;
      obj10 = {};
      obj10.variant = "text-xs/normal";
      obj10.children = stageParticipantsCount;
      items5[5] = jsx(arg1(dependencyMap[29]).Text, obj10);
      obj4.children = items5;
      tmp17 = jsxs(View, obj4);
    }
    items4[1] = tmp17;
    obj.children = items4;
    return tmp6(tmp7, obj);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    ({ channelId: closure_0, onOpenRTCDebugOverlay: closure_1 } = global);
    tmp = closure_14();
    obj = {};
    tmp2 = importDefault(dependencyMap[20]);
    intl = arg1(dependencyMap[22]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.lIx5+G);
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    obj.containerStyle = items;
    obj.source = importDefault(dependencyMap[33]);
    obj.onPress = function onPress() {
      return callback(closure_2[34]).openStageSettingsSheet(callback, closure_1);
    };
    obj.disableBackground = true;
    return jsx(tmp2, obj);
  }
}
class StageInviteButton {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    tmp = closure_14();
    obj = arg1(f83497[19]);
    items = [];
    items[0] = closure_5;
    items1 = [];
    items1[0] = channelId;
    stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
    f83496 = stateFromStores;
    obj2 = arg1(f83497[19]);
    items2 = [];
    items2[0] = closure_7;
    items3 = [];
    items3[0] = stateFromStores;
    stateFromStores1 = obj2.useStateFromStores(items2, () => {
      let guild_id;
      if (null != stateFromStores) {
        guild_id = stateFromStores.guild_id;
      }
      let tmp4 = null;
      if (null != guild_id) {
        tmp4 = guild_id;
      }
      return guild.getGuild(tmp4);
    }, items3);
    f83497 = stateFromStores1;
    obj3 = arg1(f83497[35]);
    View = obj3.useActiveEvent(channelId);
    tmp4 = null;
    if (null != stateFromStores) {
      tmp4 = null;
      if (null != stateFromStores1) {
        tmp5 = jsx;
        tmp6 = f83496;
        tmp7 = f83497;
        num = 20;
        obj = {};
        tmp9 = arg1;
        num2 = 22;
        tmp8 = f83496(f83497[20]);
        intl = arg1(f83497[22]).intl;
        obj.accessibilityLabel = intl.string(arg1(f83497[22]).t.VINpSK);
        obj.containerStyle = tmp.iconBackground;
        num3 = 36;
        obj.source = f83496(f83497[36]);
        num4 = 37;
        obj.IconComponent = arg1(f83497[37]).GroupPlusIcon;
        obj.onPress = function onPress() {
          if (null != stateFromStores1.vanityURLCode) {
            const result = channelId(stateFromStores1[38]).showVanityUrlInviteActionSheet(stateFromStores1, stateFromStores, constants.STAGE_CHANNEL);
            const obj3 = channelId(stateFromStores1[38]);
          } else {
            let obj = channelId(stateFromStores1[38]);
            obj = { source: constants.STAGE_CHANNEL };
            let id;
            if (null != id) {
              id = id.id;
            }
            let tmp8;
            if (null != id) {
              tmp8 = id;
            }
            obj.guildScheduledEventId = tmp8;
            const result1 = obj.showInstantInviteActionSheet(stateFromStores, obj);
            const tmp3 = stateFromStores;
          }
        };
        flag = true;
        obj.disableBackground = true;
        tmp4 = jsx(tmp8, obj);
      }
    }
    return tmp4;
  }
}
class MusicMuteButton {
  constructor(arg0) {
    tmp = closure_14();
    obj = arg1(dependencyMap[19]);
    items = [];
    items[0] = closure_9;
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    arg1 = stateFromStores;
    obj2 = arg1(dependencyMap[39]);
    if (!obj2.useShowStageMusicMuteButton(global.channelId)) {
      return null;
    } else {
      tmp4 = importDefault;
      tmp5 = dependencyMap;
      num = 20;
      tmp3 = jsx;
      obj = {};
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num2 = 22;
      tmp6 = importDefault(dependencyMap[20]);
      intl = arg1(dependencyMap[22]).intl;
      string = intl.string;
      t = arg1(dependencyMap[22]).t;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj.accessibilityLabel = stringResult;
      obj.containerStyle = tmp.iconBackground;
      tmp11 = dependencyMap;
      tmp10 = importDefault;
      if (stateFromStores) {
        num4 = 40;
        tmp12 = tmp11[40];
      } else {
        num3 = 41;
        tmp12 = tmp11[41];
      }
      obj.source = tmp10(tmp12);
      obj.onPress = function onPress() {
        return stateFromStores(closure_2[42]).updateStageMusicMuted(!stateFromStores);
      };
      flag = true;
      obj.disableBackground = true;
      tmp3Result = tmp3(tmp6, obj);
    }
    return;
  }
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const importAllResult = importAll(dependencyMap[0]);
({ AnalyticEvents: closure_10, InstantInviteSources: closure_11 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, height: arg1(dependencyMap[11]).NAV_BAR_HEIGHT };
obj.header = obj;
obj.leftTitleContainer = { shrink: null, disabled: 0 };
obj.titleWrapper = {};
obj.linearGradient = {};
obj1 = {};
const tmp3 = arg1(dependencyMap[9]);
obj1.backgroundColor = arg1(dependencyMap[12]).hexWithOpacity(importDefault(dependencyMap[13]).unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = obj1;
const obj2 = {};
const obj6 = arg1(dependencyMap[12]);
obj2.backgroundColor = arg1(dependencyMap[12]).hexWithOpacity(importDefault(dependencyMap[13]).unsafe_rawColors.WHITE, 0.1);
obj.iconContainer = obj2;
obj.settingsButton = { marginRight: 4 };
const obj3 = { accessible: null, count: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Bool(false)": true, color: importDefault(dependencyMap[13]).colors.TEXT_SUBTLE };
obj.stageInfo = obj3;
obj.stageInfoTopic = { marginLeft: 4 };
const obj4 = { -412991801: 1, 1932219241: "comp_0", tintColor: importDefault(dependencyMap[13]).colors.TEXT_SUBTLE };
obj.icon = obj4;
let closure_14 = obj1.createStyles(obj);
const obj8 = arg1(dependencyMap[12]);
const memoResult = importAllResult.memo((onOpenRTCDebugOverlay) => {
  let channel;
  let fullscreenStream;
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp2 = importDefault(dependencyMap[43])(channel.id);
  let speaker;
  if (null != tmp2) {
    speaker = tmp2.speaker;
  }
  let obj = { style: callback3().header, pointerEvents: "box-none" };
  obj = { channel, fullscreenStream };
  const items = [callback(HideStageChannelCallIcon, obj), callback(StageChannelCallHeader, { channel }), , , , , ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = callback(MusicMuteButton, obj);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    const obj1 = { channel };
    fullscreenStream = callback(arg1(dependencyMap[44]).GridButton, obj1);
  }
  items[3] = fullscreenStream;
  items[4] = callback(arg1(dependencyMap[44]).CameraButton, {});
  items[5] = callback(StageInviteButton, { channelId: channel.id });
  items[6] = callback(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj.children = items;
  return closure_13(View, obj);
});
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export { closeStageModal };
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  const arg1 = channel.channel;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  obj = {};
  const tmp = callback3();
  obj.source = importDefault(dependencyMap[21]);
  const intl = arg1(dependencyMap[22]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.cpT0Cq);
  obj.onPress = function onPress() {
    callback2(channel);
    const participant = callback(closure_2[23]).selectParticipant(channel.id, null);
  };
  obj.containerStyle = tmp.iconContainer;
  obj.disableBackground = true;
  obj.children = callback(arg1(dependencyMap[24]).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return callback(importDefault(dependencyMap[20]), obj);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };
