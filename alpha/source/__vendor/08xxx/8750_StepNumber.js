// Module ID: 8750
// Function ID: 8751
// Name: StepNumber
// Dependencies: [8743, 19, 17, 21, 8747]
// Exports: StepNumber

// Module 8750 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8747 */;
import module_8743 from "module_8743" /* 8743 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8743(react2);

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
