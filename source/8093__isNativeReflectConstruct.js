// Module ID: 8093
// Function ID: 64145
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8093 (_isNativeReflectConstruct)
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
  class Mask {
    constructor() {
      self = this;
      tmp = closure_3(this, Mask);
      obj = closure_6(Mask);
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
  const arg1 = Mask;
  callback2(Mask, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let maskContentUnits;
        let maskUnits;
        let style;
        const Mask = this;
        const props = this.props;
        ({ maskUnits, maskContentUnits, style } = props);
        let obj = { x: props.x, y: props.y, width: props.width, height: props.height };
        let num = 0;
        if (undefined !== maskUnits) {
          num = callback(closure_2[7])[maskUnits];
        }
        obj.maskUnits = num;
        let num3 = 1;
        if (undefined !== maskContentUnits) {
          num3 = callback(closure_2[7])[maskContentUnits];
        }
        obj.maskContentUnits = num3;
        let str;
        if (null != props) {
          str = props.maskType;
        }
        if (!str) {
          let maskType;
          if (null != style) {
            maskType = style.maskType;
          }
          str = maskType;
        }
        if (!str) {
          str = "luminance";
        }
        obj.maskType = Mask(closure_2[8]).maskType[str];
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp6 = callback(closure_2[9]);
        obj = { children: props.children };
        return callback4(tmp6, Object.assign(obj, Mask(closure_2[10]).withoutXY(this, props), obj, obj));
      }
    }
  ];
  return callback(Mask, items);
}(importDefault(dependencyMap[11]));
tmp3.displayName = "Mask";
tmp3.defaultProps = { dispatch: "r", split: "isArray", location: "accessibilityRole", __initData: "create" };

export default tmp3;
