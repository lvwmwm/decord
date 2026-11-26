// Module ID: 8867
// Function ID: 8868
// Name: StepNumber
// Dependencies: [8860, 19, 17, 21, 8864]
// Exports: StepNumber

// Module 8867 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8864 */;
import module_8860 from "module_8860" /* 8860 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8860(react2);

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
