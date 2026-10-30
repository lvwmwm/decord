// Module ID: 8851
// Function ID: 8852
// Name: StepNumber
// Dependencies: [8844, 19, 17, 21, 8848]
// Exports: StepNumber

// Module 8851 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8848 */;
import module_8844 from "module_8844" /* 8844 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8844(react2);

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
