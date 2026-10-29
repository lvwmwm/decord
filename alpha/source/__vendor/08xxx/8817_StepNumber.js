// Module ID: 8817
// Function ID: 8818
// Name: StepNumber
// Dependencies: [8810, 19, 17, 21, 8814]
// Exports: StepNumber

// Module 8817 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8814 */;
import module_8810 from "module_8810" /* 8810 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8810(react2);

export function StepNumber(arg0) {
  let i;
  let index;
  let style;
  ({ i, index, style } = arg0);
  const jsx = Fragment.jsx;
  const View = react_native.View;
  ({ testID: "" + index + "th-step", style, children: i });
  return <View style={styles.styles.stepNumber}>{null}</View>;
}
