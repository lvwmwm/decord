// Module ID: 8412
// Function ID: 8413
// Name: StepNumber
// Dependencies: [8405, 19, 17, 21, 8409]
// Exports: StepNumber

// Module 8412 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8409 */;
import module_8405 from "module_8405" /* 8405 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8405(react2);

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
