// Module ID: 14409
// Function ID: 14410
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1368, 14410, 558, 568, 2]

// Module 14409 (ThumbnailImage)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  _default = fn(14410).default;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = <_default />;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return <_default />;
});
