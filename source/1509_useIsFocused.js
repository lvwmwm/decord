// Module ID: 1509
// Function ID: 17350
// Name: useIsFocused
// Dependencies: []
// Exports: default

// Module 1509 (useIsFocused)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const useState = arg1(dependencyMap[1]).useState;

export default function useIsFocused() {
  const obj = importDefault(dependencyMap[2])();
  const importDefault = obj;
  const tmp = callback(useState(obj.isFocused), 2);
  const dependencyMap = tmp2;
  const isFocusedResult = obj.isFocused();
  if (tmp[0] !== isFocusedResult) {
    tmp2(isFocusedResult);
  }
  const items = [obj];
  const effect = React.useEffect(() => {
    const obj = obj.addListener("focus", () => callback2(true));
    let closure_1 = obj.addListener("blur", () => callback2(false));
    return () => {
      callback();
      callback2();
    };
  }, items);
  const debugValue = React.useDebugValue(isFocusedResult);
  return isFocusedResult;
};
