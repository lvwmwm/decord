// Module ID: 19606
// Function ID: 19607
// Name: useControllerPIPState
// Dependencies: [32, 19, 5018, 6934, 5019, 15974, 11395, 5813, 6935, 19560, 504, 5091, 9073, 10242, 1652, 19607, 19608, 19523, 19609, 19610, 2]
// Exports: useControllerPIPState

// Module 19606 (useControllerPIPState)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import FramesStore from "FramesStore" /* 6934 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15974 */;
import size_mod from "module_2" /* 2 */;

let channel, connectedActivityLocation, targetDimensions;

let _slicedToArray = _slicedToArray_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
let closure_12 = { code: "(function useControllerPIPStateTsx1(){let[scale,pipAvoidanceSpecs,windowDimensions,safeArea]=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};})" };
let closure_13 = { code: "(function useControllerPIPStateTsx2(current){let[clampPIPScale,pipState,scale]=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export function useControllerPIPState(channelId) {
  let _undefined;
  let c3;
  let connected;
  let constants2;
  let dimensions;
  let focusedId;
  let id;
  let mainFrame;
  let participant;
  let pipAvoidanceSpecs;
  let safeArea;
  let tmp12;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let windowDimensions;
  const f118958 = () => layoutManager.getTargetDimensions(focusedId);
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  const mode = channelId.mode;
  _slicedToArray = undefined;
  let tmp = channelId;
  ({ windowDimensions, pipAvoidanceSpecs, safeArea } = channelId);
  let tmp3 = channelId(layoutManager[14]);
  const useSharedValue = tmp3.useSharedValue;
  let obj = channelId(layoutManager[15]);
  const sharedValue = useSharedValue(obj.getVoicePanelPIPScaleCached());
  size = { id: "disabled", mode: "isArray", width: false, height: null, containerHeight: "slide_from_bottom", showSecondaryPIP: "en-BZ", scale: sharedValue };
  const ref = react.useRef(size);
  const items = [PIPSpeakerStore];
  const obj4 = channelId(layoutManager[10]);
  const stateFromStores = obj4.useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(channelId));
  const tmp8 = focusedId(layoutManager[9])(channelId);
  let closure_2 = tmp8;
  let obj5 = channelId(layoutManager[10]);
  const items1 = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
  const items2 = [channelId, tmp8, mode];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    const obj = channel;
    channel = channel.getChannel(channelId);
    let isVocalResult;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      const tmp3 = closure_2;
      if (!tmp3) {
        return false;
      }
    }
    const tmp4 = asLaunched(mainFrame.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === constants2.PIP) {
        return true;
      }
    }
    const obj3 = connectedActivityLocation;
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const obj5 = channelId(layoutManager[11]);
      const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      const tmp14 = channelId;
      const tmp15 = layoutManager;
      if (result) {
        const tmp14Result = tmp14(tmp15[12]);
        result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === constants2.PIP;
      if (tmp10) {
        tmp10 = mode === constants.PIP || embeddedActivityLocationChannelId !== channelId;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  }, items2);
  let tmp10 = focusedId(layoutManager[16])(channelId);
  [tmp12, c3] = _slicedToArray(react.useState(f118958), 2);
  const tmp11 = _slicedToArray(react.useState(f118958), 2);
  const obj6 = channelId(layoutManager[17]);
  const pIPMode = obj6.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  let obj3 = { connected, mode, focusedId, participantTargetDimensions: tmp12, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores1 };
  let tmp14 = focusedId(layoutManager[18])(channelId, layoutManager, focusedId, stateFromStores, obj3);
  ({ participant, dimensions } = tmp14);
  let obj7 = { id, showSecondaryPIP: stateFromStores1, mode: pIPMode };
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  id = undefined;
  const tmp7 = focusedId;
  if (participant != null) {
    id = participant.id;
  }
  const tmpResult = tmp(layoutManager[13]);
  let result = tmpResult.cheapWorkletShallowEqual(obj7, ref.current);
  closure_2 = !result;
  const effect = obj2.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      ref.current = obj7;
    }
  });
  if (result) {
    obj7 = ref.current;
  }
  const items3 = [closure_12, sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea];
  _slicedToArray = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items3;
  function useControllerPIPStateTsx1() {
    const obj = { scale: _undefined.get(), pipAvoidanceSpecs: _undefined2.get(), windowDimensions: _undefined3.get(), safeArea: _undefined4.get() };
    return obj;
  }
  const items4 = [tmp22, tmp23, tmp24, tmp25];
  useControllerPIPStateTsx1.__closure = items4;
  useControllerPIPStateTsx1.__workletHash = 9801015138445;
  useControllerPIPStateTsx1.__initData = tmp21;
  const items5 = [closure_13, , , ];
  const useAnimatedReaction = tmp(tmp2[14]).useAnimatedReaction;
  tmp(layoutManager[14]);
  items5[1] = tmp(layoutManager[17]).clampPIPScale;
  items5[2] = obj7;
  items5[3] = sharedValue;
  let c0;
  let c1;
  let c2;
  [tmp26, tmp27, tmp28, tmp29] = items5;
  function useControllerPIPStateTsx2(scale) {
    const obj = { scale: scale.scale, width: _undefined2.width, containerHeight: _undefined2.containerHeight, showSecondaryPIP: _undefined2.showSecondaryPIP, windowDimensions: scale.windowDimensions, safeArea: scale.safeArea, pipAvoidanceSpecs: scale.pipAvoidanceSpecs };
    const tmp = _undefined(obj);
    if (scale.scale !== tmp) {
      const result = _undefined3.set(tmp);
    }
  }
  const items6 = [tmp27, tmp28, tmp29];
  useControllerPIPStateTsx2.__closure = items6;
  useControllerPIPStateTsx2.__workletHash = 16873305114518;
  useControllerPIPStateTsx2.__initData = tmp26;
  const animatedReaction = useAnimatedReaction(useControllerPIPStateTsx1, useControllerPIPStateTsx2);
  const items7 = [focusedId, layoutManager, tmp12];
  const effect1 = obj2.useEffect(() => {
    const f141122 = (safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      const obj = channelId(layoutManager[13]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f141122);
    return layoutManager.subscribeFromItem(function updateParticipantDimensions() {
      _undefined(f141122);
    });
  }, items7);
  tmp7(layoutManager[19])(channelId, layoutManager, pIPMode);
  return obj7;
}
