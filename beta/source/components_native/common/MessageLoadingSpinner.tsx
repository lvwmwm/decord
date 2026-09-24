// Module ID: 9731
// Function ID: 9732
// Name: MessageLoadingSpinner
// Dependencies: [19, 17, 21, 1368, 558, 568, 4494, 580, 5828, 2]

// Module 9731 (MessageLoadingSpinner)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import noop from "module_19" /* 19 */;

const ActivityIndicator_ActivityIndicator = tmp(5828);
require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1368);
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = fn(17).requireNativeComponent("DCDMessageLoadingSpinner");
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(3);
  color = color.color;
  if (color == null) {
    color = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (cResult[0] === color) {
    if (cResult[1] === color) {
      return cResult[2];
    }
  }
  if (null != result) {
    const obj3 = {};
    const merged = Object.assign(color);
    obj3.color = color;
    let tmp9 = <tmp4 />;
  } else {
    const obj4 = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp9 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
  }
  cResult[0] = color;
  cResult[1] = color;
  cResult[2] = tmp9;
}) : ((color) => {
  color = color.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    const obj2 = {};
    const merged = Object.assign(color);
    obj2.color = color;
    let tmp8 = <tmp3 />;
  } else {
    const obj3 = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
});
