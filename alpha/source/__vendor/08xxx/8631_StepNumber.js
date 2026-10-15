// Module ID: 8631
// Function ID: 8632
// Name: StepNumber
// Dependencies: [8624, 19, 17, 21, 8628]
// Exports: StepNumber

// Module 8631 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8628 */;
import module_8624 from "module_8624" /* 8624 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8624(react2);

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
