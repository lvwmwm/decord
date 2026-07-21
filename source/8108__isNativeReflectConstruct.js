// Module ID: 8108
// Function ID: 64222
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8108 (_isNativeReflectConstruct)
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
const tmp3 = (arg0) => {
  class Symbol {
    constructor() {
      self = this;
      tmp = closure_2(this, Symbol);
      obj = closure_5(Symbol);
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
  const importDefault = Symbol;
  callback2(Symbol, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const Symbol = this;
        const props = this.props;
        let obj = { name: props.id };
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        obj = { children: props.children };
        return callback3(Symbol(closure_1[7]), Object.assign(obj, obj, Symbol(closure_1[8])(props), obj));
      }
    }
  ];
  return callback(Symbol, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Symbol";

export default tmp3;
