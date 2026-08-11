// Module ID: 7999
// Function ID: 8000
// Name: StepNumber
// Dependencies: [7992, 19, 17, 21, 7996]
// Exports: StepNumber

// Module 7999 (StepNumber)
import module_7992 from "module_7992";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7996) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
