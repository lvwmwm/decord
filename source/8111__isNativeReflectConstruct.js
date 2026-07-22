// Module ID: 8111
// Function ID: 64250
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8111 (_isNativeReflectConstruct)
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
  class TSpan {
    constructor() {
      self = this;
      tmp = closure_3(this, TSpan);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(TSpan);
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
      TSpan = tmp3Result;
      tmp3Result.setNativeProps = (matrix) => {
        let tmp = !matrix.matrix;
        if (tmp) {
          tmp = callback(closure_2[7])(matrix);
        }
        if (tmp) {
          matrix.matrix = tmp;
        }
        const propsAndStylesResult = tmp3Result(closure_2[8]).propsAndStyles(matrix);
        const obj = tmp3Result(closure_2[8]);
        const merged = Object.assign(propsAndStylesResult, tmp3Result(closure_2[9]).pickNotNil(callback(closure_2[10])(propsAndStylesResult, false)));
        if (tmp3Result.root) {
          const root = tmp3Result.root;
          root.setNativeProps(propsAndStylesResult);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = TSpan;
  callback2(TSpan, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const propsAndStylesResult = TSpan(closure_2[8]).propsAndStyles(this.props);
        const obj = TSpan(closure_2[8]);
        const tmp2Result = callback(closure_2[8])(Object.assign({}, propsAndStylesResult, { 0: "o", 0: "o" }), this);
        const merged = Object.assign(tmp2Result, callback(closure_2[10])(propsAndStylesResult, false));
        tmp2Result.ref = this.refMethod;
        const tmp2 = callback(closure_2[8]);
        return callback4(callback(closure_2[11]), Object.assign({}, tmp2Result));
      }
    }
  ];
  return callback(TSpan, items);
}(importDefault(dependencyMap[12]));
tmp3.displayName = "TSpan";
arg1(dependencyMap[10]).setTSpan(tmp3);

export default tmp3;
