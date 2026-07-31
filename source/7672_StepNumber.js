// Module ID: 7672
// Function ID: 7673
// Name: StepNumber
// Dependencies: [7665, 19, 17, 21, 7669]
// Exports: StepNumber

// Module 7672 (StepNumber)
import module_7665 from "module_7665";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7669) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
