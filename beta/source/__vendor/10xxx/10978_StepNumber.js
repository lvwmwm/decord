// Module ID: 10978
// Function ID: 10979
// Name: StepNumber
// Dependencies: [10971, 19, 17, 21, 10975]
// Exports: StepNumber

// Module 10978 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 10975 */;
import module_10971 from "module_10971" /* 10971 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_10971(react2);

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
