// Module ID: 12060
// Function ID: 93126
// Name: QRCodeSvg
// Dependencies: []

// Module 12060 (QRCodeSvg)
let closure_2 = Object.assign || (arg0) => {
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp3 = arguments[num];
    let tmp4 = tmp3;
    let tmp5 = tmp2;
    let keys = Object.keys();
    if (keys !== undefined) {
      let tmp2 = tmp5;
      let tmp7 = keys[tmp];
      while (tmp7 !== undefined) {
        let tmp8 = tmp7;
        let _Object = Object;
        tmp5 = tmp7;
        if (!hasOwnProperty.call(tmp3, tmp7)) {
          continue;
        } else {
          arg0[tmp7] = tmp3[tmp7];
          tmp5 = tmp7;
          // continue
        }
        continue;
      }
    }
  }
  return arg0;
};
const result = _interopRequireDefault(require(dependencyMap[0]));
const _module = require(dependencyMap[1]);
let closure_3 = _interopRequireDefault(_module);
const items = [result.default.object, result.default.string];
const items1 = [result.default.object, result.default.string];
const forwardRefResult = _module.forwardRef((obj, ref) => {
  let bgColor;
  let bgD;
  let fgColor;
  let fgD;
  let size;
  let viewBoxSize;
  ({ size, viewBoxSize } = obj);
  const items = [];
  obj = {};
  ({ bgColor, bgD, fgD, fgColor } = obj);
  for (const key10013 in arg0) {
    let tmp3 = key10013;
    if (items.indexOf(key10013) >= 0) {
      continue;
    } else {
      let _Object = Object;
      if (!hasOwnProperty.call(arg0, key10013)) {
        continue;
      } else {
        obj[key10013] = arg0[key10013];
        // continue
      }
      continue;
    }
    continue;
  }
  obj = { height: size, ref, style: { height: size, width: size }, viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: size };
  const element = mod.default.createElement(require(dependencyMap[2]).Path, { d: bgD, fill: bgColor });
  return mod.default.createElement(require(dependencyMap[2]).Svg, callback({}, obj, obj), element, mod.default.createElement(require(dependencyMap[2]).Path, { d, fill }));
});
forwardRefResult.displayName = "QRCodeSvg";
forwardRefResult.propTypes = { bgColor: _default.oneOfType(items).isRequired, bgD: result.default.string.isRequired, fgColor: _default2.oneOfType(items1).isRequired, fgD: result.default.string.isRequired, size: result.default.number.isRequired, viewBoxSize: result.default.number.isRequired };
forwardRefResult.defaultProps = {};

export default forwardRefResult;
