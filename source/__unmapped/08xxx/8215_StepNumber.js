// Module ID: 8215
// Function ID: 8216
// Name: StepNumber
// Dependencies: [8208, 19, 17, 21, 8212]
// Exports: StepNumber

// Module 8215 (StepNumber)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8212 */;
import module_8208 from "module_8208" /* 8208 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8208(noop2);

export const StepNumber = function StepNumber(arg0) {
  ({ i, style } = arg0);
  return <RN.View style={styles.styles.stepNumber}><RN.Text style={style}>{i}</RN.Text></RN.View>;
};
