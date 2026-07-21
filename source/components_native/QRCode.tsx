// Module ID: 12053
// Function ID: 93071
// Name: _callSuper
// Dependencies: []

// Module 12053 (_callSuper)
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
  return closure_7(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ View: closure_10, Image: closure_11, StyleSheet: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { ty: 1, nm: 3, padding: importDefault(dependencyMap[10]).space.PX_8, borderRadius: importDefault(dependencyMap[10]).radii.xs };
obj.qrCode = obj;
obj.qrCodeContainer = { ty: 1, nm: 3, np: -1, mn: 20, ix: null };
obj.qrCodeOverlay = { cix: 0, y: 0, isArray: 0 };
obj.size-40 = {};
obj.size-60 = { bhk: -9518934934037965000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, bic: 13343162661761035000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
let closure_15 = obj.createLegacyClassComponentStyles(obj);
const obj1 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj1.SIZE_40]: "size-40", [obj1.SIZE_60]: "size-60" });
const tmp6 = (PureComponent) => {
  class QRCode {
    constructor() {
      tmp = closure_5(this, QRCode);
      return closure_19(this, QRCode, arguments);
    }
  }
  const arg1 = QRCode;
  callback3(QRCode, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let blur;
        let style;
        let text;
        const props = this.props;
        const accessibilityLabel = props.accessibilityLabel;
        ({ style, text, blur } = props);
        const tmp2 = callback2(props, closure_3);
        let obj = { accessible: null != accessibilityLabel, accessibilityRole: "image", accessibilityLabel, style: items };
        let tmp5 = null;
        const items = [callback5(this.context).qrCode, { backgroundColor: tmp2.bgColor }, style];
        obj = { style: obj };
        obj = { position: "relative", width: tmp2.size, height: tmp2.size };
        const obj1 = { value: text, level: "M" };
        const tmp = callback5(this.context);
        const tmp3 = callback4;
        const tmp6 = closure_14;
        const merged = Object.assign(tmp2);
        const items1 = [callback4(callback(closure_2[11]), obj1), ];
        if (blur) {
          const obj2 = { style: absoluteFill.absoluteFill, blurTheme: "dark" };
          tmp5 = callback4(callback(closure_2[12]), obj2);
        }
        items1[1] = tmp5;
        obj.children = items1;
        obj.children = tmp6(closure_10, obj);
        return tmp3(closure_10, obj);
      }
    }
  ];
  return callback(QRCode, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[13]).ThemeContext;
tmp6.defaultProps = {};
const tmp7 = (PureComponent) => {
  class QRCodeWithOverlay {
    constructor() {
      tmp = closure_5(this, QRCodeWithOverlay);
      return closure_19(this, QRCodeWithOverlay, arguments);
    }
  }
  const arg1 = QRCodeWithOverlay;
  callback3(QRCodeWithOverlay, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const tmp = callback4(this.context);
        const props = this.props;
        let SIZE_40 = props.overlaySize;
        if (null == SIZE_40) {
          SIZE_40 = SIZE_40.SIZE_40;
        }
        let obj = { style: tmp.qrCodeContainer };
        obj = {};
        const merged = Object.assign(this.props);
        obj["blur"] = false;
        const items = [callback3(closure_18, obj), , ];
        obj = { style: items1 };
        const items1 = [tmp.qrCodeOverlay, closure_12.absoluteFill];
        obj.children = callback3(closure_11, { style: tmp[closure_17[SIZE_40]], source: QRCodeWithOverlay(closure_2[14]) });
        items[1] = callback3(closure_10, obj);
        let tmp7 = null;
        if (props.blur) {
          const obj2 = { style: closure_12.absoluteFill };
          tmp7 = callback3(callback(closure_2[15]), obj2);
        }
        items[2] = tmp7;
        obj.children = items;
        return closure_14(closure_10, obj);
      }
    }
  ];
  return callback(QRCodeWithOverlay, items);
}(importAllResult.PureComponent);
tmp7.contextType = arg1(dependencyMap[13]).ThemeContext;
tmp7.defaultProps = {};
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("components_native/QRCode.tsx");

export default tmp6;
export const QRCodeOverlaySizes = obj1;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export const QRCodeWithOverlay = tmp7;
