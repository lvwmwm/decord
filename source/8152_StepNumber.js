// Module ID: 8152
// Function ID: 8153
// Name: StepNumber
// Dependencies: [8145, 19, 17, 21, 8149]
// Exports: StepNumber

// Module 8152 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8149 */;
import module_8145 from "module_8145" /* 8145 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8145(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};
