// Module ID: 4565
// Function ID: 4566
// Name: PlainTextExperimentProvider
// Dependencies: [19, 21, 2]
// Exports: PlainTextExperimentProvider, usePlainTextExperimentEnabled

// Module 4565 (PlainTextExperimentProvider)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
const context = importAllResult.createContext(false);
const result = require("set").fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = function PlainTextExperimentProvider(enabled) {
  return <closure_2 value={arg0.enabled}>{arg0.children}</closure_2>;
};
export const usePlainTextExperimentEnabled = function usePlainTextExperimentEnabled() {
  return importAllResult.useContext(closure_2);
};
