// Module ID: 10916
// Function ID: 10917
// Name: StepNumber
// Dependencies: [10909, 19, 17, 21, 10913]
// Exports: StepNumber

// Module 10916 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 10913 */;
import module_10909 from "module_10909" /* 10909 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_10909(react2);

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
