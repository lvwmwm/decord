// Module ID: 8639
// Function ID: 8640
// Name: StepNumber
// Dependencies: [8632, 19, 17, 21, 8636]
// Exports: StepNumber

// Module 8639 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8636 */;
import module_8632 from "module_8632" /* 8632 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8632(react2);

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
