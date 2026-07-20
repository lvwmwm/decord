// Module ID: 11909
// Function ID: 92188
// Name: dropMilliseconds
// Dependencies: []
// Exports: useTimestampTickedNow

// Module 11909 (dropMilliseconds)
function dropMilliseconds(arg0) {
  const rounded = Math.floor(arg0 / importDefault(dependencyMap[3]).Millis.SECOND);
  return rounded * importDefault(dependencyMap[3]).Millis.SECOND;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = function useTimestampTickedNow() {
  let hovered;
  let isAppFocused;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  let callback;
  let importDefault;
  const tmp = callback2(React.useState(() => callback2(Date.now())), 2);
  callback = tmp[1];
  const items = [closure_5];
  let stateFromStores = callback(dependencyMap[4]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp3 = !isAppFocused;
  if (!tmp3) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    tmp3 = stateFromStores;
  }
  const SECOND = importDefault(dependencyMap[3]).Millis.SECOND;
  if (tmp3) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = React.useEffect(() => {
    const interval = new callback(closure_2[5]).Interval();
    const callback = interval;
    interval.start(result, () => {
      interval(callback(Date.now()));
    });
    return () => interval.stop();
  }, items1);
  obj = { now: tmp[0], slowTickMode: tmp3 };
  return obj;
};
