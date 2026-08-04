// Module ID: 7807
// Function ID: 7808
// Name: StepNumber
// Dependencies: [7800, 19, 17, 21, 7804]
// Exports: StepNumber

// Module 7807 (StepNumber)
import module_7800 from "module_7800";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7804) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
