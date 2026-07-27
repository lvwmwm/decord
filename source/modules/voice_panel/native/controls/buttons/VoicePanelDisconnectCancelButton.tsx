// Module ID: 15941
// Function ID: 123172
// Name: DisconnectCancelButton
// Dependencies: [57, 31, 1347, 4150, 4343, 9976, 33, 4131, 689, 9975, 10449, 3992, 10547, 4324, 4310, 4945, 10648, 15942, 9062, 15932, 1212, 2]
// Exports: default

// Module 15941 (DisconnectCancelButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import { VoicePanelModes } from "VoicePanelModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_10 = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.disconnectCancelBG = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
let closure_13 = { code: "function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}" };
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let PhoneHangUpIcon;
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const context = first.useContext(channelId(focused[9]));
  channelId = context.channelId;
  focused = context.focused;
  const mode = context.mode;
  const tmp3 = mode(first.useState(null), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  const callback = first.useCallback((arg0) => {
    if (null != arg0) {
      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
      let applicationId;
      if (null != currentEmbeddedActivity) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      if (null != applicationId) {
        let obj = tmp(focused[10]);
        obj = {};
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        if (arg0 === obj.getEmbeddedActivityParticipantId(obj)) {
          store(outer1_10.ACTIVITY);
        }
      }
      if (null == callback.getActiveStreamForStreamKey(arg0)) {
        let STREAM = outer1_10.USER;
      } else {
        STREAM = outer1_10.STREAM;
      }
      store(STREAM);
      const tmp12 = store;
    } else {
      store(null);
    }
  }, []);
  let obj = require(focused[11]);
  class T {
    constructor() {
      tmp = null;
      if (mode.get() === outer1_8.PANEL) {
        tmp2 = focused;
        value = focused.get();
        id = undefined;
        if (null != value) {
          id = value.id;
        }
        tmp5 = null;
        if (null != id) {
          tmp5 = id;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  obj = { mode, VoicePanelModes, focused };
  T.__closure = obj;
  T.__workletHash = 1109426015268;
  T.__initData = closure_12;
  class A {
    constructor(arg0, arg1) {
      if (props !== arg1) {
        tmp = outer1_0;
        tmp2 = focused;
        num = 11;
        obj = outer1_0(focused[11]);
        tmp3 = _isNativeReflectConstruct;
        tmp4 = obj.runOnJS(_isNativeReflectConstruct)(props);
      }
      return;
    }
  }
  obj = { runOnJS: require(focused[11]).runOnJS, handleFocusChange: callback };
  A.__closure = obj;
  A.__workletHash = 16719769067952;
  A.__initData = closure_13;
  const animatedReaction = obj.useAnimatedReaction(T, A);
  const items = [channelId, first, focused];
  const callback1 = first.useCallback(() => {
    const value = focused.get();
    if (null != value) {
      const id = value.id;
    }
    if (first !== outer1_10.ACTIVITY) {
      if (first === outer1_10.STREAM) {
        const participant = channelId(focused[13]).selectParticipant(channelId, null);
        if (null != id) {
          tmp(focused[14]).stopStream(id);
          const obj7 = tmp(focused[14]);
        }
      } else {
        channelId(focused[15]).disconnect();
        const state = PhoneHangUpIcon.getState();
        state.closeChannel(channelId);
        const obj4 = channelId(focused[15]);
      }
    } else {
      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
      let obj = tmp(focused[10]);
      const result = obj.activityParticipantIdToApplicationId(id);
      obj = {};
      let _location;
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      obj.location = _location;
      obj.applicationId = result;
      channelId(focused[12]).leaveActivity(obj);
      const obj2 = channelId(focused[12]);
    }
  }, items);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = require(focused[16]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = require(focused[17]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = require(focused[18]).PhoneHangUpIcon;
  }
  const obj1 = { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG };
  if (first === constants.ACTIVITY) {
    const intl3 = require(focused[20]).intl;
    let stringResult = intl3.string(require(focused[20]).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = require(focused[20]).intl;
    stringResult = intl2.string(require(focused[20]).t.q3O3J8);
  } else {
    const intl = require(focused[20]).intl;
    stringResult = intl.string(require(focused[20]).t["6vrfgt"]);
  }
  obj1.accessibilityLabel = stringResult;
  const items1 = [PhoneHangUpIcon, tmp.icon];
  obj1.children = first.useMemo(() => outer1_9(PhoneHangUpIcon, { style: tmp.icon }), items1);
  return jsx(channelId(focused[19]), { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG });
};
