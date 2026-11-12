// Module ID: 19891
// Function ID: 19892
// Name: VoicePanelSystemUIManager
// Dependencies: [32, 19, 6953, 11919, 11917, 5920, 21, 11918, 1259, 1377, 551, 1652, 11266, 1705, 11761, 12621, 2]

// Module 19891 (VoicePanelSystemUIManager)
import react_native from "react-native" /* 1259 */;
import CallConstants from "CallConstants" /* 5920 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11917 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11918 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11919 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let participant;

let c10;
let c9;
let tmp;
let unpackModuleId;
const StatusBarDefault = tmp(11761);
const HomeIndicatorDefault = tmp(12621);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = { code: "(function VoicePanelSystemUIManagerTsx1(){let[focused,mode,controlsSpecs,windowDimensions]=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};})" };
let closure_13 = { code: "(function VoicePanelSystemUIManagerTsx2(props,previous){let[cheapWorkletShallowEqual,scheduleOnRN,handleStateChange]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(handleStateChange,props);})" };
const memoResult = react.memo(function VoicePanelSystemUIManager() {
  let closure_2;
  let closure_4;
  let controlsSpecs;
  let first;
  let first1;
  let focused;
  let items6;
  let mode;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp5;
  let tmp9;
  let windowDimensions;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const context = react.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ focused, mode, controlsSpecs, windowDimensions } = context);
  let tmp4 = _slicedToArray(react.useState(true), 2);
  [tmp5, importDefault] = tmp4;
  [first, dependencyMap] = react.useState(true);
  const tmp8 = _slicedToArray(react.useState(false), 2);
  [tmp9, _slicedToArray] = tmp8;
  [first1, react] = react.useState(false);
  const items = [channelId];
  const memo = react.useMemo(() => {
    let constants2;
    let constants3;
    let closure_0 = require("debounce")(function updateState(arg0) {
      let closure_3;
      ({ focusedId: closure_0, mode: focusedId, controlsMode: closure_2, landscape: closure_3 } = arg0);
      const obj = closure_0(closure_1_2[8]);
      obj.batchUpdates(() => {
        closure_2_2(c1 !== constants.PIP);
        let tmp4 = null == c0;
        const HIDDEN = constants2.HIDDEN;
        const tmp2 = c2;
        if (tmp4) {
          tmp4 = !c3;
        }
        if (!tmp4) {
          tmp4 = tmp2 !== HIDDEN;
        }
        focusedId(tmp4);
        participant = undefined;
        if (null != c0) {
          participant = participant.getParticipant(closure_2_0, tmp3);
        }
        let type;
        if (participant != null) {
          type = participant.type;
        }
        const ACTIVITY = constants3.ACTIVITY;
        const obj = _undefined(closure_3_2[9]);
        const tmp11 = obj.isIOS() && type === ACTIVITY;
        closure_2_4(tmp11);
        let tmp14 = !tmp4;
        const tmp13 = closure_2_3;
        if (!tmp4) {
          tmp14 = !tmp11;
        }
        tmp13(tmp14);
      });
    }, 500, { maxWait: 2000 });
    let focusedId;
    let obj = {
      cancelPendingDebounce() {
        closure_0.cancel();
      },
      handleStateChange(focusedId) {
        let c0;
        let c1;
        let c2;
        let c3;
        if (focusedId !== focusedId.focusedId) {
          focusedId = focusedId.focusedId;
          let tmp2 = closure_0(focusedId);
        } else {
          const tmp3 = closure_0;
          closure_0.cancel();
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          c3 = undefined;
          ({ focusedId: c0, mode: c1, controlsMode: c2, landscape: c3 } = focusedId);
          let obj = react_native;
          obj.batchUpdates(() => {
            closure_2_2(c1 !== constants.PIP);
            let tmp4 = null == c0;
            const HIDDEN = constants2.HIDDEN;
            const tmp2 = c2;
            if (tmp4) {
              tmp4 = !c3;
            }
            if (!tmp4) {
              tmp4 = tmp2 !== HIDDEN;
            }
            focusedId(tmp4);
            participant = undefined;
            if (null != c0) {
              participant = participant.getParticipant(closure_2_0, tmp3);
            }
            let type;
            if (participant != null) {
              type = participant.type;
            }
            const ACTIVITY = constants3.ACTIVITY;
            const obj = _undefined(closure_3_2[9]);
            const tmp11 = obj.isIOS() && type === ACTIVITY;
            closure_2_4(tmp11);
            let tmp14 = !tmp4;
            const tmp13 = closure_2_3;
            if (!tmp4) {
              tmp14 = !tmp11;
            }
            tmp13(tmp14);
          });
        }
      }
    };
    return obj;
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const items1 = [cancelPendingDebounce];
  const handleStateChange = memo.handleStateChange;
  const effect = react.useEffect(() => () => cancelPendingDebounce(), items1);
  let tmp14 = channelId;
  const items2 = [closure_12, focused, mode, controlsSpecs, windowDimensions];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  const tmp15 = channelId(1652);
  class VoicePanelSystemUIManagerTsx1 {
    constructor() {
      const value = _undefined.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const obj = { focusedId: id, mode: _undefined2.get(), controlsMode: _undefined3.get().mode, landscape: _undefined4.get().landscape };
      return obj;
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20];
  VoicePanelSystemUIManagerTsx1.__closure = items3;
  VoicePanelSystemUIManagerTsx1.__workletHash = 5587147718300;
  VoicePanelSystemUIManagerTsx1.__initData = tmp16;
  const items4 = [closure_13, , , ];
  const useAnimatedReaction = tmp15.useAnimatedReaction;
  items4[1] = tmp14(11266).cheapWorkletShallowEqual;
  items4[2] = tmp14(1705).scheduleOnRN;
  items4[3] = handleStateChange;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items4;
  class VoicePanelSystemUIManagerTsx2 {
    constructor(arg0, arg1) {
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(arg0, tmp)) {
        _undefined(c2, arg0);
      }
    }
  }
  const items5 = [tmp22, tmp23, tmp24];
  VoicePanelSystemUIManagerTsx2.__closure = items5;
  VoicePanelSystemUIManagerTsx2.__workletHash = 4961093697158;
  VoicePanelSystemUIManagerTsx2.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(VoicePanelSystemUIManagerTsx1, VoicePanelSystemUIManagerTsx2);
  let tmp28 = null;
  const tmp26 = closure_11;
  const tmp27 = closure_10;
  if (first) {
    let obj = { hidden: !tmp5, barStyle: "light-content" };
    tmp28 = closure_9(StatusBarDefault, obj);
  }
  const obj2 = { children: items6 };
  items6 = [tmp28, closure_9(HomeIndicatorDefault, { prefersHidden: tmp9, prefersDeferringSystemGestures: first1 })];
  return tmp26(tmp27, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default memoResult;
