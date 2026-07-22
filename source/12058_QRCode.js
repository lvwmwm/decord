// Module ID: 12058
// Function ID: 93120
// Name: QRCode
// Dependencies: []

// Module 12058 (QRCode)
let closure_0 = Object.assign || (arg0) => {
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
let closure_1 = _interopRequireDefault(require(dependencyMap[0]));
let closure_2 = _interopRequireDefault(require(dependencyMap[1]));
const result = _interopRequireDefault(require(dependencyMap[2]));
const _module = require(dependencyMap[3]);
let closure_3 = _interopRequireDefault(_module);
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));
const items = [result.default.object, result.default.string];
const items1 = [result.default.object, result.default.string];
const forwardRefResult = _module.forwardRef((obj, ref) => {
  let bgColor;
  let fgColor;
  let level;
  let size;
  let value;
  const items = [];
  obj = {};
  ({ bgColor, fgColor, level, size, value } = obj);
  for (const key10012 in arg0) {
    let tmp3 = key10012;
    if (items.indexOf(key10012) >= 0) {
      continue;
    } else {
      let _Object = Object;
      if (!hasOwnProperty.call(arg0, key10012)) {
        continue;
      } else {
        obj[key10012] = arg0[key10012];
        // continue
      }
      continue;
    }
    continue;
  }
  let _default = new mod.default(-1, mod2.default[level]);
  _default.addData(value);
  _default.make();
  const modules = _default.modules;
  _default = mod3.default;
  obj = { bgColor };
  const mapped = modules.map((arr) => {
    const mapped = arr.map((arg0, arg1) => {
      let str = "";
      if (!arg0) {
        str = `${"M " + arg1 + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj.bgD = mapped.join(" ");
  obj.fgColor = fgColor;
  const mapped1 = modules.map((arr) => {
    const mapped = arr.map((arg0, arg1) => {
      let str = "";
      if (arg0) {
        str = `${"M " + arg1 + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj.fgD = mapped1.join(" ");
  obj.ref = ref;
  obj.size = size;
  obj.viewBoxSize = modules.length;
  return <mod4.default {......callback({}, obj, obj)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = { bgColor: _default.oneOfType(items), fgColor: _default2.oneOfType(items1), level: result.default.string, size: result.default.number, value: result.default.string.isRequired };
forwardRefResult.defaultProps = { -9223372036854775808: true, 0: 708907501, 9223372036854775807: 1912603217, 9223372036854775807: 52 };

export default forwardRefResult;
