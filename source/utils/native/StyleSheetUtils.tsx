// Module ID: 4847
// Function ID: 4848
// Name: getStyleProp
// Dependencies: [2]

// Module 4847 (getStyleProp)
function getStyleProp(style, borderRadius) {
  if (null != borderRadius) {
    if ("" !== borderRadius) {
      const _Array = Array;
      if (Array.isArray(style)) {
        let diff = style.length - 1;
        if (0 <= diff) {
          const tmp5 = getStyleProp(style[diff], borderRadius);
          while (null == tmp5) {
            diff = diff - 1;
          }
          return tmp5;
        }
      } else if (null != style) {
        if (typeof style === "object") {
          return style[borderRadius];
        }
      }
    }
  }
}
const result = require("set").fileFinishedImporting("utils/native/StyleSheetUtils.tsx");

export default { getStyleProp };
