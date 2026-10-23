// Module ID: 8775
// Function ID: 8776
// Name: StepNumber
// Dependencies: [8768, 19, 17, 21, 8772]
// Exports: StepNumber

// Module 8775 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8772 */;
import module_8768 from "module_8768" /* 8768 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8768(react2);

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
