// Module ID: 8644
// Function ID: 68439
// Name: ImagePlaceholderVersions
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: ImageWithPlaceholder

// Module 8644 (ImagePlaceholderVersions)
import result from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

const View = result.View;
let closure_4 = { flex: 1 };
const obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (result.isAndroid()) {
  let importDefaultResult = require("result");
} else {
  importDefaultResult = result.requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
result = result.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export const ImagePlaceholderVersions = obj;
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  let alt;
  let placeholder;
  let placeholderVersion;
  let style;
  let uri;
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  let obj = {};
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
      let tmp5 = <importDefaultResult {...obj} />;
    }
    return tmp5;
  }
  obj = { style };
  const merged2 = Object.assign(merged);
  obj["children"] = jsx(importDefault(dependencyMap[4]), { style: closure_4, resizeMode: "cover", source: { uri }, alt });
  tmp5 = <View {...obj} />;
};
