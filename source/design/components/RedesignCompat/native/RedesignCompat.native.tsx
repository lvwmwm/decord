// Module ID: 5641
// Function ID: 5642
// Name: context
// Dependencies: [19, 21, 2]
// Exports: RedesignCompat

// Module 5641 (context)
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(false);
const result = require("set").fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{arg0.children}</context.Provider>;
};
