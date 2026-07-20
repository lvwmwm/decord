// Module ID: 207
// Function ID: 2925
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 207 (_isNativeReflectConstruct)
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

export default (arg0) => {
  class ProgressEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = ProgressEvent(this, ProgressEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_3(ProgressEvent);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
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
  let closure_0 = ProgressEvent;
  callback2(ProgressEvent, arg0);
  let obj = {
    key: "lengthComputable",
    get() {
      return this._lengthComputable;
    }
  };
  const items = [obj, , ];
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
}(importDefault(dependencyMap[5]));
