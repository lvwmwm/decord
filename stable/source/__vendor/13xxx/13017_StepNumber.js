// Module ID: 13017
// Function ID: 13018
// Name: StepNumber
// Dependencies: [13010, 19, 17, 21, 13014]
// Exports: StepNumber

// Module 13017 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 13014 */;
import module_13010 from "module_13010" /* 13010 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_13010(react2);

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
