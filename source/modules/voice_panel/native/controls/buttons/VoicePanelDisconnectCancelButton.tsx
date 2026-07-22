// Module ID: 15754
// Function ID: 120462
// Name: DisconnectCancelButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15754 (DisconnectCancelButton)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { VoicePanelModes } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_10 = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
__exportStarResult1 = {};
__exportStarResult1 = { minWidth: require("__exportStarResult1").modules.mobile.VOICE_PANEL_DISCONNECT_BUTTON_MIN_WIDTH, backgroundColor: require("__exportStarResult1").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
__exportStarResult1.disconnectCancelBG = __exportStarResult1;
__exportStarResult1.icon = { tintColor: require("__exportStarResult1").colors.WHITE };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
let closure_12 = { code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
let closure_13 = { code: "function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}" };
const result = __exportStarResult1.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let closure_7;
  const tmp = __exportStarResult1();
  const arg1 = tmp;
  const context = React.useContext(importDefault(dependencyMap[9]));
  const channelId = context.channelId;
  const importDefault = channelId;
  const focused = context.focused;
  const dependencyMap = focused;
  const mode = context.mode;
  let callback = mode;
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const React = first;
  let closure_5 = tmp3[1];
  callback = React.useCallback((arg0) => {
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
          store(constants2.ACTIVITY);
        }
      }
      if (null == callback.getActiveStreamForStreamKey(arg0)) {
        let STREAM = constants2.USER;
      } else {
        STREAM = constants2.STREAM;
      }
      store(STREAM);
      const tmp12 = store;
    } else {
      store(null);
    }
  }, []);
  let closure_6 = callback;
  let obj = arg1(dependencyMap[11]);
  class A {
    constructor() {
      tmp = null;
      if (mode.get() === closure_8.PANEL) {
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
  A.__closure = obj;
  A.__workletHash = 1109426015268;
  A.__initData = closure_12;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp(focused[11]).runOnJS(callback)(arg0);
      const obj = tmp(focused[11]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[11]).runOnJS, handleFocusChange: callback };
  fn.__closure = obj;
  fn.__workletHash = 16719769067952;
  fn.__initData = closure_13;
  const animatedReaction = obj.useAnimatedReaction(A, fn);
  const items = [channelId, first, focused];
  const callback1 = React.useCallback(() => {
    const value = focused.get();
    if (null != value) {
      const id = value.id;
    }
    if (first !== constants2.ACTIVITY) {
      if (first === constants2.STREAM) {
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
    let PhoneHangUpIcon = arg1(dependencyMap[16]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = arg1(dependencyMap[17]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = arg1(dependencyMap[18]).PhoneHangUpIcon;
  }
  closure_7 = PhoneHangUpIcon;
  const obj1 = { onPress: callback1, props: props.props, style: tmp.disconnectCancelBG };
  if (first === constants.ACTIVITY) {
    const intl3 = arg1(dependencyMap[20]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[20]).t.R/FK4A);
  } else if (first === constants.STREAM) {
    const intl2 = arg1(dependencyMap[20]).intl;
    stringResult = intl2.string(arg1(dependencyMap[20]).t.q3O3J8);
  } else {
    const intl = arg1(dependencyMap[20]).intl;
    stringResult = intl.string(arg1(dependencyMap[20]).t.6vrfgt);
  }
  obj1.accessibilityLabel = stringResult;
  const items1 = [PhoneHangUpIcon, tmp.icon];
  obj1.children = React.useMemo(() => callback(PhoneHangUpIcon, { style: tmp.icon }), items1);
  return jsx(importDefault(dependencyMap[19]), obj1);
};
