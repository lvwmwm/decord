// Module ID: 8408
// Function ID: 8409
// Name: StepNumber
// Dependencies: [8401, 19, 17, 21, 8405]
// Exports: StepNumber

// Module 8408 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8405 */;
import module_8401 from "module_8401" /* 8401 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8401(react2);

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
