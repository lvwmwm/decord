// Module ID: 8984
// Function ID: 8985
// Name: StepNumber
// Dependencies: [8977, 19, 17, 21, 8981]
// Exports: StepNumber

// Module 8984 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8981 */;
import module_8977 from "module_8977" /* 8977 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8977(react2);

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
