// Module ID: 8726
// Function ID: 8727
// Name: StepNumber
// Dependencies: [8719, 19, 17, 21, 8723]
// Exports: StepNumber

// Module 8726 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8723 */;
import module_8719 from "module_8719" /* 8719 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8719(react2);

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
