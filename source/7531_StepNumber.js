// Module ID: 7531
// Function ID: 60271
// Name: StepNumber
// Dependencies: [7524, 31, 27, 33, 7528]
// Exports: StepNumber

// Module 7531 (StepNumber)
import module_7524 from "module_7524";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7528) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
