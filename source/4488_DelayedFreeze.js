// Module ID: 4488
// Function ID: 39619
// Name: DelayedFreeze
// Dependencies: [57, 31, 33, 4489]
// Exports: default

// Module 4488 (DelayedFreeze)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;

export default function DelayedFreeze(freeze) {
  freeze = freeze.freeze;
  const tmp = callback(React.useState(false), 2);
  const dependencyMap = tmp[1];
  const items = [freeze];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_1(closure_0);
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
  return jsx(freeze(4489).Freeze, {});
};
