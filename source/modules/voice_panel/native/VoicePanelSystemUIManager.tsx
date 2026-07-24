// Module ID: 15825
// Function ID: 122132
// Dependencies: [57, 31, 4143, 10047, 10045, 4148, 33, 10046, 682, 477, 574, 3991, 9459, 7530, 10566, 2]

// Module 15825
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VoicePanelModes } from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = { code: "function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}" };
let closure_13 = { code: "function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}" };
const memoResult = importAllResult.memo(function VoicePanelSystemUIManager() {
  let VoicePanelControlsModes;
  let _isNativeReflectConstruct;
  let tmp3;
  let tmp6;
  const context = windowDimensions.useContext(channelId(mode[7]));
  const focused = context.focused;
  channelId = context.channelId;
  mode = context.mode;
  const controlsSpecs = context.controlsSpecs;
  windowDimensions = context.windowDimensions;
  [tmp3, _isNativeReflectConstruct] = controlsSpecs(windowDimensions.useState(true), 2);
  let tmp4 = controlsSpecs(windowDimensions.useState(true), 2);
  let closure_6 = tmp4[1];
  const tmp2 = controlsSpecs(windowDimensions.useState(true), 2);
  [tmp6, VoicePanelControlsModes] = controlsSpecs(windowDimensions.useState(false), 2);
  const tmp7 = controlsSpecs(windowDimensions.useState(false), 2);
  let closure_8 = tmp7[1];
  const items = [channelId];
  const memo = windowDimensions.useMemo(() => {
    function updateState(arg0) {
      let c1;
      let closure_0;
      let _slicedToArray;
      let updateState;
      ({ focusedId: closure_0, mode: c1, controlsMode: updateState, landscape: _slicedToArray } = arg0);
      focused(mode[8]).batchUpdates(() => {
        outer2_6(closure_1 !== constants.PIP);
        let tmp4 = !tmp3;
        if (null == closure_0) {
          tmp4 = !_slicedToArray;
        }
        if (!tmp4) {
          tmp4 = tmp2;
        }
        outer2_5(tmp4);
        let participant;
        if (null != closure_0) {
          participant = outer3_5.getParticipant(c1, closure_0);
        }
        let type;
        if (null != participant) {
          type = participant.type;
        }
        const tmp13 = !focused(mode[9]).isIOS();
        let tmp14 = !tmp13;
        if (!tmp13) {
          tmp14 = tmp12;
        }
        outer2_8(tmp14);
        let tmp17 = !tmp4;
        if (!tmp4) {
          tmp17 = !tmp14;
        }
        outer2_7(tmp17);
      });
    }
    let closure_0 = channelId(mode[10])(updateState, 500, { maxWait: 2000 });
    let c1;
    return {
      cancelPendingDebounce(arg0, arg1) {
        lib.cancel();
      },
      handleStateChange(focusedId) {
        if (focusedId !== focusedId.focusedId) {
          focusedId = focusedId.focusedId;
          lib(focusedId);
        } else {
          lib.cancel();
          updateState(focusedId);
        }
      }
    };
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const handleStateChange = memo.handleStateChange;
  const items1 = [cancelPendingDebounce];
  const effect = windowDimensions.useEffect(() => () => outer1_9(), items1);
  let obj = focused(mode[11]);
  const fn = function v() {
    const obj = {};
    const value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    obj.focusedId = id;
    obj.mode = mode.get();
    obj.controlsMode = controlsSpecs.get().mode;
    obj.landscape = windowDimensions.get().landscape;
    return obj;
  };
  fn.__closure = { focused, mode, controlsSpecs, windowDimensions };
  fn.__workletHash = 2478376475717;
  fn.__initData = closure_12;
  const fn2 = function u(safeAreaState, safeAreaState2) {
    let tmp;
    if (null != safeAreaState2) {
      tmp = safeAreaState2;
    }
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      focused(mode[11]).runOnJS(handleStateChange)(safeAreaState);
      const obj2 = focused(mode[11]);
    }
  };
  obj = { cheapWorkletShallowEqual: focused(mode[12]).cheapWorkletShallowEqual, runOnJS: focused(mode[11]).runOnJS, handleStateChange };
  fn2.__closure = obj;
  fn2.__workletHash = 3592680244658;
  fn2.__initData = closure_13;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  obj = {};
  let tmp13 = null;
  if (tmp4[0]) {
    const obj1 = { hidden: !tmp3, barStyle: "light-content" };
    tmp13 = cancelPendingDebounce(channelId(mode[13]), obj1);
  }
  const items2 = [tmp13, cancelPendingDebounce(channelId(mode[14]), { prefersHidden: tmp6, prefersDeferringSystemGestures: tmp7[0] })];
  obj.children = items2;
  return closure_11(handleStateChange, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default memoResult;
