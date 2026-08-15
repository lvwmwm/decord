// Module ID: 8113
// Function ID: 8114
// Name: StepNumber
// Dependencies: [8106, 19, 17, 21, 8110]
// Exports: StepNumber

// Module 8113 (StepNumber)
import module_8106 from "module_8106";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(8110) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
