// Module ID: 11192
// Function ID: 11193
// Name: SpendEarnOrbsLightThemeLottie
// Dependencies: [109, 19, 21, 558, 576, 11193, 10837, 2]

// Module 11192 (SpendEarnOrbsLightThemeLottie)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LottieIcon2 from "LottieIcon" /* 10837 */;
import AssetRegistry from "AssetRegistry" /* 11193 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpendEarnOrbsLightThemeLottie(ref) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
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
    const tmpResult = AssetRegistry;
    cResult[3] = tmpResult;
    tmp9 = tmpResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp11;
    if (cResult[5] === tmp5) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const LottieIcon = tmp(10837).LottieIcon;
  const merged = Object.assign(tmp4);
  const tmp13 = <LottieIcon dotLottie={tmp9} ref={tmp5} layers={layers} markers={items} />;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function SpendEarnOrbsLightThemeLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} ref={ref} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = tmp3;
