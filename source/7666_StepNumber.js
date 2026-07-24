// Module ID: 7666
// Function ID: 60906
// Name: StepNumber
// Dependencies: [7659, 31, 27, 33, 7663]
// Exports: StepNumber

// Module 7666 (StepNumber)
import module_7659 from "module_7659";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7663) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
