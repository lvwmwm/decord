// Module ID: 149
// Function ID: 2372
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 149 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);

export default (arg0) => {
  class ReadOnlyText {
    constructor() {
      self = this;
      tmp = closure_2(this, ReadOnlyText);
      obj = closure_5(ReadOnlyText);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ReadOnlyText;
  callback2(ReadOnlyText, arg0);
  let obj = {
    key: "nodeName",
    get() {
      return "#text";
    }
  };
  const items = [obj, ];
  obj = {
    key: "nodeType",
    get() {
      return ReadOnlyText(closure_1[5]).TEXT_NODE;
    }
  };
  items[1] = obj;
  return callback(ReadOnlyText, items);
}(importDefault(dependencyMap[6]));
