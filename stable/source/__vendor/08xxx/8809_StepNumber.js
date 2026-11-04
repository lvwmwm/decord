// Module ID: 8809
// Function ID: 8810
// Name: StepNumber
// Dependencies: [8802, 19, 17, 21, 8806]
// Exports: StepNumber

// Module 8809 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8806 */;
import module_8802 from "module_8802" /* 8802 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8802(react2);

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
