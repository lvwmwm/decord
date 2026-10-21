// Module ID: 8741
// Function ID: 8742
// Name: StepNumber
// Dependencies: [8734, 19, 17, 21, 8738]
// Exports: StepNumber

// Module 8741 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8738 */;
import module_8734 from "module_8734" /* 8734 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8734(react2);

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
