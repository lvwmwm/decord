// Module ID: 8064
// Function ID: 8065
// Name: FormHint
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 5996, 4833, 1189, 2]

// Module 8064 (FormHint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import native from "native" /* 1189 */;
import Text_Text from "Text/Text" /* 4833 */;
import RedesignCompat from "RedesignCompat" /* 5996 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let obj = { formHintText: obj2, redesignHorizontalPadding: { paddingHorizontal: 12 }, horizonatalPadding: { paddingHorizontal: 16 } };
obj2 = { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let inset;
  let style;
  const obj = react2;
  const cResult = obj.c(13);
  ({ inset, style, children } = arg0);
  const tmp5 = closure_4();
  let redesignHorizontalPadding = !tmp4;
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    if (!(undefined !== inset && inset)) {
      redesignHorizontalPadding = tmp5.redesignHorizontalPadding;
    }
    if (cResult[0] === style) {
      let tmp10;
      if (cResult[1] === redesignHorizontalPadding) {
        tmp10 = cResult[2];
      }
      if (cResult[3] === children) {
        let tmp11;
        if (cResult[4] === tmp10) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp10, children });
      cResult[3] = children;
      cResult[4] = tmp10;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    }
    const items = [redesignHorizontalPadding, style];
    cResult[0] = style;
    cResult[1] = redesignHorizontalPadding;
    cResult[2] = items;
    tmp10 = items;
  } else {
    let horizonatalPadding = redesignHorizontalPadding;
    if (!(undefined !== inset && inset)) {
      horizonatalPadding = tmp5.horizonatalPadding;
    }
    if (cResult[6] === style) {
      if (cResult[7] === tmp5.formHintText) {
        let tmp6;
        if (cResult[8] === horizonatalPadding) {
          tmp6 = cResult[9];
        }
        if (cResult[10] === children) {
          let tmp7;
          if (cResult[11] === tmp6) {
            tmp7 = cResult[12];
          }
          return tmp7;
        }
        const tmp9 = jsx(native.LegacyText, { style: tmp6, children });
        cResult[10] = children;
        cResult[11] = tmp6;
        cResult[12] = tmp9;
        tmp7 = tmp9;
      }
    }
    const items1 = [tmp5.formHintText, horizonatalPadding, style];
    cResult[6] = style;
    cResult[7] = tmp5.formHintText;
    cResult[8] = horizonatalPadding;
    cResult[9] = items1;
    tmp6 = items1;
  }
}) : ((inset) => {
  let children;
  let items;
  let style;
  let tmp4Result;
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = closure_4();
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    const Text = tmp2(4833).Text;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    const obj2 = { variant: "text-sm/medium", color: "text-muted", style: items, children };
    items = [redesignHorizontalPadding, style];
    tmp4Result = tmp4(Text, obj2);
  } else {
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    const LegacyText = tmp2(1189).LegacyText;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    const obj = { style: items1, children };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    tmp4Result = tmp4(LegacyText, obj);
  }
  return tmp4Result;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default tmp2;
