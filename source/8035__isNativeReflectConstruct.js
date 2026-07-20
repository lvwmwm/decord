// Module ID: 8035
// Function ID: 63810
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8035 (_isNativeReflectConstruct)
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
  class Circle {
    constructor() {
      self = this;
      tmp = closure_3(this, Circle);
      obj = closure_6(Circle);
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
  const arg1 = Circle;
  callback2(Circle, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let cx;
        let cy;
        let r;
        const Circle = this;
        const props = this.props;
        ({ cx, cy, r } = props);
        let obj = Circle(closure_2[7]);
        const merged = Object.assign({}, obj.extract(this, props), { cx, cy, r });
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        return callback4(callback(closure_2[8]), Object.assign(obj, merged));
      }
    }
  ];
  return callback(Circle, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Circle";
tmp3.defaultProps = {};

export default tmp3;
