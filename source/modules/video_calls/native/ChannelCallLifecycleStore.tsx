// Module ID: 10539
// Function ID: 82323
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1906, 10211, 8303, 636, 566, 686, 2]

// Module 10539 (_isNativeReflectConstruct)
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import handleOrientationChange from "handleOrientationChange";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VoiceCallOverlayType } from "BOX_MODE_ACTIONSHEET_WIDTH";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c9 = false;
let c10 = false;
let c11 = false;
let c12 = false;
let obj = {};
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = obj;
let c15 = true;
let tmp2 = ((Store) => {
  class ChannelCallLifecycleStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ChannelCallLifecycleStore);
      obj = outer1_5(ChannelCallLifecycleStore);
      tmp2 = outer1_4;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelCallLifecycleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "shouldReactToSeriousThermalStateWhenActivityFocused",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "consumedRequestToRespondToSeriousThermalState",
    value() {
      return outer1_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "disregardSeriousThermalState",
    value() {
      return outer1_11;
    }
  };
  items[4] = {
    key: "isReactingToThermalState",
    value() {
      let tmp = outer1_10;
      if (outer1_10) {
        tmp = !outer1_11;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getShowActivitiesDebugOverlay",
    value() {
      return outer1_12;
    }
  };
  items[6] = {
    key: "getVoiceCallOverlayLayoutStates",
    value() {
      return outer1_14;
    }
  };
  items[7] = {
    key: "isPipEnabledWhileFocusedOnActivityOrStream",
    value() {
      return outer1_15;
    }
  };
  return callback(ChannelCallLifecycleStore, items);
})(require("initialize").Store);
tmp2.displayName = "ChannelCallLifecycleStore";
tmp2 = new tmp2(require("dispatcher"), {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      if (voiceChannelId !== voiceChannelId) {
        let c9 = false;
        let c10 = false;
        let c12 = false;
        let c11 = false;
        let closure_14 = obj;
      }
    }
  },
  EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE: function handleRequestRespondToSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c9 = true;
    }
  },
  EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST: function handleConsumeReactToSeriousThermalStateRequest(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c10 = true;
    }
  },
  EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE: function handleDisregardSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c11 = true;
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
      let c15 = true;
    }
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c15 = true;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/video_calls/native/ChannelCallLifecycleStore.tsx");

export default tmp2;
