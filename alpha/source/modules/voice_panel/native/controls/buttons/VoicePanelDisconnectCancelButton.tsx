// Module ID: 19313
// Function ID: 19314
// Name: VoicePanelDisconnectCancelButton
// Dependencies: [32, 19, 4862, 6714, 6875, 11223, 21, 5014, 575, 11222, 6851, 5095, 10932, 5759, 7901, 6706, 11883, 19314, 9835, 19304, 1113, 2]
// Exports: default

// Module 19313 (VoicePanelDisconnectCancelButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5759 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6851 */;
import StreamActionCreators from "StreamActionCreators" /* 7901 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10932 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj3;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const jsx = Fragment.jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
let createStyles = createStyles_mod;
let obj = { disconnectCancelBG: obj2, icon: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles(obj);
const __initData = { code: "function VoicePanelDisconnectCancelButtonTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;}" };
const __initData2 = { code: "function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){const{runOnJS,handleFocusChange}=this.__closure;if(focusId!==lastFocusId){runOnJS(handleFocusChange)(focusId);}}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let icon;
  let items1;
  let stringResult;
  let channelId;
  let focused;
  let first;
  let PhoneHangUpIcon;
  props = props.props;
  let tmp = closure_11();
  _require = tmp;
  let obj = first;
  const tmp2 = channelId;
  const context = first.useContext(channelId(focused[9]));
  channelId = context.channelId;
  focused = context.focused;
  const mode = context.mode;
  const tmp5 = mode(first.useState(null), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  const handleFocusChange = first.useCallback((id) => {
    if (null != id) {
      let STREAM;
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      if (null != applicationId) {
        const obj3 = { applicationId: null, instanceId: null };
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        const obj = ChannelRTCParticipants;
        if (id === obj.getEmbeddedActivityParticipantId(obj3)) {
          closure_5(constants.ACTIVITY);
        }
      }
      const tmp12 = closure_5;
      if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
        STREAM = constants.USER;
      } else {
        STREAM = constants.STREAM;
      }
      tmp12(STREAM);
    } else {
      closure_5(null);
    }
  }, []);
  const tmp8 = _require;
  let obj2 = require("ReanimatedRexport");
  const fn = function p() {
    let tmp = null;
    if (mode.get() === VoicePanelModes.PANEL) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      if (id == null) {
        id = null;
      }
      tmp = id;
    }
    return tmp;
  };
  let obj3 = { mode, VoicePanelModes, focused };
  fn.__closure = obj3;
  fn.__workletHash = 1109426015268;
  fn.__initData = __initData;
  class T {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)(arg0);
      }
    }
  }
  T.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
  T.__workletHash = 16719769067952;
  T.__initData = __initData2;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange });
  const animatedReaction = obj2.useAnimatedReaction(fn, T);
  const items = [channelId, first, focused];
  const callback1 = first.useCallback(() => {
    let id;
    const value = focused.get();
    if (value != null) {
      id = value.id;
    }
    if (first !== constants.ACTIVITY) {
      if (tmp2 === constants.STREAM) {
        const obj5 = ChannelRTCActionCreatorsDefault;
        const participant = obj5.selectParticipant(channelId, null);
        if (null != id) {
          const obj6 = StreamActionCreators;
          obj6.stopStream(id);
        }
      } else {
        const obj3 = SelectedChannelActionCreatorsDefault;
        obj3.disconnect();
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
      }
    } else {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      const obj = ChannelRTCParticipants;
      const result = obj.activityParticipantIdToApplicationId(id);
      let _location;
      const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
      leaveEmbeddedActivity2;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: result };
      const result1 = leaveEmbeddedActivity(obj2);
    }
  }, items);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(tmp3[16]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = tmp8(tmp3[17]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(tmp3[18]).PhoneHangUpIcon;
  }
  let tmp12 = jsx;
  const element = { onPress: callback1, props, style: tmp.disconnectCancelBG, accessibilityLabel: stringResult, children: obj.useMemo(() => <PhoneHangUpIcon style={icon.icon} />, items1) };
  const tmp2Result = tmp2(focused[19]);
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(tmp3[20]).intl;
    stringResult = intl3.string(tmp8(tmp3[20]).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = tmp8(tmp3[20]).intl;
    stringResult = intl2.string(tmp8(tmp3[20]).t.q3O3J8);
  } else {
    const intl = tmp8(tmp3[20]).intl;
    stringResult = intl.string(tmp8(tmp3[20]).t["6vrfgt"]);
  }
  items1 = [PhoneHangUpIcon, tmp.icon];
  return tmp12(tmp2Result, element);
};
