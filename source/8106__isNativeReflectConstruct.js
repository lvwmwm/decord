// Module ID: 8106
// Function ID: 64201
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8106 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (Component) => {
  class Stop {
    constructor() {
      self = this;
      tmp = Stop(this, Stop);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_3(Stop);
      tmp3 = closure_2;
      if (closure_5()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, combined, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      Stop = tmp3Result;
      tmp3Result.setNativeProps = () => {
        const parent = tmp3Result.props.parent;
        if (parent) {
          parent.forceUpdate();
        }
      };
      return tmp3Result;
    }
  }
  let closure_0 = Stop;
  callback2(Stop, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        return null;
      }
    }
  ];
  return callback(Stop, items);
}(arg1(dependencyMap[5]).Component);
tmp2.displayName = "Stop";

export default tmp2;
