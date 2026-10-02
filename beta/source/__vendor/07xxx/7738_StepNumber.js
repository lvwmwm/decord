// Module ID: 7738
// Function ID: 7739
// Name: StepNumber
// Dependencies: [7731, 19, 17, 21, 7735]
// Exports: StepNumber

// Module 7738 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 7735 */;
import module_7731 from "module_7731" /* 7731 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_7731(react2);

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
