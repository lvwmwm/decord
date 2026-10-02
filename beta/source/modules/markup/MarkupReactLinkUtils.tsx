// Module ID: 10979
// Function ID: 10980
// Name: MarkupReactLinkUtils
// Dependencies: [7822, 7433, 2]
// Exports: isLinkTrusted

// Module 10979 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 7822 */;
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
    const tmp2Result = tmp2(7433);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};
