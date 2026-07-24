// Module ID: 5164
// Function ID: 44971
// Name: context
// Dependencies: [31, 33, 2]
// Exports: RedesignCompat

// Module 5164 (context)
import { jsx } from "jsxProd";
import importAllResult from "result";

const context = require("result").createContext(false);
const result = require("set").fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(enabled) {
  enabled = enabled.enabled;
  const obj = {};
  let tmp2 = null == enabled;
  if (!tmp2) {
    tmp2 = enabled;
  }
  obj.value = tmp2;
  obj.children = enabled.children;
  return <context.Provider />;
};
