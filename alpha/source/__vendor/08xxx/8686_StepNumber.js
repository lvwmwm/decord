// Module ID: 8686
// Function ID: 8687
// Name: StepNumber
// Dependencies: [8679, 19, 17, 21, 8683]
// Exports: StepNumber

// Module 8686 (StepNumber)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8683 */;
import module_8679 from "module_8679" /* 8679 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8679(react2);

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
