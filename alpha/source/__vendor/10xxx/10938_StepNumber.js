// Module ID: 10938
// Function ID: 10939
// Name: StepNumber
// Dependencies: [10931, 19, 17, 21, 10935]
// Exports: StepNumber

// Module 10938 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 10935 */;
import module_10931 from "module_10931" /* 10931 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_10931(react2);

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
