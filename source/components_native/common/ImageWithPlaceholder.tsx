// Module ID: 8656
// Function ID: 68514
// Name: ImagePlaceholderVersions
// Dependencies: [27, 33, 477, 8657, 5085, 2]
// Exports: ImageWithPlaceholder

// Module 8656 (ImagePlaceholderVersions)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "set";

const View = get_ActivityIndicator.View;
let closure_4 = { flex: 1 };
let obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = get_ActivityIndicator.requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const result = set.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export const ImagePlaceholderVersions = obj;
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  let alt;
  let placeholder;
  let placeholderVersion;
  let style;
  let uri;
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  let obj = { uri: 0, placeholder: 0, placeholderVersion: 0, alt: 0, style: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  if (null != placeholder) {
    if (placeholderVersion === obj.THUMBHASH) {
      obj = {};
      const merged1 = Object.assign(merged);
      obj["style"] = style;
      obj["uri"] = uri;
      obj["placeholder"] = placeholder;
      obj["placeholderVersion"] = placeholderVersion;
      obj["alt"] = alt;
      let tmp5 = <closure_6 />;
    }
    return tmp5;
  }
  obj = { style };
  const merged2 = Object.assign(merged);
  obj["children"] = jsx(importDefault(5085), { style: closure_4, resizeMode: "cover", source: { uri }, alt });
  tmp5 = <View style={style} />;
};
