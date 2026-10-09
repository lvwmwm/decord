// Module ID: 8355
// Function ID: 8356
// Name: VisualEffectViewThemed
// Dependencies: [109, 19, 21, 558, 576, 4992, 4930, 5364, 2]

// Module 8355 (VisualEffectViewThemed)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useThemeDefault from "useTheme" /* 4992 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp9;
const shared = tmp(4930);
const VisualEffectViewDefault = tmp9(5364);
let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function VisualEffectViewThemed(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  let str = "dark";
  const tmp10 = useThemeDefault();
  const tmpResult = shared;
  if (tmpResult.isThemeLight(tmp10)) {
    str = "light";
  }
  if (cResult[3] === str) {
    if (cResult[4] === tmp4) {
      let tmp11;
      if (cResult[5] === tmp5) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  VisualEffectViewDefault;
  const merged = Object.assign(tmp4);
  const tmp14 = <tmp9Result ref={tmp5} blurTheme={str} />;
  cResult[3] = str;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp14;
  tmp11 = tmp14;
}) : (function VisualEffectViewThemed(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let str = "dark";
  const tmp4 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp4)) {
    str = "light";
  }
  VisualEffectViewDefault;
  const merged1 = Object.assign(merged);
  return <tmp2Result ref={ref} blurTheme={str} />;
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default tmp3;
