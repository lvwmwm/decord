// Module ID: 10021
// Function ID: 10022
// Name: PillText
// Dependencies: [1072, 21, 5310, 575, 10022, 5887, 5923, 2]
// Exports: default

// Module 10021 (PillText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5887 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 10022 */;
import createStyles from "createStyles" /* 5310 */;
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
