// Module ID: 8095
// Function ID: 64143
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8095 (_isNativeReflectConstruct)
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
  class Path {
    constructor() {
      self = this;
      tmp = closure_3(this, Path);
      obj = closure_6(Path);
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
  const arg1 = Path;
  callback2(Path, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const Path = this;
        const props = this.props;
        let obj = Path(closure_2[7]);
        const merged = Object.assign({}, obj.extract(this, props), { d: props.d });
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        return callback4(callback(closure_2[8]), Object.assign(obj, merged));
      }
    }
  ];
  return callback(Path, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Path";

export default tmp3;
