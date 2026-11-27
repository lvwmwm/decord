// Module ID: 8868
// Function ID: 8869
// Name: StepNumber
// Dependencies: [8861, 19, 17, 21, 8865]
// Exports: StepNumber

// Module 8868 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8865 */;
import module_8861 from "module_8861" /* 8861 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8861(react2);

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
