// Module ID: 10790
// Function ID: 83803
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10790 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
const Linking = arg1(dependencyMap[7]).Linking;
const jsx = arg1(dependencyMap[8]).jsx;
let closure_10 = /.*?:\/\//g;

export default (Component) => {
  class DeepLinking {
    constructor() {
      self = this;
      tmp = closure_3(this, DeepLinking);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(DeepLinking);
      tmp3 = closure_5;
      if (closure_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.handleChange = (url) => {
        tmp3Result.push(url.url);
      };
      return tmp3Result;
    }
  }
  const dependencyMap = DeepLinking;
  callback3(DeepLinking, Component);
  let obj = {
    key: "push",
    value: function push(str) {
      const history = this.history;
      history.push(str.replace(closure_10, ""));
    }
  };
  const items = [obj, , , ];
  obj = { key: "componentDidMount" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function componentDidMount() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = closure_8.removeEventListener("url", this.handleChange);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const callback = this;
      return callback4(callback(DeepLinking[9]).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  };
  return callback2(DeepLinking, items);
}(importDefault(dependencyMap[6]).Component);
