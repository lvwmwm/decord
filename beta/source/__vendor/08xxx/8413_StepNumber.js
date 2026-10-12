// Module ID: 8413
// Function ID: 8414
// Name: StepNumber
// Dependencies: [8406, 19, 17, 21, 8410]
// Exports: StepNumber

// Module 8413 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8410 */;
import module_8406 from "module_8406" /* 8406 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8406(react2);

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
