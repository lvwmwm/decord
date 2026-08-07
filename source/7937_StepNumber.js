// Module ID: 7937
// Function ID: 7938
// Name: StepNumber
// Dependencies: [7930, 19, 17, 21, 7934]
// Exports: StepNumber

// Module 7937 (StepNumber)
import module_7930 from "module_7930";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7934) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
