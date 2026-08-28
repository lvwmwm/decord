// Module ID: 13675
// Function ID: 13676
// Name: LocalImageThumbnail
// Dependencies: [19, 17, 21, 500, 13676, 2]
// Exports: default

// Module 13675 (LocalImageThumbnail)
import noopAll from "noop" /* 19 */;
import { Image as _default } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 500 */;

noopAll;
if (set.isAndroid()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
