// Module ID: 19707
// Function ID: 19708
// Name: VoicePanelDisconnectCancelButton
// Dependencies: [32, 19, 4988, 6769, 4989, 6930, 11363, 21, 5140, 575, 11362, 6906, 1652, 1705, 11065, 5888, 7978, 12048, 8010, 6761, 12046, 19677, 9955, 19698, 1113, 2]
// Exports: default

// Module 19707 (VoicePanelDisconnectCancelButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6906 */;
import StreamActionCreators from "StreamActionCreators" /* 7978 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8010 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 11065 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 12048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6769 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let obj3;
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const jsx = Fragment.jsx;
const constants = { USER: 0, [0]: "USER", STREAM: 1, [1]: "STREAM", ACTIVITY: 2, [2]: "ACTIVITY" };
let createStyles = createStyles_mod;
let obj = { disconnectCancelBG: obj2, icon: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function VoicePanelDisconnectCancelButtonTsx1(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get$id,_focused$get;if(mode.get()!==VoicePanelModes.PANEL){return null;}return(_focused$get$id=(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==null&&_focused$get$id!==void 0?_focused$get$id:null;})" };
let closure_14 = { code: "(function VoicePanelDisconnectCancelButtonTsx2(focusId,lastFocusId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(focusId!==lastFocusId){scheduleOnRN(handleFocusChange,focusId);}})" };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDisconnectCancelButton.tsx");

export default function DisconnectCancelButton(props) {
  let closure_4;
  let icon;
  let items5;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let channelId;
  let focused;
  let first;
  react = undefined;
  let PhoneHangUpIcon;
  props = props.props;
  let tmp = closure_12();
  _require = tmp;
  let obj = react;
  const tmp2 = channelId;
  const context = react.useContext(channelId(focused[10]));
  channelId = context.channelId;
  focused = context.focused;
  const mode = context.mode;
  const tmp5 = first(react.useState(null), 2);
  first = tmp5[0];
  react = tmp5[1];
  const tmp8 = _require;
  const callback = react.useCallback((id) => {
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
          closure_4(constants.ACTIVITY);
        }
      }
      const tmp12 = closure_4;
      if (null == ApplicationStreamingStore.getActiveStreamForStreamKey(id)) {
        STREAM = constants.USER;
      } else {
        STREAM = constants.STREAM;
      }
      tmp12(STREAM);
    } else {
      closure_4(null);
    }
  }, []);
  const items = [closure_13, mode, VoicePanelModes, focused];
  let c0;
  let c1;
  let c2;
  [tmp10, tmp11, tmp12, tmp13] = items;
  const tmp9 = require("module_1652");
  class VoicePanelDisconnectCancelButtonTsx1 {
    constructor() {
      let tmp = null;
      if (_undefined.get() === _undefined2.PANEL) {
        const value = _undefined3.get();
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
    }
  }
  const items1 = [tmp11, tmp12, tmp13];
  VoicePanelDisconnectCancelButtonTsx1.__closure = items1;
  VoicePanelDisconnectCancelButtonTsx1.__workletHash = 15477130751677;
  VoicePanelDisconnectCancelButtonTsx1.__initData = tmp10;
  const items2 = [closure_14, , ];
  const useAnimatedReaction = tmp9.useAnimatedReaction;
  items2[1] = tmp8(focused[13]).scheduleOnRN;
  items2[2] = callback;
  c0 = undefined;
  c1 = undefined;
  [tmp14, tmp15, tmp16] = items2;
  class VoicePanelDisconnectCancelButtonTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items3 = [tmp15, tmp16];
  VoicePanelDisconnectCancelButtonTsx2.__closure = items3;
  VoicePanelDisconnectCancelButtonTsx2.__workletHash = 6008076230148;
  VoicePanelDisconnectCancelButtonTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(VoicePanelDisconnectCancelButtonTsx1, VoicePanelDisconnectCancelButtonTsx2);
  const items4 = [channelId, first, focused];
  const callback1 = obj.useCallback(() => {
    let id;
    const value = focused.get();
    if (value != null) {
      id = value.id;
    }
    if (first !== constants.ACTIVITY) {
      if (tmp2 === constants.STREAM) {
        const obj6 = ChannelRTCActionCreatorsDefault;
        const participant = obj6.selectParticipant(channelId, null);
        if (null != id) {
          const obj7 = StreamActionCreators;
          obj7.stopStream(id);
        }
      } else {
        const channel = ChannelStore.getChannel(channelId);
        const tmp27 = channelId;
        if (null != channel) {
          if (shouldShowEndStageModalDefault(channel)) {
            const obj5 = StageChannelActionCreatorExtras;
            obj5.openEndStageModal(channel);
          }
        }
        const obj3 = SelectedChannelActionCreatorsDefault;
        obj3.disconnect();
        const state = VoicePanelStore.getState();
        state.closeChannel(tmp27);
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
  }, items4);
  if (first === constants.ACTIVITY) {
    PhoneHangUpIcon = tmp8(tmp3[20]).DoorExitIcon;
  } else if (first === constants.STREAM) {
    PhoneHangUpIcon = tmp8(tmp3[21]).ScreenXIcon;
  } else {
    PhoneHangUpIcon = tmp8(tmp3[22]).PhoneHangUpIcon;
  }
  const element = { onPress: callback1, props, style: tmp.disconnectCancelBG, accessibilityLabel: stringResult, children: obj.useMemo(() => <PhoneHangUpIcon style={icon.icon} />, items5) };
  const tmp20 = jsx;
  const tmp2Result = tmp2(focused[23]);
  if (first === constants.ACTIVITY) {
    const intl3 = tmp8(tmp3[24]).intl;
    stringResult = intl3.string(tmp8(tmp3[24]).t["R/FK4A"]);
  } else if (first === constants.STREAM) {
    const intl2 = tmp8(tmp3[24]).intl;
    stringResult = intl2.string(tmp8(tmp3[24]).t.q3O3J8);
  } else {
    const intl = tmp8(tmp3[24]).intl;
    stringResult = intl.string(tmp8(tmp3[24]).t["6vrfgt"]);
  }
  items5 = [PhoneHangUpIcon, tmp.icon];
  return tmp20(tmp2Result, element);
};
