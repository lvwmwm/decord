// Module ID: 11109
// Function ID: 11110
// Name: MarkupReactLinkUtils
// Dependencies: [7818, 7429, 2]
// Exports: isLinkTrusted

// Module 11109 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
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
    const tmp2Result = tmp2(7429);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};
