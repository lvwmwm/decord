// Module ID: 8100
// Function ID: 64176
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8100 (_isNativeReflectConstruct)
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
  class Polygon {
    constructor() {
      self = this;
      tmp = closure_2(this, Polygon);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(Polygon);
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
      Polygon = tmp3Result;
      tmp3Result.setNativeProps = (points) => {
        points = points.points;
        if (points) {
          const _HermesInternal = HermesInternal;
          points.d = "M" + tmp3Result(closure_1[7])(points) + "z";
        }
        if (tmp3Result.root) {
          const root = tmp3Result.root;
          root.setNativeProps(points);
        }
      };
      return tmp3Result;
    }
  }
  const importDefault = Polygon;
  callback2(Polygon, arg0);
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
          combined = "M" + Polygon(closure_1[7])(points) + "z";
        }
        obj.d = combined;
        return closure_7(Polygon(closure_1[8]), Object.assign(obj, props));
      }
    }
  ];
  return callback(Polygon, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "Polygon";
tmp3.defaultProps = { points: "" };

export default tmp3;
