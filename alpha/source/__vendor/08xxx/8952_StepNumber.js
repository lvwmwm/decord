// Module ID: 8952
// Function ID: 8953
// Name: StepNumber
// Dependencies: [8945, 19, 17, 21, 8949]
// Exports: StepNumber

// Module 8952 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8949 */;
import module_8945 from "module_8945" /* 8945 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8945(react2);

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
