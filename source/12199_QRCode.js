// Module ID: 12199
// Function ID: 95511
// Name: QRCode
// Dependencies: [12200, 12204, 12209, 31, 12212]

// Module 12199 (QRCode)
import QRCode from "QRCode";
import module_12204 from "module_12204";
import result from "result";
import result from "result";
import QRCodeSvg from "QRCodeSvg";

let closure_0 = Object.assign || ((arg0) => {
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp3 = arguments[num];
    let tmp4 = tmp3;
    let tmp5 = tmp2;
    let keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = tmp5;
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
          continue;
        }
        continue;
      }
    }
  }
  return arg0;
});
result = _interopRequireDefault(result);
let items = [result.default.object, result.default.string];
const items1 = [result.default.object, result.default.string];
const forwardRefResult = result.forwardRef((obj, ref) => {
  let bgColor;
  let fgColor;
  let level;
  let size;
  let value;
  const items = ["bgColor", "fgColor", "level", "size", "value"];
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
        continue;
      }
      continue;
    }
    continue;
  }
  let _default = new QRCode.default(-1, module_12204.default[level]);
  _default.addData(value);
  _default.make();
  const modules = _default.modules;
  _default = mod.default;
  obj = { bgColor };
  let mapped = modules.map((arr) => {
    let closure_0 = arg1;
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
    let closure_0 = arg1;
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
  return <QRCodeSvg.default {......callback({}, obj, obj)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = { bgColor: _default.oneOfType(items), fgColor: _default2.oneOfType(items1), level: result.default.string, size: result.default.number, value: result.default.string.isRequired };
forwardRefResult.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 };

export default forwardRefResult;
