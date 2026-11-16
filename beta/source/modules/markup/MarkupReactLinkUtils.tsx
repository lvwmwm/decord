// Module ID: 12584
// Function ID: 12585
// Name: MarkupReactLinkUtils
// Dependencies: [7653, 9216, 2]
// Exports: isLinkTrusted

// Module 12584 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 7653 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupReactLinkUtils.tsx");

export function isLinkTrusted(target) {
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
    const tmp2Result = tmp2(9216);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
}
