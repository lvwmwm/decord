// Module ID: 10795
// Function ID: 83815
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10795 (_isNativeReflectConstruct)
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
arg1(dependencyMap[6]).BackHandler;
const jsx = arg1(dependencyMap[7]).jsx;

export default (Component) => {
  class BackButton {
    constructor() {
      self = this;
      tmp = closure_2(this, BackButton);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(BackButton);
      tmp3 = closure_4;
      if (closure_9()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      BackButton = tmp3Result;
      tmp3Result.handleBack = () => {
        let flag = 0 !== tmp3Result.history.index;
        if (flag) {
          const history = tmp3Result.history;
          history.goBack();
          flag = true;
        }
        return flag;
      };
      return tmp3Result;
    }
  }
  const arg1 = BackButton;
  callback2(BackButton, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const listener = closure_7.addEventListener("hardwareBackPress", this.handleBack);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = closure_7.removeEventListener("hardwareBackPress", this.handleBack);
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      const BackButton = this;
      return callback3(BackButton(closure_1[8]).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  };
  items[2] = obj;
  return callback(BackButton, items);
}(importDefault(dependencyMap[5]).Component);
