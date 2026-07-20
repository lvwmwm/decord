// Module ID: 10791
// Function ID: 83817
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10791 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["LIGHT", "marginTop", "useMemo"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (Component) => {
  class Link {
    constructor() {
      self = this;
      tmp = closure_4(this, Link);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_7(Link);
      tmp3 = closure_6;
      if (closure_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, combined, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      Link = tmp3Result;
      tmp3Result.handlePress = (defaultPrevented, str) => {
        if (tmp3Result.props.onPress) {
          const props = tmp3Result.props;
          props.onPress(defaultPrevented);
        }
        if (!defaultPrevented.defaultPrevented) {
          const to = str.to;
          if (tmp3Result.props.replace) {
            const replaced = str.replace(to);
          } else {
            str.push(to);
          }
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = Link;
  callback2(Link, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        let replace;
        let to;
        const Link = this;
        const props = this.props;
        ({ component: closure_1, to, replace } = props);
        closure_2 = callback(props, closure_2);
        return callback4(Link(closure_1[9]).__HistoryContext.Consumer, {
          children(arg0) {
            const self = arg0;
            return callback(closure_1, Object.assign({}, closure_2, {
              onPress(arg0) {
                return arg0.handlePress(arg0, arg0);
              }
            }));
          }
        });
      }
    }
  ];
  return callback(Link, items);
}(importDefault(dependencyMap[6]).Component);
tmp3.defaultProps = { component: arg1(dependencyMap[7]).TouchableHighlight, replace: false };
const obj = { onPress: importDefault(dependencyMap[10]).func, component: importDefault(dependencyMap[10]).elementType, replace: importDefault(dependencyMap[10]).bool };
const importDefaultResult = importDefault(dependencyMap[6]);
const items = [importDefault(dependencyMap[10]).string, importDefault(dependencyMap[10]).object];
obj.to = importDefault(dependencyMap[10]).oneOfType(items);
tmp3.propTypes = obj;

export default tmp3;
