// Module ID: 9990
// Function ID: 9991
// Name: MarkupReactLinkUtils
// Dependencies: [8835, 8330, 2]
// Exports: isLinkTrusted

// Module 9990 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 8835 */;
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
    const tmp2Result = tmp2(8330);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};
