// Module ID: 14010
// Function ID: 106551
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14010 (_isNativeReflectConstruct)
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
const View = arg1(dependencyMap[6]).View;
const jsx = arg1(dependencyMap[7]).jsx;
const importAllResult = importAll(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[8]).createLegacyClassComponentStyles({ container: {} });
const tmp3 = (PureComponent) => {
  class UntouchableAlert {
    constructor() {
      self = this;
      tmp = closure_2(this, UntouchableAlert);
      obj = closure_5(UntouchableAlert);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UntouchableAlert;
  callback2(UntouchableAlert, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      if (!this.props.loading) {
        self.closeAlert();
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value(loading) {
      const self = this;
      loading = this.props.loading;
      if (!tmp) {
        self.closeAlert();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "closeAlert",
    value() {
      const UntouchableAlert = this;
      setImmediate(() => {
        const props = self.props;
        return props.onClose();
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let tmp2 = null;
      if (this.props.loading) {
        const obj = { style: tmp.container, children: callback3(UntouchableAlert(closure_1[9]).ActivityIndicator, {}) };
        tmp2 = callback3(closure_7, obj);
      }
      return tmp2;
    }
  };
  return callback(UntouchableAlert, items);
}(importAllResult.PureComponent);
tmp3.contextType = arg1(dependencyMap[10]).ThemeContext;
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default tmp3;
