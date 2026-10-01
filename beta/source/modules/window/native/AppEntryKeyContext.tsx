// Module ID: 1482
// Function ID: 1483
// Name: AppEntryKeyContext
// Dependencies: [19, 3, 2]
// Exports: useAppEntryKey

// Module 1482 (AppEntryKeyContext)
import LoggerDefault from "Logger" /* 3 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_1 = new LoggerDefault("AppEntryKeyContext");
const main = "main";
const tmp2 = new LoggerDefault("AppEntryKeyContext");
let context = react.createContext(undefined);
let c4 = false;
const result = size.fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  let logger;
  context = context.useContext(context);
  const items = [context];
  const effect = context.useEffect(() => {
    const tmp = undefined !== context || c4;
    if (!tmp) {
      c4 = true;
      logger.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
  }, items);
  if (context == null) {
    context = main;
  }
  return context;
};
