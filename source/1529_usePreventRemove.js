// Module ID: 1529
// Function ID: 17498
// Name: usePreventRemove
// Dependencies: []
// Exports: default

// Module 1529 (usePreventRemove)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);

export default function usePreventRemove(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const first = callback(React.useState(() => arg0(first[2]).nanoid()), 1)[0];
  const dependencyMap = first;
  const tmp2 = importDefault(dependencyMap[3])();
  const callback = tmp2;
  const key = importDefault(dependencyMap[4])().key;
  const React = key;
  const setPreventRemove = importDefault(dependencyMap[5])().setPreventRemove;
  const items = [setPreventRemove, first, key, arg0];
  const effect = React.useEffect(() => {
    setPreventRemove(first, key, arg0);
    return () => {
      callback(closure_2, closure_4, false);
    };
  }, items);
  const tmp4 = importDefault(dependencyMap[6])((preventDefault) => {
    if (preventDefault) {
      preventDefault.preventDefault();
      const obj = { data: preventDefault.data };
      arg1(obj);
    }
  });
  const items1 = [tmp2, tmp4];
  const effect1 = React.useEffect(() => {
    let addListenerResult;
    if (null != tmp2) {
      addListenerResult = tmp2.addListener("beforeRemove", tmp4);
    }
    return addListenerResult;
  }, items1);
};
