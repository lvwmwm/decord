// Module ID: 7644
// Function ID: 60920
// Name: StepNumber
// Dependencies: [7637, 31, 27, 33, 7641]
// Exports: StepNumber

// Module 7644 (StepNumber)
import module_7637 from "module_7637";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7641) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
