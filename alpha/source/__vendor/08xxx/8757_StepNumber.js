// Module ID: 8757
// Function ID: 8758
// Name: StepNumber
// Dependencies: [8750, 19, 17, 21, 8754]
// Exports: StepNumber

// Module 8757 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8754 */;
import module_8750 from "module_8750" /* 8750 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8750(react2);

export const StepNumber = function StepNumber(arg0) {
  let i;
  let index;
  let style;
  ({ i, index, style } = arg0);
  const jsx = Fragment.jsx;
  const View = react_native.View;
  ({ testID: "" + index + "th-step", style, children: i });
  return <View style={styles.styles.stepNumber}>{null}</View>;
};
