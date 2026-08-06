// Module ID: 5353
// Function ID: 5354
// Name: context
// Dependencies: [19, 21, 2]
// Exports: RedesignCompat

// Module 5353 (context)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const context = require("noop").createContext(false);
const result = require("set").fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{arg0.children}</context.Provider>;
};
