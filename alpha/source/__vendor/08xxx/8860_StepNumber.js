// Module ID: 8860
// Function ID: 8861
// Name: StepNumber
// Dependencies: [8853, 19, 17, 21, 8857]
// Exports: StepNumber

// Module 8860 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8857 */;
import module_8853 from "module_8853" /* 8853 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8853(react2);

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
