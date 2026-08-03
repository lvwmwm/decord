// Module ID: 7795
// Function ID: 7796
// Name: StepNumber
// Dependencies: [7788, 19, 17, 21, 7792]
// Exports: StepNumber

// Module 7795 (StepNumber)
import module_7788 from "module_7788";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7792) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
