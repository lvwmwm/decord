// Module ID: 1542
// Function ID: 17557
// Name: useThenable
// Dependencies: [5, 57, 31]
// Exports: default

// Module 1542 (useThenable)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";


export default function useThenable(arg0) {
  let result;
  let tmp3;
  const first = items(React.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((arg0) => {
    const items = [true, arg0];
  });
  [tmp3, result] = items(React.useState(items), 2);
  const first1 = items(tmp3, 1)[0];
  const items1 = [first, first1];
  const effect = React.useEffect(() => {
    let c0 = false;
    if (!first1) {
      (() => {
        let asyncGeneratorStep = first(async () => {
          if (!asyncGeneratorStep) {
            const items = [true, tmp2];
            outer3_2(items);
          }
        });
        return function resolve() {
          return callback(...arguments);
        };
      })()();
    }
    return () => {
      let c0 = true;
    };
  }, items1);
  return tmp3;
};
