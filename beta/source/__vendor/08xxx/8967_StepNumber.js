// Module ID: 8967
// Function ID: 8968
// Name: StepNumber
// Dependencies: [8960, 19, 17, 21, 8964]
// Exports: StepNumber

// Module 8967 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8964 */;
import module_8960 from "module_8960" /* 8960 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8960(react2);

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
