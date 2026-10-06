// Module ID: 11250
// Function ID: 11251
// Name: MarkupReactLinkUtils
// Dependencies: [8057, 7657, 2]
// Exports: isLinkTrusted

// Module 11250 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 8057 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupReactLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(target) {
  let tmp = null != target.target;
  if (tmp) {
    MaskedLinkUtils;
    const tmp2 = require;
    if (null != target.title) {
      let title;
      if ("" !== target.title) {
        title = target.title;
      }
      tmp = tmp5(tmp6, title);
    }
    const tmp2Result = tmp2(7657);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};
