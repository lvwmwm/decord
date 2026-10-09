// Module ID: 8913
// Function ID: 8914
// Name: GameProfileHorizontalScrollView
// Dependencies: [109, 19, 17, 21, 558, 576, 6333, 2]

// Module 8913 (GameProfileHorizontalScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileHorizontalScrollView(ref) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[3] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = LegacyBaseButton;
  const nativeGesture = tmpResult.useNativeGesture(tmp9);
  if (cResult[4] === tmp4) {
    let tmp11;
    if (cResult[5] === tmp5) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === nativeGesture) {
      let tmp14;
      if (cResult[8] === tmp11) {
        tmp14 = cResult[9];
      }
      return tmp14;
    }
    const tmp16 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp11 });
    cResult[7] = nativeGesture;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  const merged = Object.assign(tmp4);
  const tmp13 = <ScrollView ref={tmp5} horizontal nestedScrollEnabled />;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function GameProfileHorizontalScrollView(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default tmp3;
