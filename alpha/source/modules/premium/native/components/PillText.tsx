// Module ID: 9397
// Function ID: 9398
// Name: PillText
// Dependencies: [1071, 21, 4913, 575, 9398, 5468, 5504, 2]
// Exports: default

// Module 9397 (PillText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import LinearGradientDefault from "LinearGradient" /* 5468 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 9398 */;
import createStyles from "createStyles" /* 4913 */;
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
