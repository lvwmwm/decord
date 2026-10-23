// Module ID: 18620
// Function ID: 18621
// Name: useControllerPIPState
// Dependencies: [32, 19, 4820, 6773, 4821, 15024, 10896, 5607, 6774, 558, 576, 18440, 4890, 8880, 504, 9975, 5050, 18558, 18621, 18409, 18622, 18623, 2]
// Exports: useControllerPIPState

// Module 18620 (useControllerPIPState)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4890 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5607 */;
import FramesConstants from "FramesConstants" /* 6774 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10896 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18409 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6773 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15024 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, targetDimensions;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowSecondaryPIP(channelId) {
  let closure_2;
  let first;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(6);
  channelId = channelId.channelId;
  const mode = channelId.mode;
  let tmp4 = mode(18440)(channelId);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === tmp4) {
      let tmp9;
      let tmp10;
      if (cResult[3] === mode) {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp9, tmp10);
    }
  }
  const fn = function l() {
    const channel = ChannelStore.getChannel(channelId);
    let isVocalResult;
    const obj = ChannelStore;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      const tmp3 = closure_2;
      if (!tmp3) {
        return false;
      }
    }
    const tmp4 = asLaunched(FramesStore.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
        return true;
      }
    }
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj3 = EmbeddedActivitiesStore;
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const obj5 = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      const tmp14 = require;
      if (result) {
        const tmp14Result = tmp14(8880);
        result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  };
  const items1 = [channelId, tmp4, mode];
  cResult[1] = channelId;
  cResult[2] = tmp4;
  cResult[3] = mode;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : (function useShowSecondaryPIP(channelId) {
  let closure_2;
  channelId = channelId.channelId;
  const mode = channelId.mode;
  const tmp = mode(18440)(channelId);
  dependencyMap = tmp;
  let obj = channelId(504);
  const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
  const items1 = [channelId, tmp, mode];
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let isVocalResult;
    const obj = ChannelStore;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      const tmp3 = closure_2;
      if (!tmp3) {
        return false;
      }
    }
    const tmp4 = asLaunched(FramesStore.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
        return true;
      }
    }
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj3 = EmbeddedActivitiesStore;
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const obj5 = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      const tmp14 = require;
      if (result) {
        const tmp14Result = tmp14(8880);
        result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  }, items1);
});
const __initData = { code: "function useControllerPIPStateTsx1(){const{scale,pipAvoidanceSpecs,windowDimensions,safeArea}=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};}" };
const __initData2 = { code: "function useControllerPIPStateTsx2(current){const{clampPIPScale,pipState,scale}=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  let _undefined;
  let c7;
  let connected;
  let dimensions;
  let focusedId;
  let id;
  let mode;
  let participant;
  let tmp11;
  let windowDimensions;
  const f136909 = () => layoutManager.getTargetDimensions(focusedId);
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c7 = undefined;
  let obj6;
  let tmp = channelId;
  const useSharedValue = channelId(layoutManager[16]).useSharedValue;
  const tmp3 = channelId(layoutManager[16]);
  let obj = channelId(layoutManager[17]);
  const sharedValue = useSharedValue(obj.getVoicePanelPIPScaleCached());
  let obj2 = pipAvoidanceSpecs;
  const ref = pipAvoidanceSpecs.useRef({ id: "end", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "box-none", showSecondaryPIP: null, scale: sharedValue });
  const items = [obj6];
  const obj3 = channelId(layoutManager[14]);
  const stateFromStores = obj3.useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(channelId));
  const tmp7 = closure_12({ channelId, mode });
  const tmp9 = focusedId(layoutManager[18])(channelId);
  [tmp11, c7] = windowDimensions(pipAvoidanceSpecs.useState(f136909), 2);
  windowDimensions(pipAvoidanceSpecs.useState(f136909), 2);
  const obj4 = channelId(layoutManager[19]);
  const pIPMode = obj4.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp9 });
  const obj5 = { connected, mode, focusedId, participantTargetDimensions: tmp11, selfHasVideo: tmp9, showSecondaryPIP: tmp7 };
  ({ participant, dimensions } = focusedId(layoutManager[20])(channelId, layoutManager, focusedId, stateFromStores, obj5));
  obj6 = { id, showSecondaryPIP: tmp7, mode: pIPMode };
  focusedId(layoutManager[20])(channelId, layoutManager, focusedId, stateFromStores, obj5);
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  id = undefined;
  const tmp8 = focusedId;
  if (participant != null) {
    id = participant.id;
  }
  const tmpResult = tmp(layoutManager[15]);
  let result = tmpResult.cheapWorkletShallowEqual(obj6, ref.current);
  let closure_2 = !result;
  const effect = obj2.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      ref.current = obj6;
    }
  });
  if (result) {
    obj6 = ref.current;
  }
  const tmpResult2 = tmp(layoutManager[16]);
  class C {
    constructor() {
      const obj = { scale: sharedValue.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
      return obj;
    }
  }
  C.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  C.__workletHash = 16878800414836;
  C.__initData = __initData;
  const fn = function _(scale) {
    const obj = VoicePanelPIPUtils;
    const obj2 = { scale: scale.scale, width: obj6.width, containerHeight: obj6.containerHeight, showSecondaryPIP: obj6.showSecondaryPIP, windowDimensions: scale.windowDimensions, safeArea: scale.safeArea, pipAvoidanceSpecs: scale.pipAvoidanceSpecs };
    const clampPIPScaleResult = obj.clampPIPScale(obj2);
    if (scale.scale !== clampPIPScaleResult) {
      const result = sharedValue.set(clampPIPScaleResult);
    }
  };
  fn.__closure = { clampPIPScale: tmp(layoutManager[19]).clampPIPScale, pipState: obj6, scale: sharedValue };
  fn.__workletHash = 9660590378927;
  fn.__initData = __initData2;
  ({ clampPIPScale: tmp(layoutManager[19]).clampPIPScale, pipState: obj6, scale: sharedValue });
  const animatedReaction = tmpResult2.useAnimatedReaction(C, fn);
  const items1 = [focusedId, layoutManager, tmp11];
  const effect1 = obj2.useEffect(() => {
    const f161116 = (safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      const obj = channelId(layoutManager[15]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f161116);
    return layoutManager.subscribeFromItem(function updateParticipantDimensions() {
      _undefined(f161116);
    });
  }, items1);
  tmp8(layoutManager[21])(channelId, layoutManager, pIPMode);
  return obj6;
};
