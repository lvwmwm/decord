// Module ID: 9001
// Function ID: 9002
// Name: StepNumber
// Dependencies: [8994, 19, 17, 21, 8998]
// Exports: StepNumber

// Module 9001 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8998 */;
import module_8994 from "module_8994" /* 8994 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8994(react2);

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
