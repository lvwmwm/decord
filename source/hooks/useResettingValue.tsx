// Module ID: 12369
// Function ID: 94591
// Name: useResettingValue
// Dependencies: []
// Exports: default

// Module 12369 (useResettingValue)
let closure_3 = importDefault(dependencyMap[0]);
({ useState: closure_4, useCallback: closure_5, useEffect: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = callback(callback2(arg0), 2);
  let closure_2 = tmp[1];
  const tmp2 = importDefault(closure_2[2])(() => {
    const timeout = new arg0(closure_2[3]).Timeout();
    return timeout;
  });
  const callback = tmp2;
  const items = [tmp2];
  callback4(() => () => closure_3.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = callback3((arg0) => {
    callback(arg0);
    if (arg0 !== arg0) {
      tmp2.start(arg1, () => callback(closure_0));
    }
  }, items2);
  return items1;
};
