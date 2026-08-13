// Module ID: 8042
// Function ID: 8043
// Name: StepNumber
// Dependencies: [8035, 19, 17, 21, 8039]
// Exports: StepNumber

// Module 8042 (StepNumber)
import module_8035 from "module_8035";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(8039) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
