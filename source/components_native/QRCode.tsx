// Module ID: 12198
// Function ID: 95500
// Name: _callSuper
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 12199, 4533, 3842, 12213, 8556, 2]

// Module 12198 (_callSuper)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import module_8556 from "module_8556";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return module_8556(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
({ View: closure_10, Image: closure_11, StyleSheet: closure_12 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignSelf: "flex-start", padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.qrCode = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.qrCodeContainer = { display: "flex", alignSelf: "flex-start", alignItems: "center", justifyContent: "center", position: "relative" };
_createForOfIteratorHelperLoose.qrCodeOverlay = { display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose["size-40"] = { width: 40, height: 40 };
_createForOfIteratorHelperLoose["size-60"] = { width: 60, height: 60 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let obj1 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj1.SIZE_40]: "size-40", [obj1.SIZE_60]: "size-60" });
let tmp6 = ((PureComponent) => {
  class QRCode {
    constructor() {
      tmp = outer1_5(this, QRCode);
      return outer1_19(this, QRCode, arguments);
    }
  }
  callback3(QRCode, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let blur;
        let style;
        let text;
        const props = this.props;
        const accessibilityLabel = props.accessibilityLabel;
        ({ style, text, blur } = props);
        const tmp2 = outer1_4(props, outer1_3);
        let obj = { accessible: null != accessibilityLabel, accessibilityRole: "image", accessibilityLabel, style: items };
        let tmp5 = null;
        items = [outer1_15(this.context).qrCode, { backgroundColor: tmp2.bgColor }, style];
        obj = { style: obj };
        obj = { position: "relative", width: tmp2.size, height: tmp2.size };
        const obj1 = { value: text, level: "M" };
        const tmp = outer1_15(this.context);
        const tmp3 = outer1_13;
        const tmp6 = outer1_14;
        const merged = Object.assign(tmp2);
        const items1 = [outer1_13(outer1_1(outer1_2[11]), obj1), ];
        if (blur) {
          const obj2 = { style: outer1_12.absoluteFill, blurTheme: "dark" };
          tmp5 = outer1_13(outer1_1(outer1_2[12]), obj2);
        }
        items1[1] = tmp5;
        obj.children = items1;
        obj.children = tmp6(outer1_10, obj);
        return tmp3(outer1_10, obj);
      }
    }
  ];
  return callback(QRCode, items);
})(importAllResult.PureComponent);
let closure_18 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
tmp6.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
let tmp7 = ((PureComponent) => {
  class QRCodeWithOverlay {
    constructor() {
      tmp = outer1_5(this, QRCodeWithOverlay);
      return outer1_19(this, QRCodeWithOverlay, arguments);
    }
  }
  callback3(QRCodeWithOverlay, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        const tmp = outer1_15(this.context);
        const props = this.props;
        let SIZE_40 = props.overlaySize;
        if (null == SIZE_40) {
          SIZE_40 = outer1_16.SIZE_40;
        }
        let obj = { style: tmp.qrCodeContainer };
        obj = {};
        const merged = Object.assign(this.props);
        obj["blur"] = false;
        const items = [outer1_13(outer1_18, obj), , ];
        obj = { style: items1 };
        items1 = [tmp.qrCodeOverlay, outer1_12.absoluteFill];
        obj.children = outer1_13(outer1_11, { style: tmp[outer1_17[SIZE_40]], source: QRCodeWithOverlay(outer1_2[14]) });
        items[1] = outer1_13(outer1_10, obj);
        let tmp7 = null;
        if (props.blur) {
          const obj2 = { style: outer1_12.absoluteFill };
          tmp7 = outer1_13(outer1_1(outer1_2[15]), obj2);
        }
        items[2] = tmp7;
        obj.children = items;
        return outer1_14(outer1_10, obj);
      }
    }
  ];
  return callback(QRCodeWithOverlay, items);
})(importAllResult.PureComponent);
tmp7.contextType = require("ManaContext").ThemeContext;
tmp7.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
let result = require("_defineProperties").fileFinishedImporting("components_native/QRCode.tsx");

export default tmp6;
export const QRCodeOverlaySizes = obj1;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export const QRCodeWithOverlay = tmp7;
