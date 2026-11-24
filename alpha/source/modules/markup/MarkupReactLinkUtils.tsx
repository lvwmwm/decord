// Module ID: 12001
// Function ID: 12002
// Name: MarkupReactLinkUtils
// Dependencies: [7679, 7053, 2]
// Exports: isLinkTrusted

// Module 12001 (MarkupReactLinkUtils)
import MaskedLinkUtils from "MaskedLinkUtils" /* 7679 */;
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
    const tmp2Result = tmp2(7053);
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
}
