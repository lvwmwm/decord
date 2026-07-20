// Module ID: 450
// Function ID: 6030
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 450 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class LinkingImpl {
    constructor() {
      self = this;
      tmp = closure_2(this, LinkingImpl);
      items = [];
      items[0] = undefined;
      obj = closure_5(LinkingImpl);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = LinkingImpl;
  callback2(LinkingImpl, arg0);
  let obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      return this.addListener(arg0, arg1);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "openURL",
    value: function openURL(closure_12) {
      this._validateURL(closure_12);
      const tmp2 = LinkingImpl(closure_1[5]);
      return LinkingImpl(closure_1[5])(LinkingImpl(closure_1[6])).openURL(closure_12);
    }
  };
  items[1] = obj;
  obj = {
    key: "canOpenURL",
    value: function canOpenURL(closure_12) {
      this._validateURL(closure_12);
      const tmp2 = LinkingImpl(closure_1[5]);
      return LinkingImpl(closure_1[5])(LinkingImpl(closure_1[6])).canOpenURL(closure_12);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "openSettings",
    value: function openSettings() {
      const tmp = LinkingImpl(closure_1[5]);
      return LinkingImpl(closure_1[5])(LinkingImpl(closure_1[6])).openSettings();
    }
  };
  items[4] = {
    key: "getInitialURL",
    value: function getInitialURL() {
      const tmp = LinkingImpl(closure_1[5]);
      return LinkingImpl(closure_1[5])(LinkingImpl(closure_1[6])).getInitialURL();
    }
  };
  items[5] = {
    key: "sendIntent",
    value: function sendIntent(arg0, arg1) {
      const tmp = LinkingImpl(closure_1[5]);
      return LinkingImpl(closure_1[5])(LinkingImpl(closure_1[6])).sendIntent(arg0, arg1);
    }
  };
  items[6] = {
    key: "_validateURL",
    value: function _validateURL(closure_12) {
      LinkingImpl(closure_1[7])("string" === typeof closure_12, `Invalid URL: should be a string. Was: ${closure_12}`);
      LinkingImpl(closure_1[7])(closure_12, "Invalid URL: cannot be empty");
    }
  };
  return callback(LinkingImpl, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();

export default tmp2;
