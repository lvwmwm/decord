// Module ID: 5137
// Function ID: 5138
// Name: findCodedLinkUrls
// Dependencies: [5138, 8224, 5460, 14739, 14740, 2]
// Exports: default

// Module 5137 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5460 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 14740 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  let items;
  let tmp = items;
  const obj = items(14739);
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5138).default;
    const parseToASTResult = _default.parseToAST(content, true, { allowLinks: true });
    const tmpResult = tmp(8224);
    tmpResult.walkAst(parseToASTResult, (type) => {
      const tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string" && type.target.length > 0;
      if (tmp) {
        items.push(type.target);
      }
    });
  }
  return items;
};
