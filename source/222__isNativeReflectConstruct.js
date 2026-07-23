// Module ID: 222
// Function ID: 3076
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 44, 197]

// Module 222 (_isNativeReflectConstruct)
import Blob from "Blob";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}

export default ((arg0) => {
  class File {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_2(this, File);
      tmp3 = null != arg0;
      tmp2 = File(outer1_1[5]);
      if (tmp3) {
        tmp3 = null != arg1;
      }
      tmp2Result = tmp2(tmp3, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
      items = [, ];
      items[0] = arg0;
      items[1] = arg2;
      obj = outer1_5(File);
      tmp5 = outer1_4;
      if (outer1_7()) {
        tmp7 = globalThis;
        _Reflect = Reflect;
        tmp8 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp5Result = tmp5(self, constructResult);
      tmp5Result.data.name = arg1;
      return tmp5Result;
    }
  }
  callback2(File, arg0);
  let obj = {
    key: "name",
    get() {
      File(outer1_1[5])(null != this.data.name, "Files must have a name set.");
      return this.data.name;
    }
  };
  let items = [obj, ];
  obj = {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    }
  };
  items[1] = obj;
  return callback(File, items);
})(require("Blob"));
