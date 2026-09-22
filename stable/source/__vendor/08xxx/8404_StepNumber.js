// Module ID: 8404
// Function ID: 8405
// Name: StepNumber
// Dependencies: [8397, 19, 17, 21, 8401]
// Exports: StepNumber

// Module 8404 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8401 from "module_8401" /* 8401 */;
import module_8397 from "module_8397" /* 8397 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8397(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8401.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8401.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
