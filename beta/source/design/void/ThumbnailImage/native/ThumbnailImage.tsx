// Module ID: 16328
// Function ID: 16329
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1377, 16329, 2]
// Exports: default

// Module 16328 (ThumbnailImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LocalImageThumbnailNativeComponent from "LocalImageThumbnailNativeComponent" /* 16329 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

react_native.Image;
const jsx = Fragment.jsx;
if (PlatformUtils.isAndroid()) {
  LocalImageThumbnailNativeComponent.default;
}
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
