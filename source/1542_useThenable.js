// Module ID: 1542
// Function ID: 17556
// Name: useThenable
// Dependencies: []
// Exports: default

// Module 1542 (useThenable)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importAll(dependencyMap[2]);

export default function useThenable(arg0) {
  let tmp3;
  const first = callback(React.useState(arg0), 1)[0];
  let closure_0 = first;
  const items = [false, undefined];
  const callback = items;
  first.then((arg0) => {
    const items = [true, arg0];
  });
  [tmp3, closure_2] = callback(React.useState(callback), 2);
  const first1 = callback(tmp3, 1)[0];
  const items1 = [first, first1];
  const effect = React.useEffect(() => {
    let closure_0 = false;
    if (!first1) {
      () => {
        const callback = callback(async () => {
          if (!closure_0) {
            const items = [true, tmp2];
            callback(items);
          }
        });
        return function resolve() {
          return callback(...arguments);
        };
      }()();
    }
    return () => {
      let closure_0 = true;
    };
  }, items1);
  return tmp3;
};
