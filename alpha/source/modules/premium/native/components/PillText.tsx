// Module ID: 15534
// Function ID: 15535
// Name: PillText
// Dependencies: [1072, 21, 5141, 575, 15535, 5723, 5761, 2]
// Exports: default

// Module 15534 (PillText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 15535 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
const HorizontalGradient = Constants.HorizontalGradient;
const jsx = Fragment.jsx;
const obj = { pillTextContainer: obj2, pillText: { textTransform: "uppercase" } };
obj2 = { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  let pillText;
  let style;
  ({ pillText, style } = arg0);
  const tmp = closure_5();
  const items = [tmp.pillTextContainer, style];
  LinearGradientDefault;
  return <tmp3 style={items} start={HorizontalGradient.START} end={HorizontalGradient.END} colors={usePremiumPrimaryGradientColorsDefault()}>{null}</tmp3>;
};
