// Module ID: 15650
// Function ID: 119555
// Dependencies: []

// Module 15650
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const VoicePanelModes = arg1(dependencyMap[3]).VoicePanelModes;
const VoicePanelControlsModes = arg1(dependencyMap[4]).VoicePanelControlsModes;
const ParticipantTypes = arg1(dependencyMap[5]).ParticipantTypes;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = { code: "function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}" };
let closure_13 = { code: "function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}" };
const tmp2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function VoicePanelSystemUIManager() {
  let tmp3;
  let tmp6;
  const context = importAllResult.useContext(importDefault(dependencyMap[7]));
  const focused = context.focused;
  const arg1 = focused;
  const channelId = context.channelId;
  const importDefault = channelId;
  const mode = context.mode;
  const dependencyMap = mode;
  const controlsSpecs = context.controlsSpecs;
  const callback = controlsSpecs;
  const windowDimensions = context.windowDimensions;
  [tmp3, closure_5] = callback(windowDimensions.useState(true), 2);
  const tmp4 = callback(windowDimensions.useState(true), 2);
  let closure_6 = tmp4[1];
  const tmp2 = callback(windowDimensions.useState(true), 2);
  [tmp6, closure_7] = callback(windowDimensions.useState(false), 2);
  const tmp7 = callback(windowDimensions.useState(false), 2);
  let closure_8 = tmp7[1];
  const items = [channelId];
  const memo = importAllResult.useMemo(() => {
    function updateState(arg0) {
      ({ focusedId: closure_0, mode: closure_1, controlsMode: closure_2, landscape: closure_3 } = arg0);
      lib(updateState[8]).batchUpdates(() => {
        lib(closure_1 !== lib.PIP);
        let tmp4 = !tmp3;
        if (null == callback) {
          tmp4 = !closure_3;
        }
        if (!tmp4) {
          tmp4 = tmp2;
        }
        participant(tmp4);
        let participant;
        if (null != callback) {
          participant = participant.getParticipant(closure_1, callback);
        }
        let type;
        if (null != participant) {
          type = participant.type;
        }
        const tmp13 = !callback(closure_2[9]).isIOS();
        let tmp14 = !tmp13;
        if (!tmp13) {
          tmp14 = tmp12;
        }
        lib2(tmp14);
        let tmp17 = !tmp4;
        if (!tmp4) {
          tmp17 = !tmp14;
        }
        constants(tmp17);
      });
    }
    const mode = updateState;
    let closure_0 = channelId(mode[10])(updateState, 500, { maxWait: 2000 });
    let channelId;
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
  const effect = importAllResult.useEffect(() => () => callback(), items1);
  let obj = arg1(dependencyMap[11]);
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
  obj = { cheapWorkletShallowEqual: arg1(dependencyMap[12]).cheapWorkletShallowEqual, runOnJS: arg1(dependencyMap[11]).runOnJS, handleStateChange };
  fn2.__closure = obj;
  fn2.__workletHash = 3592680244658;
  fn2.__initData = closure_13;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  obj = {};
  let tmp13 = null;
  if (tmp4[0]) {
    const obj1 = { hidden: !tmp3, barStyle: "light-content" };
    tmp13 = cancelPendingDebounce(importDefault(dependencyMap[13]), obj1);
  }
  const items2 = [tmp13, cancelPendingDebounce(importDefault(dependencyMap[14]), { prefersHidden: tmp6, prefersDeferringSystemGestures: tmp7[0] })];
  obj.children = items2;
  return closure_11(handleStateChange, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default memoResult;
