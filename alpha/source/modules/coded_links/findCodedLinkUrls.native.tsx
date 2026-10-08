// Module ID: 5076
// Function ID: 5077
// Name: findCodedLinkUrls
// Dependencies: [5077, 7980, 5396, 13897, 13898, 2]
// Exports: default

// Module 5076 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5396 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13898 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  let items;
  let tmp = items;
  const obj = items(13897);
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5077).default;
    const parseToASTResult = _default.parseToAST(content, true, { allowLinks: true });
    const tmpResult = tmp(7980);
    tmpResult.walkAst(parseToASTResult, (type) => {
      const tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string" && type.target.length > 0;
      if (tmp) {
        items.push(type.target);
      }
    });
  }
  return items;
};
