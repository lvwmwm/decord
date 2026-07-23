// Module ID: 8520
// Function ID: 67951
// Name: PerLetterEffect
// Dependencies: [31, 27, 33, 4130, 8521, 8522, 4126, 2]
// Exports: default

// Module 8520 (PerLetterEffect)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ View: closure_4, Text: closure_5 } = get_ActivityIndicator);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { overflow: "hidden" } });
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  let colors;
  let textProps;
  name = name.name;
  ({ textProps, colors } = name);
  const items = [name, colors];
  let obj = { style: callback().container };
  const memo = React.useMemo(() => {
    let closure_0 = colors(outer1_2[4])();
    let c1 = 0;
    let obj = name(outer1_2[5]);
    return name(outer1_2[5]).splitGraphemes(closure_0).map((str) => {
      regex.lastIndex = 0;
      const tmp = regex.test(str) || 0 === str.trim().length;
      let tmp2;
      if (null != c1) {
        if (c1.length > 0) {
          if (!tmp) {
            tmp2 = c1[closure_1 % c1.length];
          }
        }
      }
      if (!tmp) {
        closure_1 = closure_1 + 1;
      }
      let obj = {};
      let tmp9;
      if (null != tmp2) {
        obj = { color: tmp2 };
        tmp9 = obj;
      }
      obj.style = tmp9;
      obj.children = str;
      return outer2_6(outer2_5, obj, arg1);
    });
  }, items);
  obj = {};
  const merged = Object.assign(textProps);
  obj["textBreakStrategy"] = "simple";
  obj["accessible"] = true;
  const accessibilityLabel = textProps.accessibilityLabel;
  if (null != accessibilityLabel) {
    name = accessibilityLabel;
  }
  obj["accessibilityLabel"] = name;
  const items1 = [name.textStyle, { lineHeight: undefined }];
  obj["style"] = items1;
  obj["children"] = memo;
  obj.children = jsx(name(4126).Text, {});
  return <closure_4 />;
};
