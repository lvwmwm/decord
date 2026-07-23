// Module ID: 4489
// Function ID: 39624
// Name: Suspender
// Dependencies: [31, 33]
// Exports: Freeze

// Module 4489 (Suspender)
import result from "result";
import closure_3 from "result";
import { jsx } from "jsxProd";

let closure_0;
let closure_1;
let closure_2;
function Suspender(children) {
  const freeze = children.freeze;
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  if (tmp2) {
    const promise = new Promise((current) => {
      ref1.current = current;
    });
    ref.current = promise;
  }
  let tmp8 = freeze;
  if (!freeze) {
    tmp8 = null == ref1.current;
  }
  if (!tmp8) {
    ref1.current();
    ref1.current = null;
  }
  if (null !== ref.current) {
    callback(ref.current);
  }
  if (!freeze) {
    ref.current = null;
  }
  return <closure_1>{arg0.children}</closure_1>;
}
({ Suspense: closure_0, Fragment: closure_1, use: closure_2 } = result);

export const Freeze = function Freeze(placeholder) {
  let children;
  let freeze;
  placeholder = placeholder.placeholder;
  const obj = {};
  let tmp3 = null;
  ({ freeze, children } = placeholder);
  if (undefined !== placeholder) {
    tmp3 = placeholder;
  }
  obj.fallback = tmp3;
  obj.children = <Suspender freeze={freeze}>{children}</Suspender>;
  return <closure_0 />;
};
