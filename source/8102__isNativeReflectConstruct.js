// Module ID: 8102
// Function ID: 64181
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8102 (_isNativeReflectConstruct)
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
  class RadialGradient {
    constructor() {
      self = this;
      tmp = closure_2(this, RadialGradient);
      obj = closure_5(RadialGradient);
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
  const importDefault = RadialGradient;
  callback2(RadialGradient, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let cx;
        let cy;
        let fx;
        let r;
        let rx;
        let ry;
        const RadialGradient = this;
        const props = this.props;
        ({ rx, ry, r, cx, cy, fx } = props);
        if (undefined === fx) {
          fx = cx;
        }
        let fy = props.fy;
        let obj = { fx };
        if (undefined === fy) {
          fy = cy;
        }
        obj.fy = fy;
        if (!rx) {
          rx = r;
        }
        obj.rx = rx;
        if (!ry) {
          ry = r;
        }
        obj.ry = ry;
        obj.cx = cx;
        obj.cy = cy;
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        return callback3(RadialGradient(closure_1[7]), Object.assign(obj, obj, RadialGradient(closure_1[8])(props, this)));
      }
    }
  ];
  return callback(RadialGradient, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "RadialGradient";
tmp3.defaultProps = {};

export default tmp3;
