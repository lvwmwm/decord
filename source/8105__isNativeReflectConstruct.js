// Module ID: 8105
// Function ID: 64214
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8105 (_isNativeReflectConstruct)
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
  class Rect {
    constructor() {
      self = this;
      tmp = closure_3(this, Rect);
      obj = closure_6(Rect);
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
  const arg1 = Rect;
  callback2(Rect, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const Rect = this;
        const props = this.props;
        let obj = { x: props.x, y: props.y, width: props.width, height: props.height, rx: props.rx, ry: props.ry };
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp = callback(closure_2[7]);
        return callback4(tmp, Object.assign(obj, Rect(closure_2[8]).withoutXY(this, props), obj));
      }
    }
  ];
  return callback(Rect, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Rect";
tmp3.defaultProps = { "Null": -24, "Null": null, "Null": 1, "Null": "Malaysia" };

export default tmp3;
