// Module ID: 15466
// Function ID: 118005
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15466 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = (Component) => {
  class Suppressed {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, Suppressed);
      items1 = [...items];
      obj = closure_6(Suppressed);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.close = () => {
        callback(closure_2[8]).clearSuppressWarning();
      };
      return tmp2Result;
    }
  }
  const arg1 = Suppressed;
  callback2(Suppressed, Component);
  const items = [
    {
      key: "render",
      value() {
        const intl = Suppressed(closure_2[9]).intl;
        const string = intl.string;
        const t = Suppressed(closure_2[9]).t;
        if (isAFKChannelResult) {
          let stringResult = string(t.KuYcnU);
          const intl3 = tmp2(tmp3[9]).intl;
          let stringResult1 = intl3.string(tmp2(tmp3[9]).t.RaFZ3+);
          let tmp7 = callback(tmp3[10]);
        } else {
          stringResult = string(t.FJSZVM);
          const intl2 = tmp2(tmp3[9]).intl;
          stringResult1 = intl2.string(tmp2(tmp3[9]).t.etJjgW);
          tmp7 = callback(tmp3[11]);
        }
        const obj = { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close };
        return callback4(callback(closure_2[12]), obj);
      }
    }
  ];
  return callback(Suppressed, items);
}(importAll(dependencyMap[5]).Component);
const result = arg1(dependencyMap[13]).fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default tmp3;
