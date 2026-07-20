// Module ID: 13825
// Function ID: 104512
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13825 (_isNativeReflectConstruct)
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
const tmp3 = arg1(dependencyMap[6]);
const View = tmp3.View;
const importDefaultResult = importDefault(dependencyMap[5]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[7]));
const tmp5 = (PureComponent) => {
  class CircularProgress {
    constructor() {
      self = this;
      tmp = closure_2(this, CircularProgress);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(CircularProgress);
      tmp3 = closure_4;
      if (closure_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.clampFill = (arg0) => Math.min(100, Math.max(0, arg0));
      return tmp3Result;
    }
  }
  const arg1 = CircularProgress;
  callback2(CircularProgress, PureComponent);
  let obj = {
    key: "polarToCartesian",
    value: function polarToCartesian(sum, sum2, diff, arg3) {
      const result = (arg3 - 90) * Math.PI / 180;
      return { x: sum + diff * Math.cos(result), y: sum2 + diff * Math.sin(result) };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "circlePath",
    value: function circlePath(sum, sum2, diff, arg3, arcSweepAngle) {
      const polarToCartesianResult = this.polarToCartesian(sum, sum2, diff, 0.9999999 * arcSweepAngle);
      let str = "1";
      if (arcSweepAngle - arg3 <= 180) {
        str = "0";
      }
      const items = [];
      ({ x: arr[1], y: arr[2] } = polarToCartesianResult);
      items[3] = "A";
      items[4] = diff;
      items[5] = diff;
      items[6] = 0;
      items[7] = str;
      items[8] = 0;
      ({ x: arr[9], y: arr[10] } = this.polarToCartesian(sum, sum2, diff, arg3));
      return items.join(" ");
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let arcSweepAngle;
      let backgroundColor;
      let backgroundWidth;
      let children;
      let dashedBackground;
      let dashedTint;
      let fill;
      let fillLineCap;
      let lineCap;
      let padding;
      let renderCap;
      let rotation;
      let size;
      let style;
      let tintColor;
      let tintTransparency;
      let width;
      const self = this;
      const props = this.props;
      ({ size, width, backgroundWidth, backgroundColor, lineCap, fillLineCap } = props);
      ({ tintColor, tintTransparency, style, rotation } = props);
      if (undefined === fillLineCap) {
        fillLineCap = lineCap;
      }
      ({ arcSweepAngle, fill, children, padding, renderCap, dashedBackground, dashedTint } = props);
      let bound = width;
      if (backgroundWidth) {
        const _Math = Math;
        bound = Math.max(width, backgroundWidth);
      }
      const sum = size / 2 + padding / 2;
      const diff = size / 2 - bound / 2 - padding / 2;
      const result = arcSweepAngle * self.clampFill(fill) / 100;
      let num = 0;
      if (!tintTransparency) {
        num = result;
      }
      const circlePathResult = self.circlePath(sum, sum, diff, num, arcSweepAngle);
      let renderCapResult = null;
      if (self.props.renderCap) {
        const props2 = self.props;
        let obj = { center: tmp8 };
        renderCapResult = props2.renderCap(obj);
      }
      const diff1 = size - 2 * bound;
      obj = { position: "absolute", left: bound + padding / 2, top: bound + padding / 2, width: diff1, height: diff1, borderRadius: diff1 / 2, alignItems: "center", justifyContent: "center", overflow: "hidden" };
      let mapped = null;
      const merged = Object.assign({}, obj, props.childrenContainerStyle);
      if (dashedTint.gap > 0) {
        const _Object = Object;
        let values = Object.values(dashedTint);
        mapped = values.map((replaced) => parseInt(replaced));
      }
      let mapped1 = null;
      if (dashedBackground.gap > 0) {
        const _Object2 = Object;
        values = Object.values(dashedBackground);
        mapped1 = values.map((replaced) => parseInt(replaced));
      }
      obj = { style };
      const obj1 = { width: size + padding, height: size + padding };
      const obj2 = { rotation, originX: (size + padding) / 2, originY: (size + padding) / 2 };
      let tmp18Result = backgroundColor;
      if (backgroundColor) {
        const obj3 = { d: circlePathResult, stroke: backgroundColor };
        if (!backgroundWidth) {
          backgroundWidth = width;
        }
        obj3.strokeWidth = backgroundWidth;
        obj3.strokeLinecap = lineCap;
        obj3.strokeDasharray = mapped1;
        obj3.fill = "transparent";
        tmp18Result = callback3(CircularProgress(closure_1[8]).Path, obj3);
        const tmp18 = callback3;
      }
      const items = [tmp18Result, , ];
      let tmp21 = fill > 0;
      if (tmp21) {
        const obj4 = { d: circlePathResult1, stroke: tintColor, strokeWidth: width, strokeLinecap: fillLineCap, strokeDasharray: mapped, fill: "transparent" };
        tmp21 = callback3(CircularProgress(closure_1[8]).Path, obj4);
      }
      items[1] = tmp21;
      items[2] = renderCapResult;
      obj2.children = items;
      obj1.children = closure_9(CircularProgress(closure_1[8]).G, obj2);
      const items1 = [callback3(CircularProgress(closure_1[8]).Svg, obj1), ];
      let tmp25 = children;
      if (children) {
        const obj5 = { style: merged, children: children(fill) };
        tmp25 = callback3(closure_7, obj5);
      }
      items1[1] = tmp25;
      obj.children = items1;
      return closure_9(closure_7, obj);
    }
  };
  items[2] = obj;
  return callback(CircularProgress, items);
}(importDefaultResult.PureComponent);
const obj = { style: importDefault(dependencyMap[9]).object };
const tmp4 = arg1(dependencyMap[7]);
const items = [importDefault(dependencyMap[9]).number, ];
const importDefaultResult1 = importDefault(dependencyMap[9]);
items[1] = importDefault(dependencyMap[9]).instanceOf(tmp3.Animated.Value);
obj.size = importDefaultResult1.oneOfType(items).isRequired;
obj.fill = importDefault(dependencyMap[9]).number.isRequired;
obj.width = importDefault(dependencyMap[9]).number.isRequired;
obj.backgroundWidth = importDefault(dependencyMap[9]).number;
obj.tintColor = importDefault(dependencyMap[9]).string;
obj.tintTransparency = importDefault(dependencyMap[9]).bool;
obj.backgroundColor = importDefault(dependencyMap[9]).string;
obj.rotation = importDefault(dependencyMap[9]).number;
obj.lineCap = importDefault(dependencyMap[9]).string;
obj.arcSweepAngle = importDefault(dependencyMap[9]).number;
obj.children = importDefault(dependencyMap[9]).func;
obj.childrenContainerStyle = importDefault(dependencyMap[9]).object;
obj.padding = importDefault(dependencyMap[9]).number;
obj.renderCap = importDefault(dependencyMap[9]).func;
obj.dashedBackground = importDefault(dependencyMap[9]).object;
obj.dashedTint = importDefault(dependencyMap[9]).object;
tmp5.propTypes = obj;
tmp5.defaultProps = { dashedBackground: { "Bool(false)": false, "Bool(false)": true }, dashedTint: { "Bool(false)": false, "Bool(false)": true } };

export default tmp5;
