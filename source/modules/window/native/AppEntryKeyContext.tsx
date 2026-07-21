// Module ID: 1453
// Function ID: 16956
// Name: context
// Dependencies: [100204544, 100335616, 100270080]
// Exports: useAppEntryKey

// Module 1453 (context)
const importAllResult = importAll(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("AppEntryKeyContext");
const context = importAllResult.createContext(undefined);
let closure_3 = false;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  const context = importAllResult.useContext(context);
  const items = [context];
  const effect = importAllResult.useEffect(() => {
    if (!tmp) {
      let closure_3 = true;
      closure_1.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
  }, items);
  let str = "main";
  if (null != context) {
    str = context;
  }
  return str;
};
