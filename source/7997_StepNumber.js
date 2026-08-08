// Module ID: 7997
// Function ID: 7998
// Name: StepNumber
// Dependencies: [7990, 19, 17, 21, 7994]
// Exports: StepNumber

// Module 7997 (StepNumber)
import module_7990 from "module_7990";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7994) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
