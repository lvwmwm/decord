// Module ID: 4052
// Function ID: 33803
// Name: ref
// Dependencies: []

// Module 4052 (ref)
let closure_0 = require(dependencyMap[0]);
const _module = require(dependencyMap[1]);
let _default = _module;
if (_module) {
  _default = _module;
  if ("object" === typeof _module) {
    _default = _module;
    if ("default" in _module) {
      _default = _module.default;
    }
  }
}
let closure_2 = {};

export default (arg0, arg1) => {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = _default;
  }
  const ref = React.useRef(closure_2);
  const React = ref;
  let current = ref.current;
  let _default = current;
  const effect = React.useEffect(() => {
    ref.current = arg0;
  });
  if (!tmp4) {
    _default = arg0;
    current = arg0;
  }
  return current;
};
