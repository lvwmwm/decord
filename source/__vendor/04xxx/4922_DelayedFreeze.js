// Module ID: 4922
// Function ID: 4923
// Name: DelayedFreeze
// Dependencies: [32, 19, 21, 4923]
// Exports: default

// Module 4922 (DelayedFreeze)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;

export default function DelayedFreeze(children) {
  let freeze = children.freeze;
  dependencyMap = undefined;
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
  return jsx(freeze(4923).Freeze, { freeze, children: children.children });
};
