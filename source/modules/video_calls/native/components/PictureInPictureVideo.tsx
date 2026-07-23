// Module ID: 10559
// Function ID: 82477
// Name: areParticipantsEqual
// Dependencies: [57, 31, 27, 1347, 4143, 1194, 4177, 1906, 4952, 10539, 10210, 4148, 33, 4130, 1273, 689, 10215, 22, 10531, 10560, 566, 4323, 10561, 10564, 10574, 10020, 10590, 10597, 10527, 10615, 3834, 7812, 8479, 10546, 10542, 10545, 1450, 477, 8303, 2]

// Module 10559 (areParticipantsEqual)
import _slicedToArray from "_slicedToArray";
import importAllResult from "hasFetchedColors";
import get_ActivityIndicator from "ActivityTileInner";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import resetFocusTimer from "resetFocusTimer";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "useIsViewingActivity";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
const require = arg1;
function areParticipantsEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
({ TouchableOpacity: closure_4, View: closure_5 } = get_ActivityIndicator);
({ togglePipFocus: closure_13, useIsVoiceChatFocused: closure_14 } = resetFocusTimer);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
let obj = {};
obj.elevationShadow = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.background = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.backgroundPipFab = _createForOfIteratorHelperLoose;
obj.pip = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
Button = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
obj.pipFab = Button;
obj.avatarContainer = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj.activityPipContainer = { flex: 1, width: "100%" };
obj.thermalAlertIconContainer = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: 11, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
let obj4 = { width: 14, height: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.thermalAlertIcon = obj4;
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const pipParticipant = channel.pipParticipant;
  const selfParticipant = channel.selfParticipant;
  let openVoice;
  let _slicedToArray;
  let closure_4;
  function onScreenshareTap() {
    const voiceChannelId = outer1_10.getVoiceChannelId();
    if (null != voiceChannelId) {
      let id;
      if (null != pipParticipant) {
        id = pipParticipant.id;
      }
      let tmp7 = null;
      if (null != id) {
        tmp7 = id;
      }
      const participant = pipParticipant(openVoice[21]).selectParticipant(voiceChannelId, tmp7);
      if (_slicedToArray) {
        openVoice();
      }
      const obj = pipParticipant(openVoice[21]);
    }
  }
  function onPipTap() {
    if (_slicedToArray) {
      openVoice();
    }
    if (closure_4) {
      const participant = pipParticipant(openVoice[21]).selectParticipant(channel.id, null);
      const obj = pipParticipant(openVoice[21]);
    } else {
      outer1_13();
    }
  }
  let obj = channel(openVoice[16]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  openVoice = undefined;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (null == openVoice) {
    openVoice = pipParticipant(openVoice[17]).noop;
  }
  _slicedToArray = callback2();
  closure_4 = pipParticipant(openVoice[18])(channel.id);
  let type;
  if (null != pipParticipant) {
    type = pipParticipant.type;
  }
  let tmp9Result = type === ParticipantTypes.ACTIVITY;
  if (tmp9Result) {
    let applicationId;
    if (null != pipParticipant) {
      applicationId = pipParticipant.applicationId;
    }
    tmp9Result = pipParticipant(openVoice[19])(applicationId);
    const tmp9 = pipParticipant(openVoice[19]);
  }
  let obj1 = channel(openVoice[20]);
  const items = [closure_9];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let isLocalVideoDisabledResult = null != pipParticipant;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = outer1_9.isLocalVideoDisabled(pipParticipant.id);
    }
    return isLocalVideoDisabledResult;
  }, items1);
  if (null != pipParticipant) {
    type1 = pipParticipant.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp17 = null;
        if (pipParticipant(openVoice[25])(pipParticipant)) {
          tmp17 = null;
          if (!stateFromStores) {
            obj = { participant: pipParticipant, avatarSize: channel(openVoice[14]).AvatarSizes.PROFILE, resizeMode: channel(openVoice[24]).ResizeMode.COVER, onSingleTap: onPipTap, onDoubleTap: onPipTap };
            tmp17 = callback3(pipParticipant(openVoice[26]), obj);
            const tmp21 = pipParticipant(openVoice[26]);
          }
        }
        let tmp14 = tmp17;
      } else {
        tmp14 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          obj = {
            participant: pipParticipant,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        pipParticipant(openVoice[28])(channel.guild_id, currentEmbeddedActivity.location);
                      }
                      if (_slicedToArray) {
                        openVoice();
                      }
                    }
          };
          tmp14 = callback3(pipParticipant(openVoice[27]), obj);
        }
      }
      obj1 = {};
      let tmp34 = null;
      if (null != selfParticipant) {
        tmp34 = null;
        if (!tmp9Result) {
          const obj2 = {
            participant: selfParticipant,
            avatarSize: channel(openVoice[14]).AvatarSizes.PROFILE,
            resizeMode: channel(openVoice[24]).ResizeMode.COVER,
            onSingleTap() {
                      if (_slicedToArray) {
                        openVoice();
                      } else {
                        outer1_13();
                      }
                    }
          };
          tmp34 = callback3(pipParticipant(openVoice[26]), obj2);
          const tmp38 = pipParticipant(openVoice[26]);
        }
      }
      const items2 = [tmp34, tmp14];
      obj1.children = items2;
      return closure_18(closure_17, obj1);
    }
  }
  if (pipParticipant.user.id === id.getId()) {
    const obj3 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    callback3(pipParticipant(openVoice[22]), obj3);
  } else {
    const obj4 = { removeEmptyStateButton: true, removeEmptyStateImage: true, resizeMode: channel(openVoice[24]).ResizeMode.CONTAIN, participant: pipParticipant, onSingleTap: onPipTap, onDoubleTap: onPipTap };
    callback3(pipParticipant(openVoice[23]), obj4);
    const tmp26 = pipParticipant(openVoice[23]);
  }
});
let closure_21 = importAllResult.memo((channel) => {
  let tmp3;
  let tmp4;
  channel = channel.channel;
  const tmp = callback4();
  let obj = require(566) /* initialize */;
  let items = [closure_12];
  obj = { channelId: channel.id, selfParticipant: channel.selfParticipant };
  [tmp3, tmp4] = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_12.consumedRequestToRespondToSeriousThermalState(), outer1_12.isReactingToThermalState()];
    return items;
  }), 2);
  const tmp5 = (function useActivityPipParticipant(channelId) {
    channelId = channelId.channelId;
    const selfParticipant = channelId.selfParticipant;
    let items = [outer1_12];
    const stateFromStores = outer1_0(outer1_2[20]).useStateFromStores(items, () => outer2_12.isReactingToThermalState());
    const obj = outer1_0(outer1_2[20]);
    const items1 = [outer1_7];
    const items2 = [channelId];
    const tmp2 = outer1_3(outer1_0(outer1_2[20]).useStateFromStores(items1, () => {
      const items = [outer2_7.getParticipants(channelId), outer2_7.getVideoParticipants(channelId), outer2_7.getParticipantsVersion(channelId)];
      return items;
    }, items2, outer1_22), 2);
    const first = tmp2[0];
    const obj2 = outer1_0(outer1_2[20]);
    const items3 = [outer1_11];
    const items4 = [selfParticipant];
    const stateFromStores1 = outer1_0(outer1_2[20]).useStateFromStores(items3, () => {
      let found = null;
      if (null != selfParticipant) {
        const speakers = outer2_11.getSpeakers();
        found = speakers.find((arg0) => {
          let isSpeakingResult = arg0 !== outer1_1.user.id;
          if (isSpeakingResult) {
            isSpeakingResult = outer3_11.isSpeaking(arg0);
          }
          return isSpeakingResult;
        });
      }
      return found;
    }, items4);
    const obj3 = outer1_0(outer1_2[20]);
    const leadingEdgeDebounce = outer1_0(outer1_2[29]).useLeadingEdgeDebounce(stateFromStores1, 1000);
    if (null != leadingEdgeDebounce) {
      let found = first.find((id) => id.id === leadingEdgeDebounce);
      if (null != found) {
        if (found.type === outer1_15.USER) {
          return found;
        }
      }
    }
    let streamId;
    if (null != selfParticipant) {
      streamId = selfParticipant.streamId;
    }
    if (null != streamId) {
      return selfParticipant;
    } else {
      if (!stateFromStores) {
        const items5 = [];
        HermesBuiltin.arraySpread(tmp3, 0);
        const first1 = items5.sort((lastSpoke, lastSpoke2) => {
          let num = -1;
          if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
            num = 1;
          }
          return num;
        })[0];
        if (null != first1) {
          return first1;
        }
      }
      return selfParticipant;
    }
    const obj4 = outer1_0(outer1_2[29]);
  })(obj);
  let obj2 = require(3834) /* map */;
  const token = obj2.useToken(importDefault(689).unsafe_rawColors.PRIMARY_800);
  if (null != tmp5) {
    const user = tmp5.user;
    const avatarURL = user.getAvatarURL(channel.guild_id, 80);
  }
  if (null == tmp5) {
    return null;
  } else {
    let tmp10 = null != tmp5.streamId;
    if (tmp10) {
      const voiceState = tmp5.voiceState;
      let selfVideo;
      if (null != voiceState) {
        selfVideo = voiceState.selfVideo;
      }
      tmp10 = selfVideo;
    }
    obj = {};
    let items1 = [tmp.avatarContainer, ];
    const obj1 = { backgroundColor: tmp8 };
    items1[1] = obj1;
    obj.style = items1;
    if (tmp10) {
      if (!tmp4) {
        obj2 = { participant: tmp5, avatarSize: require(1273) /* Button */.AvatarSizes.PROFILE, resizeMode: require(10574) /* resetIOSScrollZoom */.ResizeMode.COVER };
        let tmp18 = callback3(importDefault(10590), obj2);
        const tmp16 = importDefault(10590);
      }
      let items2 = [tmp18, ];
      let tmp22 = null;
      if (tmp3) {
        let obj3 = { style: tmp.thermalAlertIconContainer };
        let obj4 = { style: tmp.thermalAlertIcon, source: importDefault(8479), color: tmp.thermalAlertIcon.color };
        obj3.children = callback3(require(1273) /* Button */.Icon, obj4);
        tmp22 = callback3(closure_5, obj3);
      }
      items2[1] = tmp22;
      obj.children = items2;
      return tmp11(tmp12, obj);
    }
    const obj5 = { size: require(1273) /* Button */.AvatarSizes.LARGE_48, channel, guildId: channel.guild_id };
    ({ user: obj7.user, speaking: obj7.speaking } = tmp5);
    tmp18 = callback3(require(1273) /* Button */.Avatar, obj5);
  }
});
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
const memoResult = importAllResult.memo((arg0) => {
  let channel;
  let height;
  let pipParticipant;
  let selfParticipant;
  let width;
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = callback4();
  let obj = require(10546) /* useIsViewingActivity */;
  obj = { channelId: channel.id };
  const isViewingActivity = obj.useIsViewingActivity(obj);
  let obj2 = require(10542) /* useShouldForcePipOrientation */;
  const shouldForcePipOrientation = obj2.useShouldForcePipOrientation({ channel });
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp4 = importDefault(10545)(obj);
  const obj1 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background };
  obj2 = { activeOpacity: 0.7 };
  const obj3 = {};
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  ({ width, height } = importDefault(1450)());
  let obj7 = require(477) /* set */;
  let elevationShadow;
  if (obj7.isAndroid()) {
    elevationShadow = tmp.elevationShadow;
  }
  items[1] = elevationShadow;
  const obj4 = {};
  if (width > height) {
    let str = "row";
  } else {
    str = "column";
  }
  obj4.flexDirection = str;
  items[2] = obj4;
  items[3] = tmp4;
  obj3.style = items;
  if (isViewingActivity) {
    const obj5 = { pointerEvents: "none", style: tmp.activityPipContainer };
    const obj6 = { channel, pipParticipant, selfParticipant };
    obj5.children = tmp14(closure_21, obj6);
    let tmp14Result = tmp14(closure_5, obj5);
  } else {
    obj7 = { channel, pipParticipant, selfParticipant };
    tmp14Result = tmp14(closure_20, obj7);
  }
  obj3.children = tmp14Result;
  obj2.children = closure_16(closure_5, obj3);
  obj1.children = closure_16(closure_4, obj2);
  return closure_16(closure_5, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default memoResult;
export { areParticipantsEqual };
