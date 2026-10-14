// Module ID: 8420
// Function ID: 8421
// Name: StepNumber
// Dependencies: [8413, 19, 17, 21, 8417]
// Exports: StepNumber

// Module 8420 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8417 */;
import module_8413 from "module_8413" /* 8413 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8413(react2);

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
