// Module ID: 18350
// Function ID: 18351
// Name: VEVOOPropBlurAmount
// Dependencies: [32, 19, 5761, 21, 5170, 8279, 7463, 18351, 2]

// Module 18350 (VEVOOPropBlurAmount)
import Fragment from "Fragment" /* 21 */;
import _mod8279 from "module_8279" /* 8279 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5761 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
({ getVisualEffectViewOverrides: hasOwnProperty, setVisualEffectViewOverides: metroRequire } = VEVOOStore);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = react.memo(function VEVOOPropBlurAmount() {
  let closure_2;
  let onValueChange;
  let tmp3;
  const tmp = closure_8();
  let tmp2 = onValueChange(react.useState(false), 2);
  [tmp3, require] = tmp2;
  const tmp4 = onValueChange(react.useState(closure_5().blurAmountOverride), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const ref = react.useRef(first);
  onValueChange = react.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      closure_2(blurAmountOverride);
    }
    const obj = { blurAmountOverride };
    const merged = Object.assign(hasOwnProperty());
    metroRequire(obj);
  }, []);
  let str;
  const FormRow = _mod8279.FormRow;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  return <FormRow label={"Blur Amount " + str} leadingStyle={tmp.enabledSwitchStyle} leading={null} subLabel={null} disabled={!tmp3} />;
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;
