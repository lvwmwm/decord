// Module ID: 15750
// Function ID: 121502
// Name: usePIPAvoidanceSpecs
// Dependencies: [3992, 15705, 15751, 9379, 15651, 15752, 9980, 2]
// Exports: default

// Module 15750 (usePIPAvoidanceSpecs)
let closure_3 = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
let closure_4 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = require("useScreenNameSharedValue").fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  const _require = safeArea;
  let obj = _require(3992);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(15705)();
  const dependencyMap = tmp2;
  const tmp3 = sharedValue(15751)();
  let closure_3 = tmp3;
  const fn = function f() {
    return { keyboardHeight: tmp2.get(), safeAreaBottom: safeArea.bottom, screenName: tmp3.get() };
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = closure_3;
  const fn2 = function n(safeAreaState, safeAreaState2) {
    let keyboardHeight;
    let safeAreaBottom;
    let screenName;
    let obj = safeArea(tmp2[3]);
    let tmp;
    if (null != safeAreaState2) {
      tmp = safeAreaState2;
    }
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      obj = { screenBottomOffset: sharedValue(sharedValue[4])(screenName), safeAreaBottom, keyboardHeight };
      obj = { top: 0 };
      obj.bottom = sharedValue(sharedValue[5])(obj).bottomOffset;
      sharedValue(sharedValue[6])(sharedValue, obj);
      const tmp4 = sharedValue(sharedValue[4])(screenName);
    }
  };
  obj = { cheapWorkletShallowEqual: _require(9379).cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(15651), getAdjustedBottomOffsets: sharedValue(15752), updateSharedValueIfChanged: sharedValue(9980), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 643938425459;
  fn2.__initData = closure_4;
  const animatedReaction = _require(3992).useAnimatedReaction(fn, fn2);
  return sharedValue;
};
