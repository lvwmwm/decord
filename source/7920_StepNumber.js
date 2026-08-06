// Module ID: 7920
// Function ID: 7921
// Name: StepNumber
// Dependencies: [7913, 19, 17, 21, 7917]
// Exports: StepNumber

// Module 7920 (StepNumber)
import module_7913 from "module_7913";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7917) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
