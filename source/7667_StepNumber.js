// Module ID: 7667
// Function ID: 7668
// Name: StepNumber
// Dependencies: [7660, 19, 17, 21, 7664]
// Exports: StepNumber

// Module 7667 (StepNumber)
import module_7660 from "module_7660";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const StepNumber = function StepNumber(arg0) {
  let i;
  let style;
  ({ i, style } = arg0);
  return <get ActivityIndicator.View style={require(7664) /* styles */.styles.stepNumber}><get ActivityIndicator.Text style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
