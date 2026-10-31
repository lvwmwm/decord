// Module ID: 19190
// Function ID: 19191
// Name: useControllerPIPState
// Dependencies: [32, 19, 4862, 6846, 4863, 15628, 11223, 5657, 6847, 19144, 504, 4935, 8961, 10089, 5095, 19191, 19192, 19107, 19193, 19194, 2]
// Exports: useControllerPIPState

// Module 19190 (useControllerPIPState)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5657 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19107 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import FramesStore from "FramesStore" /* 6846 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15628 */;
import size_mod from "module_2" /* 2 */;

let channel, dependencyMap, targetDimensions;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
const __initData = { code: "function useControllerPIPStateTsx1(){const{scale,pipAvoidanceSpecs,windowDimensions,safeArea}=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};}" };
const __initData2 = { code: "function useControllerPIPStateTsx2(current){const{clampPIPScale,pipState,scale}=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export function useControllerPIPState(channelId) {
  let _undefined;
  let c7;
  let connected;
  let constants2;
  let dimensions;
  let focusedId;
  let id;
  let mode;
  let participant;
  let tmp12;
  let windowDimensions;
  const f116980 = () => layoutManager.getTargetDimensions(focusedId);
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c7 = undefined;
  let obj7;
  let tmp = channelId;
  let tmp3 = channelId(layoutManager[14]);
  const useSharedValue = tmp3.useSharedValue;
  let obj = channelId(layoutManager[15]);
  const sharedValue = useSharedValue(obj.getVoicePanelPIPScaleCached());
  let obj2 = pipAvoidanceSpecs;
  size = { id: "diversity", mode: "isArray", width: false, height: null, containerHeight: "slide_from_bottom", showSecondaryPIP: "motorcycle", scale: sharedValue };
  const ref = pipAvoidanceSpecs.useRef(size);
  const items = [obj7];
  const obj4 = channelId(layoutManager[10]);
  const stateFromStores = obj4.useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(channelId));
  const tmp8 = focusedId(layoutManager[9])(channelId);
  dependencyMap = tmp8;
  let obj5 = channelId(layoutManager[10]);
  const items1 = [safeArea, sharedValue, c7];
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
    const tmp4 = asLaunched(sharedValue.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === constants2.PIP) {
        return true;
      }
    }
    const connectedActivityLocation = safeArea.getConnectedActivityLocation();
    const obj3 = safeArea;
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
  [tmp12, c7] = windowDimensions(pipAvoidanceSpecs.useState(f116980), 2);
  const tmp11 = windowDimensions(pipAvoidanceSpecs.useState(f116980), 2);
  const obj6 = channelId(layoutManager[17]);
  const pIPMode = obj6.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  let obj3 = { connected, mode, focusedId, participantTargetDimensions: tmp12, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores1 };
  let tmp14 = focusedId(layoutManager[18])(channelId, layoutManager, focusedId, stateFromStores, obj3);
  ({ participant, dimensions } = tmp14);
  obj7 = { id, showSecondaryPIP: stateFromStores1, mode: pIPMode };
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  id = undefined;
  const tmp7 = focusedId;
  if (participant != null) {
    id = participant.id;
  }
  const tmpResult = tmp(layoutManager[13]);
  let result = tmpResult.cheapWorkletShallowEqual(obj7, ref.current);
  dependencyMap = !result;
  const effect = obj2.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      ref.current = obj7;
    }
  });
  if (result) {
    obj7 = ref.current;
  }
  const tmpResult2 = tmp(layoutManager[14]);
  class E {
    constructor() {
      const obj = { scale: sharedValue.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
      return obj;
    }
  }
  E.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  E.__workletHash = 16878800414836;
  E.__initData = __initData;
  class F {
    constructor(scale) {
      const obj = VoicePanelPIPUtils;
      const obj2 = { scale: scale.scale, width: obj7.width, containerHeight: obj7.containerHeight, showSecondaryPIP: obj7.showSecondaryPIP, windowDimensions: scale.windowDimensions, safeArea: scale.safeArea, pipAvoidanceSpecs: scale.pipAvoidanceSpecs };
      const clampPIPScaleResult = obj.clampPIPScale(obj2);
      if (scale.scale !== clampPIPScaleResult) {
        const result = sharedValue.set(clampPIPScaleResult);
      }
    }
  }
  F.__closure = { clampPIPScale: tmp(layoutManager[17]).clampPIPScale, pipState: obj7, scale: sharedValue };
  F.__workletHash = 9660590378927;
  F.__initData = __initData2;
  ({ clampPIPScale: tmp(layoutManager[17]).clampPIPScale, pipState: obj7, scale: sharedValue });
  const animatedReaction = tmpResult2.useAnimatedReaction(E, F);
  const items3 = [focusedId, layoutManager, tmp12];
  const effect1 = obj2.useEffect(() => {
    const f138133 = (safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      const obj = channelId(layoutManager[13]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f138133);
    return layoutManager.subscribeFromItem(function updateParticipantDimensions() {
      _undefined(f138133);
    });
  }, items3);
  tmp7(layoutManager[19])(channelId, layoutManager, pIPMode);
  return obj7;
}
