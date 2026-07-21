// Module ID: 8091
// Function ID: 64135
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8091 (_isNativeReflectConstruct)
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
  class Marker {
    constructor() {
      self = this;
      tmp = closure_2(this, Marker);
      obj = closure_5(Marker);
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
  const importDefault = Marker;
  callback2(Marker, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let markerHeight;
        let markerWidth;
        let preserveAspectRatio;
        let viewBox;
        const Marker = this;
        const props = this.props;
        let obj = { name: props.id, refX: props.refX, refY: props.refY, markerUnits: props.markerUnits, orient: String(props.orient), markerWidth, markerHeight };
        ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        obj = { children };
        return callback3(Marker(closure_1[7]), Object.assign(obj, obj, Marker(closure_1[8])({ viewBox, preserveAspectRatio }), obj));
      }
    }
  ];
  return callback(Marker, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Marker";
tmp3.defaultProps = {};

export default tmp3;
