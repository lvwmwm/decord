// Module ID: 1529
// Function ID: 17500
// Name: usePreventRemove
// Dependencies: [57, 31, 1465, 1508, 1530, 1531, 1505]
// Exports: default

// Module 1529 (usePreventRemove)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;

export default function usePreventRemove(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const first = callback(key.useState(() => callback(first[2]).nanoid()), 1)[0];
  const tmp2 = importDefault(first[3])();
  callback = tmp2;
  key = importDefault(first[4])().key;
  const setPreventRemove = importDefault(first[5])().setPreventRemove;
  const items = [setPreventRemove, first, key, arg0];
  const effect = key.useEffect(() => {
    setPreventRemove(first, key, closure_0);
    return () => {
      outer1_5(outer1_2, outer1_4, false);
    };
  }, items);
  const tmp4 = importDefault(first[6])((preventDefault) => {
    if (closure_0) {
      preventDefault.preventDefault();
      const obj = { data: preventDefault.data };
      callback2(obj);
    }
  });
  let closure_6 = tmp4;
  const items1 = [tmp2, tmp4];
  const effect1 = key.useEffect(() => {
    let addListenerResult;
    if (null != tmp2) {
      addListenerResult = tmp2.addListener("beforeRemove", closure_6);
    }
    return addListenerResult;
  }, items1);
};
