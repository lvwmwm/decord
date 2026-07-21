// Module ID: 8060
// Function ID: 63946
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8060 (_isNativeReflectConstruct)
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
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
const tmp3 = (arg0) => {
  class FeDropShadow {
    constructor() {
      self = this;
      tmp = closure_2(this, FeDropShadow);
      obj = closure_5(FeDropShadow);
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
  const importDefault = FeDropShadow;
  callback2(FeDropShadow, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let dx;
        let dy;
        let result;
        const self = this;
        const props = this.props;
        const _in = props.in;
        let str = "SourceGraphic";
        if (undefined !== _in) {
          str = _in;
        }
        let obj = {};
        ({ dx, dy, result } = props);
        obj = { in: str, stdDeviation: props.stdDeviation };
        const items = [callback3(FeDropShadow(closure_1[7]), obj), callback3(FeDropShadow(closure_1[8]), { dx, dy, result: "offsetblur" }), , , ];
        obj = { floodColor: self.props.floodColor, floodOpacity: self.props.floodOpacity };
        items[2] = callback3(FeDropShadow(closure_1[9]), obj);
        items[3] = callback3(FeDropShadow(closure_1[10]), {});
        const obj1 = { result };
        const items1 = [callback3(FeDropShadow(closure_1[12]), {}), ];
        const obj2 = { in: str };
        items1[1] = callback3(FeDropShadow(closure_1[12]), obj2);
        obj1.children = items1;
        items[4] = callback4(FeDropShadow(closure_1[11]), obj1);
        obj.children = items;
        return callback4(React.Fragment, obj);
      }
    }
  ];
  return callback(FeDropShadow, items);
}(importDefault(dependencyMap[13]));
tmp3.displayName = "FeDropShadow";
tmp3.defaultProps = Object.assign({}, tmp3.defaultPrimitiveProps);

export default tmp3;
