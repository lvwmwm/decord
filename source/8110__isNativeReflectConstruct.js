// Module ID: 8110
// Function ID: 64232
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8110 (_isNativeReflectConstruct)
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
arg1(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const tmp4 = (arg0) => {
  class Text {
    constructor() {
      self = this;
      tmp = closure_3(this, Text);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(Text);
      tmp3 = closure_5;
      if (closure_9()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      Text = tmp3Result;
      tmp3Result.setNativeProps = (matrix) => {
        let tmp = matrix;
        if (matrix) {
          tmp = !matrix.matrix;
        }
        if (tmp) {
          tmp = callback(closure_2[8])(matrix);
        }
        if (tmp) {
          matrix.matrix = tmp;
        }
        const propsAndStylesResult = tmp3Result(closure_2[9]).propsAndStyles(matrix);
        const obj = tmp3Result(closure_2[9]);
        const merged = Object.assign(propsAndStylesResult, tmp3Result(closure_2[10]).pickNotNil(callback(closure_2[11])(propsAndStylesResult, true)));
        if (tmp3Result.root) {
          const root = tmp3Result.root;
          root.setNativeProps(propsAndStylesResult);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = Text;
  callback2(Text, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const propsAndStylesResult = Text(closure_2[9]).propsAndStyles(this.props);
        const obj = Text(closure_2[9]);
        const tmp2Result = callback(closure_2[9])(Object.assign({}, propsAndStylesResult, {}), this);
        const merged = Object.assign(tmp2Result, callback(closure_2[11])(propsAndStylesResult, true));
        tmp2Result.ref = this.refMethod;
        const tmp2 = callback(closure_2[9]);
        return callback4(callback(closure_2[12]), Object.assign({}, tmp2Result));
      }
    }
  ];
  return callback(Text, items);
}(importDefault(dependencyMap[13]));
tmp4.displayName = "Text";

export default tmp4;
