// Module ID: 9941
// Function ID: 9942
// Name: MarkupReactLinkUtils
// Dependencies: [8792, 8292, 2]
// Exports: isLinkTrusted

// Module 9941 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 8792 */;
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
    const tmp2Result = tmp2(8292);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};
