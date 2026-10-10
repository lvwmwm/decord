// Module ID: 8733
// Function ID: 8734
// Name: components_native/QRCode
// Dependencies: [109, 19, 17, 21, 5092, 587, 4827, 8734, 5365, 6156, 8748, 8371, 2]

// Module 8733 (components_native/QRCode)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4827 */;
import FastImageDefault from "FastImage" /* 6156 */;
import QRCodeDefault from "QRCode" /* 8734 */;
import AssetRegistry from "AssetRegistry" /* 8748 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp10;
let tmp7;
const VisualEffectViewDefault = tmp7(5365);
const VisualEffectViewThemedDefault = tmp10(8371);
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { qrCode: obj2, qrCodeContainer: { display: "flex", alignSelf: "flex-start", alignItems: "center", justifyContent: "center", position: "relative" }, qrCodeOverlay: { display: "flex", alignItems: "center", justifyContent: "center" }, "size-40": { width: 40, height: 40 }, "size-60": { width: 60, height: 60 } };
obj2 = { display: "flex", alignSelf: "flex-start", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs };
const React4 = createStyles.createLegacyClassComponentStyles(obj);
let obj3 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj3.SIZE_40]: "size-40", [obj3.SIZE_60]: "size-60" });
const PureComponent = react.PureComponent;
class QRCode extends PureComponent {
  render() {
    let blur;
    let items;
    let items1;
    let obj2;
    let style;
    let text;
    let tmp6;
    const props = this.props;
    const accessibilityLabel = props.accessibilityLabel;
    ({ style, text, blur } = props);
    const tmp = closure_9(this.context);
    const tmp2 = _objectWithoutProperties(props, closure_3);
    let tmp3Result = null;
    const obj = { accessible: null != accessibilityLabel, accessibilityRole: "image", accessibilityLabel, style: items, children: tmp6(hasOwnProperty, obj2) };
    items = [tmp.qrCode, { backgroundColor: tmp2.bgColor }, style];
    obj2 = { style: { position: "relative", width: tmp2.size, height: tmp2.size }, children: items1 };
    obj3 = { value: text, level: "M" };
    const tmp9 = QRCodeDefault;
    const merged = Object.assign(tmp2);
    items1 = [metroImportDefault(tmp9, obj3), ];
    tmp6 = metroImportAll;
    if (blur) {
      const obj4 = { style: metroRequire.absoluteFill, blurTheme: "dark" };
      tmp3Result = tmp3(VisualEffectViewDefault, obj4);
    }
    items1[1] = tmp3Result;
    return metroImportDefault(hasOwnProperty, obj);
  }
}
const prototype = QRCode.prototype;
QRCode.contextType = native.ThemeContext;
QRCode.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
const PureComponent2 = react.PureComponent;
class QRCodeWithOverlay extends PureComponent2 {
  render() {
    let items;
    let items1;
    let obj4;
    let tmp12;
    const tmp = closure_9(this.context);
    const props = this.props;
    let SIZE_40 = props.overlaySize;
    const blur = props.blur;
    const tmp2 = frozen;
    if (SIZE_40 == null) {
      SIZE_40 = obj3.SIZE_40;
    }
    const obj = { style: tmp.qrCodeContainer, children: items };
    const obj2 = { blur: false };
    const tmp4 = tmp2[SIZE_40];
    const merged = Object.assign(this.props);
    items = [metroImportDefault(QRCode, obj2), , ];
    obj3 = { style: items1, children: metroImportDefault(tmp12, obj4) };
    items1 = [tmp.qrCodeOverlay, metroRequire.absoluteFill];
    obj4 = { style: tmp[tmp4], source: AssetRegistry };
    tmp12 = FastImageDefault;
    items[1] = metroImportDefault(hasOwnProperty, obj3);
    let tmp7Result = null;
    const tmp5 = metroImportAll;
    const tmp6 = hasOwnProperty;
    const tmp7 = metroImportDefault;
    const tmp9 = metroRequire;
    if (blur) {
      const obj5 = { style: tmp9.absoluteFill };
      tmp7Result = tmp7(VisualEffectViewThemedDefault, obj5);
    }
    items[2] = tmp7Result;
    return tmp5(tmp6, obj);
  }
}
const prototype2 = QRCodeWithOverlay.prototype;
QRCodeWithOverlay.contextType = native.ThemeContext;
QRCodeWithOverlay.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
const result = size.fileFinishedImporting("components_native/QRCode.tsx");

export default QRCode;
export const QRCodeOverlaySizes = obj3;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export { QRCodeWithOverlay };
