// Module ID: 222
// Function ID: 223
// Dependencies: [41, 42, 93, 95, 98, 38, 203]

// Module 222
import _modDef203 from "module_203" /* 203 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class File {
  constructor(items, filename, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, File);
    let tmp4 = null != items;
    const tmp = File;
    const tmp3 = require("module_38");
    if (tmp4) {
      tmp4 = null != filename;
    }
    tmp3(tmp4, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
    items = [items, arg2];
    const obj = _getPrototypeOf(tmp);
    const tmp6 = _getPrototypeOf;
    const tmp7 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp6(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp7Result = tmp7(self, constructResult);
    tmp7Result.data.name = filename;
    return tmp7Result;
  }
}
_inherits(File, _modDef203);
let obj = {
  key: "name",
  get() {
    require("module_38")(null != this.data.name, "Files must have a name set.");
    return this.data.name;
  }
};
let items = [
  obj,
  {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    }
  }
];

export default _createClass(File, items);
