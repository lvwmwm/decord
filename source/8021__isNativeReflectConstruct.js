// Module ID: 8021
// Function ID: 63713
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8021 (_isNativeReflectConstruct)
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
  class G {
    constructor() {
      self = this;
      tmp = closure_3(this, G);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(G);
      tmp3 = closure_5;
      if (closure_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      G = tmp3Result;
      tmp3Result.setNativeProps = (matrix) => {
        let tmp = !matrix.matrix;
        if (tmp) {
          tmp = callback(closure_2[7])(matrix);
        }
        if (tmp) {
          matrix.matrix = tmp;
        }
        const root = tmp3Result.root;
        if (null != root) {
          root.setNativeProps(matrix);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = G;
  callback2(G, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const G = this;
        const props = this.props;
        let obj = G(closure_2[8]);
        const propsAndStylesResult = obj.propsAndStyles(props);
        const tmp2 = callback(closure_2[8])(propsAndStylesResult, this);
        const extractFontResult = G(closure_2[9]).extractFont(propsAndStylesResult);
        if (callback5(extractFontResult)) {
          tmp2.font = extractFontResult;
        }
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        obj = { children: props.children };
        const obj2 = G(closure_2[9]);
        return callback4(callback(closure_2[10]), Object.assign(obj, tmp2, obj));
      }
    }
  ];
  return callback(G, items);
}(importDefault(dependencyMap[11]));
tmp3.displayName = "G";
function hasProps(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return true;
    }
  }
  return false;
}

export default tmp3;
