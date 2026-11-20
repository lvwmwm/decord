// Module ID: 10858
// Function ID: 10859
// Name: StepNumber
// Dependencies: [10851, 19, 17, 21, 10855]
// Exports: StepNumber

// Module 10858 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 10855 */;
import module_10851 from "module_10851" /* 10851 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_10851(react2);

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
