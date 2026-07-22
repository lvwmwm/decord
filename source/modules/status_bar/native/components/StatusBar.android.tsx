// Module ID: 9750
// Function ID: 75862
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9750 (_isNativeReflectConstruct)
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
const tmp2 = (StatusBar) => {
  class StatusBarAndroid {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, StatusBarAndroid);
      items1 = [...items];
      obj = closure_5(StatusBarAndroid);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._stackEntry = null;
      return tmp2Result;
    }
  }
  const importDefault = StatusBarAndroid;
  callback2(StatusBarAndroid, StatusBar);
  let obj = {
    key: "componentDidMount",
    value() {
      this._stackEntry = StatusBarAndroid(closure_1[6]).pushStackEntry(this.props);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value() {
      this._stackEntry = StatusBarAndroid(closure_1[6]).replaceStackEntry(this._stackEntry, this.props);
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value() {
      StatusBarAndroid(closure_1[6]).popStackEntry(this._stackEntry);
      this._stackEntry = null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      return null;
    }
  };
  return callback(StatusBarAndroid, items);
}(arg1(dependencyMap[5]).StatusBar);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default tmp2;
