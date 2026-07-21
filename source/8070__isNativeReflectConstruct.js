// Module ID: 8070
// Function ID: 64006
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8070 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class FeMergeNode {
    constructor() {
      self = this;
      tmp = FeMergeNode(this, FeMergeNode);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_3(FeMergeNode);
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
      FeMergeNode = tmp3Result;
      tmp3Result.setNativeProps = () => {
        const parent = tmp3Result.props.parent;
        if (parent) {
          parent.forceUpdate();
        }
      };
      return tmp3Result;
    }
  }
  let closure_0 = FeMergeNode;
  callback2(FeMergeNode, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        return null;
      }
    }
  ];
  return callback(FeMergeNode, items);
}(importDefault(dependencyMap[5]));
tmp2.displayName = "FeMergeNode";

export default tmp2;
