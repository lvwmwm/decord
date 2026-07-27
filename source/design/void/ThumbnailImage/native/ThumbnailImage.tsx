// Module ID: 13075
// Function ID: 101069
// Name: LocalImageThumbnail
// Dependencies: [31, 27, 33, 477, 13076, 2]
// Exports: default

// Module 13075 (LocalImageThumbnail)
import "result";
import { Image as _default } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

if (set.isAndroid()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
