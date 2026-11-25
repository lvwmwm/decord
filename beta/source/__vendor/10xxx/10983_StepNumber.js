// Module ID: 10983
// Function ID: 10984
// Name: StepNumber
// Dependencies: [10976, 19, 17, 21, 10980]
// Exports: StepNumber

// Module 10983 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 10980 */;
import module_10976 from "module_10976" /* 10976 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_10976(react2);

export function StepNumber(arg0) {
  let i;
  let index;
  let style;
  ({ i, index, style } = arg0);
  const jsx = Fragment.jsx;
  const View = react_native.View;
  ({ testID: "" + index + "th-step", style, children: i });
  return <View style={styles.styles.stepNumber}>{null}</View>;
}
