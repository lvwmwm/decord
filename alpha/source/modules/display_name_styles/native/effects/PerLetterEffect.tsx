// Module ID: 10251
// Function ID: 10252
// Name: PerLetterEffect
// Dependencies: [19, 17, 21, 5090, 10252, 10253, 5086, 2]
// Exports: default

// Module 10251 (PerLetterEffect)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ View: closure_4, Text: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { overflow: "hidden" } });
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  let Text;
  let accessibilityLabel;
  let colors;
  let containerStyle;
  let items1;
  let items2;
  let obj2;
  let textProps;
  let textStyle;
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let tmp = closure_7();
  let obj = { style: items1, children: tmp3(Text, obj2) };
  items1 = [tmp.container, containerStyle];
  const memo = react.useMemo(() => {
    const regex = colors(dependencyMap[4])();
    let closure_1 = 0;
    let obj = name(dependencyMap[5]);
    const splitGraphemesResult = obj.splitGraphemes(regex);
    return splitGraphemesResult.map((children, index) => {
      regex.lastIndex = 0;
      const tmp = regex.test(children) || 0 === children.trim().length;
      let tmp2;
      if (null != colors) {
        if (colors.length > 0) {
          if (!tmp) {
            tmp2 = arr[closure_1 % arr.length];
          }
        }
      }
      if (!tmp) {
        closure_1 = closure_1 + 1;
      }
      let tmp7;
      const tmp5 = jsx;
      const tmp6 = hasOwnProperty;
      if (null != tmp2) {
        tmp7 = { color: tmp2 };
        const obj = { color: tmp2 };
      }
      const obj2 = { style: tmp7, children };
      return tmp5(tmp6, obj2, index);
    });
  }, items);
  obj2 = { textBreakStrategy: "simple", accessibilityLabel, style: items2, children: memo };
  Text = name(5086).Text;
  const merged = Object.assign(textProps);
  accessibilityLabel = textProps.accessibilityLabel;
  const tmp4 = closure_4;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  items2 = [textStyle, { lineHeight: "create" }];
  return jsx(tmp4, obj);
};
