// Module ID: 207
// Function ID: 2925
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 201]

// Module 207 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}

export default ((arg0) => {
  class ProgressEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = ProgressEvent(this, ProgressEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = outer1_3(ProgressEvent);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      lengthComputable = undefined;
      if (null != arg1) {
        lengthComputable = arg1.lengthComputable;
      }
      tmp2Result._lengthComputable = Boolean(lengthComputable);
      loaded = undefined;
      if (null != arg1) {
        loaded = arg1.loaded;
      }
      tmp9 = Number(loaded) || 0;
      tmp2Result._loaded = tmp9;
      total = undefined;
      if (null != arg1) {
        total = arg1.total;
      }
      tmp11 = Number(total) || 0;
      tmp2Result._total = tmp11;
      return tmp2Result;
    }
  }
  callback2(ProgressEvent, arg0);
  let obj = {
    key: "lengthComputable",
    get() {
      return this._lengthComputable;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "loaded",
    get() {
      return this._loaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "total",
    get() {
      return this._total;
    }
  };
  items[2] = obj;
  return callback(ProgressEvent, items);
})(require("Event"));
