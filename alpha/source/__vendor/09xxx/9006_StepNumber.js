// Module ID: 9006
// Function ID: 9007
// Name: StepNumber
// Dependencies: [8999, 19, 17, 21, 9003]
// Exports: StepNumber

// Module 9006 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 9003 */;
import module_8999 from "module_8999" /* 8999 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8999(react2);

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
