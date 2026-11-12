// Module ID: 12919
// Function ID: 12920
// Name: StepNumber
// Dependencies: [12912, 19, 17, 21, 12916]
// Exports: StepNumber

// Module 12919 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 12916 */;
import module_12912 from "module_12912" /* 12912 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_12912(react2);

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
