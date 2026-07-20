// Module ID: 8076
// Function ID: 64064
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8076 (_isNativeReflectConstruct)
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
  class ForeignObject {
    constructor() {
      self = this;
      tmp = closure_3(this, ForeignObject);
      obj = closure_6(ForeignObject);
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
  const arg1 = ForeignObject;
  callback2(ForeignObject, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const ForeignObject = this;
        const props = this.props;
        let obj = { x: props.x, y: props.y, width: props.width, height: props.height };
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp = callback(closure_2[7]);
        obj = { children: props.children };
        return callback4(tmp, Object.assign(obj, ForeignObject(closure_2[8]).withoutXY(this, props), obj, obj));
      }
    }
  ];
  return callback(ForeignObject, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "ForeignObject";
tmp3.defaultProps = { <string:80573440>: 189, <string:80533760>: 163, <string:80487680>: null, <string:80573184>: "b5d60c4f52c2e5640ed435ba1b0b3fc3" };

export default tmp3;
