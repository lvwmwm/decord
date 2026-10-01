// Module ID: 4841
// Function ID: 4842
// Name: PlainTextExperimentContext
// Dependencies: [19, 21, 2]
// Exports: PlainTextExperimentProvider, usePlainTextExperimentEnabled

// Module 4841 (PlainTextExperimentContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(false);
const result = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = function PlainTextExperimentProvider(enabled) {
  return <closure_2 value={arg0.enabled}>{arg0.children}</closure_2>;
};
export const usePlainTextExperimentEnabled = function usePlainTextExperimentEnabled() {
  return react.useContext(closure_2);
};
