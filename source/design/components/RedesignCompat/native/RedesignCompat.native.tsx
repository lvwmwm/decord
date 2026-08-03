// Module ID: 5285
// Function ID: 5286
// Name: context
// Dependencies: [19, 21, 2]
// Exports: RedesignCompat

// Module 5285 (context)
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
