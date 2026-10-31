// Module ID: 9450
// Function ID: 9451
// Name: ImageWithPlaceholder
// Dependencies: [17, 21, 1375, 9451, 5717, 2]
// Exports: ImageWithPlaceholder

// Module 9450 (ImageWithPlaceholder)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ImageWithThumbhashPlaceholderNativeComponentDefault from "ImageWithThumbhashPlaceholderNativeComponent" /* 9451 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let c2;
let importDefaultResult;
let requireNativeComponent;
({ View: c2, requireNativeComponent } = react_native);
const jsx = Fragment.jsx;
const style = { flex: 1 };
const ImagePlaceholderVersions = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (PlatformUtils.isAndroid()) {
  importDefaultResult = ImageWithThumbhashPlaceholderNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const metroRequire = importDefaultResult;
const result = size.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export { ImagePlaceholderVersions };
export function ImageWithPlaceholder(arg0) {
  let alt;
  let obj;
  let placeholder;
  let placeholderVersion;
  let uri;
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ uri: 0, placeholder: 0, placeholderVersion: 0, alt: 0, style: 0 }));
  if (null != placeholder) {
    let tmp4;
    if (placeholderVersion === obj.THUMBHASH) {
      const merged1 = Object.assign(merged);
      tmp4 = <metroRequire style={style} uri={uri} placeholder={placeholder} placeholderVersion={placeholderVersion} alt={alt} />;
    }
    return tmp4;
  }
  obj = { style, children: jsx(FastImageDefault, obj3) };
  const merged2 = Object.assign(merged);
  tmp4 = <React2 style={style}>{jsx(FastImageDefault, { style, resizeMode: "cover", source: { uri }, accessibilityLabel: alt })}</React2>;
}
