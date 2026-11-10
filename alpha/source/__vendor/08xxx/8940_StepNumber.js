// Module ID: 8940
// Function ID: 8941
// Name: StepNumber
// Dependencies: [8933, 19, 17, 21, 8937]
// Exports: StepNumber

// Module 8940 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8937 */;
import module_8933 from "module_8933" /* 8933 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8933(react2);

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
