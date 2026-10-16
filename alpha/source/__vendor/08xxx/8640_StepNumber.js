// Module ID: 8640
// Function ID: 8641
// Name: StepNumber
// Dependencies: [8633, 19, 17, 21, 8637]
// Exports: StepNumber

// Module 8640 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8637 */;
import module_8633 from "module_8633" /* 8633 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8633(react2);

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
