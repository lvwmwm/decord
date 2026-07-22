// Module ID: 4485
// Function ID: 39592
// Name: Suspender
// Dependencies: []
// Exports: Freeze

// Module 4485 (Suspender)
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
const _module = require(dependencyMap[0]);
({ Suspense: closure_0, Fragment: closure_1, use: closure_2 } = _module);
let closure_3 = importDefault(dependencyMap[0]);
const jsx = require(dependencyMap[1]).jsx;

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
  return <closure_0 {...obj} />;
};
