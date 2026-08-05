// Module ID: 13229
// Function ID: 13230
// Name: LocalImageThumbnail
// Dependencies: [19, 17, 21, 500, 13230, 2]
// Exports: default

// Module 13229 (LocalImageThumbnail)
import "noop";
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
