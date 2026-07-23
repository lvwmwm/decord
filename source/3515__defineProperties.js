// Module ID: 3515
// Function ID: 27031
// Name: _defineProperties
// Dependencies: [3512]

// Module 3515 (_defineProperties)
const require = arg1;
const dependencyMap = arg6;
function _defineProperties(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    tmp.enumerable = tmp.enumerable || false;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let definePropertyResult = Object.defineProperty(arg0, tmp.key, tmp);
  }
}
arg5.Parser = (() => {
  class Parser {
    constructor() {
      if (this instanceof Parser) {
        return;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Cannot call a class as a function";
        tmp3 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp5 = typeError;
        throw typeError;
      }
    }
  }
  let obj = {
    key: "run",
    value: function run(arg0, arg1, arg2, arg3) {
      const self = this;
      const iter = this.parse(arg0, arg1, arg2, arg3);
      let tmp = null;
      if (iter) {
        const obj = {};
        const ValueSetter = Parser(outer1_1[0]).ValueSetter;
        const prototype = ValueSetter.prototype;
        const valueSetter = new ValueSetter(iter.value, self.validate, self.set, self.priority, self.subPriority);
        obj.setter = valueSetter;
        obj.rest = iter.rest;
        tmp = obj;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "validate",
    value: function validate(arg0, arg1, arg2) {
      return true;
    }
  };
  items[1] = obj;
  _defineProperties(Parser.prototype, items);
  return Parser;
})();
