// Module ID: 8777
// Function ID: 8778
// Name: StepNumber
// Dependencies: [8770, 19, 17, 21, 8774]
// Exports: StepNumber

// Module 8777 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8774 */;
import module_8770 from "module_8770" /* 8770 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8770(react2);

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
