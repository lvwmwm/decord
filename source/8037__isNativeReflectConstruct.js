// Module ID: 8037
// Function ID: 63820
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8037 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
importAll(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (arg0) => {
  class ClipPath {
    constructor() {
      self = this;
      tmp = closure_3(this, ClipPath);
      obj = closure_6(ClipPath);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ClipPath;
  callback2(ClipPath, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const props = this.props;
        let obj = { ref: this.refMethod };
        const tmp = callback(closure_2[7]);
        obj = { children: props.children };
        return callback4(tmp, Object.assign(obj, ClipPath(closure_2[8]).extract(this, props), obj));
      }
    }
  ];
  return callback(ClipPath, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "ClipPath";

export default tmp3;
