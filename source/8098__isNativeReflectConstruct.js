// Module ID: 8098
// Function ID: 64176
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8098 (_isNativeReflectConstruct)
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
  class Pattern {
    constructor() {
      self = this;
      tmp = closure_2(this, Pattern);
      obj = closure_5(Pattern);
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
  const importDefault = Pattern;
  callback2(Pattern, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let height;
        let id;
        let patternContentUnits;
        let patternTransform;
        let patternUnits;
        let preserveAspectRatio;
        let transform;
        let viewBox;
        let width;
        let x;
        let y;
        const Pattern = this;
        const props = this.props;
        ({ patternTransform, patternUnits, patternContentUnits } = props);
        ({ transform, id, x, y, width, height, children, viewBox, preserveAspectRatio } = props);
        if (!patternTransform) {
          patternTransform = transform;
        }
        if (!patternTransform) {
          patternTransform = props;
        }
        const tmpResult = Pattern(closure_1[7])(patternTransform);
        let obj = { x, y, width, height, name: id, matrix: tmpResult, patternTransform: tmpResult };
        let num = patternUnits;
        if (patternUnits) {
          num = Pattern(closure_1[8])[patternUnits];
        }
        if (!num) {
          num = 0;
        }
        obj.patternUnits = num;
        let num3 = 1;
        if (patternContentUnits) {
          num3 = Pattern(closure_1[8])[patternContentUnits];
        }
        obj.patternContentUnits = num3;
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp = Pattern(closure_1[7]);
        obj = { children };
        return callback3(Pattern(closure_1[9]), Object.assign(obj, obj, Pattern(closure_1[10])({ viewBox, preserveAspectRatio }), obj));
      }
    }
  ];
  return callback(Pattern, items);
}(importDefault(dependencyMap[11]));
tmp3.displayName = "Pattern";
tmp3.defaultProps = {};

export default tmp3;
