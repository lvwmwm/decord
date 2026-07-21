// Module ID: 8101
// Function ID: 64173
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8101 (_isNativeReflectConstruct)
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
  class Polyline {
    constructor() {
      self = this;
      tmp = closure_2(this, Polyline);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(Polyline);
      tmp3 = closure_4;
      if (closure_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      Polyline = tmp3Result;
      tmp3Result.setNativeProps = (points) => {
        points = points.points;
        if (points) {
          const _HermesInternal = HermesInternal;
          points.d = "M" + tmp3Result(closure_1[7])(points);
        }
        if (tmp3Result.root) {
          const root = tmp3Result.root;
          root.setNativeProps(points);
        }
      };
      return tmp3Result;
    }
  }
  const importDefault = Polyline;
  callback2(Polyline, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const props = this.props;
        const points = props.points;
        const obj = { ref: this.refMethod };
        let combined = points;
        if (points) {
          const _HermesInternal = HermesInternal;
          combined = "M" + Polyline(closure_1[7])(points);
        }
        obj.d = combined;
        return closure_7(Polyline(closure_1[8]), Object.assign(obj, props));
      }
    }
  ];
  return callback(Polyline, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Polyline";
tmp3.defaultProps = { points: "" };

export default tmp3;
