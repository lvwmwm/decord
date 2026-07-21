// Module ID: 4541
// Function ID: 39826
// Name: getIconSize
// Dependencies: []

// Module 4541 (getIconSize)
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
const importAllResult = importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const obj = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
let closure_5 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = {};
  obj = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
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
    let obj = { resizeMode, source: size.source };
    const items = [getIconStyle(MEDIUM), undefined, style];
    obj.style = items;
    obj.accessible = accessible;
    obj.accessibilityLabel = accessibilityLabel;
    obj.fadeDuration = 0;
    obj.ref = ref;
    return <Image {...obj} />;
  } else if (null != color) {
    obj = { tintColor: color };
    let iconColor = obj;
  } else {
    iconColor = tmp2.iconColor;
  }
}));
memoResult.displayName = "Icon";
memoResult.Sizes = obj;
const obj3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export const IconSizes = obj;
export { getIconSize };
export { getIconStyle };
