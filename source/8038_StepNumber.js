// Module ID: 8038
// Function ID: 8039
// Name: StepNumber
// Dependencies: [8031, 19, 17, 21, 8035]
// Exports: StepNumber

// Module 8038 (StepNumber)
import module_8031 from "module_8031";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(8035) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
