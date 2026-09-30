// Module ID: 13837
// Function ID: 13838
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1364, 13838, 2]
// Exports: default

// Module 13837 (ThumbnailImage)
import noop from "module_19" /* 19 */;

let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1364);
if (PlatformUtils.isAndroid()) {
  _default = fn(13838).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
