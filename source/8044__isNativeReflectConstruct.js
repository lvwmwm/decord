// Module ID: 8044
// Function ID: 63864
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8044 (_isNativeReflectConstruct)
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
importAll(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (Component) => {
  class Defs {
    constructor() {
      self = this;
      tmp = closure_2(this, Defs);
      obj = closure_5(Defs);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const importDefault = Defs;
  callback2(Defs, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        return callback3(Defs(closure_1[7]), { children: this.props.children });
      }
    }
  ];
  return callback(Defs, items);
}(arg1(dependencyMap[5]).Component);
tmp3.displayName = "Defs";

export default tmp3;
