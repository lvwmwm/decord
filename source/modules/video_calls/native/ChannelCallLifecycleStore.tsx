// Module ID: 10528
// Function ID: 82260
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10528 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const VoiceCallOverlayType = arg1(dependencyMap[6]).VoiceCallOverlayType;
let closure_9 = false;
let closure_10 = false;
let closure_11 = false;
let closure_12 = false;
let obj = {};
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: arg1(dependencyMap[7]).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: arg1(dependencyMap[7]).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = obj;
let closure_15 = true;
let tmp2 = (Store) => {
  class ChannelCallLifecycleStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ChannelCallLifecycleStore);
      obj = closure_5(ChannelCallLifecycleStore);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ChannelCallLifecycleStore;
  callback2(ChannelCallLifecycleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "shouldReactToSeriousThermalStateWhenActivityFocused",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "consumedRequestToRespondToSeriousThermalState",
    value() {
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "disregardSeriousThermalState",
    value() {
      return closure_11;
    }
  };
  items[4] = {
    key: "isReactingToThermalState",
    value() {
      let tmp = closure_10;
      if (closure_10) {
        tmp = !closure_11;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getShowActivitiesDebugOverlay",
    value() {
      return closure_12;
    }
  };
  items[6] = {
    key: "getVoiceCallOverlayLayoutStates",
    value() {
      return closure_14;
    }
  };
  items[7] = {
    key: "isPipEnabledWhileFocusedOnActivityOrStream",
    value() {
      return closure_15;
    }
  };
  return callback(ChannelCallLifecycleStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "ChannelCallLifecycleStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const voiceChannelId = voiceChannelId.getVoiceChannelId();
      if (voiceChannelId !== voiceChannelId) {
        let closure_9 = false;
        let closure_10 = false;
        let closure_12 = false;
        let closure_11 = false;
        let closure_14 = obj;
      }
    }
  },
  EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE: function handleRequestRespondToSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_9 = true;
    }
  },
  EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST: function handleConsumeReactToSeriousThermalStateRequest(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_10 = true;
    }
  },
  EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE: function handleDisregardSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_11 = true;
    }
  },
  EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY: function handleSetDebugOverlayVisibility(visible) {
    visible = visible.visible;
  },
  VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE: function handleVoiceCallOverlayLayoutStateUpdate(arg0) {
    let voiceCallOverlayLayoutState;
    let voiceCallOverlayType;
    const obj = {};
    ({ voiceCallOverlayType, voiceCallOverlayLayoutState } = arg0);
    const merged = Object.assign(obj);
    obj[voiceCallOverlayType] = voiceCallOverlayLayoutState;
  },
  VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM: function handleSetPipEnabledForActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
    let closure_15 = pipEnabledWhileFocusedOnActivityOrStream.pipEnabledWhileFocusedOnActivityOrStream;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_15 = true;
    }
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_15 = true;
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/video_calls/native/ChannelCallLifecycleStore.tsx");

export default tmp2;
