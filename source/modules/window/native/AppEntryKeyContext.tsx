// Module ID: 1453
// Function ID: 16957
// Name: context
// Dependencies: [31, 3, 2]
// Exports: useAppEntryKey

// Module 1453 (context)
import importAllResult from "result";
import importDefaultResult from "timestamp";

importDefaultResult = new importDefaultResult("AppEntryKeyContext");
let context = importAllResult.createContext(undefined);
let c3 = false;
const result = require("set").fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  context = context.useContext(context);
  const items = [context];
  const effect = context.useEffect(() => {
    if (!tmp) {
      const outer1_3 = true;
      outer1_1.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
  }, items);
  let str = "main";
  if (null != context) {
    str = context;
  }
  return str;
};
