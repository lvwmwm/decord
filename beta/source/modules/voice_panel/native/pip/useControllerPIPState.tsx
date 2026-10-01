// Module ID: 16908
// Function ID: 16909
// Name: useControllerPIPState
// Dependencies: [32, 19, 2044, 4852, 8499, 2045, 5731, 11755, 8502, 8500, 16861, 504, 4458, 8789, 8853, 4566, 16909, 16910, 550, 16911, 16912, 16914, 2]
// Exports: useControllerPIPState

// Module 16908 (useControllerPIPState)
import FramesConstants from "FramesConstants" /* 8500 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 16912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import FramesStore from "FramesStore" /* 8499 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import size from "module_2" /* 2 */;

let channel, dependencyMap, targetDimensions;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
const __initData = { code: "function useControllerPIPStateTsx1(){const{scale,pipAvoidanceSpecs,windowDimensions,safeArea}=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};}" };
const __initData2 = { code: "function useControllerPIPStateTsx2(current){const{clampPIPScale,pipState,scale}=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  let _undefined;
  let c11;
  let connected;
  let dimensions;
  let focusedId;
  let id;
  let mode;
  let participant;
  let tmp16;
  let tmpResult;
  let windowDimensions;
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c11 = undefined;
  let tmp = channelId;
  let tmp2 = layoutManager;
  let tmp3 = channelId(layoutManager[15]);
  const useSharedValue = tmp3.useSharedValue;
  let obj = channelId(layoutManager[16]);
  const sharedValue = useSharedValue(obj.getVoicePanelPIPScaleCached());
  let obj2 = pipAvoidanceSpecs;
  const ref = pipAvoidanceSpecs.useRef({ id: "dispatch", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: null, scale: sharedValue });
  let tmp6 = windowDimensions(pipAvoidanceSpecs.useState(undefined), 2);
  const current = tmp6[0];
  let closure_8 = tmp6[1];
  let closure_9 = pipAvoidanceSpecs.useRef(current);
  const insertionEffect = pipAvoidanceSpecs.useInsertionEffect(() => {
    closure_9.current = current;
  });
  let tmp10 = focusedId(layoutManager[10])(channelId);
  dependencyMap = tmp10;
  let obj3 = channelId(layoutManager[11]);
  let items = [safeArea, current, closure_8];
  const items1 = [channelId, tmp10, mode];
  const stateFromStores = obj3.useStateFromStores(items, () => {
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
    const tmp4 = obj5(first.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === constants.PIP) {
        return true;
      }
    }
    const connectedActivityLocation = safeArea.getConnectedActivityLocation();
    const obj3 = safeArea;
    if (null == connectedActivityLocation) {
      return false;
    } else {
      obj5 = channelId(layoutManager[12]);
      const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      const tmp14 = channelId;
      const tmp15 = layoutManager;
      if (result) {
        const tmp14Result = tmp14(tmp15[13]);
        result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === constants.PIP;
      if (tmp10) {
        tmp10 = mode === first1.PIP || embeddedActivityLocationChannelId !== channelId;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  }, items1);
  const tmp12 = focusedId(layoutManager[17])(channelId);
  const first1 = windowDimensions(pipAvoidanceSpecs.useState(() => focusedId(layoutManager[18])((fn) => fn(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = pipAvoidanceSpecs.useLayoutEffect(() => () => first1.cancel(), items2);
  let tmp15 = windowDimensions(pipAvoidanceSpecs.useState(() => layoutManager.getTargetDimensions(focusedId)), 2);
  [tmp16, c11] = tmp15;
  const obj4 = { connected, mode, focusedId, participantTargetDimensions: tmp16, selfHasVideo: tmp12, showSecondaryPIP: stateFromStores };
  ({ participant, dimensions } = focusedId(layoutManager[19])(channelId, layoutManager, focusedId, current, obj4));
  let obj5 = { id, showSecondaryPIP: stateFromStores, mode: tmpResult.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp12 }) };
  focusedId(layoutManager[19])(channelId, layoutManager, focusedId, current, obj4);
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  id = undefined;
  const tmp9 = focusedId;
  if (participant != null) {
    id = participant.id;
  }
  tmpResult = tmp(tmp2[20]);
  const tmpResult3 = tmp(tmp2[14]);
  let result = tmpResult3.cheapWorkletShallowEqual(obj5, ref.current);
  dependencyMap = !result;
  const effect = obj2.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      ref.current = obj5;
    }
  });
  if (result) {
    obj5 = ref.current;
  }
  const tmpResult4 = tmp(tmp2[15]);
  class N {
    constructor() {
      const obj = { scale: sharedValue.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
      return obj;
    }
  }
  N.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  N.__workletHash = 16878800414836;
  N.__initData = __initData;
  class B {
    constructor(scale) {
      const obj = VoicePanelPIPUtils;
      const obj2 = { scale: scale.scale, width: obj5.width, containerHeight: obj5.containerHeight, showSecondaryPIP: obj5.showSecondaryPIP, windowDimensions: scale.windowDimensions, safeArea: scale.safeArea, pipAvoidanceSpecs: scale.pipAvoidanceSpecs };
      const clampPIPScaleResult = obj.clampPIPScale(obj2);
      if (scale.scale !== clampPIPScaleResult) {
        const result = sharedValue.set(clampPIPScaleResult);
      }
    }
  }
  B.__closure = { clampPIPScale: tmp(tmp2[20]).clampPIPScale, pipState: obj5, scale: sharedValue };
  B.__workletHash = 9660590378927;
  B.__initData = __initData2;
  ({ clampPIPScale: tmp(tmp2[20]).clampPIPScale, pipState: obj5, scale: sharedValue });
  const animatedReaction = tmpResult4.useAnimatedReaction(N, B);
  const items3 = [channelId, first1];
  const effect1 = obj2.useEffect(() => {
    let participant;
    const items = [ref, sharedValue];
    const batchedStoreListener = new channelId(layoutManager[11]).BatchedStoreListener(items, () => {
      const tmp = (() => {
        const speakers = ref.getSpeakers();
        const iter = speakers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (null != participant.getParticipant(closure_0, nextResult)) {
            iter.return();
            return nextResult;
          }
        }
      })();
      let closure_0 = tmp;
      let tmp3 = tmp !== ref.current;
      const tmp2 = ref;
      if (tmp3) {
        let tmp4 = null;
        tmp3 = null != tmp;
      }
      if (tmp3) {
        let tmp5 = null;
        if (null == tmp2.current) {
          closure_8(tmp);
        } else {
          let tmp6 = closure_10;
          closure_10(() => closure_2_8(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items3);
  const items4 = [focusedId, layoutManager, tmp16];
  const effect2 = obj2.useEffect(() => {
    const f126390 = (safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      const obj = channelId(layoutManager[14]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f126390);
    return layoutManager.subscribeFromItem(function updateParticipantDimensions() {
      _undefined(f126390);
    });
  }, items4);
  tmp9(tmp2[21])(channelId, layoutManager, focusedId);
  return obj5;
};
