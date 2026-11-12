// Module ID: 12488
// Function ID: 12489
// Name: MarkupReactLinkUtils
// Dependencies: [7587, 9149, 2]
// Exports: isLinkTrusted

// Module 12488 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 7587 */;
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
    const tmp2Result = tmp2(9149);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
}
