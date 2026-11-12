// Module ID: 15778
// Function ID: 15779
// Name: QRCode
// Dependencies: [15779, 15783, 15788, 19, 15791]

// Module 15778 (QRCode)
import QRCode_mod from "module_15779" /* 15779 */;
import module_15783_mod from "module_15783" /* 15783 */;
import module_15788 from "module_15788" /* 15788 */;
import react_mod from "react" /* 19 */;
import QRCodeSvg_mod from "QRCodeSvg" /* 15791 */;

let hasOwnProperty;

let _default;
let _default2;
let items;
let items1;
let tmp10;
let tmp3;
let tmp5;
let tmp7;
let tmp8;
const fn = Object.assign || (function(arg0) {
  let num;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10012 in tmp) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(tmp, key10012)) {
        continue;
      } else {
        arg0[key10012] = tmp[key10012];
        continue;
      }
      continue;
    }
  }
  return arg0;
});
let QRCode = QRCode_mod;
if (!QRCode) {
  let obj = { default: QRCode };
  tmp3 = obj;
} else {
  tmp3 = QRCode;
}
QRCode = tmp3;
let module_15783 = module_15783_mod;
if (!module_15783) {
  let obj2 = { default: module_15783 };
  tmp5 = obj2;
} else {
  tmp5 = module_15783;
}
module_15783 = tmp5;
if (!module_15788) {
  tmp7 = { default: module_15788 };
  const obj3 = { default: module_15788 };
} else {
  tmp7 = module_15788;
}
let react = react_mod;
if (!react) {
  tmp8 = { default: react };
  const obj4 = { default: react };
} else {
  tmp8 = react;
}
react = tmp8;
let QRCodeSvg = QRCodeSvg_mod;
if (!QRCodeSvg) {
  tmp10 = { default: QRCodeSvg };
  const obj5 = { default: QRCodeSvg };
} else {
  tmp10 = QRCodeSvg;
}
QRCodeSvg = tmp10;
const obj6 = { bgColor: _default.oneOfType(items), fgColor: _default2.oneOfType(items1), level: tmp7.default.string, size: tmp7.default.number, value: tmp7.default.string.isRequired };
_default = tmp7.default;
items = [tmp7.default.object, tmp7.default.string];
_default2 = tmp7.default;
items1 = [tmp7.default.object, tmp7.default.string];
const forwardRefResult = react.forwardRef((obj, ref) => {
  let bgColor;
  let fgColor;
  let level;
  let mapped;
  let mapped1;
  let value;
  const items = ["bgColor", "fgColor", "level", "size", "value"];
  obj = {};
  ({ bgColor, fgColor, level, size, value } = obj);
  for (const key10012 in obj) {
    if (items.indexOf(key10012) >= 0) {
      continue;
    } else {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(obj, key10012)) {
        continue;
      } else {
        obj[key10012] = obj[key10012];
        continue;
      }
      continue;
    }
    continue;
  }
  const _default1 = new QRCode.default(-1, module_15783.default[level]);
  _default1.addData(value);
  _default1.make();
  const modules = _default1.modules;
  const createElement = react.default.createElement;
  const obj2 = { bgColor, bgD: mapped.join(" "), fgColor, fgD: mapped1.join(" "), ref, size, viewBoxSize: modules.length };
  mapped = modules.map((arr, index) => {
    let closure_0 = index;
    const mapped = arr.map((item, index) => {
      let str = "";
      const tmp = item;
      if (!tmp) {
        str = `${"M " + index + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  mapped1 = modules.map((arr, index) => {
    let closure_0 = index;
    const mapped = arr.map((item, index) => {
      let str = "";
      const tmp = item;
      if (tmp) {
        str = `${"M " + index + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  return <_default2 {...fn({}, obj, obj2)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = obj6;
forwardRefResult.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 };

export default forwardRefResult;
