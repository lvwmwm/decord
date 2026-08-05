// Module ID: 7779
// Function ID: 7780
// Name: StepNumber
// Dependencies: [7772, 19, 17, 21, 7776]
// Exports: StepNumber

// Module 7779 (StepNumber)
import module_7772 from "module_7772";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7776) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
