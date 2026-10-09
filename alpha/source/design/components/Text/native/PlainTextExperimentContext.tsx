// Module ID: 5096
// Function ID: 5097
// Name: PlainTextExperimentContext
// Dependencies: [19, 21, 558, 576, 2]
// Exports: usePlainTextExperimentEnabled

// Module 5096 (PlainTextExperimentContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(false);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlainTextExperimentProvider(arg0) {
  let children;
  let enabled;
  const obj = react2;
  const cResult = obj.c(3);
  ({ children, enabled } = arg0);
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === enabled) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <closure_4 value={enabled}>{children}</closure_4>;
  cResult[0] = children;
  cResult[1] = enabled;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function PlainTextExperimentProvider(enabled) {
  return <closure_4 value={arg0.enabled}>{arg0.children}</closure_4>;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = tmp2;
export const usePlainTextExperimentEnabled = function usePlainTextExperimentEnabled() {
  return react.useContext(closure_4);
};
