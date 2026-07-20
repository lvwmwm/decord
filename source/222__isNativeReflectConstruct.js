// Module ID: 222
// Function ID: 3076
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 222 (_isNativeReflectConstruct)
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

export default (arg0) => {
  class File {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = closure_2(this, File);
      tmp3 = null != arg0;
      tmp2 = File(closure_1[5]);
      if (tmp3) {
        tmp3 = null != arg1;
      }
      tmp2Result = tmp2(tmp3, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
      items = [, ];
      items[0] = arg0;
      items[1] = arg2;
      obj = closure_5(File);
      tmp5 = closure_4;
      if (closure_7()) {
        tmp7 = globalThis;
        _Reflect = Reflect;
        tmp8 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp5Result = tmp5(self, constructResult);
      tmp5Result.data.name = arg1;
      return tmp5Result;
    }
  }
  const arg1 = File;
  callback2(File, arg0);
  let obj = {
    key: "name",
    get() {
      File(closure_1[5])(null != this.data.name, "Files must have a name set.");
      return this.data.name;
    }
  };
  const items = [obj, ];
  obj = {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    }
  };
  items[1] = obj;
  return callback(File, items);
}(importDefault(dependencyMap[6]));
