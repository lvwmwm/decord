// Module ID: 7664
// Function ID: 7665
// Name: StepNumber
// Dependencies: [7657, 19, 17, 21, 7661]
// Exports: StepNumber

// Module 7664 (StepNumber)
import module_7657 from "module_7657";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7661) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
