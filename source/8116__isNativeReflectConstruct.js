// Module ID: 8116
// Function ID: 64262
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8116 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
importAll(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (arg0) => {
  class Use {
    constructor() {
      self = this;
      tmp = closure_3(this, Use);
      obj = closure_6(Use);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = Use;
  callback2(Use, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let height;
        let width;
        let x;
        let y;
        const Use = this;
        const props = this.props;
        let str = props.href;
        ({ children, x, y, width, height } = props);
        if (undefined === str) {
          str = props.xlinkHref;
        }
        let match = str;
        if (str) {
          match = str.match(Use(closure_2[7]).idPattern);
        }
        let tmp4 = match;
        if (match) {
          tmp4 = match[1];
        }
        if (!tmp4) {
          const _console = console;
          console.warn(`Invalid `href` prop for `Use` element, expected a href like "#id", but got: "${str}"`);
        }
        let obj = {};
        let tmp7;
        if (null != tmp4) {
          tmp7 = tmp4;
        }
        obj.href = tmp7;
        obj.x = x;
        obj.y = y;
        obj.width = width;
        obj.height = height;
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp8 = callback(closure_2[8]);
        obj = { children };
        return callback4(tmp8, Object.assign(obj, Use(closure_2[9]).withoutXY(this, props), obj, obj));
      }
    }
  ];
  return callback(Use, items);
}(importDefault(dependencyMap[10]));
tmp3.displayName = "Use";
tmp3.defaultProps = { dispatch: "ERROR", split: "ERROR", location: "NOT_RESPONDER", __initData: "NOT_RESPONDER" };

export default tmp3;
