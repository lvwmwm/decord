// Module ID: 4484
// Function ID: 39587
// Name: DelayedFreeze
// Dependencies: []
// Exports: default

// Module 4484 (DelayedFreeze)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export default function DelayedFreeze(freeze) {
  freeze = freeze.freeze;
  const arg1 = freeze;
  const tmp = callback(React.useState(false), 2);
  let closure_1 = tmp[1];
  const items = [freeze];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  const obj = {};
  let first = !tmp4;
  if (!!freeze) {
    first = tmp[0];
  }
  obj.freeze = first;
  obj.children = freeze.children;
  return jsx(arg1(closure_1[3]).Freeze, obj);
};
