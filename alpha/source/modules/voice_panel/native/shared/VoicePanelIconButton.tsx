// Module ID: 17650
// Function ID: 17651
// Name: VoicePanelIconButton
// Dependencies: [109, 19, 21, 558, 576, 8114, 6760, 2]

// Module 17650 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const IconButton2 = tmp(8114);
let closure_3 = ["style", "overrideVariant", "layout", "ref"];
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelIconButton(arg0) {
  let layout;
  let overrideVariant;
  let ref;
  let str;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    ({ style, overrideVariant, layout, ref } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = layout;
    cResult[2] = overrideVariant;
    cResult[3] = tmp10;
    cResult[4] = ref;
    cResult[5] = style;
    tmp7 = style;
    tmp6 = ref;
    tmp5 = tmp10;
    str = overrideVariant;
    tmp4 = layout;
  } else {
    tmp4 = cResult[1];
    str = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  if (str == null) {
    str = "secondary-overlay";
  }
  if (cResult[6] === tmp5) {
    let tmp11;
    if (cResult[7] === str) {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp7) {
          let tmp14;
          if (cResult[12] === tmp11) {
            tmp14 = cResult[13];
          }
          return tmp14;
        }
      }
    }
    const tmp17 = jsx(ReanimatedNativeViewDefault, { ref: tmp6, style: tmp7, layout: tmp4, children: tmp11 });
    cResult[9] = tmp4;
    cResult[10] = tmp6;
    cResult[11] = tmp7;
    cResult[12] = tmp11;
    cResult[13] = tmp17;
    tmp14 = tmp17;
  }
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(tmp5);
  const tmp13 = <IconButton size="sm" variant={str} maxFontSizeMultiplier={2} />;
  cResult[6] = tmp5;
  cResult[7] = str;
  cResult[8] = tmp13;
  tmp11 = tmp13;
}) : (function VoicePanelIconButton(overrideVariant) {
  let layout;
  let ref;
  let style;
  let str = overrideVariant.overrideVariant;
  ({ style, layout, ref } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0, ref: 0 }));
  ReanimatedNativeViewDefault;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <tmp3 ref={ref} style={style} layout={layout}>{null}</tmp3>;
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
