// Module ID: 8649
// Function ID: 68474
// Name: ImagePlaceholderVersions
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: ImageWithPlaceholder

// Module 8649 (ImagePlaceholderVersions)
import __exportStarResult1 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

const View = __exportStarResult1.View;
let closure_4 = { flex: 1 };
const obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (__exportStarResult1.isAndroid()) {
  let importDefaultResult = require("__exportStarResult1");
} else {
  importDefaultResult = __exportStarResult1.requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const result = __exportStarResult1.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export const ImagePlaceholderVersions = obj;
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  let alt;
  let placeholder;
  let placeholderVersion;
  let style;
  let uri;
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  let obj = { <string:80600576>: false, <string:80593664>: false, <string:80618240>: false, <string:80623360>: false, <string:80634368>: false };
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
