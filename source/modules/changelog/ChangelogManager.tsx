// Module ID: 15883
// Function ID: 121612
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15883 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let tmp2 = (arg0) => {
  class ChangelogManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, ChangelogManager);
      items1 = [...items];
      obj = closure_7(ChangelogManager);
      tmp2 = closure_6;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ChangelogManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN(arg0) {
              return tmp2Result.handleConnectionOpen(arg0);
            }
      };
      tmp2Result.handleConnectionOpen = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = ChangelogManager;
  callback2(ChangelogManager, arg0);
  return callback(ChangelogManager);
}(importDefault(dependencyMap[14]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default tmp2;
