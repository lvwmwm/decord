// Module ID: 4545
// Function ID: 39866
// Name: getIconSize
// Dependencies: [31, 27, 33, 4130, 689, 2]

// Module 4545 (getIconSize)
import importAllResult from "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function getIconSize(arg0) {
  if (obj.EXTRA_SMALL_10 === arg0) {
    return 10;
  } else if (obj.EXTRA_SMALL === arg0) {
    return 12;
  } else if (obj.SMALL === arg0) {
    return 18;
  } else if (obj.SMALL_14 === arg0) {
    return 14;
  } else if (obj.SMALL_20 === arg0) {
    return 20;
  } else if (obj.MEDIUM === arg0) {
    return 24;
  } else if (obj.LARGE === arg0) {
    return 32;
  } else if (obj.REFRESH_SMALL_16 === arg0) {
    return 16;
  }
}
function getIconStyle(MEDIUM) {
  const width = getIconSize(MEDIUM);
  return { width, height: width };
}
let obj = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.iconColor = obj;
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((size, ref) => {
  let accessibilityLabel;
  let accessible;
  let color;
  let disableColor;
  let resizeMode;
  let style;
  ({ color, disableColor } = size);
  if (disableColor === undefined) {
    disableColor = false;
  }
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  ({ resizeMode, style } = size);
  if (resizeMode === undefined) {
    resizeMode = "cover";
  }
  ({ accessible, accessibilityLabel } = size);
  if (disableColor) {
    obj = { resizeMode, source: size.source };
    const items = [getIconStyle(MEDIUM), undefined, style];
    obj.style = items;
    obj.accessible = accessible;
    obj.accessibilityLabel = accessibilityLabel;
    obj.fadeDuration = 0;
    obj.ref = ref;
    return <Image resizeMode={resizeMode} source={arg0.source} />;
  } else if (null != color) {
    obj = { tintColor: color };
    let iconColor = obj;
  } else {
    iconColor = tmp2.iconColor;
  }
}));
memoResult.displayName = "Icon";
memoResult.Sizes = obj;
const result = require("jsxProd").fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export const IconSizes = obj;
export { getIconSize };
export { getIconStyle };
