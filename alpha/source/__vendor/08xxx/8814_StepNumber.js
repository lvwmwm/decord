// Module ID: 8814
// Function ID: 8815
// Name: StepNumber
// Dependencies: [8807, 19, 17, 21, 8811]
// Exports: StepNumber

// Module 8814 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8811 */;
import module_8807 from "module_8807" /* 8807 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8807(react2);

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
