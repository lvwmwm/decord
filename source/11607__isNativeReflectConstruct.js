// Module ID: 11607
// Function ID: 90161
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11607 (_isNativeReflectConstruct)
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
const View = arg1(dependencyMap[6]).View;
const importAllResult = importAll(dependencyMap[5]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
let closure_11 = obj.createLegacyClassComponentStyles({ progressCircle: {}, circle: { "Null": true, "Null": false, "Null": "" }, circleOverlay: { st: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007425797890170555, marginTop: 125761291718944880000000000, marginRight: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011750084940025737, borderColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002781342323652067 } });
const tmp4 = (Component) => {
  class ProgressCircle {
    constructor() {
      self = this;
      tmp = closure_3(this, ProgressCircle);
      obj = closure_6(ProgressCircle);
      tmp2 = closure_5;
      if (closure_12()) {
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
  const arg1 = ProgressCircle;
  callback2(ProgressCircle, Component);
  let obj = {
    key: "renderCircle",
    value() {
      let size;
      let strokeWidth;
      const props = this.props;
      ({ size, strokeWidth } = props);
      const result = (size - strokeWidth) / 2;
      const result1 = result * Math.PI * 2;
      const bound = Math.min(Math.max(props.percent, 0), 100);
      let obj = {};
      const tmp = callback5(this.context);
      obj.viewBox = "0 0 " + size + " " + size;
      obj.style = tmp.circle;
      obj = { fill: "none", cx: size / 2, cy: size / 2, r: result, strokeWidth, strokeLinecap: "round", transform: "rotate(-90 " + size / 2 + " " + size / 2 + ")", stroke: props.color };
      obj = { strokeDasharray: result1, strokeDashoffset: (1 - bound / 100) * result1 };
      obj.style = obj;
      obj.children = callback4(ProgressCircle(closure_2[9]).Circle, obj);
      return callback4(callback(closure_2[9]), obj);
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value() {
      const tmp = callback5(this.context);
      const props = this.props;
      const children = props.children;
      let obj = { style: items };
      const items = [tmp.progressCircle, props.style];
      const items1 = [this.renderCircle(), ];
      let tmp4 = null;
      if (null != children) {
        obj = { style: tmp.circleOverlay, children };
        tmp4 = callback4(closure_8, obj);
      }
      items1[1] = tmp4;
      obj.children = items1;
      return closure_10(closure_8, obj);
    }
  };
  items[1] = obj;
  return callback(ProgressCircle, items);
}(importAllResult.Component);
tmp4.contextType = arg1(dependencyMap[10]).ThemeContext;
obj = { color: importDefault(dependencyMap[11]).unsafe_rawColors.GUILD_BOOSTING_PINK };
tmp4.defaultProps = obj;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/components/ProgressCircle.tsx");

export default tmp4;
