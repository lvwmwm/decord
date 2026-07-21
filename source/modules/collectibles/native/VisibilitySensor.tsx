// Module ID: 11835
// Function ID: 91732
// Name: onChange
// Dependencies: []
// Exports: default

// Module 11835 (onChange)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
let closure_4 = importDefault(dependencyMap[0]);
const View = require(dependencyMap[1]).View;
const _module1 = require(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = _module1);
const _module2 = require(dependencyMap[4]);
const result = _module2.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  let children;
  let resetKey;
  onChange = onChange.onChange;
  const importDefault = onChange;
  let closure_5;
  function stopWatching(closure_5, arg1) {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  const tmp = width(null);
  const dependencyMap = tmp;
  let callback = width(false);
  const size = importDefault(dependencyMap[3])();
  const width = size.width;
  const height = size.height;
  const React = height;
  closure_5 = width(null);
  const items = [resetKey];
  callback(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  callback = React.useCallback((arg0, arg1) => {
    const onChange = arg0;
    if (null === ref.current) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        if (null !== arg1.current) {
          const current = arg1.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let tmp = arg5 + arg3 > 0;
            if (tmp) {
              tmp = arg5 < closure_1;
            }
            if (tmp) {
              tmp = arg4 < callback;
            }
            if (tmp) {
              tmp = arg4 + arg2 > 0;
            }
            if (tmp !== ref.current) {
              ref.current = tmp;
              callback(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  callback(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp };
  const items3 = [children, callback(closure_5, {})];
  obj.children = items3;
  return stopWatching(closure_5, obj);
};
