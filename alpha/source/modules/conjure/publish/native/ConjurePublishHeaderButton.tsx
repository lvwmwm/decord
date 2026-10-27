// Module ID: 12288
// Function ID: 12289
// Name: ConjurePublishHeaderButton
// Dependencies: [32, 19, 21, 558, 576, 5245, 2]

// Module 12288 (ConjurePublishHeaderButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const components_Button_Button = tmp(5245);
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishHeaderButton(arg0) {
  let first;
  let onPress;
  let publishing;
  let text;
  let tmp6;
  let variant;
  const obj = react2;
  const cResult = obj.c(6);
  ({ variant, text, publishing, onPress } = arg0);
  [first, tmp6] = react.useState(text);
  let tmp7 = publishing;
  if (!publishing) {
    tmp7 = text === first;
  }
  if (!tmp7) {
    tmp6(text);
  }
  let tmp9 = text;
  if (publishing) {
    tmp9 = first;
  }
  if (cResult[0] === onPress) {
    if (cResult[1] === publishing) {
      if (cResult[2] === tmp9) {
        if (cResult[3] === text) {
          let tmp10;
          if (cResult[4] === variant) {
            tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
    }
  }
  const tmp11 = jsx(components_Button_Button.Button, { variant, size: "sm", text: tmp9, accessibilityLabel: text, loading: publishing, onPress });
  cResult[0] = onPress;
  cResult[1] = publishing;
  cResult[2] = tmp9;
  cResult[3] = text;
  cResult[4] = variant;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function ConjurePublishHeaderButton(arg0) {
  let first;
  let onPress;
  let publishing;
  let text;
  let tmp3;
  let tmp7;
  let variant;
  ({ text, publishing } = arg0);
  ({ variant, onPress } = arg0);
  [first, tmp3] = react.useState(text);
  const tmp4 = publishing || text === first;
  if (!tmp4) {
    tmp3(text);
  }
  const obj = { variant, size: "sm", text: tmp7, accessibilityLabel: text, loading: publishing, onPress };
  tmp7 = text;
  const Button = components_Button_Button.Button;
  const tmp6 = jsx;
  if (publishing) {
    tmp7 = first;
  }
  return tmp6(Button, obj);
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishHeaderButton.tsx");

export default tmp2;
