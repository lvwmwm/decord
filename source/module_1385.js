// Module ID: 1385
// Function ID: 16541
// Dependencies: []

// Module 1385
if ("function" === typeof Object.create) {
  module.exports = function inherits(value, super_) {
    if (super_) {
      value.super_ = super_;
      const _Object = Object;
      let obj = {};
      obj = { value, enumerable: false, writable: true, configurable: true };
      obj.constructor = obj;
      value.prototype = Object.create(super_.prototype, obj);
    }
  };
} else {
  module.exports = function inherits(arg0, super_) {
    if (super_) {
      arg0.super_ = super_;
      class TempCtor {
        constructor() {
          return;
        }
      }
      TempCtor.prototype = super_.prototype;
      const prototype = TempCtor.prototype;
      const tempCtor = new TempCtor();
      arg0.prototype = tempCtor;
      arg0.prototype.constructor = arg0;
    }
  };
}
