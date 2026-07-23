// Module ID: 4661
// Function ID: 40373
// Name: getStyleProp
// Dependencies: [2]

// Module 4661 (getStyleProp)
function getStyleProp(style, borderRadius) {
  if (null != borderRadius) {
    if ("" !== borderRadius) {
      const _Array = Array;
      if (Array.isArray(style)) {
        let diff = style.length - 1;
        if (diff >= 0) {
          const tmp4 = getStyleProp(style[diff], borderRadius);
          while (null == tmp4) {
            diff = diff - 1;
          }
          return tmp4;
        }
      } else if (null != style) {
        if ("object" === typeof style) {
          return style[borderRadius];
        }
      }
    }
  }
}
const result = require("set").fileFinishedImporting("utils/native/StyleSheetUtils.tsx");

export default { getStyleProp };
