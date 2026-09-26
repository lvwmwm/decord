// Module ID: 8589
// Function ID: 8590
// Name: StepNumber
// Dependencies: [8582, 19, 17, 21, 8586]
// Exports: StepNumber

// Module 8589 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8586 from "module_8586" /* 8586 */;
import module_8582 from "module_8582" /* 8582 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8582(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8586.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8586.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
