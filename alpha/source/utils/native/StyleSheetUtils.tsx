// Module ID: 6185
// Function ID: 6186
// Name: StyleSheetUtils
// Dependencies: [2]

// Module 6185 (StyleSheetUtils)
import size from "module_2" /* 2 */;

let getStyleProp;
const obj = { getStyleProp };
getStyleProp = function getStyleProp(style, borderRadius) {
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
};
const result = size.fileFinishedImporting("utils/native/StyleSheetUtils.tsx");

export default obj;
