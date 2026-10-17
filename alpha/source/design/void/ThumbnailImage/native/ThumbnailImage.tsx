// Module ID: 15175
// Function ID: 15176
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1384, 15176, 558, 576, 2]

// Module 15175 (ThumbnailImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LocalImageThumbnailNativeComponent from "LocalImageThumbnailNativeComponent" /* 15176 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

react_native.Image;
const jsx = Fragment.jsx;
if (PlatformUtils.isAndroid()) {
  LocalImageThumbnailNativeComponent.default;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function LocalImageThumbnail(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const merged = Object.assign(arg0);
    const tmp8 = <_default />;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
});
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default tmp3;
