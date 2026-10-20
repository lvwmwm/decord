// Module ID: 8702
// Function ID: 8703
// Name: StepNumber
// Dependencies: [8695, 19, 17, 21, 8699]
// Exports: StepNumber

// Module 8702 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8699 */;
import module_8695 from "module_8695" /* 8695 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8695(react2);

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
