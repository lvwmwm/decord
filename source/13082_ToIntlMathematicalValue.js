// Module ID: 13082
// Function ID: 99408
// Name: ToIntlMathematicalValue
// Dependencies: []
// Exports: ToIntlMathematicalValue

// Module 13082 (ToIntlMathematicalValue)
const _module = require(dependencyMap[0]);
let closure_2 = _module.__importDefault(require(dependencyMap[1]));

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = require(dependencyMap[2]).ToPrimitive(arg0, "number");
  if ("bigint" === typeof ToPrimitiveResult) {
    let _default6 = mod.default;
    const prototype6 = _default6.prototype;
    _default6 = new _default6(tmp2);
    return _default6;
  } else if (undefined === tmp2) {
    let _default5 = mod.default;
    const _NaN = NaN;
    const prototype5 = _default5.prototype;
    _default5 = new _default5(NaN);
    return _default5;
  } else if (true === tmp2) {
    let _default4 = mod.default;
    const prototype4 = _default4.prototype;
    _default4 = new _default4(1);
    return _default4;
  } else if (false === tmp2) {
    let _default3 = mod.default;
    const prototype3 = _default3.prototype;
    _default3 = new _default3(0);
    return _default3;
  } else if (null === tmp2) {
    let _default2 = mod.default;
    const prototype2 = _default2.prototype;
    _default2 = new _default2(0);
    return _default2;
  } else {
    let _default = mod.default;
    const prototype = _default.prototype;
    _default = new _default(tmp2);
    return _default;
  }
};
