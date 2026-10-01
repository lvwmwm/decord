// Module ID: 7734
// Function ID: 7735
// Name: StepNumber
// Dependencies: [7727, 19, 17, 21, 7731]
// Exports: StepNumber

// Module 7734 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 7731 */;
import module_7727 from "module_7727" /* 7727 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_7727(react2);

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
