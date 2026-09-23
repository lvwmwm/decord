// Module ID: 5989
// Function ID: 5990
// Name: RedesignCompat
// Dependencies: [19, 21, 2]
// Exports: RedesignCompat

// Module 5989 (RedesignCompat)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{arg0.children}</context.Provider>;
};
