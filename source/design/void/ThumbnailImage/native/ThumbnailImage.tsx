// Module ID: 14099
// Function ID: 14100
// Name: LocalImageThumbnail
// Dependencies: [19, 17, 21, 1115, 14100, 2]
// Exports: default

// Module 14099 (LocalImageThumbnail)
import noopAll from "noop" /* 19 */;
import { Image as _default } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;

noopAll;
if (set.isAndroid()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
