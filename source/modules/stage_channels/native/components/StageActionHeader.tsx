// Module ID: 10786
// Function ID: 83750
// Name: closeStageModal
// Dependencies: [31, 27, 4143, 1348, 6878, 1838, 1353, 10675, 653, 33, 4130, 5084, 3974, 689, 675, 4324, 7530, 4337, 4341, 566, 10695, 10787, 1212, 4323, 1273, 4320, 4963, 4957, 4554, 4126, 7682, 7675, 10788, 10789, 7558, 8499, 10226, 10225, 8526, 10677, 10678, 10679, 10682, 10790, 10791, 2]
// Exports: HideChannelCallButton

// Module 10786 (closeStageModal)
import { View } from "sortKey";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import importAllResult from "registerAsset";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function closeStageModal(id) {
  let obj = importDefault(675);
  obj = { video_layout: "pop out" };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  importDefault(7530).setHidden(false);
  const obj4 = importDefault(7530);
  const obj5 = importDefault(4337);
  obj5.popWithKey(require(4341) /* getVoiceChannelKeyByChannelId */.getVoiceChannelKey(id.id));
}
class HideStageChannelCallIcon {
  constructor(arg0) {
    channel = global.channel;
    tmp = c14();
    obj = require("initialize");
    items = [];
    items[0] = c6;
    stateFromStores = obj.useStateFromStores(items, () => outer1_6.getTotalMentionCount());
    obj = {};
    tmp3 = require("ChannelCallNavigatorIcon");
    obj.source = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj.onPress = function onPress() {
      outer1_15(channel);
      const participant = outer1_1(outer1_2[23]).selectParticipant(channel.id, null);
    };
    obj.containerStyle = tmp.iconContainer;
    obj.disableBackground = true;
    obj.children = jsx(require("Button").MaskedBadge, { value: stateFromStores, maskStyle: {} });
    return jsx(tmp3, obj);
  }
}
class StageChannelCallHeader {
  constructor(arg0) {
    channel = global.channel;
    tmp = c14();
    tmp2 = require("computeDefaultGroupDmNameFromUserIds")(channel);
    obj = require("initialize");
    items = [];
    items[0] = c8;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => outer1_8.getStageInstanceByChannel(channel.id), items1);
    obj2 = require("useStageParticipants");
    stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, require("sortKey").StageChannelParticipantNamedIndex.AUDIENCE);
    obj3 = require("useStageParticipants");
    actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
    obj4 = require("initialize");
    items2 = [];
    items2[0] = c4;
    obj = { pointerEvents: "none", style: tmp.leftTitleContainer };
    obj1 = { style: tmp.titleWrapper };
    tmp10 = null == obj4.useStateFromStores(items2, () => outer1_4.getSelectedParticipant(channel.id));
    tmp6 = jsxs;
    tmp7 = View;
    tmp8 = jsxs;
    tmp9 = View;
    if (tmp10) {
      tmp11 = jsx;
      tmp12 = closure_1;
      tmp13 = closure_2;
      num = 28;
      obj2 = {};
      obj2.style = tmp.linearGradient;
      obj2.colors = ["#00000000", "#000000"];
      obj2.start = { x: 0.85, y: 0 };
      obj2.end = { x: 1, y: 0 };
      tmp10 = jsx(require("LinearGradient"), obj2);
    }
    items3 = [, ];
    items3[0] = tmp10;
    tmp14 = jsx;
    obj3 = { color: "text-overlay-light", variant: "text-md/semibold" };
    topic = undefined;
    if (null != stateFromStores) {
      topic = stateFromStores.topic;
    }
    tmp16 = tmp2;
    if (null != topic) {
      tmp16 = topic;
    }
    obj3.children = tmp16;
    items3[1] = tmp14(require("Text").Text, obj3);
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
      tmp21 = channel;
      tmp22 = closure_2;
      num2 = 24;
      obj5 = {};
      tmp23 = closure_1;
      num3 = 30;
      obj5.source = require("registerAsset");
      obj5.size = require("Button").Icon.Sizes.SMALL;
      flag = true;
      obj5.disableColor = true;
      items5 = [, , , , , ];
      items5[0] = jsx(require("Button").Icon, obj5);
      tmp24 = jsx;
      obj6 = {};
      str = "text-xs/normal";
      obj6.variant = "text-xs/normal";
      obj6.style = tmp.stageInfoTopic;
      obj6.children = tmp2;
      items5[1] = jsx(require("Text").Text, obj6);
      tmp25 = jsx;
      obj7 = {};
      num4 = 31;
      obj7.source = require("registerAsset");
      obj7.size = require("Button").Icon.Sizes.SMALL;
      obj7.style = tmp.icon;
      items5[2] = jsx(require("Button").Icon, obj7);
      tmp26 = jsx;
      obj8 = {};
      obj8.variant = "text-xs/normal";
      obj8.children = actualStageSpeakerCount;
      items5[3] = jsx(require("Text").Text, obj8);
      tmp27 = jsx;
      obj9 = {};
      num5 = 32;
      obj9.source = require("registerAsset");
      obj9.size = require("Button").Icon.Sizes.SMALL;
      obj9.style = tmp.icon;
      items5[4] = jsx(require("Button").Icon, obj9);
      tmp28 = jsx;
      obj10 = {};
      obj10.variant = "text-xs/normal";
      obj10.children = stageParticipantsCount;
      items5[5] = jsx(require("Text").Text, obj10);
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
    ({ channelId, onOpenRTCDebugOverlay } = global);
    tmp = c14();
    obj = {};
    tmp2 = require("ChannelCallNavigatorIcon");
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t["lIx5+G"]);
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    obj.containerStyle = items;
    obj.source = require("registerAsset");
    obj.onPress = function onPress() {
      return outer1_0(outer1_2[34]).openStageSettingsSheet(closure_0, closure_1);
    };
    obj.disableBackground = true;
    return jsx(tmp2, obj);
  }
}
class StageInviteButton {
  constructor(arg0) {
    channelId = global.channelId;
    tmp = c14();
    obj = require("initialize");
    items = [];
    items[0] = c5;
    items1 = [];
    items1[0] = channelId;
    stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(channelId), items1);
    f83761 = stateFromStores;
    obj2 = require("initialize");
    items2 = [];
    items2[0] = c7;
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
      return outer1_7.getGuild(tmp4);
    }, items3);
    f83762 = stateFromStores1;
    obj3 = require("useGuildUpcomingEvents");
    useActiveEvent = obj3.useActiveEvent(channelId);
    tmp4 = null;
    if (null != stateFromStores) {
      tmp4 = null;
      if (null != stateFromStores1) {
        tmp5 = jsx;
        tmp6 = f83761;
        tmp7 = f83762;
        num = 20;
        obj = {};
        tmp9 = channelId;
        num2 = 22;
        tmp8 = require("ChannelCallNavigatorIcon");
        intl = require("getSystemLocale").intl;
        obj.accessibilityLabel = intl.string(require("getSystemLocale").t.VINpSK);
        obj.containerStyle = tmp.iconBackground;
        num3 = 36;
        obj.source = require("registerAsset");
        num4 = 37;
        obj.IconComponent = require("GroupPlusIcon").GroupPlusIcon;
        obj.onPress = function onPress() {
          if (null != stateFromStores1.vanityURLCode) {
            const result = channelId(stateFromStores1[38]).showVanityUrlInviteActionSheet(stateFromStores1, stateFromStores, outer1_11.STAGE_CHANNEL);
            const obj3 = channelId(stateFromStores1[38]);
          } else {
            let obj = channelId(stateFromStores1[38]);
            obj = { source: outer1_11.STAGE_CHANNEL };
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
    tmp = c14();
    obj = require("initialize");
    items = [];
    items[0] = c9;
    stateFromStores = obj.useStateFromStores(items, () => outer1_9.isMuted());
    closure_0 = stateFromStores;
    obj2 = require("_isNativeReflectConstruct");
    if (!obj2.useShowStageMusicMuteButton(global.channelId)) {
      return null;
    } else {
      tmp4 = closure_1;
      tmp5 = closure_2;
      num = 20;
      tmp3 = jsx;
      obj = {};
      tmp7 = closure_0;
      tmp8 = closure_2;
      num2 = 22;
      tmp6 = require("ChannelCallNavigatorIcon");
      intl = require("getSystemLocale").intl;
      string = intl.string;
      t = require("getSystemLocale").t;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj.accessibilityLabel = stringResult;
      obj.containerStyle = tmp.iconBackground;
      tmp11 = closure_2;
      tmp10 = closure_1;
      if (stateFromStores) {
        num4 = 40;
        tmp12 = tmp11[40];
      } else {
        num3 = 41;
        tmp12 = tmp11[41];
      }
      obj.source = tmp10(tmp12);
      obj.onPress = function onPress() {
        return stateFromStores(outer1_2[42]).updateStageMusicMuted(!stateFromStores);
      };
      flag = true;
      obj.disableBackground = true;
      tmp3Result = tmp3(tmp6, obj);
    }
    return;
  }
}
({ AnalyticEvents: closure_10, InstantInviteSources: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
obj.header = obj;
obj.leftTitleContainer = { marginLeft: 12, flex: 1 };
obj.titleWrapper = { position: "relative", flex: 1, justifyContent: "center" };
obj.linearGradient = { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = _createForOfIteratorHelperLoose;
let obj2 = {};
obj2.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.1);
obj.iconContainer = obj2;
obj.settingsButton = { marginRight: 4 };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.stageInfo = obj3;
obj.stageInfoTopic = { marginLeft: 4 };
let obj4 = { marginLeft: 8, marginRight: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.icon = obj4;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("registerAsset").memo((onOpenRTCDebugOverlay) => {
  let channel;
  let fullscreenStream;
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp2 = importDefault(10790)(channel.id);
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
    fullscreenStream = callback(require(10791) /* CameraButton */.GridButton, obj1);
  }
  items[3] = fullscreenStream;
  items[4] = callback(require(10791) /* CameraButton */.CameraButton, {});
  items[5] = callback(StageInviteButton, { channelId: channel.id });
  items[6] = callback(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj.children = items;
  return closure_13(View, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export { closeStageModal };
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getTotalMentionCount());
  obj = {};
  const tmp = callback3();
  obj.source = importDefault(10787);
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.string(channel(1212).t.cpT0Cq);
  obj.onPress = function onPress() {
    outer1_15(channel);
    const participant = outer1_1(outer1_2[23]).selectParticipant(channel.id, null);
  };
  obj.containerStyle = tmp.iconContainer;
  obj.disableBackground = true;
  obj.children = callback(channel(1273).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return callback(importDefault(10695), obj);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };
