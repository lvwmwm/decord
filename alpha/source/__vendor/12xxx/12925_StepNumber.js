// Module ID: 12925
// Function ID: 12926
// Name: StepNumber
// Dependencies: [12918, 19, 17, 21, 12922]
// Exports: StepNumber

// Module 12925 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 12922 */;
import module_12918 from "module_12918" /* 12918 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_12918(react2);

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
