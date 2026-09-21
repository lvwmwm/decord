// Module ID: 8562
// Function ID: 8563
// Name: StepNumber
// Dependencies: [8555, 19, 17, 21, 8559]
// Exports: StepNumber

// Module 8562 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8559 from "module_8559" /* 8559 */;
import module_8555 from "module_8555" /* 8555 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8555(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8559.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8559.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
