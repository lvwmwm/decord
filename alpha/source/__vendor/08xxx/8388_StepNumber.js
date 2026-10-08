// Module ID: 8388
// Function ID: 8389
// Name: StepNumber
// Dependencies: [8381, 19, 17, 21, 8385]
// Exports: StepNumber

// Module 8388 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8385 */;
import module_8381 from "module_8381" /* 8381 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8381(react2);

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
