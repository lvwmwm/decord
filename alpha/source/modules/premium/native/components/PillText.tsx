// Module ID: 13634
// Function ID: 13635
// Name: PillText
// Dependencies: [1085, 21, 5091, 587, 558, 576, 13635, 5087, 5388, 2]

// Module 13634 (PillText)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13635 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
let tmp5;
const Text_Text = tmp(5087);
const LinearGradientDefault = tmp5(5388);
const HorizontalGradient = Constants.HorizontalGradient;
const jsx = Fragment.jsx;
let obj = { pillTextContainer: obj2, pillText: { textTransform: "uppercase" } };
obj2 = { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PillText(arg0) {
  let pillText;
  let style;
  const obj = react;
  const cResult = obj.c(10);
  ({ pillText, style } = arg0);
  const tmp4 = closure_5();
  const tmp6 = usePremiumPrimaryGradientColorsDefault();
  if (cResult[0] === style) {
    let tmp7;
    if (cResult[1] === tmp4.pillTextContainer) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === pillText) {
      let tmp8;
      if (cResult[4] === tmp4.pillText) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp11;
          if (cResult[8] === tmp8) {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
      ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
      const tmp14 = jsx(LinearGradientDefault, { style: tmp7, start: null, end: null, colors: tmp6, children: tmp8 });
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = tmp14;
      tmp11 = tmp14;
    }
    const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp4.pillText, children: pillText });
    cResult[3] = pillText;
    cResult[4] = tmp4.pillText;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.pillTextContainer, style];
  cResult[0] = style;
  cResult[1] = tmp4.pillTextContainer;
  cResult[2] = items;
  tmp7 = items;
}) : (function PillText(arg0) {
  let pillText;
  let style;
  ({ pillText, style } = arg0);
  const tmp = closure_5();
  const items = [tmp.pillTextContainer, style];
  LinearGradientDefault;
  return <tmp3 style={items} start={HorizontalGradient.START} end={HorizontalGradient.END} colors={usePremiumPrimaryGradientColorsDefault()}>{null}</tmp3>;
});
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default tmp2;
