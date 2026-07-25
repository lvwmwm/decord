// Module ID: 7608
// Function ID: 60830
// Name: StepNumber
// Dependencies: [7601, 31, 27, 33, 7605]
// Exports: StepNumber

// Module 7608 (StepNumber)
import module_7601 from "module_7601";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7605) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
