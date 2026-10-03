// Module ID: 4876
// Function ID: 4877
// Name: findCodedLinkUrls
// Dependencies: [4877, 7648, 5785, 13657, 13658, 2]
// Exports: default

// Module 4876 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5785 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  let items;
  let tmp = items;
  const obj = items(13657);
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4877).default;
    const parseToASTResult = _default.parseToAST(content, true, { allowLinks: true });
    const tmpResult = tmp(7648);
    tmpResult.walkAst(parseToASTResult, (type) => {
      const tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string" && type.target.length > 0;
      if (tmp) {
        items.push(type.target);
      }
    });
  }
  return items;
};
