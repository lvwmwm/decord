// Module ID: 8063
// Function ID: 8064
// Name: StepNumber
// Dependencies: [8056, 19, 17, 21, 8060]
// Exports: StepNumber

// Module 8063 (StepNumber)
import module_8056 from "module_8056";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(8060) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
