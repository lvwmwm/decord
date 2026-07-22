// Module ID: 8087
// Function ID: 64129
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8087 (_isNativeReflectConstruct)
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
  class LinearGradient {
    constructor() {
      self = this;
      tmp = closure_2(this, LinearGradient);
      obj = closure_5(LinearGradient);
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
  const importDefault = LinearGradient;
  callback2(LinearGradient, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const LinearGradient = this;
        const props = this.props;
        let obj = { x1: props.x1, y1: props.y1, x2: props.x2, y2: props.y2 };
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        return callback3(LinearGradient(closure_1[7]), Object.assign(obj, obj, LinearGradient(closure_1[8])(props, this)));
      }
    }
  ];
  return callback(LinearGradient, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "LinearGradient";
tmp3.defaultProps = {};

export default tmp3;
