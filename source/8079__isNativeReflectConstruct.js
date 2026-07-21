// Module ID: 8079
// Function ID: 64079
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8079 (_isNativeReflectConstruct)
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
importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (arg0) => {
  class Filter {
    constructor() {
      self = this;
      tmp = closure_2(this, Filter);
      obj = closure_5(Filter);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const importDefault = Filter;
  callback2(Filter, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const Filter = this;
        const props = this.props;
        let obj = { name: props.id, x: props.x, y: props.y, width: props.width, height: props.height, filterUnits: props.filterUnits, primitiveUnits: props.primitiveUnits };
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        obj = { children: this.props.children };
        return callback3(Filter(closure_1[7]), Object.assign(obj, obj, obj));
      }
    }
  ];
  return callback(Filter, items);
}(importDefault(dependencyMap[8]));
tmp3.displayName = "Filter";
tmp3.defaultProps = {};

export default tmp3;
