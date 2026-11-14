// Module ID: 13015
// Function ID: 13016
// Name: StepNumber
// Dependencies: [13008, 19, 17, 21, 13012]
// Exports: StepNumber

// Module 13015 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 13012 */;
import module_13008 from "module_13008" /* 13008 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_13008(react2);

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
