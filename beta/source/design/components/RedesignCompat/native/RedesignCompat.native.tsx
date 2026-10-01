// Module ID: 5998
// Function ID: 5999
// Name: RedesignCompat
// Dependencies: [19, 21, 2]
// Exports: RedesignCompat

// Module 5998 (RedesignCompat)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(false);
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(enabled) {
  enabled = enabled.enabled;
  const children = enabled.children;
  const Provider = context.Provider;
  const tmp = jsx;
  if (enabled == null) {
    enabled = true;
  }
  return tmp(Provider, { value: enabled, children });
};
