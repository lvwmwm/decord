// Module ID: 5327
// Function ID: 5328
// Name: DelayedFreeze
// Dependencies: [32, 19, 21, 5328]
// Exports: default

// Module 5327 (DelayedFreeze)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 5328 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default function DelayedFreeze(freeze) {
  let closure_1;
  let first;
  freeze = freeze.freeze;
  closure_1 = undefined;
  const children = freeze.children;
  [first, closure_1] = react.useState(false);
  const items = [freeze];
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_1(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let freeze2 = freeze;
  const Freeze = react2.Freeze;
  const tmp4 = jsx;
  if (freeze2) {
    freeze2 = first;
  }
  return tmp4(Freeze, { freeze: freeze2, children });
};
