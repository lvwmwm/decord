// Module ID: 409
// Function ID: 5812
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 409 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [0.00000000000000000000000000000000000000000008972056118241587, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004579649468661577, 1758507491084531600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[7]).jsx;

export default (Component) => {
  class RefreshControl {
    constructor() {
      self = this;
      tmp = closure_5(this, RefreshControl);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(RefreshControl);
      tmp3 = closure_7;
      if (closure_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, combined, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      RefreshControl = tmp3Result;
      tmp3Result._lastNativeRefreshing = false;
      tmp3Result._onRefresh = () => {
        tmp3Result._lastNativeRefreshing = true;
        if (tmp3Result.props.onRefresh) {
          const props = tmp3Result.props;
          props.onRefresh();
        }
        tmp3Result.forceUpdate();
      };
      tmp3Result._setNativeRef = (_nativeRef) => {
        tmp3Result._nativeRef = _nativeRef;
      };
      return tmp3Result;
    }
  }
  const arg1 = RefreshControl;
  callback2(RefreshControl, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._lastNativeRefreshing = this.props.refreshing;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(refreshing) {
      const self = this;
      if (this.props.refreshing !== refreshing.refreshing) {
        self._lastNativeRefreshing = self.props.refreshing;
      } else {
        if (tmp) {
          const Commands = RefreshControl(closure_2[8]).Commands;
          Commands.setNativeRefreshing(self._nativeRef, self.props.refreshing);
          self._lastNativeRefreshing = self.props.refreshing;
        }
        const tmp = self.props.refreshing !== self._lastNativeRefreshing && self._nativeRef;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let tintColor;
      let title;
      let titleColor;
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      const obj = { ref: this._setNativeRef, onRefresh: this._onRefresh };
      const tmp = callback2(props, closure_3);
      return callback5(callback(closure_2[8]), Object.assign({}, tmp, obj));
    }
  };
  items[2] = obj;
  return callback(RefreshControl, items);
}(importAll(dependencyMap[6]).Component);
