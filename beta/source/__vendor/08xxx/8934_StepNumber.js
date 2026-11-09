// Module ID: 8934
// Function ID: 8935
// Name: StepNumber
// Dependencies: [8927, 19, 17, 21, 8931]
// Exports: StepNumber

// Module 8934 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8931 */;
import module_8927 from "module_8927" /* 8927 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8927(react2);

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
