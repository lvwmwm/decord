// Module ID: 4658
// Function ID: 4659
// Name: DelayedFreeze
// Dependencies: [32, 19, 21, 4659]
// Exports: default

// Module 4658 (DelayedFreeze)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export default function DelayedFreeze(children) {
  let freeze = children.freeze;
  let dependencyMap;
  const tmp = callback(React.useState(false), 2);
  dependencyMap = tmp[1];
  const items = [freeze];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  if (freeze) {
    freeze = tmp[0];
  }
  return jsx(freeze(4659).Freeze, { freeze, children: children.children });
};
